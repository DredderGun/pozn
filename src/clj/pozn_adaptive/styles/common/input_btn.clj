(ns pozn-adaptive.styles.common.input-btn
  (:require [garden.units :as u :refer [px pt percent]]))

(def input-btn-styles
  [[:.input-btn
    {:display "flex"
     :align-items :flex-end
     :margin "auto"
     :border-color "none"
     :border "none"}]
   [:.input-btn_input-div
    {:display :flex
     :flex-direction :column
     :justify-content :center
     :width (percent 80)}]
   [:.input-btn_sp-btw
    {:justify-content :space-between}]
   [:.input-btn_round-border
    {:border-radius "31px"}]
   [:.input-btn_circle-border
    {:border-radius "50%"
     :background-color "rgb(0, 121, 191)"}]
   [:.input-btn_sm-btn
    {:width (px 31)
     :height (px 31)}]
   [:.input-btn_rect-btn
    {:width (percent 100)
     :height (px 31)}]
   [:.input-btn_border
    {:border "1px solid grey"}]
   [:.input-btn_dis-bord
    {:border "none"}]
   [:.input-btn_button-clr
    {:color "white"}]])