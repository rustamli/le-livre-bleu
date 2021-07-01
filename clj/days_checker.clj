(ns clj180.core
  (:require [clojure.data.json :as json]))

(defn -main
  [& args]
  (def days (json/read-str (slurp "./resources/days.json")))

  (defn count-absence
    [start end]
    (def out-days
      (filter
       (fn [day]
         (not (some #{"GB"} (get day "locations"))))
       (subvec days start end)))

    (printf "%s: %s\n" (get (nth days start) "date") (count out-days))

  (doseq [x (range 1853)]
    (count-absence x (min (+ 366 x) 1853))))

