(ns pozn-adaptive.pay.subs
  (:require [re-frame.core :as re-frame]))

(re-frame/reg-sub
  ::active-receipt-sum-and-payment
  (fn [db _]
    (-> (get-in db [:sale-receipts (:active-receipt (:active-items db))])
        ((fn [receipt] {:sum-price (:sum_price receipt) :payment (:payment receipt)})))))
