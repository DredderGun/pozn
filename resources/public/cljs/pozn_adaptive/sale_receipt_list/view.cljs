(ns pozn-adaptive.sale-receipt-list.view
  (:require [re-frame.core :as re-frame]
            [re-com.core :as re-com]
            [pozn-adaptive.sale-receipt-list.events :as events]
            [pozn-adaptive.sale-receipt-list.subs :as subs]
            [reagent.core :as reagent]
            [pozn-adaptive.errors.error-window :as error-window]))

(defn sandwich-menu
  []
  (let [sandwich-is-open? (reagent/atom false)]
    (fn []
      [:div {:class (if @sandwich-is-open?
                      "sandwich-menu-container change"
                      "sandwich-menu-container")
             :on-click #(swap! sandwich-is-open? not)}
       [:div.bar1]
       [:div.bar2]
       [:div.bar3]
       (when @sandwich-is-open?
         [:div.modal-window.sandwich-panel
          [:div.modal-window-panel-item {:on-click #(re-frame/dispatch [::events/give-statistic])} "Статистика"]])])))

(defn sale-receipt-list
  []
  (let [sale-receipts (re-frame/subscribe [::subs/sale-receipts])]
    [re-com/v-box :class "sale-receipt-list"
     :children [[error-window/error-window]
                [:div.chevron-wrapper
                 [re-com/box :child [re-com/title :label "Список чеков"
                                     :level :level1]
                  :align-self :center]
                 [sandwich-menu]]
                [re-com/v-box
                 :width "100%"
                 :class "list-group sale-receipts-wrapper"
                 :children (into [] (for [sale-receipt @sale-receipts]
                                      ^{:key (:id sale-receipt)} [re-com/button
                                                                  :class (:class sale-receipt)
                                                                  :style (:style sale-receipt)
                                                                  :label (:label sale-receipt)
                                                                  :on-click #(re-frame/dispatch [::events/turn-on-old-receipt (:id sale-receipt)])]))]
                [:button.add-button
                 {:on-click #(re-frame/dispatch [::events/change-layout :tables])}

                 [re-com/md-icon-button
                  :md-icon-name "zmdi-plus"
                  :size :larger]]]]))
