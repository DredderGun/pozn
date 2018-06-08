(ns pozn-adaptive.receipt.events
  (:require [re-frame.core :as re-frame]
            [pozn-adaptive.helpers :refer [allocate-next-id]]
            [cljs-time.core :as time]
            [pozn-adaptive.tables.events :as t-events]))

(defn delete-empty-guests
  []
  (re-frame/->interceptor
    :id :delete-empty-guests
    :after (fn [{:keys [effects] :as context}]
             (let [db (:db effects)
                   id (atom 0)]
               (-> (update-in context [:effects
                                       :db
                                       :sale-receipts
                                       (:active-receipt (:active-items db))
                                       :guests]
                              (fn [guests]
                                (let [fun-if-no-guests-left (fn [updated-guests]
                                                              (if (empty? updated-guests)
                                                                {1 {:id 1 :dishes []}}
                                                                updated-guests))]
                                  (-> (reduce-kv (fn [m k v]
                                                   (if (empty? (:dishes v))
                                                     m
                                                     (do
                                                       (swap! id inc)
                                                       (assoc m @id {:id @id
                                                                     :dishes (->> (map #(assoc % :guest-id @id) (:dishes v))
                                                                                  (into []))}))))
                                                 {}
                                                 guests)
                                      (fun-if-no-guests-left)))))
                   (assoc-in [:effects :db :active-items :active-guest] 1))))))

(re-frame/reg-event-fx
  ::add-several-dishes-to-receipt
  []
  (fn [{{:keys [active-items]} :db :as cofx} [_ guests-to-replace]]
    (-> (assoc-in cofx [:db :sale-receipts (:active-receipt active-items) :guests] guests-to-replace)
        (assoc-in [:db :layout] :new-sale-receipt))))

(re-frame/reg-event-db
  ::recalculate-sum-price
  [re-frame/trim-v]
  (fn [{active-items :active-items :as db} [_]]
    (let [active-receipt-guests (get-in db [:sale-receipts
                                            (:active-receipt active-items)
                                            :guests])
          sum-price (reduce-kv (fn [acc g-k g-v]
                                 (-> (reduce
                                       (fn [acc dish]
                                         (+ (* (:count dish) (:price dish)) acc))
                                       0
                                       (:dishes g-v))
                                     (+ acc)))
                               0
                               active-receipt-guests)
          assoc-to-map (fn [active-receipt]
                         (assoc active-receipt :sum_price sum-price
                                               :payment {:cash sum-price
                                                         :card 0}
                                               :layout :new-sale-receipt))]
      (-> (update-in db [:sale-receipts (:active-receipt active-items)] assoc-to-map)
          (update-in [:active-items :active-dish-in-receipt] assoc-to-map))))) ; todo шаткое место программы. Источник багов, так как мне приходится помнить, что нужно изменять блюдо сразу в друх местах

(re-frame/reg-event-db
  ::change-layout
  [re-frame/trim-v]
  (fn [db [layout_key]]
    (assoc db :layout layout_key)))

(re-frame/reg-event-db
  ::change-layout-and-select-mod
  [re-frame/trim-v]
  (fn [db [layout_key en?]]
    (assoc db :layout layout_key
              :select-mod en?
              :modal-windows {:more-menu false
                              :info-window false})))

(re-frame/reg-event-db
  ; todo Сделать проверку, если выделяется несуществующее блюдо
  ::select-dish-in-receipt
  [re-frame/trim-v]
  (fn [db [guest-id dish-id]]
    (update-in db [:sale-receipts (:active-receipt (:active-items db)) :guests guest-id :dishes]
               (fn [dishes] (mapv (fn [dish] (if (= (:receipt-id dish ) dish-id)
                                               (update dish :selected? not)
                                               dish))
                                  dishes)))))

(re-frame/reg-event-db
  ::set-old-dish
  [re-frame/trim-v]
  (fn [db [dish-map-from-receipt active-guest]]
    (-> (assoc-in db [:active-items :active-guest] active-guest)
        (assoc-in [:active-items :active-dish-in-receipt] dish-map-from-receipt)
        (assoc :slide-template {:show? true
                                :template :dish})
        (assoc :editing true))))

(re-frame/reg-event-db
  ::select-all-dish-one-guest
  [re-frame/trim-v ]
  (fn [{active-items :active-items :as db} [guest-id]]
    (update-in db [:sale-receipts (:active-receipt active-items) :guests guest-id :dishes]
               (fn [dishes]
                 ; вариант, если в dishes будет hash-map, а не vec
                 ;(reduce-kv (fn [m k v]
                 ;             (assoc m k (assoc v :selected? true)))
                 ;           {}
                 ;           {1 {:id 1 :dish [1 2 3 4]} 2 {:id 2 :dish [1 2 3 4]}})
                 (let [select-or-not? (not-every? :selected? dishes)]
                   (mapv #(assoc % :selected? select-or-not?) dishes))))))

(re-frame/reg-event-db
  ::start-coord
  [re-frame/trim-v]
  (fn [{active-items :active-items :as db} [coord specified-guest-id]]
    (if (= specified-guest-id (:active-guest active-items))
      (update db :swipe-events assoc :start-touch-position coord
              :start-swipe-time (.getTime (js/Date.))
              :active-guest? true
              :duration false)
      (assoc-in db [:swipe-events :active-guest?] false))))

(re-frame/reg-event-db
  ::swipe-element
  [re-frame/trim-v]
  (fn [{:keys [swipe-events] :as db} [position]]
    (let [delta (- position (:start-touch-position swipe-events))
          direction (/ (Math/abs delta) delta)]
      (if (and
            (< delta 0)
            (= direction -1)
            (:active-guest? swipe-events))
        (update db :swipe-events assoc :temporary-swipe delta
                :direction direction)
        db))))

(re-frame/reg-event-db
  ::end-move
  [re-frame/trim-v]
  (fn [{:keys [swipe-events] :as db} _]
    (let [fast-swipe? (< (- (.getTime (js/Date.)) (:start-swipe-time swipe-events)) 250)
          more-200px? (> (Math/abs (:temporary-swipe swipe-events)) 200)]
      (-> (if (and (= (:direction swipe-events) -1)
                   (or fast-swipe?
                       more-200px?)
                   (:active-guest? swipe-events))
            (assoc-in db [:swipe-events :temporary-swipe] -200)
            (assoc-in db [:swipe-events :temporary-swipe] 0))
          (assoc-in [:swipe-events :active-guest?] false)
          (assoc-in [:swipe-events :duration] true)
          (assoc-in [:swipe-events :direction] nil)
          (assoc-in [:swipe-events :start-touch-position] nil)
          (assoc-in [:swipe-events :start-swipe-time] nil)))))

(re-frame/reg-event-db
  ::transition-end
  (fn [db _]
    (assoc-in db [:swipe-events :duration] false)))

(re-frame/reg-event-db
  ::slide-button
  (fn [{:keys [swipe-events] :as db} _]
    (if (not= (:temporary-swipe swipe-events) 0)
      (assoc-in db [:swipe-events :temporary-swipe] 0)
      (assoc-in db [:swipe-events :temporary-swipe] -200))))

(re-frame/reg-event-db
  ::activate-guest
  [re-frame/trim-v]
  (fn [{:keys [active-items] :as db} [guest-id]]
    (if (:paid? active-items)
      db
      (assoc-in db [:active-items :active-guest] guest-id))))

(re-frame/reg-event-fx
  ::replace-dishes-to-new-receipt
  [(delete-empty-guests)]
  (fn [{:keys [db] :as cofx} _]
    (let [id (atom 0)
          guests-and-their-dishes-to-replace (reduce
                                               (fn [acc curr]
                                                 (let [selected-dishes (into [] (filter :selected? (:dishes (second curr))))]
                                                   (if (empty? selected-dishes)
                                                     acc
                                                     (do
                                                       (swap! id inc)
                                                       (assoc acc @id {:id @id :dishes (->> (filter :selected? (:dishes (second curr)))
                                                                                            (map #(assoc % :guest-id @id
                                                                                                           :selected? false))
                                                                                            (sort (fn [el1 el2] (compare (:id el1) (:id el2))))
                                                                                            (into []))})))))
                                               {}
                                               (get-in db [:sale-receipts (:active-receipt db) :guests]))]
      (-> (assoc cofx :dispatch-n (list [::delete-selected-dishes]
                                        [::recalculate-sum-price]
                                        [::t-events/add-new-receipt (nth (:active-table db) 0) (nth (:active-table db) 1)]
                                        [::add-several-dishes-to-receipt guests-and-their-dishes-to-replace]
                                        [::recalculate-sum-price]))
          (assoc-in [:db :select-mod] false)
          (assoc-in [:db :modal-windows :are-you-sure] {:en? false
                                                        :guests-to-different-receipt? false})
          (assoc-in [:db :active-guest] 1)))))

(re-frame/reg-event-fx
  ::guests-to-different-receipt
  []
  (fn [{:keys [db] :as cofx} _]
    (let [send-guest (-> (reduce
                           (fn [acc curr-guest]
                             (-> acc
                                 (conj [::recalculate-sum-price])
                                 (conj [::add-several-dishes-to-receipt {1 {:id 1
                                                                            :dishes (->> (filter :selected? (:dishes (second curr-guest)))
                                                                                         (map #(assoc % :guest-id 1))
                                                                                         (into [] ))}}])
                                 (conj [::t-events/add-new-receipt (nth (:active-table db) 0) (nth (:active-table db) 1)])))
                           (list)
                           (get-in db [:sale-receipts (:active-receipt db) :guests]))
                         (conj [::recalculate-sum-price])
                         (conj [::delete-selected-dishes]))]
      (-> (assoc cofx :dispatch-n send-guest)
          (assoc-in [:db :select-mod] false)
          (assoc-in [:db :modal-windows :are-you-sure] {:en? false
                                                        :guests-to-different-receipt? false})
          (assoc-in [:db :active-guest] 1)))))

(re-frame/reg-event-db
  ::add-new-guest
  [re-frame/trim-v ]
  (fn [{active-items :active-items :as db} _]
    (let [id (-> (get-in db [:sale-receipts (:active-receipt active-items) :guests])
                 (allocate-next-id))]
      (-> (update-in db
                     [:sale-receipts (:active-receipt active-items) :guests]
                     (fn [guests]
                       (assoc guests id {:id id
                                         :dishes []
                                         :paid? false
                                         :send? false})))
          (assoc-in [:active-items :active-guest] id)
          (assoc-in [:db :swipe-events] {:start-touch-position nil
                                         :start-swipe-time nil
                                         :direction nil
                                         :swiped-to-end? false
                                         :duration false
                                         :temporary-swipe nil
                                         :not-active? false})))))

(re-frame/reg-event-db
  ::send-receipt
  [re-frame/trim-v]
  (fn [{active-items :active-items :as db} _]
    (-> (assoc-in db [:sale-receipts (:active-receipt active-items) :sent?] true)
        (assoc-in [:sale-receipts (:active-receipt active-items) :dates :send] (time/time-now)))))

(re-frame/reg-event-fx
  ::delete-selected-dishes
  [(delete-empty-guests)]
  (fn [{:keys [db] :as cofx} _]
    (-> (update-in cofx [:db :sale-receipts (:active-receipt (:active-items db)) :guests]
                   (fn [guests]
                     (into {} (for [[k v] guests] [k (update v :dishes (fn [dishes]
                                                                         ;(reduce-kv
                                                                         ;  (fn [acc k v]
                                                                         ;    (if (-> v
                                                                         ;            :selected
                                                                         ;            not))
                                                                         ;    (assoc acc k (-> v
                                                                         ;                     :selected
                                                                         ;                     not))
                                                                         ;    acc)
                                                                         ;  {}
                                                                         ;  dishes)
                                                                         (filter (comp not :selected?) dishes)))]))))
        (assoc-in [:db :modal-windows] {:show false
                                        :child nil})
        (assoc :dispatch [::recalculate-sum-price]))))

(re-frame/reg-event-fx
  ::delete-the-guest
  (fn [{{:keys [active-items]} :db
        :as cofx} [_ guest-id]]
    (-> (update-in cofx [:db :sale-receipts (:active-receipt active-items) :guests] dissoc guest-id)
        (assoc-in [:db :modal-windows] {:show? false
                                        :child nil})
        (assoc-in [:db :active-items :active-guest] 1)
        (assoc-in [:db :swipe-events] {:start-touch-position nil
                                       :start-swipe-time nil
                                       :direction nil
                                       :swiped-to-end? false
                                       :duration false
                                       :temporary-swipe nil
                                       :not-active? false})
        (assoc :dispatch [::recalculate-sum-price]))))

(re-frame/reg-event-db
  ::edit-table
  (fn [db _]
    (assoc db :layout :tables
              :editing true)))

(re-frame/reg-event-db
  ::quite-to-list
  (fn [db _]
    (assoc db :layout :sale-receipts-layout
              :modal-windows {:show? false
                              :child nil})))