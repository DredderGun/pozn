(ns pozn-adaptive.sale-receipt-list.view
  (:require [re-frame.core :as re-frame]
            [re-com.core :as re-com]
            [pozn-adaptive.sale-receipt-list.events :as events]
            [pozn-adaptive.sale-receipt-list.subs :as subs]
            [pozn-adaptive.modal-windows.window :refer [sandwich-menu]]
            [pozn-adaptive.statistic.view :refer [statistic-view]]
            [pozn-adaptive.events :as common-events]))

(defn receipt-list-modal
  []
  [:div.modal-wrapper__panel-item
   [:div.modal-wrapper__text-line
    {:on-click #(re-frame/dispatch [::common-events/modal {:show? true
                                                           :child [statistic-view]
                                                           :size :small}])} "Статистика"]
   [:div.modal-wrapper__text-line
    {:on-click #(re-frame/dispatch [::common-events/flush-store])} "Очистить чеки"]])

(defn sale-receipt-list
  []
  (let [sale-receipts (re-frame/subscribe [::subs/sale-receipts])]
    [re-com/v-box :class "sale-receipt-list"
     :children [[:div.header
                 [:h2 "Список чеков"]
                 [sandwich-menu #(re-frame/dispatch [::common-events/modal {:show? true
                                                                            :child [receipt-list-modal]
                                                                            :size :small}])]]
                [re-com/v-box
                 :width "100%"
                 :class "list-group sale-receipts-wrapper"
                 :children (into [] (for [sale-receipt @sale-receipts]
                                      ^{:key (:id sale-receipt)} [re-com/button
                                                                  :class (:class sale-receipt)
                                                                  :style (:style sale-receipt)
                                                                  :label (:label sale-receipt)
                                                                  :on-click #(re-frame/dispatch [::events/turn-on-old-receipt (:id sale-receipt)])]))]
                [:button.fixed-buttons
                 {:on-click #(re-frame/dispatch [::events/change-layout :tables])}

                 [re-com/md-icon-button
                  :md-icon-name "zmdi-plus"
                  :size :larger]]]]))
