(ns pozn-adaptive.styles.groups
  (:require [garden.units :as u :refer [px pt percent]]))

(def menu-styles
  [[:.header_groups
    {:margin-bottom 0
     :-moz {:position "sticky"}
     :-webkit {:position "sticky"}
     :-ms {:position "sticky"}
     :position "sticky"
     :top 0
     :z-index 10}]])