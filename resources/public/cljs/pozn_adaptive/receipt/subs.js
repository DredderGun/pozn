// Compiled by ClojureScript 1.9.908 {}
goog.provide('pozn_adaptive.receipt.subs');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('pozn_adaptive.subs');
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("pozn-adaptive.receipt.subs","active-items","pozn-adaptive.receipt.subs/active-items",718514205),(function (db,_){
return new cljs.core.Keyword(null,"active-items","active-items",-1682550794).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("pozn-adaptive.receipt.subs","sale-receipts","pozn-adaptive.receipt.subs/sale-receipts",880048636),(function (db,_){
return new cljs.core.Keyword(null,"sale-receipts","sale-receipts",630620995).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("pozn-adaptive.receipt.subs","active-receipt","pozn-adaptive.receipt.subs/active-receipt",121614836),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pozn-adaptive.receipt.subs","sale-receipts","pozn-adaptive.receipt.subs/sale-receipts",880048636)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pozn-adaptive.receipt.subs","active-items","pozn-adaptive.receipt.subs/active-items",718514205)], null),(function (p__19621){
var vec__19622 = p__19621;
var sale_receipts = cljs.core.nth.call(null,vec__19622,(0),null);
var active_items = cljs.core.nth.call(null,vec__19622,(1),null);
return cljs.core.get.call(null,sale_receipts,new cljs.core.Keyword(null,"active-receipt","active-receipt",916564651).cljs$core$IFn$_invoke$arity$1(active_items));
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("pozn-adaptive.receipt.subs","receipt-status-text","pozn-adaptive.receipt.subs/receipt-status-text",-1875552495),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pozn-adaptive.receipt.subs","active-receipt","pozn-adaptive.receipt.subs/active-receipt",121614836)], null),(function (active_receipt){
if(cljs.core.truth_(new cljs.core.Keyword(null,"paid?","paid?",1217824088).cljs$core$IFn$_invoke$arity$1(active_receipt))){
return "\u041E\u043F\u043B\u0430\u0447\u0435\u043D";
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"sent?","sent?",1251086682).cljs$core$IFn$_invoke$arity$1(active_receipt))){
return "\u041E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D";
} else {
return "";

}
}
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("pozn-adaptive.receipt.subs","active-receipt-paid?","pozn-adaptive.receipt.subs/active-receipt-paid?",-2032250986),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pozn-adaptive.receipt.subs","active-receipt","pozn-adaptive.receipt.subs/active-receipt",121614836)], null),(function (active_receipt){
return new cljs.core.Keyword(null,"paid?","paid?",1217824088).cljs$core$IFn$_invoke$arity$1(active_receipt);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("pozn-adaptive.receipt.subs","active-receipt-sent?","pozn-adaptive.receipt.subs/active-receipt-sent?",214139298),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pozn-adaptive.receipt.subs","active-receipt","pozn-adaptive.receipt.subs/active-receipt",121614836)], null),(function (active_receipt){
return new cljs.core.Keyword(null,"sent?","sent?",1251086682).cljs$core$IFn$_invoke$arity$1(active_receipt);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("pozn-adaptive.receipt.subs","active-receipts-guests-ids","pozn-adaptive.receipt.subs/active-receipts-guests-ids",1775629068),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pozn-adaptive.receipt.subs","active-receipt","pozn-adaptive.receipt.subs/active-receipt",121614836)], null),(function (active_receipt){
return cljs.core.map.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.vals.call(null,new cljs.core.Keyword(null,"guests","guests",617113038).cljs$core$IFn$_invoke$arity$1(active_receipt)));
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("pozn-adaptive.receipt.subs","active-receipt-id","pozn-adaptive.receipt.subs/active-receipt-id",1120691601),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pozn-adaptive.receipt.subs","active-receipt","pozn-adaptive.receipt.subs/active-receipt",121614836)], null),(function (active_receipt){
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(active_receipt);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("pozn-adaptive.receipt.subs","active-receipt-dates","pozn-adaptive.receipt.subs/active-receipt-dates",-1160423355),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pozn-adaptive.receipt.subs","active-receipt","pozn-adaptive.receipt.subs/active-receipt",121614836)], null),(function (active_receipt){
return new cljs.core.Keyword(null,"dates","dates",-1600154075).cljs$core$IFn$_invoke$arity$1(active_receipt);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("pozn-adaptive.receipt.subs","receipt-is-empty?","pozn-adaptive.receipt.subs/receipt-is-empty?",-1375710798),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pozn-adaptive.receipt.subs","sale-receipts","pozn-adaptive.receipt.subs/sale-receipts",880048636)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pozn-adaptive.receipt.subs","active-receipt","pozn-adaptive.receipt.subs/active-receipt",121614836)], null),(function (p__19626){
var vec__19627 = p__19626;
var sale_receipts = cljs.core.nth.call(null,vec__19627,(0),null);
var active_receipt = cljs.core.nth.call(null,vec__19627,(1),null);
var G__19630 = cljs.core.some.call(null,((function (vec__19627,sale_receipts,active_receipt){
return (function (p1__19625_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"active-receipt","active-receipt",916564651).cljs$core$IFn$_invoke$arity$1(active_receipt),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__19625_SHARP_))){
return cljs.core.count.call(null,new cljs.core.Keyword(null,"dishes","dishes",1259783877).cljs$core$IFn$_invoke$arity$1(p1__19625_SHARP_));
} else {
return null;
}
});})(vec__19627,sale_receipts,active_receipt))
,sale_receipts);
switch (G__19630) {
case (0):
return true;

break;
default:
return false;

}
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("pozn-adaptive.receipt.subs","modal-window","pozn-adaptive.receipt.subs/modal-window",27257980),(function (db,p__19632){
var vec__19633 = p__19632;
var _ = cljs.core.nth.call(null,vec__19633,(0),null);
var m_window_key = cljs.core.nth.call(null,vec__19633,(1),null);
return m_window_key.call(null,new cljs.core.Keyword(null,"modal-windows","modal-windows",-797029455).cljs$core$IFn$_invoke$arity$1(db));
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("pozn-adaptive.receipt.subs","active-guest-id","pozn-adaptive.receipt.subs/active-guest-id",-1013606943),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pozn-adaptive.receipt.subs","active-items","pozn-adaptive.receipt.subs/active-items",718514205)], null),(function (active_items){
return new cljs.core.Keyword(null,"active-guest","active-guest",1493829244).cljs$core$IFn$_invoke$arity$1(active_items);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("pozn-adaptive.receipt.subs","active-guest","pozn-adaptive.receipt.subs/active-guest",-369824189),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pozn-adaptive.receipt.subs","active-guest-id","pozn-adaptive.receipt.subs/active-guest-id",-1013606943)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pozn-adaptive.receipt.subs","sale-receipts","pozn-adaptive.receipt.subs/sale-receipts",880048636)], null),(function (active_guest_id,sale_receipts){
return cljs.core.get.call(null,sale_receipts,active_guest_id);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("pozn-adaptive.receipt.subs","swipe-events","pozn-adaptive.receipt.subs/swipe-events",-715014596),(function (db,_){
return new cljs.core.Keyword(null,"swipe-events","swipe-events",-1027617519).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("pozn-adaptive.receipt.subs","current-position","pozn-adaptive.receipt.subs/current-position",1777463783),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pozn-adaptive.receipt.subs","swipe-events","pozn-adaptive.receipt.subs/swipe-events",-715014596)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pozn-adaptive.receipt.subs","active-guest-id","pozn-adaptive.receipt.subs/active-guest-id",-1013606943)], null),(function (p__19636,query){
var vec__19637 = p__19636;
var swipe_events = cljs.core.nth.call(null,vec__19637,(0),null);
var active_guest_id = cljs.core.nth.call(null,vec__19637,(1),null);
var guest_id = cljs.core.second.call(null,query);
if(cljs.core._EQ_.call(null,guest_id,active_guest_id)){
return new cljs.core.Keyword(null,"temporary-swipe","temporary-swipe",-1569396232).cljs$core$IFn$_invoke$arity$1(swipe_events);
} else {
return (0);
}
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("pozn-adaptive.receipt.subs","swipe-transition?","pozn-adaptive.receipt.subs/swipe-transition?",1626254505),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pozn-adaptive.receipt.subs","swipe-events","pozn-adaptive.receipt.subs/swipe-events",-715014596)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pozn-adaptive.receipt.subs","active-guest-id","pozn-adaptive.receipt.subs/active-guest-id",-1013606943)], null),(function (p__19640,query){
var vec__19641 = p__19640;
var swipe_events = cljs.core.nth.call(null,vec__19641,(0),null);
var active_guest_id = cljs.core.nth.call(null,vec__19641,(1),null);
var guest_id = cljs.core.second.call(null,query);
if(cljs.core._EQ_.call(null,guest_id,active_guest_id)){
return new cljs.core.Keyword(null,"duration","duration",1444101068).cljs$core$IFn$_invoke$arity$1(swipe_events);
} else {
return false;
}
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("pozn-adaptive.receipt.subs","specified-guest","pozn-adaptive.receipt.subs/specified-guest",1474086063),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pozn-adaptive.receipt.subs","active-receipt","pozn-adaptive.receipt.subs/active-receipt",121614836)], null),(function (active_receipt,guest_id){
return cljs.core.get_in.call(null,active_receipt,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"guests","guests",617113038),cljs.core.second.call(null,guest_id)], null));
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("pozn-adaptive.receipt.subs","specified-guest-sum","pozn-adaptive.receipt.subs/specified-guest-sum",-1891415677),(function (query_v){
var guest_id = cljs.core.second.call(null,query_v);
return re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pozn-adaptive.receipt.subs","specified-guest","pozn-adaptive.receipt.subs/specified-guest",1474086063),guest_id], null));
}),(function (specified_guest){
return cljs.core.reduce.call(null,(function (sum,dish){
return (sum + (new cljs.core.Keyword(null,"price","price",22129180).cljs$core$IFn$_invoke$arity$1(dish) * new cljs.core.Keyword(null,"count","count",2139924085).cljs$core$IFn$_invoke$arity$1(dish)));
}),(0),new cljs.core.Keyword(null,"dishes","dishes",1259783877).cljs$core$IFn$_invoke$arity$1(specified_guest));
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("pozn-adaptive.receipt.subs","specified-guest-id","pozn-adaptive.receipt.subs/specified-guest-id",-1197502405),(function (query_v){
var guest_id = cljs.core.second.call(null,query_v);
return re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pozn-adaptive.receipt.subs","specified-guest","pozn-adaptive.receipt.subs/specified-guest",1474086063),guest_id], null));
}),(function (specified_guest){
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(specified_guest);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("pozn-adaptive.receipt.subs","active-guest?","pozn-adaptive.receipt.subs/active-guest?",-1228045896),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pozn-adaptive.receipt.subs","active-guest-id","pozn-adaptive.receipt.subs/active-guest-id",-1013606943)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pozn-adaptive.receipt.subs","active-receipt-paid?","pozn-adaptive.receipt.subs/active-receipt-paid?",-2032250986)], null),(function (p__19644,p__19645){
var vec__19646 = p__19644;
var active_guest_id = cljs.core.nth.call(null,vec__19646,(0),null);
var active_receipt_paid_QMARK_ = cljs.core.nth.call(null,vec__19646,(1),null);
var vec__19649 = p__19645;
var _ = cljs.core.nth.call(null,vec__19649,(0),null);
var guest_id = cljs.core.nth.call(null,vec__19649,(1),null);
if((cljs.core._EQ_.call(null,active_guest_id,guest_id)) && (cljs.core.not.call(null,active_receipt_paid_QMARK_))){
return true;
} else {
return false;
}
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("pozn-adaptive.receipt.subs","all-dishes-selected?","pozn-adaptive.receipt.subs/all-dishes-selected?",1499328093),(function (db,_){
return cljs.core.every_QMARK_.call(null,new cljs.core.Keyword(null,"selected?","selected?",-742502788),cljs.core.some.call(null,(function (p1__19652_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"active-receipt","active-receipt",916564651).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__19652_SHARP_))){
return new cljs.core.Keyword(null,"dishes","dishes",1259783877).cljs$core$IFn$_invoke$arity$1(p1__19652_SHARP_);
} else {
return null;
}
}),new cljs.core.Keyword(null,"sale-receipts","sale-receipts",630620995).cljs$core$IFn$_invoke$arity$1(db)));
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("pozn-adaptive.receipt.subs","active-table","pozn-adaptive.receipt.subs/active-table",369118143),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pozn-adaptive.receipt.subs","active-items","pozn-adaptive.receipt.subs/active-items",718514205)], null),(function (active_items){
return new cljs.core.Keyword(null,"active-table","active-table",39998616).cljs$core$IFn$_invoke$arity$1(active_items);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("pozn-adaptive.receipt.subs","active-receipt-guests","pozn-adaptive.receipt.subs/active-receipt-guests",1995907664),(function (db,_){
return cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sale-receipts","sale-receipts",630620995),new cljs.core.Keyword(null,"active-receipt","active-receipt",916564651).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.Keyword(null,"guests","guests",617113038)], null));
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("pozn-adaptive.receipt.subs","top-bar-table-text","pozn-adaptive.receipt.subs/top-bar-table-text",-1042273234),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pozn-adaptive.receipt.subs","active-receipt","pozn-adaptive.receipt.subs/active-receipt",121614836)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pozn-adaptive.receipt.subs","active-table","pozn-adaptive.receipt.subs/active-table",369118143)], null),(function (p__19653){
var vec__19654 = p__19653;
var active_receipt = cljs.core.nth.call(null,vec__19654,(0),null);
var active_table = cljs.core.nth.call(null,vec__19654,(1),null);
var order_wo_table_QMARK_ = cljs.core.not_EQ_.call(null,cljs.core.nth.call(null,active_table,(0)),(0));
if(order_wo_table_QMARK_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,new cljs.core.Keyword(null,"table","table",-564943036).cljs$core$IFn$_invoke$arity$1(active_receipt),(0))),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,new cljs.core.Keyword(null,"table","table",-564943036).cljs$core$IFn$_invoke$arity$1(active_receipt),(1)))].join('');
} else {
return "\u0411\u0435\u0437 \u0441\u0442\u043E\u043B\u0430";
}
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("pozn-adaptive.receipt.subs","position-slide-panel","pozn-adaptive.receipt.subs/position-slide-panel",915026715),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pozn-adaptive.subs","slide-template-map","pozn-adaptive.subs/slide-template-map",-1507578359)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pozn-adaptive.subs","window-width","pozn-adaptive.subs/window-width",719446050)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pozn-adaptive.receipt.subs","window-width","pozn-adaptive.receipt.subs/window-width",1825174584)], null),(function (p__19657){
var vec__19658 = p__19657;
var slide_template_map = cljs.core.nth.call(null,vec__19658,(0),null);
var window_width = cljs.core.nth.call(null,vec__19658,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"show?","show?",1543842127).cljs$core$IFn$_invoke$arity$1(slide_template_map))){
return (0);
} else {
return window_width;
}
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("pozn-adaptive.receipt.subs","slide-panel-template","pozn-adaptive.receipt.subs/slide-panel-template",-1028951275),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pozn-adaptive.subs","slide-template-map","pozn-adaptive.subs/slide-template-map",-1507578359)], null),(function (slide_template_map){
return new cljs.core.Keyword(null,"template","template",-702405684).cljs$core$IFn$_invoke$arity$1(slide_template_map);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("pozn-adaptive.receipt.subs","menu-panel-width","pozn-adaptive.receipt.subs/menu-panel-width",681070577),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pozn-adaptive.subs","window-width","pozn-adaptive.subs/window-width",719446050)], null),(function (window_width){
return (0.8 * window_width);
}));

//# sourceMappingURL=subs.js.map
