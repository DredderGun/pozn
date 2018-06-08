(ns pozn-adaptive.styles.common.header
  (:require [garden.units :as u :refer [px pt percent]]))

(def header-styles
  [[:.header {:display "flex"
              :align-items :center
              :justify-content :space-between
              :width (percent 100)
              :border "1px solid lightgrey"
              :padding (px 10)
              :margin-bottom (px 20)
              :background-color "white"
              :box-shadow "2px 4px #ccc"}]
   [:.header__back-button {:font-size (px 40)}]
   [:.header__part {:display :flex
                    :justify-content :flex-end
                    :width (percent 50)}]
   [:.header__text {:margin-left (px 15)
                    :font-size (px 15)}]
   [:.header__part_left {:width (percent 80)
                         :justify-content :flex-start}]
   [:.header__part_right {:width (percent 20)
                          :justify-content :flex-end
                          :padding-right (px 10)}]])