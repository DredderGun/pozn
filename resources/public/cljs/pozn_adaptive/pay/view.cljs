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
       :children [[:div.chevron-wrapper.chevron-wrapper-without-sandwich
                   [re-com/md-icon-button :md-icon-name "zmdi-chevron-left"
                    :size :larger
                    :class "back-button"
                    :on-click #(re-frame/dispatch [::events/change-layout :new-sale-receipt])]
                   [re-com/box :style {:margin-left "13%"} :child [re-com/title :label "Оплата" :level :level2]]]
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

