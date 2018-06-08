(ns pozn-adaptive.styles.tables.table-tabs-v
  (:require [garden.units :as u :refer [px pt percent]]
            [garden.color :as color :refer [hsl rgb]]))

(def table-tabs-styles
  [[:.table-tabs-view
    {:-webkit-overflow-scrolling "touch"}]
   [:.table-tabs-view__horizontal-bar-tabs
    {:margin "auto"
     :font-size "20px"}]
   [:.table-tabs-view__list-button
    {:font-size (px 20)
     :width (percent 100)
     :height (px 50)
     :color "#333"
     :background "white"
     :border "1px solid #ccc"
     ;:border-color "#ccc"
     :padding "8px 15px"
     :text-align "center"
     :display "flex"
     :flex-direction "column"}]
   [:.table-tabs-view__tables-list
    {:width (percent 100)
     :text-align "center"
     :display "flex"
     :flex-direction "column"}]])
