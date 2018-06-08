(ns pozn-adaptive.styles.tables.table-picture-v
  (:require [garden.units :as u :refer [px pt percent]]
            [garden.color :as color :refer [hsl rgb]]))

;(def tables-picture-view
;  [:.tables-picture-view
;   {:display :flex
;    :flex-wrap :wrap
;    :justify-content :space-around
;    :align-content :flex-start
;    :width (percent 100)
;    :min-height (px 700)}
;   [:.tp
;    {:display :flex
;     :justify-content :center
;     :background "#ccc"
;     :color :black
;     :font-size (px 25)
;     :height (px 40)
;     :margin "20px 0"}]
;   [:.tp-small
;    {:width (percent 30)}]
;   [:.tp-big
;    {:width (percent 60)}]])

(def table-picture-styles
  [[:.table-picture-view]
   [:.tables-picture-view__content
    {:display :flex
     :flex-wrap :wrap
     :justify-content :space-around
     :align-content :flex-start
     :width (percent 100)
     :min-height (px 700)}]
   [:.tables-picture-view__tp
    {:display :flex
     :justify-content :center
     :background "#ccc"
     :color :black
     :font-size (px 25)
     :height (px 40)
     :margin "20px 0"}]
   [:.tables-picture-view__tp_small
    {:width (percent 30)}]
   [:.tables-picture-view__tp_big
    {:width (percent 60)}]])