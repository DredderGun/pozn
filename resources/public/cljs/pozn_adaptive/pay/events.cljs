(ns pozn-adaptive.pay.events
  (:require [re-frame.core :as re-frame]
            [cljs.reader :refer [read-string]]
            [cljs-time.core :as time]))

(re-frame/reg-event-db
  ::change-layout
  [re-frame/trim-v]
  (fn [db [layout_key]]
    (if (= layout_key :new-sale-receipt)
      (-> (assoc db :layout layout_key)
          (assoc :old-dish? false))
      (assoc db :layout layout_key))))

(re-frame/reg-event-db
  ::add-all-sum-to-specified-payment
  [re-frame/trim-v ]
  (fn [db [payment-key]]
    (let [update-payment (fn [payment-key]
                           (update-in db [:sale-receipts (:active-receipt db)]
                                      (fn [active-receipt]
                                        (if (= payment-key :cash)
                                          (assoc active-receipt :payment {:cash (:sum_price active-receipt)
                                                                          :card 0})
                                          (assoc active-receipt :payment {:card (:sum_price active-receipt)
                                                                          :cash 0})))))]
      (case payment-key
        :cash (update-payment payment-key)
        :card (update-payment payment-key)))))

(re-frame/reg-event-db
  ::change-card-or-cash-sum
  [re-frame/trim-v]
  (fn [{:keys [active-items] :as db} [payment sum]]
    (let [sum (read-string sum)]
      (update-in db [:sale-receipts (:active-receipt active-items)]
                 (fn [active-receipt]

                   (if (= payment :cash)
                     (if (< sum (:sum active-receipt))
                       (-> (assoc-in active-receipt [:payment :cash] sum)
                           (assoc-in [:payment :card] (- (:sum active-receipt) sum)))
                       (assoc active-receipt :payment {:cash (:sum active-receipt)
                                                       :card 0}))
                     (if (< sum (:sum active-receipt))
                       (-> (assoc-in active-receipt [:payment :card] sum)
                           (assoc-in [:payment :cash] (- (:sum active-receipt) sum)))
                       (assoc active-receipt :payment {:cash 0
                                                       :card (:sum active-receipt)}))))))))

(re-frame/reg-event-db
  ::pay-receipt
  [re-frame/trim-v]
  (fn [{:keys [active-items] :as db} _]
    (-> (update-in db [:sale-receipts (:active-receipt active-items)]
               (fn [active-receipt]
                 (-> (assoc active-receipt :paid? true)
                     (update :dates merge {:pay (time/time-now)}))))
        (assoc :layout :sale-receipts-layout))))