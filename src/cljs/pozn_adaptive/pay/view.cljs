(ns pozn-adaptive.pay.view
  (:require [re-frame.core :as re-frame]
            [re-com.core :as re-com]
            [pozn-adaptive.pay.events :as events]
            [pozn-adaptive.pay.subs :as subs]))

(defn pay-view
  []
  (let [receipt-sum (re-frame/subscribe [::subs/active-receipt-sum-and-payment])]
    (fn []
      [re-com/v-box :gap "20px"
       :align :center
       :children [[:div.header
                   [re-com/md-icon-button :md-icon-name "zmdi-chevron-left"
                    :size :larger
                    :class "header__back-button"
                    :on-click #(re-frame/dispatch [::events/change-layout :new-sale-receipt])]
                   [:h2.header__text.header__text_pay.header__part
                    "Оплата"]]
                  [re-com/v-box :width "100%"
                   :align :center
                   :children [[re-com/title :label (str "Общая сумма: " (:sum-price @receipt-sum))
                               :level :level1
                               :style {:text-align :center}]
                              [re-com/v-box
                               :children
                               [[re-com/box :align-self :end :child [re-com/label :label "Наличные"]]
                                [re-com/h-box :children [[re-com/button :label "Всю сумму ->"
                                                          :on-click #(re-frame/dispatch [::events/add-all-sum-to-specified-payment :cash])]
                                                         [:input {:type "number"
                                                                  :value (:cash (:payment @receipt-sum))
                                                                  :on-change #(re-frame/dispatch [::events/change-card-or-cash-sum :cash (-> % .-target .-value)])}]]]
                                [re-com/gap :size "15px"]]]
                              [re-com/v-box
                               :children
                               [[re-com/box :align-self :end :child [re-com/label :label "Карта"]]
                                [re-com/h-box :children [[re-com/button :label "Всю сумму ->"
                                                          :on-click #(re-frame/dispatch [::events/add-all-sum-to-specified-payment :card])]
                                                         [:input {:type "number"
                                                                  :value (:card (:payment @receipt-sum))
                                                                  :on-change #(re-frame/dispatch [::events/change-card-or-cash-sum :card (-> % .-target .-value)])}]]]
                                [re-com/gap :size "15px"]]]
                              [re-com/button :label "Оплатить" :on-click #(re-frame/dispatch [::events/pay-receipt])]]]]])))

