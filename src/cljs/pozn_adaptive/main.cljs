(ns pozn-adaptive.main
  (:require [re-frame.core :as re-frame]
            [pozn-adaptive.subs :as subs]
            [pozn-adaptive.tables.view :as table-view]
            [pozn-adaptive.receipt.view :as new-sale-receipt]
            [pozn-adaptive.menu.view :as menu]
            [pozn-adaptive.dish.view :as dish]
            [pozn-adaptive.pay.view :as pay-view]
            [pozn-adaptive.statistic.view :as statistic-layout]
            [pozn-adaptive.sale-receipt-list.view :as sale-receipt-list]

            [pozn-adaptive.modal-windows.window :as modal-windows]))

(defn- main-panel []
  (let [layout (re-frame/subscribe [::subs/layout])]
    (conj [:div
           (case @layout
             :sale-receipts-layout [sale-receipt-list/sale-receipt-list]
             :tables [table-view/table-main]
             :old-tables [table-view/table-main false]
             :new-sale-receipt [new-sale-receipt/new-sale-receipt]
             :menu-view [menu/menu-view]
             :dish [dish/dish]
             :pay [pay-view/pay-view]
             :statistic-view [statistic-layout/statistic-view]
             [:p "No content"])]
          [modal-windows/modal])))
