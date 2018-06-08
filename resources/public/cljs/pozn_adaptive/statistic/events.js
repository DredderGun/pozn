// Compiled by ClojureScript 1.9.908 {}
goog.provide('pozn_adaptive.statistic.events');
goog.require('cljs.core');
goog.require('re_frame.core');
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("pozn-adaptive.statistic.events","change-layout","pozn-adaptive.statistic.events/change-layout",1449369912),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v], null),(function (db,p__12467){
var vec__12468 = p__12467;
var layout_key = cljs.core.nth.call(null,vec__12468,(0),null);
if(cljs.core._EQ_.call(null,layout_key,new cljs.core.Keyword(null,"new-sale-receipt","new-sale-receipt",-587581497))){
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"layout","layout",-2120940921),layout_key),new cljs.core.Keyword(null,"old-dish?","old-dish?",888066017),false);
} else {
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"layout","layout",-2120940921),layout_key);
}
}));

//# sourceMappingURL=events.js.map
