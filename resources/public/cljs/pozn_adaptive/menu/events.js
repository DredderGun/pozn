// Compiled by ClojureScript 1.9.908 {}
goog.provide('pozn_adaptive.menu.events');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('pozn_adaptive.receipt.events');
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("pozn-adaptive.menu.events","change-layout","pozn-adaptive.menu.events/change-layout",-989655525),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v], null),(function (db,p__19696){
var vec__19697 = p__19696;
var layout_key = cljs.core.nth.call(null,vec__19697,(0),null);
if(cljs.core._EQ_.call(null,layout_key,new cljs.core.Keyword(null,"new-sale-receipt","new-sale-receipt",-587581497))){
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"layout","layout",-2120940921),layout_key),new cljs.core.Keyword(null,"old-dish?","old-dish?",888066017),false);
} else {
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"layout","layout",-2120940921),layout_key);
}
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("pozn-adaptive.menu.events","set-search-query","pozn-adaptive.menu.events/set-search-query",1578606125),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v], null),(function (db,p__19700){
var vec__19701 = p__19700;
var search_query = cljs.core.nth.call(null,vec__19701,(0),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"dish-search-query","dish-search-query",1864156245),search_query);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("pozn-adaptive.menu.events","edit-new-dish","pozn-adaptive.menu.events/edit-new-dish",2086053859),cljs.core.PersistentVector.EMPTY,(function (p__19704,p__19705){
var map__19706 = p__19704;
var map__19706__$1 = ((((!((map__19706 == null)))?((((map__19706.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19706.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19706):map__19706);
var db = map__19706__$1;
var active_items = cljs.core.get.call(null,map__19706__$1,new cljs.core.Keyword(null,"active-items","active-items",-1682550794));
var vec__19707 = p__19705;
var _ = cljs.core.nth.call(null,vec__19707,(0),null);
var dish_map = cljs.core.nth.call(null,vec__19707,(1),null);
return cljs.core.assoc.call(null,cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-items","active-items",-1682550794),new cljs.core.Keyword(null,"temporary-dish","temporary-dish",1497972516)], null),cljs.core.merge.call(null,dish_map,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"count","count",2139924085),(0)], null))),new cljs.core.Keyword(null,"slide-template","slide-template",2079807986),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"show?","show?",1543842127),true,new cljs.core.Keyword(null,"template","template",-702405684),new cljs.core.Keyword(null,"dish","dish",1444360049)], null));
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("pozn-adaptive.menu.events","add-new-dish-fast","pozn-adaptive.menu.events/add-new-dish-fast",-1267514310),cljs.core.PersistentVector.EMPTY,(function (p__19713,p__19714){
var map__19715 = p__19713;
var map__19715__$1 = ((((!((map__19715 == null)))?((((map__19715.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19715.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19715):map__19715);
var cofx = map__19715__$1;
var db = cljs.core.get.call(null,map__19715__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__19716 = p__19714;
var _ = cljs.core.nth.call(null,vec__19716,(0),null);
var dish_map = cljs.core.nth.call(null,vec__19716,(1),null);
var fast_add_QMARK_ = cljs.core.nth.call(null,vec__19716,(2),null);
var active_items = new cljs.core.Keyword(null,"active-items","active-items",-1682550794).cljs$core$IFn$_invoke$arity$1(db);
var new_dish_id = (new cljs.core.Keyword(null,"receipt-id","receipt-id",1658819866).cljs$core$IFn$_invoke$arity$1(cljs.core.last.call(null,cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sale-receipts","sale-receipts",630620995),new cljs.core.Keyword(null,"active-receipt","active-receipt",916564651).cljs$core$IFn$_invoke$arity$1(active_items),new cljs.core.Keyword(null,"guests","guests",617113038),new cljs.core.Keyword(null,"active-guest","active-guest",1493829244).cljs$core$IFn$_invoke$arity$1(active_items),new cljs.core.Keyword(null,"dishes","dishes",1259783877)], null)))) + (1));
var new_dish_map = cljs.core.merge.call(null,dish_map,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"receipt-id","receipt-id",1658819866),new_dish_id,new cljs.core.Keyword(null,"guest-id","guest-id",-686443324),new cljs.core.Keyword(null,"active-guest","active-guest",1493829244).cljs$core$IFn$_invoke$arity$1(active_items),new cljs.core.Keyword(null,"count","count",2139924085),(cljs.core.truth_(fast_add_QMARK_)?(1):null),new cljs.core.Keyword(null,"modificators","modificators",791127331),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"selected?","selected?",-742502788),false], null));
var fast_add_handler = ((function (active_items,new_dish_id,new_dish_map,map__19715,map__19715__$1,cofx,db,vec__19716,_,dish_map,fast_add_QMARK_){
return (function (updated_fx){
if(cljs.core.truth_(fast_add_QMARK_)){
return cljs.core.assoc.call(null,updated_fx,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pozn-adaptive.receipt.events","recalculate-sum-price","pozn-adaptive.receipt.events/recalculate-sum-price",-1034000316)], null));
} else {
return cljs.core.assoc.call(null,updated_fx,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pozn-adaptive.menu.events","activate-menu-item","pozn-adaptive.menu.events/activate-menu-item",-1125812606),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(dish_map),new_dish_map], null));
}
});})(active_items,new_dish_id,new_dish_map,map__19715,map__19715__$1,cofx,db,vec__19716,_,dish_map,fast_add_QMARK_))
;
if(cljs.core.truth_(new cljs.core.Keyword(null,"active-guest","active-guest",1493829244).cljs$core$IFn$_invoke$arity$1(active_items))){
return fast_add_handler.call(null,cljs.core.update_in.call(null,cofx,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Keyword(null,"sale-receipts","sale-receipts",630620995),new cljs.core.Keyword(null,"active-receipt","active-receipt",916564651).cljs$core$IFn$_invoke$arity$1(active_items),new cljs.core.Keyword(null,"guests","guests",617113038),new cljs.core.Keyword(null,"active-guest","active-guest",1493829244).cljs$core$IFn$_invoke$arity$1(active_items),new cljs.core.Keyword(null,"dishes","dishes",1259783877)], null),((function (active_items,new_dish_id,new_dish_map,fast_add_handler,map__19715,map__19715__$1,cofx,db,vec__19716,_,dish_map,fast_add_QMARK_){
return (function (active_guest_dishes_vec){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.sort.call(null,((function (active_items,new_dish_id,new_dish_map,fast_add_handler,map__19715,map__19715__$1,cofx,db,vec__19716,_,dish_map,fast_add_QMARK_){
return (function (p1__19711_SHARP_,p2__19712_SHARP_){
return cljs.core.compare.call(null,new cljs.core.Keyword(null,"receipt-id","receipt-id",1658819866).cljs$core$IFn$_invoke$arity$1(p1__19711_SHARP_),new cljs.core.Keyword(null,"receipt-id","receipt-id",1658819866).cljs$core$IFn$_invoke$arity$1(p2__19712_SHARP_));
});})(active_items,new_dish_id,new_dish_map,fast_add_handler,map__19715,map__19715__$1,cofx,db,vec__19716,_,dish_map,fast_add_QMARK_))
,cljs.core.conj.call(null,active_guest_dishes_vec,new_dish_map)));
});})(active_items,new_dish_id,new_dish_map,fast_add_handler,map__19715,map__19715__$1,cofx,db,vec__19716,_,dish_map,fast_add_QMARK_))
));
} else {
return cofx;
}
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("pozn-adaptive.menu.events","activate-menu-item","pozn-adaptive.menu.events/activate-menu-item",-1125812606),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v], null),(function (db,p__19720){
var vec__19721 = p__19720;
var menu_item_id = cljs.core.nth.call(null,vec__19721,(0),null);
var new_dish_id = cljs.core.nth.call(null,vec__19721,(1),null);
return cljs.core.assoc.call(null,cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-items","active-items",-1682550794),new cljs.core.Keyword(null,"active-dish-in-receipt","active-dish-in-receipt",-934600953)], null),new_dish_id),new cljs.core.Keyword(null,"slide-template","slide-template",2079807986),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"show?","show?",1543842127),true,new cljs.core.Keyword(null,"template","template",-702405684),new cljs.core.Keyword(null,"dish","dish",1444360049)], null));
}));

//# sourceMappingURL=events.js.map
