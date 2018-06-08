(ns pozn-adaptive.styles.receipt.receipt
  (:require [garden.units :as u :refer [px pt percent]]))

(def receipt-styles
  [[:.receipt
    {:position "absolute"
     :height (percent 100)
     :width (percent 100)}]
   [:.guests-list
    {:width (percent 100)
     :max-height (percent 100)
     :overflow :scroll
     :-webkit-overflow-scrolling "touch"}]
   [:.swipe-btn
    {:overflow :hidden
     :height (px 50)
     :margin-bottom 0
     :position :relative}]
   [:.swipe-btn__dot
    {:height (px 15)
     :width (px 15)
     :background-color "#bbb"
     :border-radius (percent 50)
     :display "inline-block"
     :margin-left (px 10)}]
   [:.swipe-btn__delete
    {:position :absolute
     :top 0
     :right 0
     :display :flex
     :justify-content :flex-end
     :align-items :center
     :background-color "#c9302c"
     :width (percent 100)
     :height (percent 100)
     :border-radius (px 4)
     :z-index 1}]
   [:.swipe-btn__delete__del-btn
    {:font-size (px 30)
     :background-color "#c9302c"
     :margin-left (px 15)
     :margin-right (px 30)}]
   [:.swipe-btn__mail-btn
    {:font-size (px 30)
     :background-color "#c9302c"
     :margin-right (px 30)}]
   [:.swipe-btn__card-btn
    {:font-size (px 30)
     :background-color "#c9302c"
     :margin-right (px 96)}]
   [:.swipe-btn__button
    {:width (percent 80)
     :font-size (px 20)
     :z-index 2}]
   [:.swipe-btn__price
    {:width (percent 20)
     :padding "18px 0"
     :z-index 2}]
   [:.guest__table
    {:font-size (px 20)
     :width (percent 100)
     :table-layout "fixed"}]
   [:.guest__row
    {:padding (px 8)
     :width (percent 100)
     :position "relative"
     :border "1px solid grey"}]
   [:.guest__table__row_selected-dish
    {:background-color "#dddcda"}]
   [:.guest__table__area
    {:position "absolute"
     :width (percent 50)
     :height (percent 100)
     :top 0}]
   [:.guest__table__area_left
    {:width (percent 80)}]
   [:.guest__table__area_right
    {:right 0
     :width (percent 20)}]
   [:.guest__table__dish-text ]
   [:.guest__table__li
    {:word-break "break-word"}]
   [:.guest__table__dish-text__name
    {:margin 0
     :overflow "hidden"
     :white-space "nowrap"}]
   [:.fixed-buttons_selected-dishes
    {:left (px 10)}]
   [:.fixed-buttons_selected-dishes
    {:left (px 10)}]
   [:.fixed-buttons_add-guest
    {:left (px 65)}]
   [:.modal-wrapper__header
    {:text-align "center"}]])