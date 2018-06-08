(ns pozn-adaptive.subs
  (:require [re-frame.core :as re-frame]))

(re-frame/reg-sub
 ::layout
 (fn [db _]
   (:layout db)))

;(re-frame/reg-sub
;  ::active-receipt
;  (fn [db _]
;    (get (:sale-receipts db) (:active-receipt db))))

;(re-frame/reg-sub
;  ::active-guest-map
;  (fn [db _]
;    (get-in db [:sale-receipts (:active-receipt db)
;                :guests (:active-guest db)])))

;(re-frame/reg-sub
;  ::give-all-guests
;  (fn [db _]
;    (get-in db [:sale-receipts (:active-receipt db) :guests])))

(re-frame/reg-sub
  ::active-items
  (fn [db _]
    (:active-items db)))

(re-frame/reg-sub
  ::modal
  (fn [db _]
    (:modal-windows db)))

(re-frame/reg-sub
  ::window-width
  (fn [db _]
    (:window-width db)))

(re-frame/reg-sub
  ::slide-template-map
  (fn [db _]
    (:slide-template db)))