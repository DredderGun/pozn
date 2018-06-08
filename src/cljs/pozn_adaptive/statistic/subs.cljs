(ns pozn-adaptive.statistic.subs
  (:require [re-frame.core :as re-frame]))

(re-frame/reg-sub
  ::get-statistic
  (fn [db _]
    (:statistic db)))
