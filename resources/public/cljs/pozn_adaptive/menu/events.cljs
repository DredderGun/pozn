(ns pozn-adaptive.menu.events
  (:require [re-frame.core :as re-frame]
            [pozn-adaptive.receipt.events :as receipt-events]))

(re-frame/reg-event-db
  ::change-layout
  [re-frame/trim-v]
  (fn [db [layout_key]]
    (if (= layout_key :new-sale-receipt)
      (-> (assoc db :layout layout_key)
          (assoc :old-dish? false))
      (assoc db :layout layout_key))))

(re-frame/reg-event-db
  ::set-search-query
  [re-frame/trim-v]
  (fn [db [search-query]]
    (assoc db :dish-search-query search-query)))

(re-frame/reg-event-db
  ::edit-new-dish
  []
  (fn [{:keys [active-items] :as db} [_ dish_map]]
    (-> (assoc-in db [:active-items :temporary-dish] (merge dish_map {:count 0}))
        (assoc :slide-template {:show? true
                                :template :dish}))))

(re-frame/reg-event-fx
  ::add-new-dish-fast ; todo изменить хэндлер, так для другого количества работает другая схема
  []
  (fn [{:keys [db] :as cofx} [_ dish_map fast-add?]]
    (let [active-items (:active-items db)
          new-dish-id (-> (get-in db [:sale-receipts
                                      (:active-receipt active-items)
                                      :guests
                                      (:active-guest active-items)
                                      :dishes])
                           (last)
                           :receipt-id
                           inc)
          ; решил записывать сразу всю информацию о блюде в :active-items,
          ; а не дробить по частям. Так у удобней, так как информация вытаскивается
          ; теперь из одного места
          new-dish-map (merge dish_map {:receipt-id new-dish-id
                                        :guest-id (:active-guest active-items)
                                        :count (if fast-add? 1 nil)
                                        :modificators {}
                                        :selected? false})
          fast-add-handler (fn [updated-fx]
                             (if fast-add?
                               (assoc updated-fx :dispatch [::receipt-events/recalculate-sum-price])
                               (assoc updated-fx :dispatch [::activate-menu-item (:id dish_map) new-dish-map])))]
      (if (:active-guest active-items) ; todo если такого гостя не существует, то можно выкинуть ошибку
        (-> (update-in cofx [:db
                             :sale-receipts
                             (:active-receipt active-items)
                             :guests
                             (:active-guest active-items)
                             :dishes] (fn [active-guest-dishes-vec]
                                        (->> (conj active-guest-dishes-vec new-dish-map)
                                             (sort #(compare (:receipt-id %1) (:receipt-id %2)))
                                             (into []))))
            (fast-add-handler))
        cofx))))

(re-frame/reg-event-db
  ::activate-menu-item
  [re-frame/trim-v]
  (fn [db [menu-item-id new-dish-id]]
    (-> (assoc-in db [:active-items :active-dish-in-receipt] new-dish-id)
        (assoc :slide-template {:show? true
                                :template :dish}))))