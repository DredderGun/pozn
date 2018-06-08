(ns pozn-adaptive.menu.group-view
  (:require [re-frame.core :as re-frame]
            [re-com.core :as re-com]
            [pozn-adaptive.menu.subs :as subs]
            [pozn-adaptive.menu.events :as events]))

(defn group-view
  []
  (let [group-map (re-frame/subscribe [::subs/group-dish])
        active-dish-id (re-frame/subscribe [::subs/active-dish-id])]
    (fn []
      [:div.menu
       [:div.header.header_groups
        [re-com/md-icon-button :md-icon-name "zmdi-chevron-left"
         :size :larger
         :class "back-button"
         :on-click #(re-frame/dispatch [::events/back-to-group-menu])]
        [:div.header__part (:group @group-map)]]
       (doall
         (for [{:keys [id full_name] :as dish} (:list @group-map)]
           ^{:key id} [:div.menu__dish-button
                       [:button
                        {:class (str "menu__list-button menu__list-button_icon menu__list-button_dish-font list-group-item " (when (= id @active-dish-id) "menu__list-button_selected"))
                         :on-click #(re-frame/dispatch [::events/add-new-dish-fast dish true])}
                        [:div full_name]
                        [re-com/md-icon-button :md-icon-name "zmdi-plus-circle-o"]]
                       [:div.menu__right-area
                        {:on-click #(re-frame/dispatch [::events/add-new-dish-fast dish false])}]]))])))