(ns pozn-adaptive.dish.view
  (:require [re-frame.core :as re-frame]
            [re-com.core :as re-com]
            [reagent.core :as reagent]
            [pozn-adaptive.dish.events :as events]
            [pozn-adaptive.events :as common-events]
            [pozn-adaptive.dish.subs :as subs]))

(defn modificators-input-component
  []
  (let [form-value (reagent/atom "")
        selected-dish-modificators (re-frame/subscribe [::subs/selected-dish-modificators])]
    (fn []
      [:div.modificators-wrapper
       [:label
        {:for "comments"}
        "Комментарий"]
       [:div#comments.modificators-input-wrapper
        [:input.search-dish {:type "text"
                             :value @form-value
                             :on-change #(reset! form-value (-> % .-target .-value))}]
        [:button {:on-click #(do
                               (re-frame/dispatch [::events/change-active-dish-modificators @form-value])
                               (reset! form-value ""))}
         [:i {:class (str "zmdi zmdi-hc-fw-rc zmdi-plus")}]]]
       (into [:div.added-comments] (for [[id {:keys [message]}] @selected-dish-modificators]
                                     ^{:key id}
                                     [:p message
                                      [:i {:class (str "zmdi zmdi-hc-fw-rc zmdi-close")
                                           :on-click #(re-frame/dispatch [::events/delete-modificator id])}]]))])))

(defn numbers-dish-comp
  [editing?]
  (let [custom-count (reagent/atom "")
        remove-last (fn [s]
                      (subs s
                            0
                            (- (count s) 1)))
        concat-to-string (fn [n]
                           (swap! custom-count str n))
        subtract-count (fn []
                         (cond
                           (and
                             (string? @custom-count)
                             (not= @custom-count "")) (swap! custom-count remove-last)
                           (= @custom-count "") (swap! custom-count "")
                           :default nil))
        price (re-frame/subscribe [::subs/active-dish-price])
        editing-dish-count (re-frame/subscribe [::subs/active-dish-count])
        editing-dish-sum (re-frame/subscribe [::subs/active-dish-sum])]
    (fn [editing?]
      [:div#count-dish-wrapper
       [:div.dish-count
        [:div @custom-count]
        [:h3 (str @editing-dish-count " X " @price " = " @editing-dish-sum)]]
       [:div#number-buttons-wrapper
        [:button.number-button
         {:on-click #(concat-to-string "1")} 1]
        [:button.number-button
         {:on-click #(concat-to-string "2")} 2]
        [:button.number-button
         {:on-click #(concat-to-string "3")} 3]
        [:button.number-button
         {:on-click #(concat-to-string "4")} 4]
        [:button.number-button
         {:on-click #(concat-to-string "5")} 5]
        [:button.number-button
         {:on-click #(concat-to-string "6")} 6]
        [:button.number-button
         {:on-click #(concat-to-string "7")} 7]
        [:button.number-button
         {:on-click #(concat-to-string "8")} 8]
        [:button.number-button
         {:on-click #(concat-to-string "9")} 9]
        [:button.number-button
         {:on-click #(subtract-count)}
         [:i {:class (str "zmdi zmdi-hc-fw-rc zmdi-arrow-left")}]]
        [:button.number-button
         {:on-click #(concat-to-string "0")} 0]
        [:button.number-button
         {:on-click #(concat-to-string ".5")} 0.5]]
       [:div#bottom-buttons-count-dish
        [:button
         {:on-click #(do
                       (re-frame/dispatch [::events/change-dish-count-in-receipt + @custom-count])
                       (reset! custom-count ""))}
         [:i {:class (str "zmdi zmdi-hc-fw-rc zmdi-plus")}]]
        [:button
         {:type "button"
          :on-click #(do
                       (re-frame/dispatch [::events/change-dish-count-in-receipt - @custom-count])
                       (reset! custom-count ""))}
         [:i {:class (str "zmdi zmdi-hc-fw-rc zmdi-minus")}]]
        [:button
         {:type "button"
          :on-click #(do
                       (re-frame/dispatch [::events/change-dish-count-in-receipt nil @custom-count])
                       (reset! custom-count ""))}
         [:i {:class (str "zmdi zmdi-hc-fw-rc zmdi-refresh")}]]
        (when (not @editing?)
          [:button
           {:type "button"
            :on-click #(do (re-frame/dispatch [::events/add-new-dish-with-spec-count @custom-count])
                           (reset! custom-count ""))}
           [:i {:class (str "zmdi zmdi-hc-fw-rc zmdi-flare")}]])]])))

(defn dish
  []
  (let [short-name (re-frame/subscribe [::subs/active-dish-short-name])
        editing? (re-frame/subscribe [::subs/editing?])]
    (fn []
      [:div#product-wrapper
       [re-com/v-box :gap "20px"
        :align :center
        :children [[:div.chevron-wrapper.chevron-wrapper-without-sandwich.dish-chevron
                    [re-com/md-icon-button :md-icon-name "zmdi-chevron-left"
                     :size :larger
                     :class "back-button"
                     :on-click #(re-frame/dispatch [::events/dish-back-hn])]
                    [:h2 {:style {:margin-left "13%"}
                          :on-click #(re-frame/dispatch [::common-events/set-slide-window true :dish-desc])} @short-name]]
                   [numbers-dish-comp editing?]
                   (when (not @editing?)
                     [:button {:on-click #(re-frame/dispatch [::events/add-new-dish])} "Добавить"])
                   [modificators-input-component]]]])))
