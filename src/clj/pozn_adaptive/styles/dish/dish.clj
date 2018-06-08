(ns pozn-adaptive.styles.dish.dish
  (:require [garden.units :as u :refer [px pt percent]]
            [garden.def :refer [defkeyframes]]))

(def dish
  [[:.header_dish
     {:justify-content "unset"
      :margin-bottom (px 0)}]
   [:.calculator__count
    {:display "flex"
     :justify-content "space-around"
     :flex-wrap "wrap"
     :width (percent 80)
     :margin "auto"}]
   [:.calculator__buttons
    {:display "flex"
     :justify-content "center"
     :flex-wrap "wrap"
     :width (percent 80)
     :margin "auto"}]
   [:.calculator__number
    {:font-size (px 23)
     :margin (px 10)
     :border "2px solid lightgrey"
     :border-radius "0px"
     :width (px 50)
     :height (px 50)
     :padding 0
     :-webkit-appearance "none"}]
   [:.modificators]
   [:.modificators__comments
    {:margin-top (px 15)}]
   [:.modificators__comment
    {:display "flex"
     :justify-content "space-around"
     :width (percent 78)
     :margin "auto"}]
   [:.modificators__message
    {:width (percent 80)
     :word-wrap "break-word"
     :text-align "left"}]])