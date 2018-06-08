// Compiled by ClojureScript 1.9.908 {}
goog.provide('pozn_adaptive.sale_receipt_list.view');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('re_com.core');
goog.require('pozn_adaptive.sale_receipt_list.events');
goog.require('pozn_adaptive.sale_receipt_list.subs');
goog.require('reagent.core');
goog.require('pozn_adaptive.errors.error_window');
pozn_adaptive.sale_receipt_list.view.sandwich_menu = (function pozn_adaptive$sale_receipt_list$view$sandwich_menu(){
var sandwich_is_open_QMARK_ = reagent.core.atom.call(null,false);
return ((function (sandwich_is_open_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(cljs.core.deref.call(null,sandwich_is_open_QMARK_))?"sandwich-menu-container change":"sandwich-menu-container"),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (sandwich_is_open_QMARK_){
return (function (){
return cljs.core.swap_BANG_.call(null,sandwich_is_open_QMARK_,cljs.core.not);
});})(sandwich_is_open_QMARK_))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.bar1","div.bar1",-253427799)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.bar2","div.bar2",49279752)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.bar3","div.bar3",-641890383)], null),(cljs.core.truth_(cljs.core.deref.call(null,sandwich_is_open_QMARK_))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.modal-window.sandwich-panel","div.modal-window.sandwich-panel",-878536920),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.modal-window-panel-item","div.modal-window-panel-item",-800587321),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (sandwich_is_open_QMARK_){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pozn-adaptive.sale-receipt-list.events","give-statistic","pozn-adaptive.sale-receipt-list.events/give-statistic",-220736221)], null));
});})(sandwich_is_open_QMARK_))
], null),"\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0430"], null)], null):null)], null);
});
;})(sandwich_is_open_QMARK_))
});
pozn_adaptive.sale_receipt_list.view.sale_receipt_list = (function pozn_adaptive$sale_receipt_list$view$sale_receipt_list(){
var sale_receipts = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pozn-adaptive.sale-receipt-list.subs","sale-receipts","pozn-adaptive.sale-receipt-list.subs/sale-receipts",1300214137)], null));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"class","class",-2030961996),"sale-receipt-list",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pozn_adaptive.errors.error_window.error_window], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.chevron-wrapper","div.chevron-wrapper",1655762071),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),"\u0421\u043F\u0438\u0441\u043E\u043A \u0447\u0435\u043A\u043E\u0432",new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level1","level1",813811133)], null),new cljs.core.Keyword(null,"align-self","align-self",1475936794),new cljs.core.Keyword(null,"center","center",-748944368)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pozn_adaptive.sale_receipt_list.view.sandwich_menu], null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"class","class",-2030961996),"list-group sale-receipts-wrapper",new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,(function (){var iter__8453__auto__ = ((function (sale_receipts){
return (function pozn_adaptive$sale_receipt_list$view$sale_receipt_list_$_iter__20390(s__20391){
return (new cljs.core.LazySeq(null,((function (sale_receipts){
return (function (){
var s__20391__$1 = s__20391;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__20391__$1);
if(temp__4657__auto__){
var s__20391__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__20391__$2)){
var c__8451__auto__ = cljs.core.chunk_first.call(null,s__20391__$2);
var size__8452__auto__ = cljs.core.count.call(null,c__8451__auto__);
var b__20393 = cljs.core.chunk_buffer.call(null,size__8452__auto__);
if((function (){var i__20392 = (0);
while(true){
if((i__20392 < size__8452__auto__)){
var sale_receipt = cljs.core._nth.call(null,c__8451__auto__,i__20392);
cljs.core.chunk_append.call(null,b__20393,cljs.core.with_meta(new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(sale_receipt),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(sale_receipt),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(sale_receipt),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__20392,sale_receipt,c__8451__auto__,size__8452__auto__,b__20393,s__20391__$2,temp__4657__auto__,sale_receipts){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pozn-adaptive.sale-receipt-list.events","turn-on-old-receipt","pozn-adaptive.sale-receipt-list.events/turn-on-old-receipt",112178146),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(sale_receipt)], null));
});})(i__20392,sale_receipt,c__8451__auto__,size__8452__auto__,b__20393,s__20391__$2,temp__4657__auto__,sale_receipts))
], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(sale_receipt)], null)));

var G__20394 = (i__20392 + (1));
i__20392 = G__20394;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20393),pozn_adaptive$sale_receipt_list$view$sale_receipt_list_$_iter__20390.call(null,cljs.core.chunk_rest.call(null,s__20391__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20393),null);
}
} else {
var sale_receipt = cljs.core.first.call(null,s__20391__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(sale_receipt),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(sale_receipt),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(sale_receipt),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (sale_receipt,s__20391__$2,temp__4657__auto__,sale_receipts){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pozn-adaptive.sale-receipt-list.events","turn-on-old-receipt","pozn-adaptive.sale-receipt-list.events/turn-on-old-receipt",112178146),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(sale_receipt)], null));
});})(sale_receipt,s__20391__$2,temp__4657__auto__,sale_receipts))
], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(sale_receipt)], null)),pozn_adaptive$sale_receipt_list$view$sale_receipt_list_$_iter__20390.call(null,cljs.core.rest.call(null,s__20391__$2)));
}
} else {
return null;
}
break;
}
});})(sale_receipts))
,null,null));
});})(sale_receipts))
;
return iter__8453__auto__.call(null,cljs.core.deref.call(null,sale_receipts));
})())], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.add-button","button.add-button",-1341877874),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (sale_receipts){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pozn-adaptive.sale-receipt-list.events","change-layout","pozn-adaptive.sale-receipt-list.events/change-layout",-1277227815),new cljs.core.Keyword(null,"tables","tables",1334623052)], null));
});})(sale_receipts))
], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.md_icon_button,new cljs.core.Keyword(null,"md-icon-name","md-icon-name",681785863),"zmdi-plus",new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"larger","larger",1304935444)], null)], null)], null)], null);
});

//# sourceMappingURL=view.js.map
