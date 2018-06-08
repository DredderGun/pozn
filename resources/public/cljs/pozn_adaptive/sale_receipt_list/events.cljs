(ns pozn-adaptive.sale-receipt-list.events
  (:require [re-frame.core :as re-frame]))

(re-frame/reg-event-db
  ::change-layout
  [re-frame/trim-v]
  (fn [db [layout_key]]
    (if (= layout_key :new-sale-receipt)
      (-> (assoc db :layout layout_key)
          (assoc :old-dish? false))
      (assoc db :layout layout_key))))

(re-frame/reg-event-db
  ::turn-on-old-receipt
  [re-frame/trim-v]
  (fn [db [receipt-id]]
    (-> (assoc db :layout :new-sale-receipt)
        (assoc :active-guest 1)
        (assoc-in [:active-items :active-receipt] receipt-id))))

(re-frame/reg-event-db
  ::give-statistic
  []
  (fn [db _]
    (let [sold-dishes-count (atom [])
          common-sum (atom 0)
          card-sum (atom 0)
          cash-sum (atom 0)
          paid-receipt-count (atom 0)
          unpaid-receipt-count (atom 0)]
      (doseq [dish-from-menu (:menu-items db)]
        (let [current-count (atom 0)]
          (doseq [[id receipt] (:sale-receipts db)]
            (doseq [[id guest] (:guests receipt)]
              (doseq [dish-from-receipt (:dishes guest)]
                (when (= (:id dish-from-menu) (:menu-item-id dish-from-receipt))
                  (swap! current-count + (:count dish-from-receipt))))))
          (when (not= @current-count 0)
            (swap! sold-dishes-count conj {:id (:id dish-from-menu)
                                           :name (:short_name dish-from-menu)
                                           :count @current-count}))
          (reset! current-count 0)))
      (doseq [[id receipt] (:sale-receipts db)]
        (if (:paid? receipt)
          (do
            (swap! common-sum + (:sum_price receipt))
            (swap! card-sum + (:cash (:payment receipt)))
            (swap! cash-sum + (:card (:payment receipt)))
            (swap! paid-receipt-count + 1))
          (swap! unpaid-receipt-count + 1)))

      (-> (assoc db :statistic {:sold-dishes-count @sold-dishes-count
                                :common-sum @common-sum
                                :card-sum @card-sum
                                :cash-sum @cash-sum
                                :paid-receipt-count @paid-receipt-count
                                :unpaid-receipt-count @unpaid-receipt-count}
                    :layout :statistic-view)))))
