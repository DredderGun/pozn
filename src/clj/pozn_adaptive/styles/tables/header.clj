(ns pozn-adaptive.styles.tables.header
  (:require [garden.units :as u :refer [px pt percent]]
            [garden.color :as color :refer [hsl rgb]]))

(def header-tables-styles
  [[:.header__part_tables-icons
   {:justify-content :flex-end
    :width (percent 100)
    :padding-right (px 30)}]
   ])
