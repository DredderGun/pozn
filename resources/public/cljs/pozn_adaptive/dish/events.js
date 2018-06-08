// Compiled by ClojureScript 1.9.908 {}
goog.provide('pozn_adaptive.dish.events');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('pozn_adaptive.helpers');
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("pozn-adaptive.dish.events","change-layout","pozn-adaptive.dish.events/change-layout",-1859276418),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v], null),(function (db,p__12502){
var vec__12503 = p__12502;
var layout_key = cljs.core.nth.call(null,vec__12503,(0),null);
if(cljs.core._EQ_.call(null,layout_key,new cljs.core.Keyword(null,"new-sale-receipt","new-sale-receipt",-587581497))){
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"layout","layout",-2120940921),layout_key),new cljs.core.Keyword(null,"old-dish?","old-dish?",888066017),false);
} else {
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"layout","layout",-2120940921),layout_key);
}
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("pozn-adaptive.dish.events","recalculate-sum-price","pozn-adaptive.dish.events/recalculate-sum-price",2034284910),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v], null),(function (db,p__12506){
var vec__12507 = p__12506;
var _ = cljs.core.nth.call(null,vec__12507,(0),null);
var active_items = new cljs.core.Keyword(null,"active-items","active-items",-1682550794).cljs$core$IFn$_invoke$arity$1(db);
return cljs.core.update_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sale-receipts","sale-receipts",630620995),new cljs.core.Keyword(null,"active-receipt","active-receipt",916564651).cljs$core$IFn$_invoke$arity$1(active_items)], null),((function (active_items,vec__12507,_){
return (function (active_receipt){
var active_receipt_guests = cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sale-receipts","sale-receipts",630620995),new cljs.core.Keyword(null,"active-receipt","active-receipt",916564651).cljs$core$IFn$_invoke$arity$1(active_items),new cljs.core.Keyword(null,"guests","guests",617113038)], null));
var sum_price = cljs.core.reduce_kv.call(null,((function (active_receipt_guests,active_items,vec__12507,_){
return (function (acc,g_k,g_v){
return (cljs.core.reduce.call(null,((function (active_receipt_guests,active_items,vec__12507,_){
return (function (acc__$1,dish){
return ((new cljs.core.Keyword(null,"count","count",2139924085).cljs$core$IFn$_invoke$arity$1(dish) * new cljs.core.Keyword(null,"price","price",22129180).cljs$core$IFn$_invoke$arity$1(dish)) + acc__$1);
});})(active_receipt_guests,active_items,vec__12507,_))
,(0),new cljs.core.Keyword(null,"dishes","dishes",1259783877).cljs$core$IFn$_invoke$arity$1(g_v)) + acc);
});})(active_receipt_guests,active_items,vec__12507,_))
,(0),active_receipt_guests);
return cljs.core.assoc.call(null,active_receipt,new cljs.core.Keyword(null,"sum_price","sum_price",1832391009),sum_price,new cljs.core.Keyword(null,"payment","payment",-1682035288),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cash","cash",181122222),sum_price,new cljs.core.Keyword(null,"card","card",-1430355152),(0)], null),new cljs.core.Keyword(null,"layout","layout",-2120940921),new cljs.core.Keyword(null,"new-sale-receipt","new-sale-receipt",-587581497));
});})(active_items,vec__12507,_))
);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("pozn-adaptive.dish.events","change-dish-count-in-receipt","pozn-adaptive.dish.events/change-dish-count-in-receipt",-76459273),cljs.core.PersistentVector.EMPTY,(function (p__12510,p__12511){
var map__12512 = p__12510;
var map__12512__$1 = ((((!((map__12512 == null)))?((((map__12512.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12512.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12512):map__12512);
var cofx = map__12512__$1;
var map__12513 = cljs.core.get.call(null,map__12512__$1,new cljs.core.Keyword(null,"db","db",993250759));
var map__12513__$1 = ((((!((map__12513 == null)))?((((map__12513.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12513.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12513):map__12513);
var active_items = cljs.core.get.call(null,map__12513__$1,new cljs.core.Keyword(null,"active-items","active-items",-1682550794));
var db = cljs.core.get.call(null,map__12512__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__12514 = p__12511;
var _ = cljs.core.nth.call(null,vec__12514,(0),null);
var calculation = cljs.core.nth.call(null,vec__12514,(1),null);
var count_d = cljs.core.nth.call(null,vec__12514,(2),null);
var neg_num_hn = ((function (map__12512,map__12512__$1,cofx,map__12513,map__12513__$1,active_items,db,vec__12514,_,calculation,count_d){
return (function (n){
if((n < (0))){
return (0);
} else {
return n;
}
});})(map__12512,map__12512__$1,cofx,map__12513,map__12513__$1,active_items,db,vec__12514,_,calculation,count_d))
;
var count_d__$1 = window.parseInt(count_d);
if(cljs.core.truth_(new cljs.core.Keyword(null,"editing","editing",1365491601).cljs$core$IFn$_invoke$arity$1(db))){
return cljs.core.assoc.call(null,cljs.core.update_in.call(null,cljs.core.update_in.call(null,cofx,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Keyword(null,"active-items","active-items",-1682550794),new cljs.core.Keyword(null,"active-dish-in-receipt","active-dish-in-receipt",-934600953)], null),((function (neg_num_hn,count_d__$1,map__12512,map__12512__$1,cofx,map__12513,map__12513__$1,active_items,db,vec__12514,_,calculation,count_d){
return (function (dish){
if(cljs.core.truth_(calculation)){
return cljs.core.update.call(null,dish,new cljs.core.Keyword(null,"count","count",2139924085),cljs.core.comp.call(null,neg_num_hn,calculation),count_d__$1);
} else {
return cljs.core.assoc.call(null,dish,new cljs.core.Keyword(null,"count","count",2139924085),count_d__$1);
}
});})(neg_num_hn,count_d__$1,map__12512,map__12512__$1,cofx,map__12513,map__12513__$1,active_items,db,vec__12514,_,calculation,count_d))
),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Keyword(null,"sale-receipts","sale-receipts",630620995),new cljs.core.Keyword(null,"active-receipt","active-receipt",916564651).cljs$core$IFn$_invoke$arity$1(active_items),new cljs.core.Keyword(null,"guests","guests",617113038),new cljs.core.Keyword(null,"active-guest","active-guest",1493829244).cljs$core$IFn$_invoke$arity$1(active_items),new cljs.core.Keyword(null,"dishes","dishes",1259783877)], null),((function (neg_num_hn,count_d__$1,map__12512,map__12512__$1,cofx,map__12513,map__12513__$1,active_items,db,vec__12514,_,calculation,count_d){
return (function (dishes){
var changing_dish_id = new cljs.core.Keyword(null,"receipt-id","receipt-id",1658819866).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"active-dish-in-receipt","active-dish-in-receipt",-934600953).cljs$core$IFn$_invoke$arity$1(active_items));
return cljs.core.mapv.call(null,((function (changing_dish_id,neg_num_hn,count_d__$1,map__12512,map__12512__$1,cofx,map__12513,map__12513__$1,active_items,db,vec__12514,_,calculation,count_d){
return (function (dish){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"receipt-id","receipt-id",1658819866).cljs$core$IFn$_invoke$arity$1(dish),changing_dish_id)){
if(cljs.core.truth_(calculation)){
return cljs.core.update.call(null,dish,new cljs.core.Keyword(null,"count","count",2139924085),cljs.core.comp.call(null,neg_num_hn,calculation),count_d__$1);
} else {
return cljs.core.assoc.call(null,dish,new cljs.core.Keyword(null,"count","count",2139924085),count_d__$1);
}
} else {
return dish;
}
});})(changing_dish_id,neg_num_hn,count_d__$1,map__12512,map__12512__$1,cofx,map__12513,map__12513__$1,active_items,db,vec__12514,_,calculation,count_d))
,dishes);
});})(neg_num_hn,count_d__$1,map__12512,map__12512__$1,cofx,map__12513,map__12513__$1,active_items,db,vec__12514,_,calculation,count_d))
),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pozn-adaptive.dish.events","recalculate-sum-price","pozn-adaptive.dish.events/recalculate-sum-price",2034284910)], null));
} else {
return cljs.core.update_in.call(null,cofx,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Keyword(null,"active-items","active-items",-1682550794),new cljs.core.Keyword(null,"temporary-dish","temporary-dish",1497972516)], null),((function (neg_num_hn,count_d__$1,map__12512,map__12512__$1,cofx,map__12513,map__12513__$1,active_items,db,vec__12514,_,calculation,count_d){
return (function (temporary_dish){
if(cljs.core.truth_(calculation)){
return cljs.core.update.call(null,temporary_dish,new cljs.core.Keyword(null,"count","count",2139924085),cljs.core.comp.call(null,neg_num_hn,calculation),count_d__$1);
} else {
return cljs.core.assoc.call(null,temporary_dish,new cljs.core.Keyword(null,"count","count",2139924085),count_d__$1);
}
});})(neg_num_hn,count_d__$1,map__12512,map__12512__$1,cofx,map__12513,map__12513__$1,active_items,db,vec__12514,_,calculation,count_d))
);
}
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("pozn-adaptive.dish.events","dish-back-hn","pozn-adaptive.dish.events/dish-back-hn",-1880819228),cljs.core.PersistentVector.EMPTY,(function (p__12519,_){
var map__12520 = p__12519;
var map__12520__$1 = ((((!((map__12520 == null)))?((((map__12520.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12520.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12520):map__12520);
var cofx = map__12520__$1;
var map__12521 = cljs.core.get.call(null,map__12520__$1,new cljs.core.Keyword(null,"db","db",993250759));
var map__12521__$1 = ((((!((map__12521 == null)))?((((map__12521.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12521.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12521):map__12521);
var active_items = cljs.core.get.call(null,map__12521__$1,new cljs.core.Keyword(null,"active-items","active-items",-1682550794));
var db = cljs.core.get.call(null,map__12520__$1,new cljs.core.Keyword(null,"db","db",993250759));
if(cljs.core.truth_(new cljs.core.Keyword(null,"editing","editing",1365491601).cljs$core$IFn$_invoke$arity$1(db))){
return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,cofx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Keyword(null,"slide-template","slide-template",2079807986)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"show?","show?",1543842127),false,new cljs.core.Keyword(null,"template","template",-702405684),new cljs.core.Keyword(null,"menu","menu",352255198)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Keyword(null,"editing?","editing?",1646440800)], null),false),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Keyword(null,"active-items","active-items",-1682550794),new cljs.core.Keyword(null,"active-dish-in-receipt","active-dish-in-receipt",-934600953)], null),null);
} else {
return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,cofx,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Keyword(null,"active-items","active-items",-1682550794),new cljs.core.Keyword(null,"temporary-dish","temporary-dish",1497972516)], null),null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Keyword(null,"slide-template","slide-template",2079807986)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"show?","show?",1543842127),true,new cljs.core.Keyword(null,"template","template",-702405684),new cljs.core.Keyword(null,"menu","menu",352255198)], null));
}
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("pozn-adaptive.dish.events","change-active-dish-modificators","pozn-adaptive.dish.events/change-active-dish-modificators",-899759407),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v], null),(function (p__12526,p__12527){
var map__12528 = p__12526;
var map__12528__$1 = ((((!((map__12528 == null)))?((((map__12528.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12528.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12528):map__12528);
var db = map__12528__$1;
var active_items = cljs.core.get.call(null,map__12528__$1,new cljs.core.Keyword(null,"active-items","active-items",-1682550794));
var editing = cljs.core.get.call(null,map__12528__$1,new cljs.core.Keyword(null,"editing","editing",1365491601));
var vec__12529 = p__12527;
var new_modificator = cljs.core.nth.call(null,vec__12529,(0),null);
if(cljs.core.truth_(editing)){
var next_id = pozn_adaptive.helpers.allocate_next_id.call(null,cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-items","active-items",-1682550794),new cljs.core.Keyword(null,"active-dish-in-receipt","active-dish-in-receipt",-934600953),new cljs.core.Keyword(null,"modificators","modificators",791127331)], null)));
var updated_dish = cljs.core.update.call(null,cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-items","active-items",-1682550794),new cljs.core.Keyword(null,"active-dish-in-receipt","active-dish-in-receipt",-934600953)], null)),new cljs.core.Keyword(null,"modificators","modificators",791127331),((function (next_id,map__12528,map__12528__$1,db,active_items,editing,vec__12529,new_modificator){
return (function (p1__12524_SHARP_){
return cljs.core.assoc.call(null,p1__12524_SHARP_,next_id,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),next_id,new cljs.core.Keyword(null,"message","message",-406056002),new_modificator], null));
});})(next_id,map__12528,map__12528__$1,db,active_items,editing,vec__12529,new_modificator))
);
return cljs.core.assoc_in.call(null,cljs.core.update_in.call(null,db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sale-receipts","sale-receipts",630620995),new cljs.core.Keyword(null,"active-receipt","active-receipt",916564651).cljs$core$IFn$_invoke$arity$1(active_items),new cljs.core.Keyword(null,"guests","guests",617113038),new cljs.core.Keyword(null,"active-guest","active-guest",1493829244).cljs$core$IFn$_invoke$arity$1(active_items),new cljs.core.Keyword(null,"dishes","dishes",1259783877)], null),((function (next_id,updated_dish,map__12528,map__12528__$1,db,active_items,editing,vec__12529,new_modificator){
return (function (dishes){
return cljs.core.mapv.call(null,((function (next_id,updated_dish,map__12528,map__12528__$1,db,active_items,editing,vec__12529,new_modificator){
return (function (p1__12525_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"receipt-id","receipt-id",1658819866).cljs$core$IFn$_invoke$arity$1(p1__12525_SHARP_),new cljs.core.Keyword(null,"receipt-id","receipt-id",1658819866).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"active-dish-in-receipt","active-dish-in-receipt",-934600953).cljs$core$IFn$_invoke$arity$1(active_items)))){
return updated_dish;
} else {
return p1__12525_SHARP_;
}
});})(next_id,updated_dish,map__12528,map__12528__$1,db,active_items,editing,vec__12529,new_modificator))
,dishes);
});})(next_id,updated_dish,map__12528,map__12528__$1,db,active_items,editing,vec__12529,new_modificator))
),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-items","active-items",-1682550794),new cljs.core.Keyword(null,"active-dish-in-receipt","active-dish-in-receipt",-934600953)], null),updated_dish);
} else {
var next_id = pozn_adaptive.helpers.allocate_next_id.call(null,cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-items","active-items",-1682550794),new cljs.core.Keyword(null,"temporary-dish","temporary-dish",1497972516),new cljs.core.Keyword(null,"modificators","modificators",791127331)], null)));
return cljs.core.update_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-items","active-items",-1682550794),new cljs.core.Keyword(null,"temporary-dish","temporary-dish",1497972516),new cljs.core.Keyword(null,"modificators","modificators",791127331)], null),((function (next_id,map__12528,map__12528__$1,db,active_items,editing,vec__12529,new_modificator){
return (function (modificators){
return cljs.core.assoc.call(null,modificators,next_id,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),modificators,new cljs.core.Keyword(null,"message","message",-406056002),new_modificator], null));
});})(next_id,map__12528,map__12528__$1,db,active_items,editing,vec__12529,new_modificator))
);
}
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("pozn-adaptive.dish.events","delete-modificator","pozn-adaptive.dish.events/delete-modificator",1592653207),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v], null),(function (p__12535,p__12536){
var map__12537 = p__12535;
var map__12537__$1 = ((((!((map__12537 == null)))?((((map__12537.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12537.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12537):map__12537);
var db = map__12537__$1;
var active_items = cljs.core.get.call(null,map__12537__$1,new cljs.core.Keyword(null,"active-items","active-items",-1682550794));
var editing = cljs.core.get.call(null,map__12537__$1,new cljs.core.Keyword(null,"editing","editing",1365491601));
var vec__12538 = p__12536;
var id = cljs.core.nth.call(null,vec__12538,(0),null);
if(cljs.core.truth_(editing)){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sale-receipts","sale-receipts",630620995),new cljs.core.Keyword(null,"active-receipt","active-receipt",916564651).cljs$core$IFn$_invoke$arity$1(active_items),new cljs.core.Keyword(null,"guests","guests",617113038),new cljs.core.Keyword(null,"active-guest","active-guest",1493829244).cljs$core$IFn$_invoke$arity$1(active_items),new cljs.core.Keyword(null,"dishes","dishes",1259783877)], null),((function (map__12537,map__12537__$1,db,active_items,editing,vec__12538,id){
return (function (dishes){
return cljs.core.mapv.call(null,((function (map__12537,map__12537__$1,db,active_items,editing,vec__12538,id){
return (function (p1__12533_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"receipt-id","receipt-id",1658819866).cljs$core$IFn$_invoke$arity$1(p1__12533_SHARP_),new cljs.core.Keyword(null,"receipt-id","receipt-id",1658819866).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"active-dish-in-receipt","active-dish-in-receipt",-934600953).cljs$core$IFn$_invoke$arity$1(active_items)))){
return cljs.core.update.call(null,p1__12533_SHARP_,new cljs.core.Keyword(null,"modificators","modificators",791127331),cljs.core.dissoc,id);
} else {
return p1__12533_SHARP_;
}
});})(map__12537,map__12537__$1,db,active_items,editing,vec__12538,id))
,dishes);
});})(map__12537,map__12537__$1,db,active_items,editing,vec__12538,id))
),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-items","active-items",-1682550794),new cljs.core.Keyword(null,"active-dish-in-receipt","active-dish-in-receipt",-934600953),new cljs.core.Keyword(null,"modificators","modificators",791127331)], null),cljs.core.dissoc,id);
} else {
return cljs.core.update_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-items","active-items",-1682550794),new cljs.core.Keyword(null,"temporary-dish","temporary-dish",1497972516),new cljs.core.Keyword(null,"modificators","modificators",791127331)], null),((function (map__12537,map__12537__$1,db,active_items,editing,vec__12538,id){
return (function (p1__12534_SHARP_){
return cljs.core.dissoc.call(null,p1__12534_SHARP_,id);
});})(map__12537,map__12537__$1,db,active_items,editing,vec__12538,id))
);
}
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("pozn-adaptive.dish.events","add-new-dish-with-spec-count","pozn-adaptive.dish.events/add-new-dish-with-spec-count",758732791),(function (p__12544,p__12545){
var map__12546 = p__12544;
var map__12546__$1 = ((((!((map__12546 == null)))?((((map__12546.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12546.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12546):map__12546);
var db = map__12546__$1;
var active_items = cljs.core.get.call(null,map__12546__$1,new cljs.core.Keyword(null,"active-items","active-items",-1682550794));
var vec__12547 = p__12545;
var _ = cljs.core.nth.call(null,vec__12547,(0),null);
var count = cljs.core.nth.call(null,vec__12547,(1),null);
var count__$1 = window.parseInt(count);
var new_dish_id = (new cljs.core.Keyword(null,"receipt-id","receipt-id",1658819866).cljs$core$IFn$_invoke$arity$1(cljs.core.last.call(null,cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sale-receipts","sale-receipts",630620995),new cljs.core.Keyword(null,"active-receipt","active-receipt",916564651).cljs$core$IFn$_invoke$arity$1(active_items),new cljs.core.Keyword(null,"guests","guests",617113038),new cljs.core.Keyword(null,"active-guest","active-guest",1493829244).cljs$core$IFn$_invoke$arity$1(active_items),new cljs.core.Keyword(null,"dishes","dishes",1259783877)], null)))) + (1));
var new_dish = cljs.core.get.call(null,active_items,new cljs.core.Keyword(null,"temporary-dish","temporary-dish",1497972516));
var new_dish_map = cljs.core.merge.call(null,new_dish,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"receipt-id","receipt-id",1658819866),new_dish_id,new cljs.core.Keyword(null,"guest-id","guest-id",-686443324),new cljs.core.Keyword(null,"active-guest","active-guest",1493829244).cljs$core$IFn$_invoke$arity$1(active_items),new cljs.core.Keyword(null,"selected?","selected?",-742502788),false,new cljs.core.Keyword(null,"count","count",2139924085),count__$1], null));
return cljs.core.assoc_in.call(null,cljs.core.update_in.call(null,cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-items","active-items",-1682550794),new cljs.core.Keyword(null,"temporary-dish","temporary-dish",1497972516)], null),null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sale-receipts","sale-receipts",630620995),new cljs.core.Keyword(null,"active-receipt","active-receipt",916564651).cljs$core$IFn$_invoke$arity$1(active_items),new cljs.core.Keyword(null,"guests","guests",617113038),new cljs.core.Keyword(null,"active-guest","active-guest",1493829244).cljs$core$IFn$_invoke$arity$1(active_items),new cljs.core.Keyword(null,"dishes","dishes",1259783877)], null),((function (count__$1,new_dish_id,new_dish,new_dish_map,map__12546,map__12546__$1,db,active_items,vec__12547,_,count){
return (function (active_guest_dishes_vec){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.sort.call(null,((function (count__$1,new_dish_id,new_dish,new_dish_map,map__12546,map__12546__$1,db,active_items,vec__12547,_,count){
return (function (p1__12542_SHARP_,p2__12543_SHARP_){
return cljs.core.compare.call(null,new cljs.core.Keyword(null,"receipt-id","receipt-id",1658819866).cljs$core$IFn$_invoke$arity$1(p1__12542_SHARP_),new cljs.core.Keyword(null,"receipt-id","receipt-id",1658819866).cljs$core$IFn$_invoke$arity$1(p2__12543_SHARP_));
});})(count__$1,new_dish_id,new_dish,new_dish_map,map__12546,map__12546__$1,db,active_items,vec__12547,_,count))
,cljs.core.conj.call(null,active_guest_dishes_vec,new_dish_map)));
});})(count__$1,new_dish_id,new_dish,new_dish_map,map__12546,map__12546__$1,db,active_items,vec__12547,_,count))
),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"slide-template","slide-template",2079807986)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"show?","show?",1543842127),true,new cljs.core.Keyword(null,"template","template",-702405684),new cljs.core.Keyword(null,"menu","menu",352255198)], null));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("pozn-adaptive.dish.events","add-new-dish","pozn-adaptive.dish.events/add-new-dish",-67402052),(function (p__12553,_){
var map__12554 = p__12553;
var map__12554__$1 = ((((!((map__12554 == null)))?((((map__12554.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12554.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12554):map__12554);
var db = map__12554__$1;
var active_items = cljs.core.get.call(null,map__12554__$1,new cljs.core.Keyword(null,"active-items","active-items",-1682550794));
var new_dish_id = (new cljs.core.Keyword(null,"receipt-id","receipt-id",1658819866).cljs$core$IFn$_invoke$arity$1(cljs.core.last.call(null,cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sale-receipts","sale-receipts",630620995),new cljs.core.Keyword(null,"active-receipt","active-receipt",916564651).cljs$core$IFn$_invoke$arity$1(active_items),new cljs.core.Keyword(null,"guests","guests",617113038),new cljs.core.Keyword(null,"active-guest","active-guest",1493829244).cljs$core$IFn$_invoke$arity$1(active_items),new cljs.core.Keyword(null,"dishes","dishes",1259783877)], null)))) + (1));
var new_dish = cljs.core.get.call(null,active_items,new cljs.core.Keyword(null,"temporary-dish","temporary-dish",1497972516));
var new_dish_map = cljs.core.merge.call(null,new_dish,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"receipt-id","receipt-id",1658819866),new_dish_id,new cljs.core.Keyword(null,"guest-id","guest-id",-686443324),new cljs.core.Keyword(null,"active-guest","active-guest",1493829244).cljs$core$IFn$_invoke$arity$1(active_items),new cljs.core.Keyword(null,"selected?","selected?",-742502788),false], null));
return cljs.core.assoc_in.call(null,cljs.core.update_in.call(null,cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-items","active-items",-1682550794),new cljs.core.Keyword(null,"temporary-dish","temporary-dish",1497972516)], null),null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sale-receipts","sale-receipts",630620995),new cljs.core.Keyword(null,"active-receipt","active-receipt",916564651).cljs$core$IFn$_invoke$arity$1(active_items),new cljs.core.Keyword(null,"guests","guests",617113038),new cljs.core.Keyword(null,"active-guest","active-guest",1493829244).cljs$core$IFn$_invoke$arity$1(active_items),new cljs.core.Keyword(null,"dishes","dishes",1259783877)], null),((function (new_dish_id,new_dish,new_dish_map,map__12554,map__12554__$1,db,active_items){
return (function (active_guest_dishes_vec){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.sort.call(null,((function (new_dish_id,new_dish,new_dish_map,map__12554,map__12554__$1,db,active_items){
return (function (p1__12551_SHARP_,p2__12552_SHARP_){
return cljs.core.compare.call(null,new cljs.core.Keyword(null,"receipt-id","receipt-id",1658819866).cljs$core$IFn$_invoke$arity$1(p1__12551_SHARP_),new cljs.core.Keyword(null,"receipt-id","receipt-id",1658819866).cljs$core$IFn$_invoke$arity$1(p2__12552_SHARP_));
});})(new_dish_id,new_dish,new_dish_map,map__12554,map__12554__$1,db,active_items))
,cljs.core.conj.call(null,active_guest_dishes_vec,new_dish_map)));
});})(new_dish_id,new_dish,new_dish_map,map__12554,map__12554__$1,db,active_items))
),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"slide-template","slide-template",2079807986)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"show?","show?",1543842127),true,new cljs.core.Keyword(null,"template","template",-702405684),new cljs.core.Keyword(null,"menu","menu",352255198)], null));
}));

//# sourceMappingURL=events.js.map
