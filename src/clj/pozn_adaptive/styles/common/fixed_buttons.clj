(ns pozn-adaptive.styles.common.fixed-buttons
  (:require [garden.units :as u :refer [px pt percent]]))

(def fixed-buttons-styles
  [[:.fixed-buttons {:width (px 49)
                    :height (px 49)
                    :position :fixed
                    :background "rgb(54, 54, 54)"
                    :color "white"
                    :border "none"
                    :border-radius (percent 50)
                    :bottom (px 10)
                    :right (px 10)
                    :box-shadow "0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2)"
                    :font-size (px 25)
                    :z-index 3
                    :padding "5px 0 0 0"
                    :-webkit-appearance "none"}]])