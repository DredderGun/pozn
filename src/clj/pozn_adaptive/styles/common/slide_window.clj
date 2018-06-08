(ns pozn-adaptive.styles.common.slide-window)

(def slide-window-styles
  [[:.slide-menu]
   [:.slide-menu__backdrop
    {:position "fixed"
     :height "100%"
     :width "100%"
     :z-index "999"
     :background-color "rgba(0,0,0,0.5)"
     :transition "0.2s"}]
   [:.slide-menu__panel
    {:position "absolute"
     :right 0
     :height "100%"
     :background-color "white"
     :overflow "scroll"
     :-webkit-overflow-scrolling "touch"}]
   [:.slide-menu__close-btn
    {:position "absolute"
     :top 0
     :left 0}]])