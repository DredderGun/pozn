(ns pozn-adaptive.dish.desc-view
  (:require [re-frame.core :as re-frame]
            [pozn-adaptive.events :as common-events]
            [pozn-adaptive.dish.subs :as subs]
            [re-com.core :as re-com]))

(defn desc-view
  []
  (let [active-dish-short-name (re-frame/subscribe [::subs/active-dish-short-name])
        active-dish-description (re-frame/subscribe [::subs/active-dish-description])]
    (fn []
      [:div#product-wrapper
       [re-com/v-box :gap "20px"
        :align :center
        :children [[:div.header.header_dish
                    {:on-click #(re-frame/dispatch [::common-events/set-slide-window true :dish])}
                    [re-com/md-icon-button :md-icon-name "zmdi-chevron-left"
                     :size :larger
                     :class "header__back-button"]
                    [:h2.header__text {:style {:margin-left "13%"}} @active-dish-short-name]]
                   [:div
                    {:style {:padding-left "32px"}}
                    @active-dish-description]]]])))