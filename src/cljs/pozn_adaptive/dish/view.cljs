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
      [:div.modificators
       [:div.input-btn.input-btn_sp-btw
        [:div.input-btn_input-div
         [:label
          {:for "l-comment"}
          "Комментарий"]
         [:input#l-comment.input-btn_rect-btn.input-btn_round-border.input-btn_border
          {:type "text"
           :value @form-value
           :on-change #(reset! form-value (-> % .-target .-value))}]]
        [:button.input-btn_circle-border.input-btn_sm-btn.input-btn_dis-bord.input-btn_button-clr
         {:on-click #(do
                       (re-frame/dispatch [::events/change-active-dish-modificators @form-value])
                       (reset! form-value ""))}
         [:i {:class (str "zmdi zmdi-hc-fw-rc zmdi-long-arrow-up")}]]]
       (into [:div.modificators__comments] (for [[id {:keys [message]}] @selected-dish-modificators]
                                             ^{:key id}
                                             [:div.modificators__comment
                                              [:p.modificators__message message]
                                              [:i {:class (str "zmdi zmdi-hc-fw-rc zmdi-close")
                                                   :on-click #(re-frame/dispatch [::events/delete-modificator id])}]]))])))

(defn numbers-dish-comp
  []
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
    (fn []
      [:div.calculator
       [:div.calculator__count
        [:div @custom-count]
        [:h3.calculator__count__h3 (str @editing-dish-count " × " @price " = " @editing-dish-sum)]]
       [:div.calculator__buttons
        [:button.calculator__number
         {:on-click #(concat-to-string "1")} 1]
        [:button.calculator__number
         {:on-click #(concat-to-string "2")} 2]
        [:button.calculator__number
         {:on-click #(concat-to-string "3")} 3]
        [:button.calculator__number
         {:on-click #(concat-to-string "4")} 4]
        [:button.calculator__number
         {:on-click #(concat-to-string "5")} 5]
        [:button.calculator__number
         {:on-click #(concat-to-string "6")} 6]
        [:button.calculator__number
         {:on-click #(concat-to-string "7")} 7]
        [:button.calculator__number
         {:on-click #(concat-to-string "8")} 8]
        [:button.calculator__number
         {:on-click #(concat-to-string "9")} 9]
        [:button.calculator__number
         {:on-click #(subtract-count)}
         [:i {:class (str "zmdi zmdi-hc-fw-rc zmdi-arrow-left")}]]
        [:button.calculator__number
         {:on-click #(concat-to-string "0")} 0]
        [:button.calculator__number
         {:on-click #(concat-to-string ".5")} 0.5]
        [:button.calculator__number
         {:on-click #(do
                       (re-frame/dispatch [::events/change-dish-count-in-receipt + @custom-count])
                       (reset! custom-count ""))}
         [:i {:class (str "zmdi zmdi-hc-fw-rc zmdi-plus")}]]
        [:button.calculator__number
         {:on-click #(do
                       (re-frame/dispatch [::events/change-dish-count-in-receipt - @custom-count])
                       (reset! custom-count ""))}
         [:i {:class (str "zmdi zmdi-hc-fw-rc zmdi-minus")}]]
        [:button.calculator__number
         {:on-click #(do
                       (re-frame/dispatch [::events/change-dish-count-in-receipt nil @custom-count])
                       (reset! custom-count ""))}
         [:i {:class (str "zmdi zmdi-hc-fw-rc zmdi-refresh")}]]]])))

(defn dish
  []
  (let [short-name (re-frame/subscribe [::subs/active-dish-short-name])]
    (fn []
      [:div#product-wrapper
       [re-com/v-box :gap "20px"
        :align :center
        :children [[:div.header.header_dish
                    [re-com/md-icon-button :md-icon-name "zmdi-chevron-left"
                     :size :larger
                     :class "header__back-button"
                     :on-click #(re-frame/dispatch [::events/dish-back-hn])]
                    [:h2.header__text {:on-click #(re-frame/dispatch [::common-events/set-slide-window true :dish-desc])} @short-name]]
                   [numbers-dish-comp]
                   [modificators-input-component]]]])))
