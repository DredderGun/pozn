(ns pozn-adaptive.tables.events
  (:require [re-frame.core :as re-frame]
            [cljs-time.core :as time]
            [pozn-adaptive.helpers :refer [allocate-next-id]]
            [cljs-time.format :as time-format]))

(re-frame/reg-event-db
  ::change-tables-view
  [re-frame/trim-v]
  (fn [db [view_id]]
    (-> (assoc-in db [:active-items :tables-view] view_id)
        (assoc :modal-windows {:show? false
                               :child nil}))))

(re-frame/reg-event-db
  ::add-new-receipt
  [re-frame/trim-v]
  (fn [db [curr-area curr-table]]
    (let [next-receipt-id (allocate-next-id (:sale-receipts db))
          formatted-date #(when % (time-format/unparse (time-format/formatter "dd-MM-yyyy HH:mm:ss") %))]
      (-> (assoc db :layout :new-sale-receipt)
          (assoc-in [:sale-receipts next-receipt-id] {:id     next-receipt-id
                                                      :guests {1 {:id     1
                                                                  :dishes []}} ; насчёт формата :dishes принял решение сделать блюда
                                                                               ; вектором [{:id 1 ...} {:id 2 ...}], а не мапой {1 {:id 1 ...} 2 {:id 2 ...}}
                                                                               ; так как вектор легче сортировать по одному из ключей. Так же намного короче и
                                                                               ; проще делаются фильтры (хотя для reduce-kv тоже можно написать коротку функцию
                                                                               ; Вот один из фрагментов кода, в котором удобнее vec
                                                                               ; (->> (filter :selected? (:dishes (second curr)))
                                                                               ;      (map #(assoc % :guest-id @id
                                                                               ;                     :selected? false))
                                                                               ;      (sort (fn [el1 el2] (compare (:id el1) (:id el2))))
                                                                               ;      (into []))
                                                      :table  [curr-area curr-table]
                                                      :paid?  false
                                                      :sent?  false
                                                      :dates  {:origin (formatted-date (time/time-now))}
                                                      :sum 0})
          (update-in [:active-items] assoc :active-table [curr-area curr-table]
                     :active-receipt next-receipt-id
                     :active-guest 1)))))

(re-frame/reg-event-db
  ::change-table-in-receipt
  [re-frame/trim-v]
  (fn [db [curr-area curr-table]]
    (-> (assoc-in db [:sale-receipts (:active-receipt (:active-items db)) :table] [curr-area curr-table])
        (assoc-in [:active-items :active-table] [curr-area curr-table])
        (assoc :layout :new-sale-receipt))))

(re-frame/reg-event-db
  ::activate-area
  [re-frame/trim-v]
  (fn [db [table_key]]
    (assoc-in db [:active-items :active-table] [table_key])))

(re-frame/reg-event-fx
  ::dispatch-receipt-wo-table
  [re-frame/trim-v]
  (fn [{:keys [db] :as cofx} _]
    (assoc cofx :dispatch (if (:editing db)
                            [::add-new-receipt 0 0]
                            [::change-table-in-receipt 0 0]))))

(re-frame/reg-event-fx
  ::process-table
  (fn [{:keys [db] :as cofx} [_ table]]
    (assoc cofx :dispatch (if (:editing db)
                            [::change-table-in-receipt (first (:active-table (:active-items db))) table]
                            [::add-new-receipt (first (:active-table (:active-items db))) table]))))
