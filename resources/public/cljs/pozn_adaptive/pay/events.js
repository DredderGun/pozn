// Compiled by ClojureScript 1.9.908 {}
goog.provide('pozn_adaptive.pay.events');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('cljs.reader');
goog.require('cljs_time.core');
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("pozn-adaptive.pay.events","change-layout","pozn-adaptive.pay.events/change-layout",-1584724784),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v], null),(function (db,p__17502){
var vec__17503 = p__17502;
var layout_key = cljs.core.nth.call(null,vec__17503,(0),null);
if(cljs.core._EQ_.call(null,layout_key,new cljs.core.Keyword(null,"new-sale-receipt","new-sale-receipt",-587581497))){
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"layout","layout",-2120940921),layout_key),new cljs.core.Keyword(null,"old-dish?","old-dish?",888066017),false);
} else {
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"layout","layout",-2120940921),layout_key);
}
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("pozn-adaptive.pay.events","add-all-sum-to-specified-payment","pozn-adaptive.pay.events/add-all-sum-to-specified-payment",-1240827199),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v], null),(function (db,p__17506){
var vec__17507 = p__17506;
var payment_key = cljs.core.nth.call(null,vec__17507,(0),null);
var update_payment = ((function (vec__17507,payment_key){
return (function (payment_key__$1){
return cljs.core.update_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sale-receipts","sale-receipts",630620995),new cljs.core.Keyword(null,"active-receipt","active-receipt",916564651).cljs$core$IFn$_invoke$arity$1(db)], null),((function (vec__17507,payment_key){
return (function (active_receipt){
if(cljs.core._EQ_.call(null,payment_key__$1,new cljs.core.Keyword(null,"cash","cash",181122222))){
return cljs.core.assoc.call(null,active_receipt,new cljs.core.Keyword(null,"payment","payment",-1682035288),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cash","cash",181122222),new cljs.core.Keyword(null,"sum_price","sum_price",1832391009).cljs$core$IFn$_invoke$arity$1(active_receipt),new cljs.core.Keyword(null,"card","card",-1430355152),(0)], null));
} else {
return cljs.core.assoc.call(null,active_receipt,new cljs.core.Keyword(null,"payment","payment",-1682035288),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"card","card",-1430355152),new cljs.core.Keyword(null,"sum_price","sum_price",1832391009).cljs$core$IFn$_invoke$arity$1(active_receipt),new cljs.core.Keyword(null,"cash","cash",181122222),(0)], null));
}
});})(vec__17507,payment_key))
);
});})(vec__17507,payment_key))
;
var G__17510 = payment_key;
var G__17510__$1 = (((G__17510 instanceof cljs.core.Keyword))?G__17510.fqn:null);
switch (G__17510__$1) {
case "cash":
return update_payment.call(null,payment_key);

break;
case "card":
return update_payment.call(null,payment_key);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__17510__$1)].join('')));

}
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("pozn-adaptive.pay.events","change-card-or-cash-sum","pozn-adaptive.pay.events/change-card-or-cash-sum",-1583735376),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v], null),(function (p__17512,p__17513){
var map__17514 = p__17512;
var map__17514__$1 = ((((!((map__17514 == null)))?((((map__17514.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17514.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17514):map__17514);
var db = map__17514__$1;
var active_items = cljs.core.get.call(null,map__17514__$1,new cljs.core.Keyword(null,"active-items","active-items",-1682550794));
var vec__17515 = p__17513;
var payment = cljs.core.nth.call(null,vec__17515,(0),null);
var sum = cljs.core.nth.call(null,vec__17515,(1),null);
var sum__$1 = cljs.reader.read_string.call(null,sum);
return cljs.core.update_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sale-receipts","sale-receipts",630620995),new cljs.core.Keyword(null,"active-receipt","active-receipt",916564651).cljs$core$IFn$_invoke$arity$1(active_items)], null),((function (sum__$1,map__17514,map__17514__$1,db,active_items,vec__17515,payment,sum){
return (function (active_receipt){
if(cljs.core._EQ_.call(null,payment,new cljs.core.Keyword(null,"cash","cash",181122222))){
if((sum__$1 < new cljs.core.Keyword(null,"sum","sum",136986814).cljs$core$IFn$_invoke$arity$1(active_receipt))){
return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,active_receipt,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"payment","payment",-1682035288),new cljs.core.Keyword(null,"cash","cash",181122222)], null),sum__$1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"payment","payment",-1682035288),new cljs.core.Keyword(null,"card","card",-1430355152)], null),(new cljs.core.Keyword(null,"sum","sum",136986814).cljs$core$IFn$_invoke$arity$1(active_receipt) - sum__$1));
} else {
return cljs.core.assoc.call(null,active_receipt,new cljs.core.Keyword(null,"payment","payment",-1682035288),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cash","cash",181122222),new cljs.core.Keyword(null,"sum","sum",136986814).cljs$core$IFn$_invoke$arity$1(active_receipt),new cljs.core.Keyword(null,"card","card",-1430355152),(0)], null));
}
} else {
if((sum__$1 < new cljs.core.Keyword(null,"sum","sum",136986814).cljs$core$IFn$_invoke$arity$1(active_receipt))){
return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,active_receipt,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"payment","payment",-1682035288),new cljs.core.Keyword(null,"card","card",-1430355152)], null),sum__$1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"payment","payment",-1682035288),new cljs.core.Keyword(null,"cash","cash",181122222)], null),(new cljs.core.Keyword(null,"sum","sum",136986814).cljs$core$IFn$_invoke$arity$1(active_receipt) - sum__$1));
} else {
return cljs.core.assoc.call(null,active_receipt,new cljs.core.Keyword(null,"payment","payment",-1682035288),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cash","cash",181122222),(0),new cljs.core.Keyword(null,"card","card",-1430355152),new cljs.core.Keyword(null,"sum","sum",136986814).cljs$core$IFn$_invoke$arity$1(active_receipt)], null));
}
}
});})(sum__$1,map__17514,map__17514__$1,db,active_items,vec__17515,payment,sum))
);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("pozn-adaptive.pay.events","pay-receipt","pozn-adaptive.pay.events/pay-receipt",-1939569645),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v], null),(function (p__17519,_){
var map__17520 = p__17519;
var map__17520__$1 = ((((!((map__17520 == null)))?((((map__17520.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17520.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17520):map__17520);
var db = map__17520__$1;
var active_items = cljs.core.get.call(null,map__17520__$1,new cljs.core.Keyword(null,"active-items","active-items",-1682550794));
return cljs.core.assoc.call(null,cljs.core.update_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sale-receipts","sale-receipts",630620995),new cljs.core.Keyword(null,"active-receipt","active-receipt",916564651).cljs$core$IFn$_invoke$arity$1(active_items)], null),((function (map__17520,map__17520__$1,db,active_items){
return (function (active_receipt){
return cljs.core.update.call(null,cljs.core.assoc.call(null,active_receipt,new cljs.core.Keyword(null,"paid?","paid?",1217824088),true),new cljs.core.Keyword(null,"dates","dates",-1600154075),cljs.core.merge,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pay","pay",-1672734919),cljs_time.core.time_now.call(null)], null));
});})(map__17520,map__17520__$1,db,active_items))
),new cljs.core.Keyword(null,"layout","layout",-2120940921),new cljs.core.Keyword(null,"sale-receipts-layout","sale-receipts-layout",-542663967));
}));

//# sourceMappingURL=events.js.map
