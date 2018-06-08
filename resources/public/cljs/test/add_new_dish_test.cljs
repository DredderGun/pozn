(ns test.add-new-dish-test
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
     :sale-receipts {}
     :select-mod false
     :active-receipt 1
     :active-dish-in-receipt nil
     :active-guest 1
     :menu-items [{:id 3824 :full_name " Вареники с творогом "
                   :short_name " Вареники с творогом " :price 110
                   :weight "180/50" :c_time "20"
                   :serving_order4 "2" :serving_order3 "2"
                   :fractional "Нет" :group "Хиты"
                   :tags "" :description "Фирменные отварные вареники ручной лепки с творогом. Подаются со сметаной."
                   :ings "" }
                  {:id 3843 :full_name " Колбаски по-домашнему "
                   :short_name " Колбаски \"По-домашнему\" " :price 150
                   :weight "150/50/10" :c_time "25"
                   :serving_order4 "3" :serving_order3 "3"
                   :fractional "Нет" :group "Горячее"
                   :tags "" :description "Жареные колбаски ручного приготовления из говядины и свинины с приправами."
                   :ings "Говядина,свинина,сало,чеснок,соль,перец чёрный молотый. (оболочка натуральная-черева) Соус: сметана,майонез,,сладкий перец,соль. Украшение: лист салата." }]
     :active-menu-item 1
     :tables-view 0}))

(deftest dishtest
  (rf-test/run-test-sync
    (re-frame/dispatch [::initialize-test-db])
    (let [active-guest-map (re-frame/subscribe [::subs/active-guest-map])
          old-dish? (re-frame/subscribe [::subs/old-dish?])
          active-menu-item (re-frame/subscribe [::subs/active-menu-item])
          active-receipt (re-frame/subscribe [::subs/active-receipt])
          active-dish-count-and-price (re-frame/subscribe [::subs/active-dish-count-and-price])]
      (re-frame/dispatch [::events/add-new-receipt 1 1])
      (re-frame/dispatch [::events/add-new-dish {:id 3824 :full_name " Вареники с творогом "
                                                 :short_name " Вареники с творогом " :price 110
                                                 :weight "180/50" :c_time "20"
                                                 :serving_order4 "2" :serving_order3 "2"
                                                 :fractional "Нет" :group "Хиты"
                                                 :tags "" :description "Фирменные отварные вареники ручной лепки с творогом. Подаются со сметаной."
                                                 :ings "" }])
      (re-frame/dispatch [::events/change-dish-count-in-receipt 5])
      (is (= @old-dish? false))
      (is (= 1 (:id (first (:dishes @active-guest-map)))))
      (is (= 3824 (:menu-item-id (first (:dishes @active-guest-map)))))
      (is (= 5 (:count (first (:dishes @active-guest-map)))))

      (re-frame/dispatch [::events/set-old-dish 3824 1 1])
      (is (= @old-dish? true))
      (is (= (:id @active-menu-item) 3824))
      (is (= (:id @active-receipt) 1))

      (re-frame/dispatch [::events/change-dish-count-in-receipt 2])
      (is (= 2 (:count (first (:dishes @active-guest-map)))))
      (is (= (:sum-price @active-dish-count-and-price) 220)))))
