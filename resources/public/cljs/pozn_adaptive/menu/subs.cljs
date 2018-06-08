(ns pozn-adaptive.menu.subs
  (:require [re-frame.core :as re-frame]
            [clojure.string :as s]))

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
        (filter #(filter-row (:dish-search-query db) (:short_name %)) (:menu-items db))))))