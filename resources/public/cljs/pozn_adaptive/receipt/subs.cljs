(ns pozn-adaptive.receipt.subs
  (:require [re-frame.core :as re-frame]
            [pozn-adaptive.subs :as common-subs]))

(re-frame/reg-sub
  ::active-items
  (fn [db _]
    (:active-items db)))

(re-frame/reg-sub
  ::sale-receipts
  (fn [db _]
    (:sale-receipts db)))

(re-frame/reg-sub
  ::active-receipt
  :<- [::sale-receipts]
  :<- [::active-items]
  (fn [[sale-receipts active-items]]
    (get sale-receipts (:active-receipt active-items))))

(re-frame/reg-sub
  ::receipt-status-text
  :<- [::active-receipt]
  (fn [active-receipt]
    (cond
      (:paid? active-receipt) "Оплачен"
      (:sent? active-receipt) "Отправлен"
      :default "")))

(re-frame/reg-sub
  ::active-receipt-paid?
  :<- [::active-receipt]
  (fn [active-receipt]
    (:paid? active-receipt)))

(re-frame/reg-sub
  ::active-receipt-sent?
  :<- [::active-receipt]
  (fn [active-receipt]
    (:sent? active-receipt)))

(re-frame/reg-sub
  ::active-receipts-guests-ids
  :<- [::active-receipt]
  (fn [active-receipt]
    (map :id (vals (:guests active-receipt)))))

(re-frame/reg-sub
  ::active-receipt-id
  :<- [::active-receipt]
  (fn [active-receipt]
    (:id active-receipt)))

(re-frame/reg-sub
  ::active-receipt-dates
  :<- [::active-receipt]
  (fn [active-receipt]
    (:dates active-receipt)))

(re-frame/reg-sub
  ::receipt-is-empty?
  :<- [::sale-receipts]
  :<- [::active-receipt]
  (fn [[sale-receipts active-receipt]]
    (case (some #(when (= (:active-receipt active-receipt) (:id %))
                   (count (:dishes %)))
                sale-receipts)
      0 true
      false)))

(re-frame/reg-sub
  ::modal-window
  (fn [db [_ m-window-key]]
    (m-window-key (:modal-windows db))))

(re-frame/reg-sub
  ::active-guest-id
  :<- [::active-items]
  (fn [active-items]
    (:active-guest active-items)))

(re-frame/reg-sub
  ::active-guest
  :<- [::active-guest-id]
  :<- [::sale-receipts]
  (fn [active-guest-id sale-receipts]
    (get sale-receipts active-guest-id)))

(re-frame/reg-sub
  ::swipe-events
  (fn [db _]
    (:swipe-events db)))

(re-frame/reg-sub
  ::current-position
  :<- [::swipe-events]
  :<- [::active-guest-id]
  (fn [[swipe-events active-guest-id] query]
    (let [guest-id (second query)]
      (if (= guest-id active-guest-id)
        (:temporary-swipe swipe-events)
        0))))

(re-frame/reg-sub
  ::swipe-transition?
  :<- [::swipe-events]
  :<- [::active-guest-id]
  (fn [[swipe-events active-guest-id] query]
    (let [guest-id (second query)]
      (if (= guest-id active-guest-id)
        (:duration swipe-events)
        false))))

(re-frame/reg-sub
  ::specified-guest
  :<- [::active-receipt]
  (fn [active-receipt guest-id]
    (get-in active-receipt [:guests (second guest-id)])))

(re-frame/reg-sub
  ::specified-guest-sum
  (fn [query-v]
    (let [guest-id (second query-v)]
      (re-frame/subscribe [::specified-guest guest-id])))
  (fn [specified-guest]
    (reduce (fn [sum dish]
              (+ sum (* (:price dish) (:count dish))))
            0
            (:dishes specified-guest))))

(re-frame/reg-sub
  ::specified-guest-id
  (fn [query-v]
    (let [guest-id (second query-v)]
      (re-frame/subscribe [::specified-guest guest-id])))
  (fn [specified-guest]
    (:id specified-guest)))

(re-frame/reg-sub
  ::active-guest?
  :<- [::active-guest-id]
  :<- [::active-receipt-paid?]
  (fn [[active-guest-id active-receipt-paid?] [_ guest-id]]
    (if (and (= active-guest-id guest-id)
             (not active-receipt-paid?))
      true
      false)))

(re-frame/reg-sub
  ::all-dishes-selected?
  (fn [db _]
    (->> (some #(when (= (:active-receipt db) (:id %))
                  (:dishes %))
               (:sale-receipts db))
         (every? :selected?))))

(re-frame/reg-sub
  ::active-table
  :<- [::active-items]
  (fn [active-items]
    (:active-table active-items)))

(re-frame/reg-sub
  ::active-receipt-guests
  (fn [db _]
    (get-in db [:sale-receipts (:active-receipt db) :guests])))

(re-frame/reg-sub
  ::top-bar-table-text
  :<- [::active-receipt]
  :<- [::active-table]
  (fn [[active-receipt active-table]]
    (let [order-wo-table? (not= (nth active-table 0) 0)]
      (if order-wo-table?
        (str (nth (:table active-receipt) 0) "." (nth (:table active-receipt) 1))
        "Без стола"))))

(re-frame/reg-sub
  ::position-slide-panel
  :<- [::common-subs/slide-template-map]
  :<- [::common-subs/window-width]
  :<- [::window-width]
  (fn [[slide-template-map window-width]]
    (if (:show? slide-template-map)
      0 ; когда слева (* -0.8 window-width)
      window-width)))

(re-frame/reg-sub
  ::slide-panel-template
  :<- [::common-subs/slide-template-map]
  (fn [slide-template-map]
    (:template slide-template-map)))

(re-frame/reg-sub
  ::menu-panel-width
  :<- [::common-subs/window-width]
  (fn [window-width]
    (* 0.8 window-width)))