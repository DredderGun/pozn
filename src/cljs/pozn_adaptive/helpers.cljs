(ns pozn-adaptive.helpers)

(defn allocate-next-id
  [items-list]
  ((fnil inc 0) (last (keys items-list))))

(defn allocate-next-id-vec
  [vec]
  ((fnil inc 0) {:id (last vec)}))
