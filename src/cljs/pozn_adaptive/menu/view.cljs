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
                            :value @search-query
                            :on-change #(re-frame/dispatch [::events/set-search-query (-> % .-target .-value)])}]
       [:button.clear-search
        {:on-click #(re-frame/dispatch [::events/set-search-query ""])}
        [re-com/md-icon-button :md-icon-name "zmdi-close"]]])))

(defn menu-view
  []
  (let [active-group (re-frame/subscribe [::subs/active-group])
        filtered-dishes (re-frame/subscribe [::subs/filtered-dishes])]
    (fn []
      [:div.menu
       ;[search-dish]
       (doall
         (for [{:keys [id group]} @filtered-dishes]
           ^{:key id} [:button
                       {:class (str "menu__list-button " (when (= @active-group id) "menu__list-button_selected"))
                        :on-click #(re-frame/dispatch [::events/display-dish-list id])}
                       group]))])))