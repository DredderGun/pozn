(ns pozn-adaptive.receipt.view
  (:require [re-frame.core :as re-frame]
            [re-com.core :as re-com]
            [pozn-adaptive.receipt.events :as events]
            [pozn-adaptive.receipt.subs :as subs]
            [pozn-adaptive.modal-windows.window :refer [sandwich-menu]]
            [pozn-adaptive.events :as common-events]
            [pozn-adaptive.menu.view :as menu-view]
            [pozn-adaptive.dish.view :as dish]
            [pozn-adaptive.dish.desc-view :as desc-view]))

(defn process-guest-modal
  [guest-id]
  [:div {:class "more-menu"}
   [:div.modal-window
    [:h2 {:style {:text-align "center"}} (str "Гость " guest-id)]
    [:div.modal-window-panel-item {:on-click #(re-frame/dispatch [::events/delete-the-guest guest-id])} "Удалить"]
    [:div.modal-window-panel-item {:on-click #(.log js/console "В отдельный чек")} "В отдельный чек"]
    [:div.modal-window-panel-item {:on-click #(.log js/console "Предчек")} "Предчек"]]])

(defn more-menu
  []
  [:div {:class "more-menu"}
   [:div.modal-window
    [:div.modal-window-panel-item {:on-click #(re-frame/dispatch [::events/delete-selected-dishes])} "Удалить"]
    ;[:div.modal-window-panel-item {:on-click #(re-frame/dispatch [::events/replace-dishes-to-new-receipt])} "В отдельный чек"]
    ;[:div.modal-window-panel-item {:on-click #(re-frame/dispatch [::events/guests-to-different-receipt])} "Гостей по разным чекам"]
    ]])

(defn dates-modal-window
  []
  (let [active-receipts-dates (re-frame/subscribe [::subs/active-receipt-dates])
        id (re-frame/subscribe [::subs/active-receipt-id])]
    (fn []
      [:div.modal-window
       [:div.modal-window-panel-item (str "Чек № " @id)]
       [:div.modal-window-panel-item (str "Время создания чека " (:origin @active-receipts-dates))]
       [:div.modal-window-panel-item (str "Время отправки чека " (:send @active-receipts-dates))]
       [:div.modal-window-panel-item (str "Время оплаты чека " (:pay @active-receipts-dates))]])))

(defn receipt-modal-window
  []
  [:div.modal-window.sandwich-panel
   [:div {:class "modal-window-panel-item"
          :on-click #(re-frame/dispatch [::common-events/modal {:show? true
                                                                :child [dates-modal-window]
                                                                :size :small}])} "Инфо"]
   [:div {:class "modal-window-panel-item"
          :on-click #(re-frame/dispatch [::events/quite-to-list])} "К списку чеков"]])

(defn swipe-button-component
  [guest-id]
  (let [specified-guest-sum (re-frame/subscribe [::subs/specified-guest-sum guest-id])
        active-guest? (re-frame/subscribe [::subs/active-guest? guest-id])
        current-x (re-frame/subscribe [::subs/current-position guest-id])
        swipe-transition? (re-frame/subscribe [::subs/swipe-transition? guest-id])]
    (fn [guest-id]
      [re-com/h-box :class "guest-group-button form-group has-success has-feedback"
       :children [[:div.delete-guest-button
                   [re-com/md-icon-button :md-icon-name "zmdi-more"
                    :size :larger
                    :class "button-receipt delete-button-receipt"
                    :on-click #(re-frame/dispatch [::common-events/modal {:show? true
                                                                          :child [process-guest-modal guest-id]
                                                                          :size :small}])]
                   [re-com/md-icon-button :md-icon-name "zmdi-mail-send"
                    :size :larger
                    :class "button-receipt mail-send-button-receipt"
                    :on-click #(re-frame/dispatch [::events/send-receipt])]
                   [re-com/md-icon-button :md-icon-name "zmdi-card"
                    :size :larger
                    :class "button-receipt card-button-receipt"
                    :on-click #(re-frame/dispatch [::events/change-layout :pay])]]
                  [:button.guest-button.btn.btn-primary
                   {:on-click #(re-frame/dispatch [::events/activate-guest guest-id])
                    :style {:position :relative
                            :transform (str "translate(" @current-x "px)")
                            :transition (when @swipe-transition? "transform 200ms")}
                    :on-touch-start
                              #(re-frame/dispatch [::events/start-coord (aget % "touches" 0 "pageX") guest-id])
                    :on-touch-move
                              #(re-frame/dispatch [::events/swipe-element (aget % "touches" 0 "pageX")])
                    :on-touch-end #(re-frame/dispatch [::events/end-move])
                    :on-transition-end #(re-frame/dispatch [::events/transition-end])}
                   (str "Гость " guest-id) (when @active-guest? [:span.active-guest-dot])]
                  [:span.guest-price-label.input-group-addon
                   {:on-click #(if @active-guest?
                                 (re-frame/dispatch [::events/slide-button])
                                 (re-frame/dispatch [::events/activate-guest guest-id]))} ; todo можно объединить в один хэндлер
                   @specified-guest-sum]]])))

(defn dish-row-comp
  [dish]
  (let [trunc (fn [s n]
                (if (> (count s) n)
                  (str (subs s 0 n) " ... ")
                  s))]
    (fn [{:keys [guest-id receipt-id short_name count modificators selected?] :as dish}]
      [:tr
       [:td
        {:class (when selected? "selected-dish")}
        [:div.left-area-receipt-row
         {:on-click #(re-frame/dispatch [::events/select-dish-in-receipt guest-id receipt-id])}]
        [:div.right-area-receipt-row
         {:on-click #(re-frame/dispatch [::events/set-old-dish dish guest-id])}]
        [:div.dish-text
         [:p.name (str (trunc short_name 27) "(" count ")")]
         (when (not (empty? modificators))
           (into [:ul] (for [[id {:keys [message]}] modificators]
                         ^{:key id} [:li message])))]]])))

(defn guest-component
  [guest-id]
  (let [specified-guest (re-frame/subscribe [::subs/specified-guest guest-id])]
    (fn [guest-id]
      [re-com/v-box :children
       [[swipe-button-component guest-id]
        [:table.new-receipt-table
         (into [:tbody] (for [dish (:dishes @specified-guest)]
                          ^{:key (:receipt-id dish)}
                          [dish-row-comp dish]))]]])))

(defn order-list-component
  []
  (let [active-receipts-guests-ids (re-frame/subscribe [::subs/active-receipts-guests-ids])]
    (fn []
      [:div.order-list
       (for [guest-id @active-receipts-guests-ids]
         ^{:key guest-id} [guest-component guest-id])])))

(defn slide-panel
  []
  (let [left-position-template (re-frame/subscribe [::subs/position-slide-panel])
        menu-panel-width (re-frame/subscribe [::subs/menu-panel-width])
        slide-panel-template (re-frame/subscribe [::subs/slide-panel-template])
        handle-bubbled-event (fn [e]
                               (if (= (.-currentTarget e) (.-target e))
                                 (re-frame/dispatch [::common-events/close-slide-window])
                                 false))]
    (fn []
      [:div#menu-backdrop
       {:style {:transform (str "translate(" @left-position-template "px)")}
        :on-click #(handle-bubbled-event %)}
       [:div#slide-panel
        {:style {:width @menu-panel-width}}
        (case @slide-panel-template
          :menu [menu-view/menu-view]
          :dish [dish/dish]
          :dish-desc [desc-view/desc-view]
          [:h1 "Нет шаблона"])]])))

(defn new-sale-receipt
  []
  (let [active-receipt (re-frame/subscribe [::subs/active-receipt])
        receipt-status-text (re-frame/subscribe [::subs/receipt-status-text])
        top-bar-table-text (re-frame/subscribe [::subs/top-bar-table-text])]
    (fn []
      [re-com/v-box
       :class "new-sale-receipt"
       :style {:pointer-events (if (:paid? @active-receipt)
                                 "none"
                                 "auto")}
       :children
       [[:div.chevron-wrapper
         {:style {:margin-bottom 0
                  :pointer-events "auto"}}
         (when (and (not (:paid? @active-receipt))
                    (not (:sent? @active-receipt)))
           [re-com/md-icon-button :md-icon-name "zmdi-mail-send"
            :size :larger
            :class "button-receipt mail-send-button-receipt"
            :on-click #(re-frame/dispatch [::events/send-receipt])])
         (when (not (:paid? @active-receipt))
           [re-com/md-icon-button :md-icon-name "zmdi-card"
            :size :larger
            :style {:width "5%"}
            :class "button-receipt card-button-receipt"
            :on-click #(re-frame/dispatch [::events/change-layout :pay])])
         [:h3.receipt-sum-label
          {:on-click #(re-frame/dispatch [::events/edit-table])}
          (str (:sum @active-receipt) " р")]
         [:h3
          {:on-click #(re-frame/dispatch [::events/edit-table])}
          @top-bar-table-text]
         [sandwich-menu #(re-frame/dispatch [::common-events/modal {:show? true
                                                                    :child [receipt-modal-window]
                                                                    :size :small}])]]
        [:h1 {:style {:text-align "center"
                      :display (when (not (or (:paid? @active-receipt)
                                              (:sent? @active-receipt))) "none")}} @receipt-status-text]
        [:div.receipt-content-wrapper
         [order-list-component]
         (when (not (:paid? @active-receipt))
           [:button.fixed-buttons.selected-dishes
            {:on-click #(re-frame/dispatch [::common-events/modal {:show? true
                                                                   :child [more-menu]
                                                                   :size :small}])}
            [re-com/md-icon-button
             :md-icon-name "zmdi-check"
             :size :larger]])
         (when (not (:paid? @active-receipt))
           [:button.fixed-buttons.add-guest
            {:on-click #(re-frame/dispatch [::events/add-new-guest])}
            "Г+"])
         (when (not (:paid? @active-receipt))
           [:button.fixed-buttons.add-dish
            {:on-click #(re-frame/dispatch [::common-events/set-slide-window true :menu])}
            "Б+"])]
        [slide-panel]]])))