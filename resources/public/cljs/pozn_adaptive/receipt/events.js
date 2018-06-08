// Compiled by ClojureScript 1.9.908 {}
goog.provide('pozn_adaptive.receipt.events');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('pozn_adaptive.helpers');
goog.require('cljs_time.core');
goog.require('pozn_adaptive.tables.events');
pozn_adaptive.receipt.events.delete_empty_guests = (function pozn_adaptive$receipt$events$delete_empty_guests(){
return re_frame.core.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"delete-empty-guests","delete-empty-guests",-238097449),new cljs.core.Keyword(null,"after","after",594996914),(function (p__19512){
var map__19513 = p__19512;
var map__19513__$1 = ((((!((map__19513 == null)))?((((map__19513.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19513.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19513):map__19513);
var context = map__19513__$1;
var effects = cljs.core.get.call(null,map__19513__$1,new cljs.core.Keyword(null,"effects","effects",-282369292));
var db = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
var id = cljs.core.atom.call(null,(0));
return cljs.core.assoc_in.call(null,cljs.core.update_in.call(null,context,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"effects","effects",-282369292),new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Keyword(null,"sale-receipts","sale-receipts",630620995),new cljs.core.Keyword(null,"active-receipt","active-receipt",916564651).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"active-items","active-items",-1682550794).cljs$core$IFn$_invoke$arity$1(db)),new cljs.core.Keyword(null,"guests","guests",617113038)], null),((function (db,id,map__19513,map__19513__$1,context,effects){
return (function (guests){
var fun_if_no_guests_left = ((function (db,id,map__19513,map__19513__$1,context,effects){
return (function (updated_guests){
if(cljs.core.empty_QMARK_.call(null,updated_guests)){
return new cljs.core.PersistentArrayMap(null, 1, [(1),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(1),new cljs.core.Keyword(null,"dishes","dishes",1259783877),cljs.core.PersistentVector.EMPTY], null)], null);
} else {
return updated_guests;
}
});})(db,id,map__19513,map__19513__$1,context,effects))
;
return fun_if_no_guests_left.call(null,cljs.core.reduce_kv.call(null,((function (fun_if_no_guests_left,db,id,map__19513,map__19513__$1,context,effects){
return (function (m,k,v){
if(cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"dishes","dishes",1259783877).cljs$core$IFn$_invoke$arity$1(v))){
return m;
} else {
cljs.core.swap_BANG_.call(null,id,cljs.core.inc);

return cljs.core.assoc.call(null,m,cljs.core.deref.call(null,id),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.deref.call(null,id),new cljs.core.Keyword(null,"dishes","dishes",1259783877),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,((function (fun_if_no_guests_left,db,id,map__19513,map__19513__$1,context,effects){
return (function (p1__19511_SHARP_){
return cljs.core.assoc.call(null,p1__19511_SHARP_,new cljs.core.Keyword(null,"guest-id","guest-id",-686443324),cljs.core.deref.call(null,id));
});})(fun_if_no_guests_left,db,id,map__19513,map__19513__$1,context,effects))
,new cljs.core.Keyword(null,"dishes","dishes",1259783877).cljs$core$IFn$_invoke$arity$1(v)))], null));
}
});})(fun_if_no_guests_left,db,id,map__19513,map__19513__$1,context,effects))
,cljs.core.PersistentArrayMap.EMPTY,guests));
});})(db,id,map__19513,map__19513__$1,context,effects))
),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"effects","effects",-282369292),new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Keyword(null,"active-items","active-items",-1682550794),new cljs.core.Keyword(null,"active-guest","active-guest",1493829244)], null),(1));
}));
});
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("pozn-adaptive.receipt.events","add-several-dishes-to-receipt","pozn-adaptive.receipt.events/add-several-dishes-to-receipt",-1503549973),cljs.core.PersistentVector.EMPTY,(function (p__19515,p__19516){
var map__19517 = p__19515;
var map__19517__$1 = ((((!((map__19517 == null)))?((((map__19517.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19517.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19517):map__19517);
var cofx = map__19517__$1;
var map__19518 = cljs.core.get.call(null,map__19517__$1,new cljs.core.Keyword(null,"db","db",993250759));
var map__19518__$1 = ((((!((map__19518 == null)))?((((map__19518.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19518.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19518):map__19518);
var active_items = cljs.core.get.call(null,map__19518__$1,new cljs.core.Keyword(null,"active-items","active-items",-1682550794));
var vec__19519 = p__19516;
var _ = cljs.core.nth.call(null,vec__19519,(0),null);
var guests_to_replace = cljs.core.nth.call(null,vec__19519,(1),null);
return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,cofx,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Keyword(null,"sale-receipts","sale-receipts",630620995),new cljs.core.Keyword(null,"active-receipt","active-receipt",916564651).cljs$core$IFn$_invoke$arity$1(active_items),new cljs.core.Keyword(null,"guests","guests",617113038)], null),guests_to_replace),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Keyword(null,"layout","layout",-2120940921)], null),new cljs.core.Keyword(null,"new-sale-receipt","new-sale-receipt",-587581497));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("pozn-adaptive.receipt.events","recalculate-sum-price","pozn-adaptive.receipt.events/recalculate-sum-price",-1034000316),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v], null),(function (p__19524,p__19525){
var map__19526 = p__19524;
var map__19526__$1 = ((((!((map__19526 == null)))?((((map__19526.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19526.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19526):map__19526);
var db = map__19526__$1;
var active_items = cljs.core.get.call(null,map__19526__$1,new cljs.core.Keyword(null,"active-items","active-items",-1682550794));
var vec__19527 = p__19525;
var _ = cljs.core.nth.call(null,vec__19527,(0),null);
return cljs.core.update_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sale-receipts","sale-receipts",630620995),new cljs.core.Keyword(null,"active-receipt","active-receipt",916564651).cljs$core$IFn$_invoke$arity$1(active_items)], null),((function (map__19526,map__19526__$1,db,active_items,vec__19527,_){
return (function (active_receipt){
var active_receipt_guests = cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sale-receipts","sale-receipts",630620995),new cljs.core.Keyword(null,"active-receipt","active-receipt",916564651).cljs$core$IFn$_invoke$arity$1(active_items),new cljs.core.Keyword(null,"guests","guests",617113038)], null));
var sum_price = cljs.core.reduce_kv.call(null,((function (active_receipt_guests,map__19526,map__19526__$1,db,active_items,vec__19527,_){
return (function (acc,g_k,g_v){
return (cljs.core.reduce.call(null,((function (active_receipt_guests,map__19526,map__19526__$1,db,active_items,vec__19527,_){
return (function (acc__$1,dish){
return ((new cljs.core.Keyword(null,"count","count",2139924085).cljs$core$IFn$_invoke$arity$1(dish) * new cljs.core.Keyword(null,"price","price",22129180).cljs$core$IFn$_invoke$arity$1(dish)) + acc__$1);
});})(active_receipt_guests,map__19526,map__19526__$1,db,active_items,vec__19527,_))
,(0),new cljs.core.Keyword(null,"dishes","dishes",1259783877).cljs$core$IFn$_invoke$arity$1(g_v)) + acc);
});})(active_receipt_guests,map__19526,map__19526__$1,db,active_items,vec__19527,_))
,(0),active_receipt_guests);
return cljs.core.assoc.call(null,active_receipt,new cljs.core.Keyword(null,"sum","sum",136986814),sum_price,new cljs.core.Keyword(null,"payment","payment",-1682035288),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cash","cash",181122222),sum_price,new cljs.core.Keyword(null,"card","card",-1430355152),(0)], null),new cljs.core.Keyword(null,"layout","layout",-2120940921),new cljs.core.Keyword(null,"new-sale-receipt","new-sale-receipt",-587581497));
});})(map__19526,map__19526__$1,db,active_items,vec__19527,_))
);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("pozn-adaptive.receipt.events","change-layout","pozn-adaptive.receipt.events/change-layout",504749728),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v], null),(function (db,p__19531){
var vec__19532 = p__19531;
var layout_key = cljs.core.nth.call(null,vec__19532,(0),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"layout","layout",-2120940921),layout_key);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("pozn-adaptive.receipt.events","change-layout-and-select-mod","pozn-adaptive.receipt.events/change-layout-and-select-mod",-828489052),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v], null),(function (db,p__19535){
var vec__19536 = p__19535;
var layout_key = cljs.core.nth.call(null,vec__19536,(0),null);
var en_QMARK_ = cljs.core.nth.call(null,vec__19536,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"layout","layout",-2120940921),layout_key,new cljs.core.Keyword(null,"select-mod","select-mod",-322917559),en_QMARK_,new cljs.core.Keyword(null,"modal-windows","modal-windows",-797029455),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"more-menu","more-menu",-856840943),false,new cljs.core.Keyword(null,"info-window","info-window",1082708400),false], null));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("pozn-adaptive.receipt.events","select-dish-in-receipt","pozn-adaptive.receipt.events/select-dish-in-receipt",858427326),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v], null),(function (db,p__19539){
var vec__19540 = p__19539;
var guest_id = cljs.core.nth.call(null,vec__19540,(0),null);
var dish_id = cljs.core.nth.call(null,vec__19540,(1),null);
return cljs.core.update_in.call(null,db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sale-receipts","sale-receipts",630620995),new cljs.core.Keyword(null,"active-receipt","active-receipt",916564651).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"active-items","active-items",-1682550794).cljs$core$IFn$_invoke$arity$1(db)),new cljs.core.Keyword(null,"guests","guests",617113038),guest_id,new cljs.core.Keyword(null,"dishes","dishes",1259783877)], null),((function (vec__19540,guest_id,dish_id){
return (function (dishes){
return cljs.core.mapv.call(null,((function (vec__19540,guest_id,dish_id){
return (function (dish){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"receipt-id","receipt-id",1658819866).cljs$core$IFn$_invoke$arity$1(dish),dish_id)){
return cljs.core.update.call(null,dish,new cljs.core.Keyword(null,"selected?","selected?",-742502788),cljs.core.not);
} else {
return dish;
}
});})(vec__19540,guest_id,dish_id))
,dishes);
});})(vec__19540,guest_id,dish_id))
);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("pozn-adaptive.receipt.events","set-old-dish","pozn-adaptive.receipt.events/set-old-dish",1595605709),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v], null),(function (db,p__19543){
var vec__19544 = p__19543;
var dish_map_from_receipt = cljs.core.nth.call(null,vec__19544,(0),null);
var active_guest = cljs.core.nth.call(null,vec__19544,(1),null);
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-items","active-items",-1682550794),new cljs.core.Keyword(null,"active-guest","active-guest",1493829244)], null),active_guest),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-items","active-items",-1682550794),new cljs.core.Keyword(null,"active-dish-in-receipt","active-dish-in-receipt",-934600953)], null),dish_map_from_receipt),new cljs.core.Keyword(null,"slide-template","slide-template",2079807986),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"show?","show?",1543842127),true,new cljs.core.Keyword(null,"template","template",-702405684),new cljs.core.Keyword(null,"dish","dish",1444360049)], null)),new cljs.core.Keyword(null,"editing","editing",1365491601),true);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("pozn-adaptive.receipt.events","select-all-dish-one-guest","pozn-adaptive.receipt.events/select-all-dish-one-guest",-1816099221),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v], null),(function (p__19548,p__19549){
var map__19550 = p__19548;
var map__19550__$1 = ((((!((map__19550 == null)))?((((map__19550.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19550.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19550):map__19550);
var db = map__19550__$1;
var active_items = cljs.core.get.call(null,map__19550__$1,new cljs.core.Keyword(null,"active-items","active-items",-1682550794));
var vec__19551 = p__19549;
var guest_id = cljs.core.nth.call(null,vec__19551,(0),null);
return cljs.core.update_in.call(null,db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sale-receipts","sale-receipts",630620995),new cljs.core.Keyword(null,"active-receipt","active-receipt",916564651).cljs$core$IFn$_invoke$arity$1(active_items),new cljs.core.Keyword(null,"guests","guests",617113038),guest_id,new cljs.core.Keyword(null,"dishes","dishes",1259783877)], null),((function (map__19550,map__19550__$1,db,active_items,vec__19551,guest_id){
return (function (dishes){
var select_or_not_QMARK_ = cljs.core.not_every_QMARK_.call(null,new cljs.core.Keyword(null,"selected?","selected?",-742502788),dishes);
return cljs.core.mapv.call(null,((function (select_or_not_QMARK_,map__19550,map__19550__$1,db,active_items,vec__19551,guest_id){
return (function (p1__19547_SHARP_){
return cljs.core.assoc.call(null,p1__19547_SHARP_,new cljs.core.Keyword(null,"selected?","selected?",-742502788),select_or_not_QMARK_);
});})(select_or_not_QMARK_,map__19550,map__19550__$1,db,active_items,vec__19551,guest_id))
,dishes);
});})(map__19550,map__19550__$1,db,active_items,vec__19551,guest_id))
);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("pozn-adaptive.receipt.events","start-coord","pozn-adaptive.receipt.events/start-coord",1118131016),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v], null),(function (p__19555,p__19556){
var map__19557 = p__19555;
var map__19557__$1 = ((((!((map__19557 == null)))?((((map__19557.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19557.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19557):map__19557);
var db = map__19557__$1;
var active_items = cljs.core.get.call(null,map__19557__$1,new cljs.core.Keyword(null,"active-items","active-items",-1682550794));
var vec__19558 = p__19556;
var coord = cljs.core.nth.call(null,vec__19558,(0),null);
var specified_guest_id = cljs.core.nth.call(null,vec__19558,(1),null);
if(cljs.core._EQ_.call(null,specified_guest_id,new cljs.core.Keyword(null,"active-guest","active-guest",1493829244).cljs$core$IFn$_invoke$arity$1(active_items))){
return cljs.core.update.call(null,db,new cljs.core.Keyword(null,"swipe-events","swipe-events",-1027617519),cljs.core.assoc,new cljs.core.Keyword(null,"start-touch-position","start-touch-position",-1331314147),coord,new cljs.core.Keyword(null,"start-swipe-time","start-swipe-time",-89357433),(new Date()).getTime(),new cljs.core.Keyword(null,"active-guest?","active-guest?",137070783),true,new cljs.core.Keyword(null,"duration","duration",1444101068),false);
} else {
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"swipe-events","swipe-events",-1027617519),new cljs.core.Keyword(null,"active-guest?","active-guest?",137070783)], null),false);
}
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("pozn-adaptive.receipt.events","swipe-element","pozn-adaptive.receipt.events/swipe-element",-1178432382),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v], null),(function (p__19562,p__19563){
var map__19564 = p__19562;
var map__19564__$1 = ((((!((map__19564 == null)))?((((map__19564.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19564.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19564):map__19564);
var db = map__19564__$1;
var swipe_events = cljs.core.get.call(null,map__19564__$1,new cljs.core.Keyword(null,"swipe-events","swipe-events",-1027617519));
var vec__19565 = p__19563;
var position = cljs.core.nth.call(null,vec__19565,(0),null);
var delta = (position - new cljs.core.Keyword(null,"start-touch-position","start-touch-position",-1331314147).cljs$core$IFn$_invoke$arity$1(swipe_events));
var direction = (Math.abs(delta) / delta);
if(cljs.core.truth_((function (){var and__7633__auto__ = (delta < (0));
if(and__7633__auto__){
var and__7633__auto____$1 = cljs.core._EQ_.call(null,direction,(-1));
if(and__7633__auto____$1){
return new cljs.core.Keyword(null,"active-guest?","active-guest?",137070783).cljs$core$IFn$_invoke$arity$1(swipe_events);
} else {
return and__7633__auto____$1;
}
} else {
return and__7633__auto__;
}
})())){
return cljs.core.update.call(null,db,new cljs.core.Keyword(null,"swipe-events","swipe-events",-1027617519),cljs.core.assoc,new cljs.core.Keyword(null,"temporary-swipe","temporary-swipe",-1569396232),delta,new cljs.core.Keyword(null,"direction","direction",-633359395),direction);
} else {
return db;
}
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("pozn-adaptive.receipt.events","end-move","pozn-adaptive.receipt.events/end-move",-1630458872),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v], null),(function (p__19569,_){
var map__19570 = p__19569;
var map__19570__$1 = ((((!((map__19570 == null)))?((((map__19570.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19570.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19570):map__19570);
var db = map__19570__$1;
var swipe_events = cljs.core.get.call(null,map__19570__$1,new cljs.core.Keyword(null,"swipe-events","swipe-events",-1027617519));
var fast_swipe_QMARK_ = (((new Date()).getTime() - new cljs.core.Keyword(null,"start-swipe-time","start-swipe-time",-89357433).cljs$core$IFn$_invoke$arity$1(swipe_events)) < (250));
var more_200px_QMARK_ = (Math.abs(new cljs.core.Keyword(null,"temporary-swipe","temporary-swipe",-1569396232).cljs$core$IFn$_invoke$arity$1(swipe_events)) > (200));
return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,(cljs.core.truth_((function (){var and__7633__auto__ = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"direction","direction",-633359395).cljs$core$IFn$_invoke$arity$1(swipe_events),(-1));
if(and__7633__auto__){
var and__7633__auto____$1 = (fast_swipe_QMARK_) || (more_200px_QMARK_);
if(and__7633__auto____$1){
return new cljs.core.Keyword(null,"active-guest?","active-guest?",137070783).cljs$core$IFn$_invoke$arity$1(swipe_events);
} else {
return and__7633__auto____$1;
}
} else {
return and__7633__auto__;
}
})())?cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"swipe-events","swipe-events",-1027617519),new cljs.core.Keyword(null,"temporary-swipe","temporary-swipe",-1569396232)], null),(-200)):cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"swipe-events","swipe-events",-1027617519),new cljs.core.Keyword(null,"temporary-swipe","temporary-swipe",-1569396232)], null),(0))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"swipe-events","swipe-events",-1027617519),new cljs.core.Keyword(null,"active-guest?","active-guest?",137070783)], null),false),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"swipe-events","swipe-events",-1027617519),new cljs.core.Keyword(null,"duration","duration",1444101068)], null),true),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"swipe-events","swipe-events",-1027617519),new cljs.core.Keyword(null,"direction","direction",-633359395)], null),null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"swipe-events","swipe-events",-1027617519),new cljs.core.Keyword(null,"start-touch-position","start-touch-position",-1331314147)], null),null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"swipe-events","swipe-events",-1027617519),new cljs.core.Keyword(null,"start-swipe-time","start-swipe-time",-89357433)], null),null);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("pozn-adaptive.receipt.events","transition-end","pozn-adaptive.receipt.events/transition-end",622456536),(function (db,_){
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"swipe-events","swipe-events",-1027617519),new cljs.core.Keyword(null,"duration","duration",1444101068)], null),false);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("pozn-adaptive.receipt.events","slide-button","pozn-adaptive.receipt.events/slide-button",1492196666),(function (p__19572,_){
var map__19573 = p__19572;
var map__19573__$1 = ((((!((map__19573 == null)))?((((map__19573.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19573.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19573):map__19573);
var db = map__19573__$1;
var swipe_events = cljs.core.get.call(null,map__19573__$1,new cljs.core.Keyword(null,"swipe-events","swipe-events",-1027617519));
if(cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"temporary-swipe","temporary-swipe",-1569396232).cljs$core$IFn$_invoke$arity$1(swipe_events),(0))){
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"swipe-events","swipe-events",-1027617519),new cljs.core.Keyword(null,"temporary-swipe","temporary-swipe",-1569396232)], null),(0));
} else {
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"swipe-events","swipe-events",-1027617519),new cljs.core.Keyword(null,"temporary-swipe","temporary-swipe",-1569396232)], null),(-200));
}
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("pozn-adaptive.receipt.events","activate-guest","pozn-adaptive.receipt.events/activate-guest",350997688),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v], null),(function (p__19575,p__19576){
var map__19577 = p__19575;
var map__19577__$1 = ((((!((map__19577 == null)))?((((map__19577.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19577.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19577):map__19577);
var db = map__19577__$1;
var active_items = cljs.core.get.call(null,map__19577__$1,new cljs.core.Keyword(null,"active-items","active-items",-1682550794));
var vec__19578 = p__19576;
var guest_id = cljs.core.nth.call(null,vec__19578,(0),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"paid?","paid?",1217824088).cljs$core$IFn$_invoke$arity$1(active_items))){
return db;
} else {
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-items","active-items",-1682550794),new cljs.core.Keyword(null,"active-guest","active-guest",1493829244)], null),guest_id);
}
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("pozn-adaptive.receipt.events","replace-dishes-to-new-receipt","pozn-adaptive.receipt.events/replace-dishes-to-new-receipt",2035671329),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pozn_adaptive.receipt.events.delete_empty_guests.call(null)], null),(function (p__19583,_){
var map__19584 = p__19583;
var map__19584__$1 = ((((!((map__19584 == null)))?((((map__19584.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19584.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19584):map__19584);
var cofx = map__19584__$1;
var db = cljs.core.get.call(null,map__19584__$1,new cljs.core.Keyword(null,"db","db",993250759));
var id = cljs.core.atom.call(null,(0));
var guests_and_their_dishes_to_replace = cljs.core.reduce.call(null,((function (id,map__19584,map__19584__$1,cofx,db){
return (function (acc,curr){
var selected_dishes = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.filter.call(null,new cljs.core.Keyword(null,"selected?","selected?",-742502788),new cljs.core.Keyword(null,"dishes","dishes",1259783877).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,curr))));
if(cljs.core.empty_QMARK_.call(null,selected_dishes)){
return acc;
} else {
cljs.core.swap_BANG_.call(null,id,cljs.core.inc);

return cljs.core.assoc.call(null,acc,cljs.core.deref.call(null,id),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.deref.call(null,id),new cljs.core.Keyword(null,"dishes","dishes",1259783877),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.sort.call(null,((function (selected_dishes,id,map__19584,map__19584__$1,cofx,db){
return (function (el1,el2){
return cljs.core.compare.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(el1),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(el2));
});})(selected_dishes,id,map__19584,map__19584__$1,cofx,db))
,cljs.core.map.call(null,((function (selected_dishes,id,map__19584,map__19584__$1,cofx,db){
return (function (p1__19582_SHARP_){
return cljs.core.assoc.call(null,p1__19582_SHARP_,new cljs.core.Keyword(null,"guest-id","guest-id",-686443324),cljs.core.deref.call(null,id),new cljs.core.Keyword(null,"selected?","selected?",-742502788),false);
});})(selected_dishes,id,map__19584,map__19584__$1,cofx,db))
,cljs.core.filter.call(null,new cljs.core.Keyword(null,"selected?","selected?",-742502788),new cljs.core.Keyword(null,"dishes","dishes",1259783877).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,curr))))))], null));
}
});})(id,map__19584,map__19584__$1,cofx,db))
,cljs.core.PersistentArrayMap.EMPTY,cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sale-receipts","sale-receipts",630620995),new cljs.core.Keyword(null,"active-receipt","active-receipt",916564651).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.Keyword(null,"guests","guests",617113038)], null)));
return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc.call(null,cofx,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (){var x__8507__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pozn-adaptive.receipt.events","delete-selected-dishes","pozn-adaptive.receipt.events/delete-selected-dishes",513274046)], null);
return cljs.core._conj.call(null,(function (){var x__8507__auto____$1 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pozn-adaptive.receipt.events","recalculate-sum-price","pozn-adaptive.receipt.events/recalculate-sum-price",-1034000316)], null);
return cljs.core._conj.call(null,(function (){var x__8507__auto____$2 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pozn-adaptive.tables.events","add-new-receipt","pozn-adaptive.tables.events/add-new-receipt",-901125534),cljs.core.nth.call(null,new cljs.core.Keyword(null,"active-table","active-table",39998616).cljs$core$IFn$_invoke$arity$1(db),(0)),cljs.core.nth.call(null,new cljs.core.Keyword(null,"active-table","active-table",39998616).cljs$core$IFn$_invoke$arity$1(db),(1))], null);
return cljs.core._conj.call(null,(function (){var x__8507__auto____$3 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pozn-adaptive.receipt.events","add-several-dishes-to-receipt","pozn-adaptive.receipt.events/add-several-dishes-to-receipt",-1503549973),guests_and_their_dishes_to_replace], null);
return cljs.core._conj.call(null,(function (){var x__8507__auto____$4 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pozn-adaptive.receipt.events","recalculate-sum-price","pozn-adaptive.receipt.events/recalculate-sum-price",-1034000316)], null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8507__auto____$4);
})(),x__8507__auto____$3);
})(),x__8507__auto____$2);
})(),x__8507__auto____$1);
})(),x__8507__auto__);
})()),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Keyword(null,"select-mod","select-mod",-322917559)], null),false),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Keyword(null,"modal-windows","modal-windows",-797029455),new cljs.core.Keyword(null,"are-you-sure","are-you-sure",-567934666)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"en?","en?",-52447038),false,new cljs.core.Keyword(null,"guests-to-different-receipt?","guests-to-different-receipt?",2136926138),false], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Keyword(null,"active-guest","active-guest",1493829244)], null),(1));
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("pozn-adaptive.receipt.events","guests-to-different-receipt","pozn-adaptive.receipt.events/guests-to-different-receipt",-5997990),cljs.core.PersistentVector.EMPTY,(function (p__19587,_){
var map__19588 = p__19587;
var map__19588__$1 = ((((!((map__19588 == null)))?((((map__19588.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19588.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19588):map__19588);
var cofx = map__19588__$1;
var db = cljs.core.get.call(null,map__19588__$1,new cljs.core.Keyword(null,"db","db",993250759));
var send_guest = cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.reduce.call(null,((function (map__19588,map__19588__$1,cofx,db){
return (function (acc,curr_guest){
return cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.conj.call(null,acc,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pozn-adaptive.receipt.events","recalculate-sum-price","pozn-adaptive.receipt.events/recalculate-sum-price",-1034000316)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pozn-adaptive.receipt.events","add-several-dishes-to-receipt","pozn-adaptive.receipt.events/add-several-dishes-to-receipt",-1503549973),new cljs.core.PersistentArrayMap(null, 1, [(1),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(1),new cljs.core.Keyword(null,"dishes","dishes",1259783877),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,((function (map__19588,map__19588__$1,cofx,db){
return (function (p1__19586_SHARP_){
return cljs.core.assoc.call(null,p1__19586_SHARP_,new cljs.core.Keyword(null,"guest-id","guest-id",-686443324),(1));
});})(map__19588,map__19588__$1,cofx,db))
,cljs.core.filter.call(null,new cljs.core.Keyword(null,"selected?","selected?",-742502788),new cljs.core.Keyword(null,"dishes","dishes",1259783877).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,curr_guest)))))], null)], null)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pozn-adaptive.tables.events","add-new-receipt","pozn-adaptive.tables.events/add-new-receipt",-901125534),cljs.core.nth.call(null,new cljs.core.Keyword(null,"active-table","active-table",39998616).cljs$core$IFn$_invoke$arity$1(db),(0)),cljs.core.nth.call(null,new cljs.core.Keyword(null,"active-table","active-table",39998616).cljs$core$IFn$_invoke$arity$1(db),(1))], null));
});})(map__19588,map__19588__$1,cofx,db))
,cljs.core.List.EMPTY,cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sale-receipts","sale-receipts",630620995),new cljs.core.Keyword(null,"active-receipt","active-receipt",916564651).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.Keyword(null,"guests","guests",617113038)], null))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pozn-adaptive.receipt.events","recalculate-sum-price","pozn-adaptive.receipt.events/recalculate-sum-price",-1034000316)], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pozn-adaptive.receipt.events","delete-selected-dishes","pozn-adaptive.receipt.events/delete-selected-dishes",513274046)], null));
return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc.call(null,cofx,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),send_guest),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Keyword(null,"select-mod","select-mod",-322917559)], null),false),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Keyword(null,"modal-windows","modal-windows",-797029455),new cljs.core.Keyword(null,"are-you-sure","are-you-sure",-567934666)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"en?","en?",-52447038),false,new cljs.core.Keyword(null,"guests-to-different-receipt?","guests-to-different-receipt?",2136926138),false], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Keyword(null,"active-guest","active-guest",1493829244)], null),(1));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("pozn-adaptive.receipt.events","add-new-guest","pozn-adaptive.receipt.events/add-new-guest",-1377278271),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v], null),(function (p__19590,_){
var map__19591 = p__19590;
var map__19591__$1 = ((((!((map__19591 == null)))?((((map__19591.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19591.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19591):map__19591);
var db = map__19591__$1;
var active_items = cljs.core.get.call(null,map__19591__$1,new cljs.core.Keyword(null,"active-items","active-items",-1682550794));
var id = pozn_adaptive.helpers.allocate_next_id.call(null,cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sale-receipts","sale-receipts",630620995),new cljs.core.Keyword(null,"active-receipt","active-receipt",916564651).cljs$core$IFn$_invoke$arity$1(active_items),new cljs.core.Keyword(null,"guests","guests",617113038)], null)));
return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,cljs.core.update_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sale-receipts","sale-receipts",630620995),new cljs.core.Keyword(null,"active-receipt","active-receipt",916564651).cljs$core$IFn$_invoke$arity$1(active_items),new cljs.core.Keyword(null,"guests","guests",617113038)], null),((function (id,map__19591,map__19591__$1,db,active_items){
return (function (guests){
return cljs.core.assoc.call(null,guests,id,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"dishes","dishes",1259783877),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"paid?","paid?",1217824088),false,new cljs.core.Keyword(null,"send?","send?",1918149690),false], null));
});})(id,map__19591,map__19591__$1,db,active_items))
),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-items","active-items",-1682550794),new cljs.core.Keyword(null,"active-guest","active-guest",1493829244)], null),id),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Keyword(null,"swipe-events","swipe-events",-1027617519)], null),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"start-touch-position","start-touch-position",-1331314147),null,new cljs.core.Keyword(null,"start-swipe-time","start-swipe-time",-89357433),null,new cljs.core.Keyword(null,"direction","direction",-633359395),null,new cljs.core.Keyword(null,"swiped-to-end?","swiped-to-end?",341622404),false,new cljs.core.Keyword(null,"duration","duration",1444101068),false,new cljs.core.Keyword(null,"temporary-swipe","temporary-swipe",-1569396232),null,new cljs.core.Keyword(null,"not-active?","not-active?",-293777719),false], null));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("pozn-adaptive.receipt.events","send-receipt","pozn-adaptive.receipt.events/send-receipt",-750288453),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v], null),(function (p__19593,_){
var map__19594 = p__19593;
var map__19594__$1 = ((((!((map__19594 == null)))?((((map__19594.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19594.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19594):map__19594);
var db = map__19594__$1;
var active_items = cljs.core.get.call(null,map__19594__$1,new cljs.core.Keyword(null,"active-items","active-items",-1682550794));
return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sale-receipts","sale-receipts",630620995),new cljs.core.Keyword(null,"active-receipt","active-receipt",916564651).cljs$core$IFn$_invoke$arity$1(active_items),new cljs.core.Keyword(null,"sent?","sent?",1251086682)], null),true),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sale-receipts","sale-receipts",630620995),new cljs.core.Keyword(null,"active-receipt","active-receipt",916564651).cljs$core$IFn$_invoke$arity$1(active_items),new cljs.core.Keyword(null,"dates","dates",-1600154075),new cljs.core.Keyword(null,"send","send",-652151114)], null),cljs_time.core.time_now.call(null));
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("pozn-adaptive.receipt.events","delete-selected-dishes","pozn-adaptive.receipt.events/delete-selected-dishes",513274046),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pozn_adaptive.receipt.events.delete_empty_guests.call(null)], null),(function (p__19596,_){
var map__19597 = p__19596;
var map__19597__$1 = ((((!((map__19597 == null)))?((((map__19597.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19597.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19597):map__19597);
var cofx = map__19597__$1;
var db = cljs.core.get.call(null,map__19597__$1,new cljs.core.Keyword(null,"db","db",993250759));
return cljs.core.assoc.call(null,cljs.core.assoc_in.call(null,cljs.core.update_in.call(null,cofx,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Keyword(null,"sale-receipts","sale-receipts",630620995),new cljs.core.Keyword(null,"active-receipt","active-receipt",916564651).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"active-items","active-items",-1682550794).cljs$core$IFn$_invoke$arity$1(db)),new cljs.core.Keyword(null,"guests","guests",617113038)], null),((function (map__19597,map__19597__$1,cofx,db){
return (function (guests){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__8453__auto__ = ((function (map__19597,map__19597__$1,cofx,db){
return (function pozn_adaptive$receipt$events$iter__19599(s__19600){
return (new cljs.core.LazySeq(null,((function (map__19597,map__19597__$1,cofx,db){
return (function (){
var s__19600__$1 = s__19600;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__19600__$1);
if(temp__4657__auto__){
var s__19600__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__19600__$2)){
var c__8451__auto__ = cljs.core.chunk_first.call(null,s__19600__$2);
var size__8452__auto__ = cljs.core.count.call(null,c__8451__auto__);
var b__19602 = cljs.core.chunk_buffer.call(null,size__8452__auto__);
if((function (){var i__19601 = (0);
while(true){
if((i__19601 < size__8452__auto__)){
var vec__19603 = cljs.core._nth.call(null,c__8451__auto__,i__19601);
var k = cljs.core.nth.call(null,vec__19603,(0),null);
var v = cljs.core.nth.call(null,vec__19603,(1),null);
cljs.core.chunk_append.call(null,b__19602,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.update.call(null,v,new cljs.core.Keyword(null,"dishes","dishes",1259783877),((function (i__19601,vec__19603,k,v,c__8451__auto__,size__8452__auto__,b__19602,s__19600__$2,temp__4657__auto__,map__19597,map__19597__$1,cofx,db){
return (function (dishes){
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.Keyword(null,"selected?","selected?",-742502788)),dishes);
});})(i__19601,vec__19603,k,v,c__8451__auto__,size__8452__auto__,b__19602,s__19600__$2,temp__4657__auto__,map__19597,map__19597__$1,cofx,db))
)], null));

var G__19609 = (i__19601 + (1));
i__19601 = G__19609;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19602),pozn_adaptive$receipt$events$iter__19599.call(null,cljs.core.chunk_rest.call(null,s__19600__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19602),null);
}
} else {
var vec__19606 = cljs.core.first.call(null,s__19600__$2);
var k = cljs.core.nth.call(null,vec__19606,(0),null);
var v = cljs.core.nth.call(null,vec__19606,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.update.call(null,v,new cljs.core.Keyword(null,"dishes","dishes",1259783877),((function (vec__19606,k,v,s__19600__$2,temp__4657__auto__,map__19597,map__19597__$1,cofx,db){
return (function (dishes){
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.Keyword(null,"selected?","selected?",-742502788)),dishes);
});})(vec__19606,k,v,s__19600__$2,temp__4657__auto__,map__19597,map__19597__$1,cofx,db))
)], null),pozn_adaptive$receipt$events$iter__19599.call(null,cljs.core.rest.call(null,s__19600__$2)));
}
} else {
return null;
}
break;
}
});})(map__19597,map__19597__$1,cofx,db))
,null,null));
});})(map__19597,map__19597__$1,cofx,db))
;
return iter__8453__auto__.call(null,guests);
})());
});})(map__19597,map__19597__$1,cofx,db))
),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Keyword(null,"modal-windows","modal-windows",-797029455)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"show","show",-576705889),false,new cljs.core.Keyword(null,"child","child",623967545),null], null)),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pozn-adaptive.receipt.events","recalculate-sum-price","pozn-adaptive.receipt.events/recalculate-sum-price",-1034000316)], null));
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("pozn-adaptive.receipt.events","delete-the-guest","pozn-adaptive.receipt.events/delete-the-guest",-391549551),(function (p__19610,p__19611){
var map__19612 = p__19610;
var map__19612__$1 = ((((!((map__19612 == null)))?((((map__19612.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19612.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19612):map__19612);
var cofx = map__19612__$1;
var map__19613 = cljs.core.get.call(null,map__19612__$1,new cljs.core.Keyword(null,"db","db",993250759));
var map__19613__$1 = ((((!((map__19613 == null)))?((((map__19613.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19613.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19613):map__19613);
var active_items = cljs.core.get.call(null,map__19613__$1,new cljs.core.Keyword(null,"active-items","active-items",-1682550794));
var vec__19614 = p__19611;
var _ = cljs.core.nth.call(null,vec__19614,(0),null);
var guest_id = cljs.core.nth.call(null,vec__19614,(1),null);
return cljs.core.assoc.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,cljs.core.update_in.call(null,cofx,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Keyword(null,"sale-receipts","sale-receipts",630620995),new cljs.core.Keyword(null,"active-receipt","active-receipt",916564651).cljs$core$IFn$_invoke$arity$1(active_items),new cljs.core.Keyword(null,"guests","guests",617113038)], null),cljs.core.dissoc,guest_id),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Keyword(null,"modal-windows","modal-windows",-797029455)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"show?","show?",1543842127),false,new cljs.core.Keyword(null,"child","child",623967545),null], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Keyword(null,"active-items","active-items",-1682550794),new cljs.core.Keyword(null,"active-guest","active-guest",1493829244)], null),(1)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Keyword(null,"swipe-events","swipe-events",-1027617519)], null),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"start-touch-position","start-touch-position",-1331314147),null,new cljs.core.Keyword(null,"start-swipe-time","start-swipe-time",-89357433),null,new cljs.core.Keyword(null,"direction","direction",-633359395),null,new cljs.core.Keyword(null,"swiped-to-end?","swiped-to-end?",341622404),false,new cljs.core.Keyword(null,"duration","duration",1444101068),false,new cljs.core.Keyword(null,"temporary-swipe","temporary-swipe",-1569396232),null,new cljs.core.Keyword(null,"not-active?","not-active?",-293777719),false], null)),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pozn-adaptive.receipt.events","recalculate-sum-price","pozn-adaptive.receipt.events/recalculate-sum-price",-1034000316)], null));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("pozn-adaptive.receipt.events","edit-table","pozn-adaptive.receipt.events/edit-table",-453702273),(function (db,_){
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"layout","layout",-2120940921),new cljs.core.Keyword(null,"tables","tables",1334623052),new cljs.core.Keyword(null,"editing","editing",1365491601),true);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("pozn-adaptive.receipt.events","quite-to-list","pozn-adaptive.receipt.events/quite-to-list",-231299049),(function (db,_){
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"layout","layout",-2120940921),new cljs.core.Keyword(null,"sale-receipts-layout","sale-receipts-layout",-542663967),new cljs.core.Keyword(null,"modal-windows","modal-windows",-797029455),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"show?","show?",1543842127),false,new cljs.core.Keyword(null,"child","child",623967545),null], null));
}));

//# sourceMappingURL=events.js.map
