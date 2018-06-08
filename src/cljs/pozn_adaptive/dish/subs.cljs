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
  ::active-dish
  :<- [::common-subs/active-items]
  (fn [active-items]
    (:active-dish-in-receipt active-items))) ; альтернативный вариант оставлять ссылку на чек из menu-items

(re-frame/reg-sub
  ::active-dish-price
  :<- [::active-dish]
  (fn [active-dish]
    (:price active-dish)))

(re-frame/reg-sub
  ::active-dish-short-name
  :<- [::active-dish]
  (fn [active-dish]
    (:full_name active-dish)))

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

(re-frame/reg-sub
  ::selected-dish-modificators
  :<- [::active-dish]
  (fn [active-dish]
    (:modificators active-dish)))
