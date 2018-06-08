// Compiled by ClojureScript 1.9.908 {}
goog.provide('pozn_adaptive.helpers');
goog.require('cljs.core');
pozn_adaptive.helpers.allocate_next_id = (function pozn_adaptive$helpers$allocate_next_id(items_list){
return cljs.core.fnil.call(null,cljs.core.inc,(0)).call(null,cljs.core.last.call(null,cljs.core.keys.call(null,items_list)));
});
pozn_adaptive.helpers.allocate_next_id_vec = (function pozn_adaptive$helpers$allocate_next_id_vec(vec){
return cljs.core.fnil.call(null,cljs.core.inc,(0)).call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.last.call(null,vec)], null));
});

//# sourceMappingURL=helpers.js.map
