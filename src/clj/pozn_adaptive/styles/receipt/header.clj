(ns pozn-adaptive.styles.receipt.header
  (:require [garden.units :as u :refer [px pt percent]]
            [garden.color :as color :refer [hsl rgb]]))

(def header-receipt-styles
  [[:.header__receipt
    {:margin-bottom 0
     :pointer-events "auto"}]
   [:.header__mail-button
    {:margin-right (px 20)}]
   [:.header__card-button
    {:width (percent 5)}]
   [:.header__h3
    {:margin 0}]
   [:.header__h3_sum
    {:margin-left (px 10)}]
   [:.header__part_align
    {:align-items "center"}]
   [:.header__h3_table]])
