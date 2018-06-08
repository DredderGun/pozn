// Compiled by ClojureScript 1.9.908 {}
goog.provide('pozn_adaptive.events');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('re_frame.core');
goog.require('pozn_adaptive.db');
goog.require('cljs.spec.alpha');
goog.require('pozn_adaptive.spec');
pozn_adaptive.events.check_and_throw = (function pozn_adaptive$events$check_and_throw(a_spec,db){
if(cljs.core.truth_(cljs.spec.alpha.valid_QMARK_.call(null,a_spec,db))){
return null;
} else {
throw cljs.core.ex_info.call(null,["spec check failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.spec.alpha.explain_str.call(null,a_spec,db))].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
});
pozn_adaptive.events.check_spec = (function pozn_adaptive$events$check_spec(check_keyword){
return re_frame.core.after.call(null,cljs.core.partial.call(null,pozn_adaptive.events.check_and_throw,check_keyword));
});
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("pozn-adaptive.events","initialize-db","pozn-adaptive.events/initialize-db",1396362901),cljs.core.PersistentVector.EMPTY,(function (_,___$1){
return pozn_adaptive.db.default_db;
}));
pozn_adaptive.events.set_layout_interceptor = (function pozn_adaptive$events$set_layout_interceptor(layout){
return re_frame.core.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"set-layout","set-layout",-688611070),new cljs.core.Keyword(null,"after","after",594996914),(function (context){
return cljs.core.assoc_in.call(null,context,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"effects","effects",-282369292),new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Keyword(null,"layout","layout",-2120940921)], null),layout);
}));
});
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("pozn-adaptive.events","activate-receipt","pozn-adaptive.events/activate-receipt",-2035224408),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v], null),(function (db,p__19289){
var vec__19290 = p__19289;
var rec_id = cljs.core.nth.call(null,vec__19290,(0),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"active-receipt","active-receipt",916564651),rec_id);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("pozn-adaptive.events","change-active-dish-count-and-add-to-receipt","pozn-adaptive.events/change-active-dish-count-and-add-to-receipt",-1894008643),cljs.core.PersistentVector.EMPTY,(function (p__19293,p__19294){
var map__19295 = p__19293;
var map__19295__$1 = ((((!((map__19295 == null)))?((((map__19295.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19295.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19295):map__19295);
var cofx = map__19295__$1;
var db = cljs.core.get.call(null,map__19295__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__19296 = p__19294;
var _ = cljs.core.nth.call(null,vec__19296,(0),null);
var count_d = cljs.core.nth.call(null,vec__19296,(1),null);
return cljs.core.assoc.call(null,cljs.core.update_in.call(null,cofx,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Keyword(null,"sale-receipts","sale-receipts",630620995),new cljs.core.Keyword(null,"active-receipt","active-receipt",916564651).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.Keyword(null,"guests","guests",617113038),new cljs.core.Keyword(null,"active-guest","active-guest",1493829244).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.Keyword(null,"dishes","dishes",1259783877)], null),((function (map__19295,map__19295__$1,cofx,db,vec__19296,_,count_d){
return (function (dishes){
return cljs.core.mapv.call(null,((function (map__19295,map__19295__$1,cofx,db,vec__19296,_,count_d){
return (function (dish){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(dish),new cljs.core.Keyword(null,"active-dish-in-receipt","active-dish-in-receipt",-934600953).cljs$core$IFn$_invoke$arity$1(db))){
return cljs.core.assoc.call(null,dish,new cljs.core.Keyword(null,"count","count",2139924085),count_d);
} else {
return dish;
}
});})(map__19295,map__19295__$1,cofx,db,vec__19296,_,count_d))
,dishes);
});})(map__19295,map__19295__$1,cofx,db,vec__19296,_,count_d))
),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pozn-adaptive.events","recalculate-sum-price","pozn-adaptive.events/recalculate-sum-price",-1542641194)], null));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("pozn-adaptive.events","modal","pozn-adaptive.events/modal",-1929500107),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v], null),(function (db,p__19300){
var vec__19301 = p__19300;
var data = cljs.core.nth.call(null,vec__19301,(0),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"modal-windows","modal-windows",-797029455),data);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("pozn-adaptive.events","set-window-width","pozn-adaptive.events/set-window-width",-306097698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v], null),(function (db,p__19304){
var vec__19305 = p__19304;
var width = cljs.core.nth.call(null,vec__19305,(0),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"window-width","window-width",2057825599),width);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("pozn-adaptive.events","set-slide-window","pozn-adaptive.events/set-slide-window",130449657),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v], null),(function (db,p__19308){
var vec__19309 = p__19308;
var show_QMARK_ = cljs.core.nth.call(null,vec__19309,(0),null);
var template = cljs.core.nth.call(null,vec__19309,(1),null);
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"slide-template","slide-template",2079807986),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"show?","show?",1543842127),show_QMARK_,new cljs.core.Keyword(null,"template","template",-702405684),template], null)),new cljs.core.Keyword(null,"dish-search-query","dish-search-query",1864156245),"");
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("pozn-adaptive.events","close-slide-window","pozn-adaptive.events/close-slide-window",-1482635624),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v], null),(function (db,_){
return cljs.core.assoc_in.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.update.call(null,db,new cljs.core.Keyword(null,"slide-template","slide-template",2079807986),cljs.core.merge,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"show?","show?",1543842127),false], null)),new cljs.core.Keyword(null,"editing","editing",1365491601),false),new cljs.core.Keyword(null,"dish-search-query","dish-search-query",1864156245),""),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-items","active-items",-1682550794),new cljs.core.Keyword(null,"temporary-dish","temporary-dish",1497972516)], null),null);
}));

//# sourceMappingURL=events.js.map
