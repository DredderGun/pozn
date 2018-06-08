(ns pozn-adaptive.tables.subs
  (:require [re-frame.core :as re-frame]))

(re-frame/reg-sub
  ::active-items
  (fn [db _]
    (:active-items db)))

(re-frame/reg-sub
  ::table-areas
  (fn [db _]
    (:table-areas db)))

(re-frame/reg-sub
  ::active-tables-view
  :<- [::active-items]
  (fn [active-items]
    (:tables-view active-items)))

(re-frame/reg-sub
  ::active-area
  :<- [::active-items]
  (fn [active-items]
    (let [active-table (:active-table active-items)]
      (if (= (nth active-table 0) 0)
        1
        (nth active-table 0)))))

(re-frame/reg-sub
  ::active-area-tables
  :<- [::active-area]
  :<- [::table-areas]
  (fn [[active-area table-areas]]
    (some #(when (= (:id %) active-area) %) table-areas)))