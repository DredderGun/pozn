(ns pozn-adaptive.dish.subs
  (:require [re-frame.core :as re-frame]
            [pozn-adaptive.subs :as common-subs]))

(re-frame/reg-sub
  ::common-subs/active-items
  (fn [db _]
    (:active-items db)))

(re-frame/reg-sub
  ::editing
  (fn [db _]
    (:editing db)))

(re-frame/reg-sub
  ::editing?
  :<- [::editing]
  (fn [editing]
    editing))

(re-frame/reg-sub
  ::active-dish-in-receipt
  :<- [::common-subs/active-items]
  (fn [active-items]
    (:active-dish-in-receipt active-items))) ; альтернативный вариант оставлять ссылку на чек из menu-items

(re-frame/reg-sub
  ::temporary-dish
  :<- [::common-subs/active-items]
  (fn [active-items]
    (:temporary-dish active-items)))

(re-frame/reg-sub
  ::active-dish
  :<- [::active-dish-in-receipt]
  :<- [::temporary-dish]
  :<- [::editing]
  (fn [[active-dish-in-receipt temporary-dish editing]]
    (if editing
      active-dish-in-receipt
      temporary-dish)))

(re-frame/reg-sub
  ::active-dish-price
  :<- [::active-dish]
  (fn [active-dish]
    (:price active-dish)))

(re-frame/reg-sub
  ::active-dish-short-name
  :<- [::active-dish]
  (fn [active-dish]
    (:short_name active-dish)))

(re-frame/reg-sub
  ::active-dish-description
  :<- [::active-dish]
  (fn [active-dish]
    (:description active-dish)))

(re-frame/reg-sub
  ::active-dish-count
  :<- [::active-dish]
  (fn [active-dish]
    (:count active-dish)))

(re-frame/reg-sub
  ::active-dish-sum
  :<- [::active-dish-price]
  :<- [::active-dish-count]
  (fn [[active-dish-price active-dish-count]]
    (* active-dish-price active-dish-count)))

;(re-frame/reg-sub
;  ::temporary-dish-price
;  :<- [::active-dish]
;  (fn [temporary-dish]
;    (:price temporary-dish)))

;(re-frame/reg-sub
;  ::temporary-dish-price-short-name
;  :<- [::temporary-dish]
;  (fn [temporary-dish]
;    (:short_name temporary-dish)))

;(re-frame/reg-sub
;  ::active-dish-in-receipt-price
;  :<- [::active-dish-map]
;  (fn [active-dish-map]
;    (:price active-dish-map)))

;(re-frame/reg-sub
;  ::active-dish-in-receipt-short-name
;  :<- [::active-dish-map]
;  (fn [active-dish-in-receipt]
;    (:short_name active-dish-in-receipt)))

;(re-frame/reg-sub
;  ::temporary-dish-count
;  :<- [::temporary-dish]
;  (fn [temporary-dish]
;    (:count temporary-dish)))

;(re-frame/reg-sub
;  ::temporary-dish-sum
;  :<- [::temporary-dish-price]
;  :<- [::temporary-dish-count]
;  (fn [[temporary-dish-price count]]
;    (* temporary-dish-price count)))

;(re-frame/reg-sub
;  ::editing-dish-count
;  :<- [::active-dish-map]
;  (fn [active-dish-in-receipt]
;    (:count active-dish-in-receipt)))

;(re-frame/reg-sub
;  ::editing-dish-sum
;  :<- [::active-dish-in-receipt-price]
;  :<- [::editing-dish-count]
;  (fn [[active-dish-in-receipt-price editing-dish-count]]
;    (if editing-dish-count
;      (* active-dish-in-receipt-price editing-dish-count)
;      nil)))

(re-frame/reg-sub
  ::selected-dish-modificators
  :<- [::active-dish]
  (fn [active-dish]
    (:modificators active-dish)))
