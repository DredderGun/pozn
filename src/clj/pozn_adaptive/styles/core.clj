(ns pozn-adaptive.styles.core
  (:require [garden.def :refer [defstylesheet defstyles]]
            [pozn-adaptive.styles.common.core :as common]
            [pozn-adaptive.styles.tables.core :as tables]
            [pozn-adaptive.styles.receipt.core :as receipt]
            [pozn-adaptive.styles.groups :as groups]
            [pozn-adaptive.styles.common.menu :as menu]
            [pozn-adaptive.styles.dish.dish :as dish]
            [pozn-adaptive.styles.common.input-btn :as input-btn]
            [pozn-adaptive.styles.pay :as pay]))

(defstyles pozn-styles
           (into []
                 (concat common/common-styles
                         tables/tables-styles
                         receipt/receipt-styles
                         groups/menu-styles
                         menu/menu-styles
                         dish/dish
                         input-btn/input-btn-styles
                         pay/pay-styles))

           ;tables/tables-styles
           ;header/com-header-styles
           ;modal-window/modal-window-styles
           ;sandwich-menu/sandwich-styles
           ;slide-window/slide-wind-styles
           ;fixed-buttons/fixed-buttons-styles

           ;header/chevron
           ;header/back-button
           ;header/header__part
           ;sandwich-menu/sandwich-panel
           ;sandwich-menu/sandwich-menu
           ;sandwich-menu/sandwich-panel--bar
           ;sandwich-menu/changed-sandwich-bars
           ;
           ;t-header/header-tables-part
           ;table-tabs/table-tabs-view
           ;
           ;modal-window/modal-wrapper
           ;modal-window/modal-backdrop
           ;modal-window/modal-child

           ;common/sandwich-menu
           ;common/sandwich-bar1
           ;common/sandwich-bar2
           ;common/sandwich-bar3
           ;common/sandwich-menu-container-modal-window
           ;common/sandwich-panel
           ;common/header
           ;common/top-panel-left-wrapper
           ;common/chevron-without-sandwich
           ;common/modal-window
           ;common/common-styles
           ;common/fixed-buttons-styles
           ;common/ios-default-styles-selectors-off
           ;common/ios-default-styles-off
           ;
           ;receipts-list/sale-receipts-list
           ;receipts-list/add-check-button
           ;
           ;receipt/receipt-css
           ;
           ;modal-window/modal-header
           ;modal-window/modal-wrapper
           ;modal-window/modal-backdrop
           ;modal-window/modal-child
           ;
           ;tables/main-css-container-receipt
           ;menu/menu-css
           ;
           ;dish/dish-css
           )

