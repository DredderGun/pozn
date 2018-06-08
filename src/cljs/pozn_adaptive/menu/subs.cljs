(ns pozn-adaptive.menu.subs
  (:require [re-frame.core :as re-frame]
            [clojure.string :as s]))

(re-frame/reg-sub
  ::active-items
  (fn [db _]
    (:active-items db)))

(re-frame/reg-sub
  ::search-query
  (fn [db _]
    (:dish-search-query db)))

(re-frame/reg-sub
  ::filtered-dishes
  (fn [db _]
    (let [filter-tokens (fn [filter-str] (-> filter-str
                                             (s/split #"\s+")
                                             (->>
                                               (remove empty?))))
          filter-row (fn [dish-search-query dish-name] (every? identity
                                                               (for [filter (filter-tokens dish-search-query)]
                                                                 (s/index-of (s/upper-case (str dish-name)) (s/upper-case (str filter))))))]
      (if (= (s/trim (:dish-search-query db)) "")
        (:menu-items db)
        (map (fn [{:keys [group list]}]
                  (let [filtered-by-query (into []
                                                (filter #(filter-row (:dish-search-query db) (:full_name %)) list))]
                    (if (empty? filtered-by-query)
                      nil
                      {:group group
                       :list filtered-by-query})))
                (:menu-items db))))))

(re-frame/reg-sub
  ::active-group
  :<- [::active-items]
  (fn [active-items]
    (:active-group active-items)))

(re-frame/reg-sub
  ::active-dish-id
  :<- [::active-items]
  (fn [active-items]
    (-> active-items
        :active-dish-in-receipt
        :id)))

(re-frame/reg-sub
  ::menu-items
  (fn [db _]
    (:menu-items db)))

(re-frame/reg-sub
  ::group-dish
  :<- [::active-group]
  :<- [::menu-items]
  (fn [[active-group menu-items]]
    (some #(when (= active-group (:id %)) %) menu-items)))