(ns pozn-adaptive.core
  (:require [reagent.core :as reagent]
            [re-frame.core :as re-frame]
            [pozn-adaptive.events :as events]
            ;[pozn-adaptive.routes :as routes]
            [pozn-adaptive.main :as views]
            [pozn-adaptive.config :as config]))


(defn dev-setup []
  (when config/debug?
    (enable-console-print!)
    (println "dev mode")))

(defn mount-root []
  (re-frame/clear-subscription-cache!)
  (reagent/render [views/main-panel]
                  (.getElementById js/document "app"))
  (.addEventListener js/window "resize" #(re-frame/dispatch [::events/set-window-width (.-innerWidth js/window)])))

(defn ^:export init []
  ;(routes/app-routes)
  (re-frame/dispatch-sync [::events/initialize-db])
  (dev-setup)
  (mount-root))
