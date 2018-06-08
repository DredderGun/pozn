(ns pozn-adaptive.spec
  (:require [cljs.spec.alpha :as s]))

(s/def ::id int?)
(s/def ::layout keyword?)
(s/def ::select-mod boolean?)
(s/def ::active-receipt int?)
(s/def ::active-guest int?)
(s/def ::active-menu-item int?)
(s/def ::tables-view int?)
(s/def ::modal-windows map?)
(s/def ::price int?)
(s/def ::menu-item-id int?)
(s/def ::guest-id int?)
(s/def ::selected? boolean?)
(s/def ::paid? boolean?)
(s/def ::sent? boolean?)
(s/def ::count int?)
(s/def ::swipe-started boolean?)

(s/def ::dates #{:origin :pay :send})
(s/def ::short_name (s/or :name-str string? :empty-str clojure.string/blank?))
(s/def ::statistic (s/keys :req-un [::sold-dishes-count ::common-sum ::card-sum
                                    ::cash-sum ::cash-sum ::paid-receipt-count
                                    ::unpaid-receipt-count]))
(s/def ::modificators-to-new-receipt (s/keys :req-un [::w_oil ::w_salt ::warm ::w_onion ::w_garnish]))
(s/def ::table-areas #(every? (fn [el-map] (and (:id el-map)
                                                (:tables el-map))) %))
(s/def ::active-table (s/coll-of number? :kind vector? :count 2))
(s/def ::menu-items (s/coll-of (s/keys :req-un [::id ::short_name ::price]
                                       :opt-un [::description
                                                ::tags
                                                ::ings
                                                ::group
                                                ::c_time
                                                ::weight
                                                ::fractional
                                                ::serving_order3
                                                ::serving_order4
                                                ::full_name])
                               :kind vector?))
(s/def ::dishes (s/or
                  :empty-vector (s/and vector? empty?)
                  :dish-vector  (s/coll-of (s/keys :req-un [::id ::guest-id
                                                            ::menu-item-id ::name
                                                            ::price ::selected?]
                                                   :opt-un [::count])
                                           :kind vector?)))
(s/def ::guest (s/keys :req-un [::id ::dishes ::swipe-started]))
(s/def ::guests (s/map-of int? ::guest))
(s/def ::table (s/coll-of number? :kind vector?))
(s/def ::sale-receipts (s/or
                         :empty-map? (s/and map? empty?)
                         :req-parameters (s/map-of int? (s/keys :req-un [::id
                                                                         ::guests]))))
(s/def ::sale-receipts-in-db (s/keys :req-un [::sale-receipts]))
(s/def ::db (s/keys :req-un [::layout
                             ::select-mod ::active-receipt
                             ::active-guest ::active-menu-item
                             ::tables-view ::modal-windows
                             ::table-areas ::active-table
                             ::modificators-to-new-receipt
                             ::menu-items
                             ::sale-receipts
                             ::statistic]
                    :opt-un [::phone ::statistic]))