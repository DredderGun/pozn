(ns pozn-adaptive.dish.events
  (:require [re-frame.core :as re-frame]
            [pozn-adaptive.helpers :as helpers]))

(re-frame/reg-event-db
  ::change-layout
  [re-frame/trim-v]
  (fn [db [layout_key]]
    (if (= layout_key :new-sale-receipt)
      (-> (assoc db :layout layout_key)
          (assoc :old-dish? false))
      (assoc db :layout layout_key))))

(re-frame/reg-event-db
  ::recalculate-sum-price
  [re-frame/trim-v]
  (fn [db [_]]
    (let [active-items (:active-items db)]
      (update-in db [:sale-receipts (:active-receipt active-items)]
                 (fn [active-receipt]
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
                                              active-receipt-guests)]
                     (assoc active-receipt :sum_price sum-price
                                           :payment {:cash sum-price
                                                     :card 0}
                                           :layout :new-sale-receipt)))))))

(re-frame/reg-event-fx
  ::change-dish-count-in-receipt
  []
  (fn [{:keys [db] {:keys [active-items]} :db :as cofx} [_ calculation count_d]]
    (let [neg-num-hn (fn [n] (if (< n 0) 0 n))
          count_d (.parseInt js/window count_d)]
      (if (:editing db)
        (-> (update-in cofx [:db :active-items :active-dish-in-receipt]
                       (fn [dish] (if calculation
                                    (update dish :count (comp neg-num-hn calculation) count_d)
                                    (assoc dish :count count_d))))
            (update-in [:db
                        :sale-receipts (:active-receipt active-items)
                        :guests (:active-guest active-items)
                        :dishes]
                       (fn [dishes] (let [changing-dish-id (:receipt-id (:active-dish-in-receipt active-items))]
                                      (mapv (fn [dish] (if (= (:receipt-id dish) changing-dish-id)
                                                         (if calculation
                                                           (update dish :count (comp neg-num-hn calculation) count_d)
                                                           (assoc dish :count count_d))
                                                         dish))
                                            dishes))))
            (assoc :dispatch [::recalculate-sum-price]))
        (update-in cofx [:db
                         :active-items
                         :temporary-dish]
                   (fn [temporary-dish]
                     (if calculation
                       (update temporary-dish :count (comp neg-num-hn calculation) count_d)
                       (assoc temporary-dish :count count_d))))))))

(re-frame/reg-event-fx
  ::dish-back-hn
  []
  (fn [{:keys [db] {:keys [active-items]} :db :as cofx} _]
    (if (:editing db)
      (-> (assoc-in cofx [:db :slide-template] {:show? false
                                                :template :menu})
          (assoc-in [:db :editing?] false)
          (assoc-in [:db :active-items :active-dish-in-receipt] nil))
      (-> (assoc-in cofx [:db
                          :active-items
                          :temporary-dish] nil)
          (assoc-in [:db :slide-template] {:show? true
                                           :template :menu})))))

(re-frame/reg-event-db
  ::change-active-dish-modificators
  [re-frame/trim-v]
  (fn [{:keys [active-items editing] :as db} [new-modificator]]
    (if editing
      (let [next-id (helpers/allocate-next-id (get-in db [:active-items :active-dish-in-receipt :modificators]))
            updated-dish (-> (get-in db [:active-items :active-dish-in-receipt])
                             (update :modificators #(assoc % next-id {:id next-id :message new-modificator})))]
        (-> (update-in db [:sale-receipts (:active-receipt active-items)
                           :guests (:active-guest active-items)
                           :dishes]
                       (fn [dishes]
                         (mapv #(if (= (:receipt-id %) (:receipt-id (:active-dish-in-receipt active-items)))
                                  updated-dish
                                  %)
                               dishes)))
            (assoc-in [:active-items :active-dish-in-receipt] updated-dish))); с :active-dish-in-receipt ; я работаю пока отдельно. Раньше тут был просто id ; который ссылался на блюдо из чека
      (let [next-id (helpers/allocate-next-id (get-in db [:active-items :temporary-dish :modificators]))]
        (update-in db [:active-items :temporary-dish :modificators] (fn [modificators] (assoc modificators next-id
                                                                                                           {:id modificators :message new-modificator})))))))

(re-frame/reg-event-db
  ::delete-modificator
  [re-frame/trim-v]
  (fn [{:keys [active-items editing] :as db} [id]]
    (if editing
      (-> (update-in db [:sale-receipts (:active-receipt active-items)
                         :guests (:active-guest active-items)
                         :dishes]
                     (fn [dishes]
                       (mapv #(if (= (:receipt-id %) (:receipt-id (:active-dish-in-receipt active-items)))
                                (update % :modificators dissoc id)
                                %)
                             dishes)))
          (update-in [:active-items :active-dish-in-receipt :modificators] dissoc id))
      (update-in db [:active-items :temporary-dish :modificators] #(dissoc % id)))))

(re-frame/reg-event-db
  ::add-new-dish-with-spec-count
  (fn [{:keys [active-items] :as db} [_ count]]
    (let [count (.parseInt js/window count)
          new-dish-id (-> (get-in db [:sale-receipts
                                      (:active-receipt active-items)
                                      :guests
                                      (:active-guest active-items)
                                      :dishes])
                          (last)
                          :receipt-id
                          inc)
          new-dish (get active-items :temporary-dish)
          new-dish-map (-> (merge new-dish {:receipt-id new-dish-id
                                            :guest-id (:active-guest active-items)
                                            :selected? false
                                            :count count}))]
      (-> (assoc-in db [:active-items :temporary-dish] nil)
          (update-in [:sale-receipts (:active-receipt active-items)
                      :guests (:active-guest active-items) :dishes]
                     (fn [active-guest-dishes-vec]
                       (->> (conj active-guest-dishes-vec new-dish-map)
                            (sort #(compare (:receipt-id %1) (:receipt-id %2)))
                            (into []))))
          (assoc-in [:slide-template ] {:show? true
                                        :template :menu})))))

(re-frame/reg-event-db
  ::add-new-dish
  (fn [{:keys [active-items] :as db} _]
    (let [new-dish-id (-> (get-in db [:sale-receipts
                                      (:active-receipt active-items)
                                      :guests
                                      (:active-guest active-items)
                                      :dishes])
                          (last)
                          :receipt-id
                          inc)
          new-dish (get active-items :temporary-dish)
          new-dish-map (-> (merge new-dish {:receipt-id new-dish-id
                                            :guest-id (:active-guest active-items)
                                            :selected? false}))]
      (-> (assoc-in db [:active-items :temporary-dish] nil)
          (update-in [:sale-receipts (:active-receipt active-items)
                      :guests (:active-guest active-items) :dishes]
                     (fn [active-guest-dishes-vec]
                       (->> (conj active-guest-dishes-vec new-dish-map)
                            (sort #(compare (:receipt-id %1) (:receipt-id %2)))
                            (into []))))
          (assoc-in [:slide-template ] {:show? true
                                        :template :menu})))))