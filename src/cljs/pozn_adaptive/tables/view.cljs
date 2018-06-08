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
      [:div.table-tabs-view
       [re-com/horizontal-bar-tabs
        :style {:margin "auto"
                :font-size "20px"}
        :model active-area
        :tabs  tabs-definition
        :on-change #(re-frame/dispatch [::events/activate-area %])]
       (into [:div.table-tabs-view__tables-list]
             (for [table (:tables @active-area-tables)]
               ^{:key table} [:button.table-tabs-view__list-button
                              {:on-click #(re-frame/dispatch [::events/process-table table])}
                              (str "Стол " @active-area "." table)]))])))

(defn list-component
  [tabs-definition]
  (into [:div.tables-list-view]
        (for [area-map @tabs-definition]
          ^{:key (:id area-map)} [re-com/v-box
                                  :children [[:h2.bg-primary.area-subheader (:label area-map)]
                                             (for [table (:tables area-map)]
                                               ^{:key table} [re-com/button
                                                              :class "list-group-item table-button list-button"
                                                              :label (str "Стол " (:id area-map) "." table)
                                                              :on-click #(re-frame/dispatch [::events/process-table table])])]])))

(defn table-pictures-component
  [tabs-definition]
  (let [active-area (re-frame/subscribe [::subs/active-area])
        active-area-tables (re-frame/subscribe [::subs/active-area-tables @active-area])]
    (fn [tabs-definition]
      [re-com/v-box :class "table-picture-view"
       :justify :around
       :align :center
       :children [[re-com/horizontal-bar-tabs :style {:margin "auto"
                                                      :font-size "20px"}
                   :model active-area
                   :tabs  tabs-definition
                   :on-change #(re-frame/dispatch [::events/activate-area %])]
                  (into [:div.tables-picture-view__content]
                        (for [table (:tables @active-area-tables)]
                          ^{:key table} [:div {:class (str "tables-picture-view__tp "
                                                           (if (= (rem table 2) 0) "tables-picture-view__tp_small"
                                                                                   "tables-picture-view__tp_big"))
                                               :on-click #(re-frame/dispatch [::events/process-table table])}
                                         (str "Стол " @active-area "." table)]))]])))

(defn tables-modal-window
  []
  (let [active-tables-view (re-frame/subscribe [::subs/active-tables-view])]
    (fn []
      [:div.modal-wrapper__panel-item
       [:div
        {:class (str "modal-wrapper__text-line " (when (= @active-tables-view 0) "modal-wrapper__text-line_active"))
         :on-click #(re-frame/dispatch [::events/change-tables-view 0])} "Вид 1"]
       [:div
        {:class (str "modal-wrapper__text-line " (when (= @active-tables-view 1) "modal-wrapper__text-line_active"))
         :on-click #(re-frame/dispatch [::events/change-tables-view 1])} "Вид 2"]
       [:div
        {:class (str "modal-wrapper__text-line " (when (= @active-tables-view 2) "modal-wrapper__text-line_active"))
         :on-click #(re-frame/dispatch [::events/change-tables-view 2])} "Вид 3"]])))

(defn table-main
  []
  (let [tables-areas (re-frame/subscribe [::subs/table-areas])
        active-tables-view (re-frame/subscribe [::subs/active-tables-view])]
    (fn []
      [re-com/v-box
       :justify :center
       :class "tables-wrapper"
       :children [[:div.header
                   [:div.header__part.header__part_tables-icons
                    [re-com/md-circle-icon-button :md-icon-name "zmdi-phone"
                     :size :regular]
                    [re-com/md-circle-icon-button :md-icon-name "zmdi-walk"
                     :on-click #(re-frame/dispatch [::events/dispatch-receipt-wo-table])
                     :size :regular]]
                   [sandwich-menu #(re-frame/dispatch [::common-events/modal {:show? true
                                                                              :child [tables-modal-window]
                                                                              :size :small}])]]
                   (case @active-tables-view
                     0 [tabs-component tables-areas]
                     1 [list-component tables-areas]
                     2 [table-pictures-component tables-areas]
                     [:p "No template"])]])))