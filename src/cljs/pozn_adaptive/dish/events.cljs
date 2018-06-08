(ns pozn-adaptive.dish.events
  (:require [re-frame.core :as re-frame]
            [pozn-adaptive.helpers :as helpers]
            [pozn-adaptive.events :as common-events]))

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
  [common-events/sale-receipts-interceptors]
  (fn [{:keys [db] {:keys [active-items]} :db :as cofx} [_ calculation count_d]]
    (let [neg-num-hn (fn [n] (if (< n 0) 0 n))
          count_d (.parseInt js/window count_d)]
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
          (assoc :dispatch [::recalculate-sum-price])))))

(re-frame/reg-event-fx
  ::dish-back-hn
  []
  (fn [{:keys [db] {:keys [active-items]} :db :as cofx} _]
    (-> (assoc-in cofx [:db :slide-template] {:show? false
                                              :template :menu})
        (assoc-in [:db :editing?] false)
        (assoc-in [:db :active-items :active-dish-in-receipt] nil))))

(re-frame/reg-event-db
  ::change-active-dish-modificators
  [common-events/sale-receipts-interceptors re-frame/trim-v]
  (fn [{:keys [active-items editing] :as db} [new-modificator]]
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
          (assoc-in [:active-items :active-dish-in-receipt] updated-dish))))); с :active-dish-in-receipt ; я работаю пока отдельно. Раньше тут был просто id ; который ссылался на блюдо из чека))

(re-frame/reg-event-db
  ::delete-modificator
  [common-events/sale-receipts-interceptors re-frame/trim-v]
  (fn [{:keys [active-items editing] :as db} [id]]
    (-> (update-in db [:sale-receipts (:active-receipt active-items)
                       :guests (:active-guest active-items)
                       :dishes]
                   (fn [dishes]
                     (mapv #(if (= (:receipt-id %) (:receipt-id (:active-dish-in-receipt active-items)))
                              (update % :modificators dissoc id)
                              %)
                           dishes)))
        (update-in [:active-items :active-dish-in-receipt :modificators] dissoc id))))