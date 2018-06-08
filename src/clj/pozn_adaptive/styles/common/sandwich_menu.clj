(ns pozn-adaptive.styles.common.sandwich-menu
  (:require [garden.units :as u :refer [px pt percent]]))

(def sandwich-menu-styles
  [[:.sandwich-panel
    {:left (px 20)
     :top (px 83)
     :z-index 3}]
   [:.sandwich-menu
    {:display "inline-block"
     :cursor "pointer"}]
   [:.sandwich-panel__bar
    {:width (px 35)
     :height (px 5)
     :background-color "#333"
     :margin "6px 0"
     :transition "0.4s"}]
   [:.sandwich-menu_change
    [:.sandwich-panel__bar1
     {:transform "rotate(-45deg) translate(-9px, 6px)"}]
    [:.sandwich-panel__bar2
     {:opacity "0"}]
    [:.sandwich-panel__bar3
     {:transform "rotate(45deg) translate(-9px, -6px)"}]]])