(ns pozn-adaptive.styles.common.menu
  (:require [garden.units :as u :refer [px pt percent]]
            [garden.def :refer [defkeyframes]]))

(def menu-styles
  [[:.menu
    {:height (percent 100)}
    [:button:active
     {:background-color "inherit"}]]
   [:.menu__list-button
    {:font-size (px 20)
     :width (percent 100)
     :color "#333"
     :background "white"
     :border "1px solid #ccc"
     :text-align "left"
     :white-space "normal"
     :min-height (px 50)
     :height "auto"}]
   [:.menu__list-button_selected
    {:background-color "lightgrey"}]
   [:.menu__list-button_icon
    {:border-color "#ccc"
     :display "flex"
     :justify-content :space-between}]
   [:.menu__dish-button
    {:display "flex"
     :position "relative"}]
   [:.menu__right-area
    {:position "absolute"
     :right 0
     :top 0
     :width (percent 20)
     :height (percent 100)}]
   [:.menu__list-button_dish-font
    {:font-size (px 20)}]
   [:.calculator__bottom-btns
    {:display "flex"
     :justify-content :space-around}]
   [:.calculator__bottom-btns__btn
    {:width (px 40)
     :height (px 40)
     :font-size (px 23)
     :margin (px 10)
     :border "2px solid lightgrey"
     :border-radius "0px"
     :padding 0
     :-webkit-appearance "none"}]
   [:.modificators
    {:width (percent 100)
     :text-align "center"
     :margin "auto"
     :display "flex"
     :flex-direction "column"}]
   [:.calculator__count__h3
    {:margin 0}]])

