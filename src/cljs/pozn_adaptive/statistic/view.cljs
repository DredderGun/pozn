(ns pozn-adaptive.statistic.view
  (:require [re-frame.core :as re-frame]
            [re-com.core :as re-com]
            [pozn-adaptive.statistic.events :as events]
            [pozn-adaptive.statistic.subs :as subs]
            [reagent.core :as reagent]))

(defn statistic-view
  []
  (let [statistic (re-frame/subscribe [::subs/get-statistic])]
    (fn []
      [:div
       [re-com/v-box :gap "5px"
        :children [[:h3 "Статистика"]
                   [re-com/v-box :children [[re-com/v-box :children [[:p (str "Текущая выручка по оплаченным чекам: " )]
                                                                     [:ul
                                                                      (for [dish (:sold-dishes-count @statistic)]
                                                                        ^{:key (:id dish)} [:li (str (:name dish) " Кол-во: " (:count dish))])]]]
                                            [:p (str "Наличными: " (:cash-sum @statistic))]
                                            [:p (str "Картой: " (:card-sum @statistic))]
                                            [:p (str "Кол-во оплаченных чеков: " (:paid-receipt-count @statistic))]
                                            [:p (str "Кол-во неоплаченных чеков: " (:unpaid-receipt-count @statistic))]]]]]])))