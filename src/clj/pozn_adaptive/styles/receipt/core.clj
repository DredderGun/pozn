(ns pozn-adaptive.styles.receipt.core
  (:require [pozn-adaptive.styles.receipt.header :as header]
            [pozn-adaptive.styles.receipt.receipt :as receipt]))

(def receipt-styles
  (into [] (concat header/header-receipt-styles
                   receipt/receipt-styles)))