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

(re-frame/reg-event-db
 ::initialize-db
 [] ; (check-spec ::pa-spec/db) позже сделать валидацию через spec
 (fn  [_ _]
   db/default-db))

(defn set-layout-interceptor
  [layout]
  (re-frame/->interceptor
    :id :set-layout
    :after (fn [context]
             (assoc-in context [:effects :db :layout] layout))))

;(def cancel-dish
;  (re-frame/->interceptor
;    :id :cancel-dish
;    :before (fn [{{:keys [db]} :coeffects :as context}]
;              (.log js/console "editing?" (:editing db))
;              (if (:editing db)
;                context
;                (assoc-in context [:effects :event] ::dish-ev/cancel-added-dish)))))

(re-frame/reg-event-db
  ::activate-receipt
  [re-frame/trim-v]
  (fn [db [rec_id]]
    (assoc db :active-receipt rec_id)))

(re-frame/reg-event-fx
  ::change-active-dish-count-and-add-to-receipt
  []
  (fn [{:keys [db] :as cofx} [_ count_d]]
    (-> (update-in cofx [:db :sale-receipts (:active-receipt db)
                         :guests (:active-guest db) :dishes]
               (fn [dishes]
                 (mapv (fn [dish]
                        (if (= (:id dish) (:active-dish-in-receipt db))
                          (assoc dish :count count_d)
                          dish))
                      dishes)))
        (assoc :dispatch [::recalculate-sum-price]))))

(re-frame/reg-event-db
  ::modal
  [re-frame/trim-v]
  (fn [db [data]]
    (assoc db :modal-windows data)))

(re-frame/reg-event-db
  ::set-window-width
  [re-frame/trim-v]
  (fn [db [width]]
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
        (assoc-in [:active-items :temporary-dish] nil))))
