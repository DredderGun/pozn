(ns pozn-adaptive.modal-windows.window
  (:require [re-frame.core :as re-frame]
            [pozn-adaptive.subs :as common-subs]
            [pozn-adaptive.events :as common-events]))

;(defn modal-are-you-sure
;  []
;  (reagent/with-let [are-you-sure-window-is-open? (re-frame/subscribe [::subs/modal-window :are-you-sure])]
;                    (when (:en? @are-you-sure-window-is-open?)
;                      [re-com/v-box :class "modal-window modal-are-you-sure"
;                       :align :center
;                       :justify :around
;                       :children [[:div.modal-window-panel-item "Вы уверены, что хотите переместить отмеченные позиции в отдельный чек?"]
;                                  [re-com/v-box  :class "modal-are-you-sure-buttons"
;                                   :justify :center
;                                   :gap "20px"
;                                   :width "80%"
;                                   :children [[re-com/button :label "Да" :style {:width "100%"}
;                                               :on-click #(if (:guests-to-different-receipt? @are-you-sure-window-is-open?)
;                                                            (re-frame/dispatch [::events/guests-to-different-receipt])
;                                                            (re-frame/dispatch [::events/replace-dishes-to-new-receipt]))]
;                                              [re-com/button :label "Нет"
;                                               :style {:width "100%"}
;                                               :on-click #(re-frame/dispatch [::events/toggle-modal-window :are-you-sure {:en? false
;                                                                                                                          :guests-to-different-receipt? false}])]]]]])))

(defn sandwich-menu
  [dispatch-fn]
  (let [clicked-on-sandwich-button? (re-frame/subscribe [::common-subs/modal])]
    (fn []
      [:div {:class (str "sandwich-menu " (when (:show? @clicked-on-sandwich-button?) "sandwich-menu_change"))
             :on-click #(dispatch-fn)}
       [:div.sandwich-panel__bar.sandwich-panel__bar1]
       [:div.sandwich-panel__bar.sandwich-panel__bar2]
       [:div.sandwich-panel__bar.sandwich-panel__bar3]])))

(defn modal-panel
  [{:keys [child show?]}]
  [:div.modal-wrapper
   [:div.modal-wrapper__modal-backdrop
    {:on-click (fn [event]
                      (do
                        (re-frame/dispatch [::common-events/modal {:show? (not show?)
                                                                   :child nil
                                                                   :size :default}])
                        (.preventDefault event)
                        (.stopPropagation event)))}]
   [:div.modal-wrapper__modal-child child]])

(defn modal []
  (let [modal (re-frame/subscribe [::common-subs/modal])]
    (fn []
      [:div
       (if (:show? @modal)
         [modal-panel @modal])])))