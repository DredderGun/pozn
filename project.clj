(defproject pozn-adaptive "0.1.0-SNAPSHOT"
  :dependencies [[org.clojure/clojure "1.8.0"]
                 [org.clojure/clojurescript "1.9.908"]
                 [reagent "0.7.0"]
                 [re-frame "0.10.2"]
                 [com.andrewmcveigh/cljs-time "0.5.0"]
                 [org.clojure/core.async "0.2.391"]
                 [re-com "2.1.0"]
                 [secretary "1.2.3"]
                 [garden "1.3.2"]
                 [ns-tracker "0.3.0"]
                 [compojure "1.5.0"]
                 [yogthos/config "0.8"]
                 [com.andrewmcveigh/cljs-time "0.5.2"]
                 [ring "1.4.0"]
                 [lein-doo "0.1.8"]
                 [binaryage/devtools "0.9.9"]
                 [day8.re-frame/test "0.1.5"]]

  :plugins [[lein-cljsbuild "1.1.5"]
            [lein-garden "0.2.8"]
            [lein-doo "0.1.8"]]

  :min-lein-version "2.5.3"

  :source-paths ["src/clj"]

  :clean-targets ^{:protect false} ["resources/public/js/compiled" "target"
                                    "resources/public/css"]

  :figwheel {:css-dirs ["resources/public/css"]
             :ring-handler pozn-adaptive.handler/dev-handler}

  :garden {:builds [{:id           "screen"
                     :source-paths ["src/clj"]
                     :stylesheet   pozn-adaptive.styles.core/pozn-styles
                     :compiler     {:output-to "resources/public/css/pozn-styles.css"
                                    :vendors ["webkit"]
                                    :auto-prefix #{:border-radius :transform :animation :flex}
                                    :pretty-print? true}}]}

  :aliases {"dev" ["do" "clean"
                        ["pdo" ["figwheel" "dev"]
                               ["garden" "auto"]]]
            "build" ["do" "clean"
                          ["cljsbuild" "once" "min"]
                          ["garden" "once"]]}

  :profiles
  {:dev
   {:dependencies [[binaryage/devtools "0.9.4"]
                   [day8.re-frame/trace "0.1.14"]
                   [re-frisk "0.5.3"]]

    :plugins      [[lein-figwheel "0.5.13"]
                   [lein-pdo "0.1.1"]]}}
  :cljsbuild
  {:builds
   [{:id           "dev"
     :source-paths ["src/cljs"]
     :figwheel     {:on-jsload "pozn-adaptive.core/mount-root"}
     :compiler     {:main                 pozn-adaptive.core
                    :output-to            "resources/public/js/compiled/app.js"
                    :output-dir           "resources/public/js/compiled/out"
                    :asset-path           "js/compiled/out"
                    :source-map-timestamp true
                    :preloads             [devtools.preload
                                           day8.re-frame.trace.preload
                                           re-frisk.preload]
                    :closure-defines      {"re_frame.trace.trace_enabled_QMARK_" true}
                    :external-config      {:devtools/config {:features-to-install :all}}}}

    {:id           "min"
     :source-paths ["src/cljs"]
     :jar true
     :compiler     {:main            pozn-adaptive.core
                    :output-to       "resources/public/js/compiled/app.js"
                    :optimizations   :advanced
                    :closure-defines {goog.DEBUG false}
                    :pretty-print    false}}
    {:id "test"
     :source-paths ["src/cljs"]
     :compiler {:main test.runner
                :optimizations :none
                :output-to "resources/public/cljs/tests/all-tests.js"
                :output-dir "resources/public/cljs/"
                }}]
   :test-commands {"test" ["lein" "doo" "phantom" "test" "once"]}}

  :main pozn-adaptive.server

  :aot [pozn-adaptive.server]

  :uberjar-name "pozn-adaptive.jar"

  :prep-tasks ["clean" ["cljsbuild" "once" "min"]["garden" "once"] "compile"])
