(ns pozn-adaptive.styles.tables.core
  (:require [pozn-adaptive.styles.tables.header :as header]
            [pozn-adaptive.styles.tables.table-tabs-v :as table-tabs]
            [pozn-adaptive.styles.tables.table-picture-v :as table-picture-v]
            [pozn-adaptive.styles.tables.body :as body]))

(def tables-styles
  (into [] (concat header/header-tables-styles
                   table-tabs/table-tabs-styles
                   table-picture-v/table-picture-styles
                   body/body-styles)))

