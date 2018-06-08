(ns pozn-adaptive.tables.view
  (:require [re-frame.core :as re-frame]
            [re-com.core :as re-com]
            [pozn-adaptive.tables.events :as events]
            [pozn-adaptive.events :as common-events]
            [pozn-adaptive.tables.subs :as subs]
            [pozn-adaptive.modal-windows.window :refer [sandwich-menu]]))

(defn tabs-component
  [tabs-definition]
  (let [active-area (re-frame/subscribe [::subs/active-area])
        active-area-tables (re-frame/subscribe [::subs/active-area-tables])]
    (fn [tabs-definition]
      [re-com/v-box :class "top-wrapper"
       :justify :around
       :align :center
       :children [[re-com/horizontal-bar-tabs :style {:margin "auto"
                                                      :font-size "20px"}
                   :model active-area
                   :tabs  tabs-definition
                   :on-change #(re-frame/dispatch [::events/activate-area %])]
                  [:div.list-group.tables-list
                   (for [table (:tables @active-area-tables)]
                     ^{:key table} [re-com/button
                                    :class "list-group-item table-button list-button"
                                    :label (str "Стол " @active-area "." table)
                                    :on-click #(re-frame/dispatch [::events/process-table table])])]]])))

(defn list-component
  [tabs-definition]
  [:div
   (for [area-map @tabs-definition]
     ^{:key (:id area-map)}[re-com/v-box
                            :class "top-wrapper"
                            :children [[:h2.bg-primary.area-subheader (:label area-map)]
                                                    (for [table (:tables area-map)]
                                                      ^{:key table} [re-com/button
                                                                     :class "list-group-item table-button list-button"
                                                                     :label (str "Стол " (:id area-map) "." table)
                                                                     :on-click #(re-frame/dispatch [::events/process-table table])])]])])

(defn table-pictures-component
  [tabs-definition]
  (let [active-area (re-frame/subscribe [::subs/active-area])
        active-area-tables (re-frame/subscribe [::subs/active-area-tables @active-area])]
    (fn [tabs-definition]
      [re-com/v-box :class "top-wrapper"
       :justify :around
       :align :center
       :children [[re-com/horizontal-bar-tabs :style {:margin "auto"
                                                      :font-size "20px"}
                   :model active-area
                   :tabs  tabs-definition
                   :on-change #(re-frame/dispatch [::events/activate-area %])]
                  [:div.tables-picture-view
                   (for [table (:tables @active-area-tables)]
                     ^{:key table}[:div {:class (if (= (rem table 2) 0) "tp tp-small" "tp tp-big")
                                         :on-click #(re-frame/dispatch [::events/process-table table])}
                                   (str "Стол " @active-area "." table)])]]])))

(defn tables-modal-window
  []
  (let [active-tables-view (re-frame/subscribe [::subs/active-tables-view])]
    (fn []
      [:div.modal-window.sandwich-panel
       [:div {:class (str "modal-window-panel-item " (when (= @active-tables-view 0) "selected-bar"))
              :on-click #(re-frame/dispatch [::events/change-tables-view 0])} "Вид 1"]
       [:div {:class (str "modal-window-panel-item " (when (= @active-tables-view 1) "selected-bar"))
              :on-click #(re-frame/dispatch [::events/change-tables-view 1])} "Вид 2"]
       [:div.sandwich-panel-item {:class (str "modal-window-panel-item " (when (= @active-tables-view 2) "selected-bar"))
                                  :on-click #(re-frame/dispatch [::events/change-tables-view 2])} "Вид 3"]])))

(defn table-main
  []
  (let [tables-areas (re-frame/subscribe [::subs/table-areas])
        active-tables-view (re-frame/subscribe [::subs/active-tables-view])]
    (fn []
      [re-com/v-box
       :justify :center
       :class "tables-wrapper"
       :children [[:div.chevron-wrapper
                   [:div.top-panel-left-wrapper
                    [re-com/md-circle-icon-button :md-icon-name "zmdi-phone"
                     :size :regular
                     :class "table-icon"]
                    [re-com/md-circle-icon-button :md-icon-name "zmdi-walk"
                     :on-click #(re-frame/dispatch [::events/dispatch-receipt-wo-table])
                     :size :regular
                     :class "table-icon"]
                    [sandwich-menu #(re-frame/dispatch [::common-events/modal {:show? true
                                                                               :child [tables-modal-window]
                                                                               :size :small}])]]]
                   (case @active-tables-view
                     0 [tabs-component tables-areas]
                     1 [list-component tables-areas]
                     2 [table-pictures-component tables-areas]
                     [:p "No template"])]])))