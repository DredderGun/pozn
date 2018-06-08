(ns pozn-adaptive.menu.view
  (:require [re-frame.core :as re-frame]
            [re-com.core :as re-com]
            [pozn-adaptive.menu.events :as events]
            [pozn-adaptive.menu.subs :as subs]))

(defn search-dish
  []
  (let [search-query (re-frame/subscribe [::subs/search-query])]
    (fn []
      [:div.search-dish-form
       [:input.search-dish {:type "text"
                            ;:auto-focus true
                            :value @search-query
                            :on-change #(re-frame/dispatch [::events/set-search-query (-> % .-target .-value)])}]
       [:button.clear-search
        {:on-click #(re-frame/dispatch [::events/set-search-query ""])}
        [re-com/md-icon-button :md-icon-name "zmdi-close"]]])))

(defn menu-view
  []
  (let [filtered-dishes (re-frame/subscribe [::subs/filtered-dishes])]
    (fn []
      [:div.menu-wrapper
       [search-dish]
       [:div.menu-list
        (for [dish @filtered-dishes]
          ^{:key (:id dish)} [:div.menu-dish-buttons-wrapper
                              [:button {:on-click #(re-frame/dispatch [::events/add-new-dish-fast dish true])
                                        :class "list-group-item product-button list-button"}
                               [:div
                                (:short_name dish)
                                [re-com/md-icon-button :md-icon-name "zmdi-plus-circle-o"]]]
                              [:div.right-area-menu-dish-button
                               {:on-click #(re-frame/dispatch [::events/edit-new-dish dish])}]])]])))