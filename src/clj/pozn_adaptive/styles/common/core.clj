(ns pozn-adaptive.styles.common.core
  (:require [pozn-adaptive.styles.common.fixed-buttons :as fixed-buttons]
            [pozn-adaptive.styles.common.header :as header]
            [pozn-adaptive.styles.common.modal-window :as modal-window]
            [pozn-adaptive.styles.common.sandwich-menu :as sandwich-menu]
            [pozn-adaptive.styles.common.slide-window :as slide-window]))

(def common-styles
  (into [] (concat fixed-buttons/fixed-buttons-styles
                   header/header-styles
                   modal-window/modal-window-styles
                   sandwich-menu/sandwich-menu-styles
                   slide-window/slide-window-styles)))

