(ns test.runner
  (:require [doo.runner :refer-macros [doo-all-tests doo-tests]]
            [test.guests-test]
            [test.search-dish]
            [test.modificators-test]
            [test.add-new-dish-test]))

(doo-tests 'test.add-new-dish-test
           'test.guests-test
           'test.search-dish
           'test.modificators-test)
