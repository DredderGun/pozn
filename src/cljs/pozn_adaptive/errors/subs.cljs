(ns pozn-adaptive.errors.subs
  (:require [re-frame.core :as re-frame]))

(re-frame/reg-sub
  ::error
  (fn [db _]
    (:error db)))
