(ns pozn-adaptive.events
  (:require [cljs.reader :refer [read-string]]
            [re-frame.core :as re-frame]
            [pozn-adaptive.db :as db]
            [cljs.spec.alpha :as s]
            [pozn-adaptive.spec :as pa-spec]))

(defn check-and-throw
  [a-spec db]
  (when-not (s/valid? a-spec db)
    (throw (ex-info (str "spec check failed: " (s/explain-str a-spec db)) {}))))

(defn check-spec
  [check-keyword]
  (re-frame/after (partial check-and-throw check-keyword)))

(def sale-receipts-interceptors (re-frame/after db/sale-receipts->local-store))
(def flush-store (re-frame/after db/flush-local-store))

(re-frame/reg-event-db
  ::flush-store
  [flush-store]
  (fn [db _]
    (assoc db :sale-receipts {}
              :modal-windows {:show? false
                              :child nil})))

(re-frame/reg-event-fx
 ::initialize-db
 [(re-frame/inject-cofx ::db/local-store-sale-receipts "defaults-key")] ; (check-spec ::pa-spec/db) позже сделать валидацию через spec
 (fn [{:keys [sale-receipts] :as cofx} _]
   {:db (assoc db/default-db :sale-receipts sale-receipts)}))

(defn set-layout-interceptor
  [layout]
  (re-frame/->interceptor
    :id :set-layout
    :after (fn [context]
             (assoc-in context [:effects :db :layout] layout))))

(re-frame/reg-event-db
  ::modal
  [re-frame/trim-v]
  (fn [db [data]]
    (assoc db :modal-windows data)))

(re-frame/reg-event-db
  ::set-window-width
  [re-frame/trim-v]
  (fn [db [width]]
    (.log js/console "set-window-width" width)
    (assoc db :window-width width)))

(re-frame/reg-event-db
  ::set-slide-window
  [re-frame/trim-v]
  (fn [db [show? template]]
    (-> (assoc db :slide-template {:show? show?
                                   :template template})
        (assoc :dish-search-query ""))))

(re-frame/reg-event-db
  ::close-slide-window
  [re-frame/trim-v]
  (fn [db _]
    (-> (update db :slide-template merge {:show? false})
        (assoc :editing false)
        (assoc :dish-search-query "")
        (assoc-in [:active-items :active-group] nil))))
