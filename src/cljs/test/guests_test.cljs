(ns test.guests-test
  (:require [cljs.test :refer-macros [deftest is are]]
            [day8.re-frame.test :as rf-test]
            [re-frame.core :as re-frame]
            [pozn-adaptive.events :as events]
            [pozn-adaptive.subs :as subs]))

(re-frame/reg-event-db
  ::initialize-test-db
  (fn  [_ _]
    {:layout :sale-receipts-layout
     :table-areas [{:id 1 :label "Зона 1" :tables (into [] (range 1 14))}
                   {:id 2 :label "Зона 2" :tables (into [] (range 1 6))}
                   {:id 3 :label "Зона 3" :tables (into [] (range 1 8))}
                   {:id 4 :label "Зона 4" :tables (into [] (range 1 3))}]
     :active-table [1 1]
     :sale-receipts {1 {:id 1
                        :guests {1 {:id 1 :dishes [{:id 1 :guest-id 1 :menu-item-id 1 :name "Поза рубленная" :count 3 :selected? false :price 122}]}}
                        :table [1 1]
                        :payment {:cash 732
                                  :card 0}
                        :sum_price 732
                        :paid? false
                        :sent? true
                        :dates {:origin nil
                                :send nil
                                :pay nil}}}
     :select-mod false
     :active-receipt 1
     :active-dish-in-receipt nil
     :active-guest 1
     :menu-items [{:id 1 :short_name "Поза рубленная" :price 122}
                  {:id 2 :short_name "Чебурек" :price 122}
                  {:id 3 :short_name "Салат cтоличный" :price 122}
                  {:id 4 :short_name "Биф строганов" :price 122}]
     :active-menu-item 1
     :tables-view 0}))

(deftest test-guests
  (rf-test/run-test-sync
    (re-frame/dispatch [::initialize-test-db])

    (let [active-guest-map (re-frame/subscribe [::subs/active-guest-map])
          all-guests (re-frame/subscribe [::subs/give-all-guests])
          sale-receipts (re-frame/subscribe [::subs/sale-receipts])
          active-receipt (re-frame/subscribe [::subs/active-receipt])
          active-receipt-sum-and-payment (re-frame/subscribe [::subs/active-receipt-sum-and-payment])]
      (re-frame/dispatch [::events/add-new-guest])
      (is (= 2 (last (keys @all-guests))))
      (is (= {:id 2 :dishes []} (last (vals @all-guests))))

      ; новое блюдо добавляется к активному гостю (т.е. к последнему добавленному гостю)
      (re-frame/dispatch [::events/add-new-dish {:id 4 :short_name "Биф строганов" :price 122}])
      (re-frame/dispatch [::events/change-dish-count-in-receipt 4])
      (is (= 1 (:id (first (:dishes @active-guest-map)))))
      (is (= 4 (:menu-item-id (first (:dishes @active-guest-map)))))
      (is (= "Биф строганов" (:name (first (:dishes @active-guest-map)))))

      (re-frame/dispatch [::events/activate-guest 1])
      (is (= 1 (:id @active-guest-map)))

      (re-frame/dispatch [::events/add-new-guest])
      (is (= 3 (:id @active-guest-map)))

      (re-frame/dispatch [::events/add-new-dish {:id 6 :name "Шницель" :price 122}])
      (re-frame/dispatch [::events/change-dish-count-in-receipt 2])
      (re-frame/dispatch [::events/add-new-dish {:id 8 :name "Салат Цезарь" :price 122}])
      (re-frame/dispatch [::events/change-dish-count-in-receipt 1])
      (is (= 1 (:id (first (:dishes @active-guest-map)))))
      (is (= 2 (:id (second (:dishes @active-guest-map)))))
      (is (= 6 (:menu-item-id (first (:dishes @active-guest-map)))))
      (is (= 8 (:menu-item-id (second (:dishes @active-guest-map)))))
      (is (= 3 (:guest-id (first (:dishes @active-guest-map)))))
      (is (= 3 (:guest-id (second (:dishes @active-guest-map)))))

      ; удалили все блюда гостя, соответственно этот гость должен удалиться и айдишники
      ; должны пересчитаться заново
      (re-frame/dispatch [::events/select-all-dish-one-guest 1])
      (re-frame/dispatch [::events/delete-selected-dishes])
      (is (= 1 (first (keys @all-guests))))
      (is (= 2 (second (keys @all-guests))))
      (is (= 2 (count @active-guest-map)))

      (re-frame/dispatch [::events/add-new-guest])
      (is (= 3 (:id @active-guest-map)))
      (re-frame/dispatch [::events/add-new-dish {:id 2 :name "Чебурек" :price 122}])
      (re-frame/dispatch [::events/change-dish-count-in-receipt 1])
      (re-frame/dispatch [::events/add-new-dish {:id 3 :name "Салат cтоличный" :price 122}])
      (re-frame/dispatch [::events/change-dish-count-in-receipt 2])
      (is (= 2 (count (:dishes @active-guest-map))))
      (is (= 2 (:menu-item-id (first (:dishes @active-guest-map)))))
      (is (= 3 (:menu-item-id (second (:dishes @active-guest-map)))))

      ; выделили в чеке по одному блюду каждого гостя. Поэтому в новый чек должны перенестись все гости
      (re-frame/dispatch [::events/select-dish-in-receipt 1 1 true])
      (re-frame/dispatch [::events/select-dish-in-receipt 2 1 true])
      (re-frame/dispatch [::events/select-dish-in-receipt 3 2 true])
      (re-frame/dispatch [::events/replace-dishes-to-new-receipt])

      ; мы перенесли выделенные блюда в новый чек. Надо теперь проверить, что этот чек активировался
      (is (= 2 (count @sale-receipts)))
      (is (= 3 (count (:guests @active-receipt))))
      (is (= 1 (:id @active-guest-map)))
      ; все 3 гостя должны были перенестись
      (is (= 4 (:menu-item-id (first (:dishes (get @all-guests 1))))))
      (is (= 1 (:guest-id (first (:dishes (get @all-guests 1))))))
      (is (= 6 (:menu-item-id (first (:dishes (get @all-guests 2))))))
      (is (= 2 (:guest-id (first (:dishes (get @all-guests 2))))))
      (is (= 3 (:menu-item-id (first (:dishes (get @all-guests 3))))))
      (is (= 3 (:guest-id (first (:dishes (get @all-guests 3))))))
      ; правильно ли перенеслись суммы
      (is (= 488 @(re-frame/subscribe [::subs/give-sum-of-specified-guest (:id (get @all-guests 1))])))
      (is (= 244 @(re-frame/subscribe [::subs/give-sum-of-specified-guest (:id (get @all-guests 2))])))
      (is (= 244 @(re-frame/subscribe [::subs/give-sum-of-specified-guest (:id (get @all-guests 3))])))

      (is (= 976 (:sum-price @active-receipt-sum-and-payment))))))
