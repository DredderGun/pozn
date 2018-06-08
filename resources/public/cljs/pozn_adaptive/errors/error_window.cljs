(ns pozn-adaptive.errors.error-window
  (:require [re-frame.core :as re-frame]
            [pozn-adaptive.errors.subs :as subs]))

(defn error-window
  []
  (let [error (re-frame/subscribe [::subs/error])]
    (when (:msg error)
      [:div.error-window.alert.alert-danger {:role "alert"}
         [:button.close {:type "button"
                         :data-dismiss "alert"
                         :aria-label "Close"}
          [:span {:aria-hidden "true"}]
          "X"]
         [:strong "Ошибка!"]
          (str " " (:msg error))])))

