(ns pozn-adaptive.styles.common.modal-window
  (:require [garden.units :as u :refer [px pt percent]]
            [garden.def :refer [defkeyframes]]))

(defkeyframes fade-in
              [:from
               {:opacity 0}]

              [:to
               {:opacity 0.6}])

(defkeyframes fade-in-child
              [:from
               {:opacity 0}]

              [:to
               {:opacity 1}])

(def modal-window-styles
  [[:.modal-header
    {:background-color "#f5f5f5"}]
   [:.modal-header__panel-heading
    {:border-top-left-radius "inherit"
     :border-top-right-radius "inherit"}]
   [:.modal-wrapper
    {:display "flex"
     :position "fixed"
     :left 0
     :top 0
     :width (percent 100)
     :height (percent 100)
     :z-index 1040}]
   [:.modal-wrapper__modal-backdrop
    {:position "fixed"
     :width (percent 100)
     :height (percent 100)
     :background-color "black"
     :opacity 0.6
     :z-index 1
     :animation [[fade-in "0.2s" :infinite :alternate]]}]
   [:.modal-wrapper__modal-child
    {:position "absolute"
     :width (percent 100)
     :height (px 300)
     :top (px 128)
     :left (px 0)
     :padding (px 30)
     :background-color "#eee"
     :display :flex
     :align-items :center
     :flex-direction :column
     :z-index 2
     :animation [[fade-in-child "0.2s" :infinite :alternate]]}]
   [:.modal-wrapper__panel-item
    {:font-size (px 25)
     :margin "5px auto"}]
   [:.modal-wrapper__text-line
    {:font-size (px 25)
     :margin "5px auto"}]])