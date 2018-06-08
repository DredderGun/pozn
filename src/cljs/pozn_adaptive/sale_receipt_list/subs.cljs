(ns pozn-adaptive.sale-receipt-list.subs
  (:require [re-frame.core :as re-frame]))

(re-frame/reg-sub
  ::sale-receipts
  (fn [db _]
    (for [sale-receipt (vals (:sale-receipts db))]
      (let [styles (cond
                     (and (:paid? sale-receipt) (:sent? sale-receipt)) {:background "#9BD8F4"}
                     (:paid? sale-receipt) {:background "#9BD8F4"}
                     (:sent? sale-receipt) {:background "#BBF376"})
            label (str (if (not= (nth (:table sale-receipt) 0) 0)
                         (str "Стол: " (nth (:table sale-receipt) 0) "." (nth (:table sale-receipt) 1))
                         "Нет стола") " "
                       "Чек " (:id sale-receipt) " "
                       "Сумма " (:sum_price sale-receipt))]

        (cond-> {:id (:id sale-receipt)
                 :class "list-group-item table-button list-button"
                 :style styles
                 :label label}
                (:paid? sale-receipt) (assoc :class "list-group-item table-button list-button paid"))))))