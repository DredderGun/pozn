(ns pozn-adaptive.db
  (:require [pozn-adaptive.menu-db :as menu-db]))

(def default-db
  {:layout :sale-receipts-layout
   :table-areas [{:id 1 :label "Зона 1" :tables (into [] (range 1 14))}
                 {:id 2 :label "Зона 2" :tables (into [] (range 1 6))}
                 {:id 3 :label "Зона 3" :tables (into [] (range 1 8))}
                 {:id 4 :label "Зона 4" :tables (into [] (range 1 3))}]
   :active-items {:active-table [1 1]
                  :active-receipt 1
                  :active-dish-in-receipt nil
                  :active-guest 1
                  :tables-view 0
                  :select-mod false
                  :temporary-dish nil}
   :editing false
   :sale-receipts {}
   :slide-template {:show? false
                    :template nil}
   :modal-windows {:show? false
                   :child nil}
   :statistic {:sold-dishes-count nil
               :common-sum nil
               :card-sum nil
               :cash-sum nil
               :paid-receipt-count nil
               :unpaid-receipt-count nil}
   :dish-search-query ""
   :swipe-events {:start-touch-position nil
                  :start-swipe-time nil
                  :direction nil
                  :swiped-to-end? false
                  :duration false
                  :temporary-swipe nil
                  :not-active? false}
   :menu-items menu-db/menu-items-vector
   :window-width (.-innerWidth js/window)})