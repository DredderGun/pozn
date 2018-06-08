// Compiled by ClojureScript 1.9.908 {}
goog.provide('pozn_adaptive.sale_receipt_list.subs');
goog.require('cljs.core');
goog.require('re_frame.core');
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("pozn-adaptive.sale-receipt-list.subs","sale-receipts","pozn-adaptive.sale-receipt-list.subs/sale-receipts",1300214137),(function (db,_){
var iter__8453__auto__ = (function pozn_adaptive$sale_receipt_list$subs$iter__20381(s__20382){
return (new cljs.core.LazySeq(null,(function (){
var s__20382__$1 = s__20382;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__20382__$1);
if(temp__4657__auto__){
var s__20382__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__20382__$2)){
var c__8451__auto__ = cljs.core.chunk_first.call(null,s__20382__$2);
var size__8452__auto__ = cljs.core.count.call(null,c__8451__auto__);
var b__20384 = cljs.core.chunk_buffer.call(null,size__8452__auto__);
if((function (){var i__20383 = (0);
while(true){
if((i__20383 < size__8452__auto__)){
var sale_receipt = cljs.core._nth.call(null,c__8451__auto__,i__20383);
cljs.core.chunk_append.call(null,b__20384,(function (){var styles = (cljs.core.truth_((function (){var and__7633__auto__ = new cljs.core.Keyword(null,"paid?","paid?",1217824088).cljs$core$IFn$_invoke$arity$1(sale_receipt);
if(cljs.core.truth_(and__7633__auto__)){
return new cljs.core.Keyword(null,"sent?","sent?",1251086682).cljs$core$IFn$_invoke$arity$1(sale_receipt);
} else {
return and__7633__auto__;
}
})())?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),"#9BD8F4"], null):(cljs.core.truth_(new cljs.core.Keyword(null,"paid?","paid?",1217824088).cljs$core$IFn$_invoke$arity$1(sale_receipt))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),"#9BD8F4"], null):(cljs.core.truth_(new cljs.core.Keyword(null,"sent?","sent?",1251086682).cljs$core$IFn$_invoke$arity$1(sale_receipt))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),"#BBF376"], null):null)));
var label = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core.not_EQ_.call(null,cljs.core.nth.call(null,new cljs.core.Keyword(null,"table","table",-564943036).cljs$core$IFn$_invoke$arity$1(sale_receipt),(0)),(0)))?["\u0421\u0442\u043E\u043B: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,new cljs.core.Keyword(null,"table","table",-564943036).cljs$core$IFn$_invoke$arity$1(sale_receipt),(0))),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,new cljs.core.Keyword(null,"table","table",-564943036).cljs$core$IFn$_invoke$arity$1(sale_receipt),(1)))].join(''):"\u041D\u0435\u0442 \u0441\u0442\u043E\u043B\u0430"))," ","\u0427\u0435\u043A ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(sale_receipt))," ","\u0421\u0443\u043C\u043C\u0430 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"sum","sum",136986814).cljs$core$IFn$_invoke$arity$1(sale_receipt))].join('');
var G__20385 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(sale_receipt),new cljs.core.Keyword(null,"class","class",-2030961996),"list-group-item table-button list-button",new cljs.core.Keyword(null,"style","style",-496642736),styles,new cljs.core.Keyword(null,"label","label",1718410804),label], null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"paid?","paid?",1217824088).cljs$core$IFn$_invoke$arity$1(sale_receipt))){
return cljs.core.assoc.call(null,G__20385,new cljs.core.Keyword(null,"class","class",-2030961996),"list-group-item table-button list-button paid");
} else {
return G__20385;
}
})());

var G__20387 = (i__20383 + (1));
i__20383 = G__20387;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20384),pozn_adaptive$sale_receipt_list$subs$iter__20381.call(null,cljs.core.chunk_rest.call(null,s__20382__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20384),null);
}
} else {
var sale_receipt = cljs.core.first.call(null,s__20382__$2);
return cljs.core.cons.call(null,(function (){var styles = (cljs.core.truth_((function (){var and__7633__auto__ = new cljs.core.Keyword(null,"paid?","paid?",1217824088).cljs$core$IFn$_invoke$arity$1(sale_receipt);
if(cljs.core.truth_(and__7633__auto__)){
return new cljs.core.Keyword(null,"sent?","sent?",1251086682).cljs$core$IFn$_invoke$arity$1(sale_receipt);
} else {
return and__7633__auto__;
}
})())?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),"#9BD8F4"], null):(cljs.core.truth_(new cljs.core.Keyword(null,"paid?","paid?",1217824088).cljs$core$IFn$_invoke$arity$1(sale_receipt))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),"#9BD8F4"], null):(cljs.core.truth_(new cljs.core.Keyword(null,"sent?","sent?",1251086682).cljs$core$IFn$_invoke$arity$1(sale_receipt))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),"#BBF376"], null):null)));
var label = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core.not_EQ_.call(null,cljs.core.nth.call(null,new cljs.core.Keyword(null,"table","table",-564943036).cljs$core$IFn$_invoke$arity$1(sale_receipt),(0)),(0)))?["\u0421\u0442\u043E\u043B: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,new cljs.core.Keyword(null,"table","table",-564943036).cljs$core$IFn$_invoke$arity$1(sale_receipt),(0))),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,new cljs.core.Keyword(null,"table","table",-564943036).cljs$core$IFn$_invoke$arity$1(sale_receipt),(1)))].join(''):"\u041D\u0435\u0442 \u0441\u0442\u043E\u043B\u0430"))," ","\u0427\u0435\u043A ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(sale_receipt))," ","\u0421\u0443\u043C\u043C\u0430 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"sum","sum",136986814).cljs$core$IFn$_invoke$arity$1(sale_receipt))].join('');
var G__20386 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(sale_receipt),new cljs.core.Keyword(null,"class","class",-2030961996),"list-group-item table-button list-button",new cljs.core.Keyword(null,"style","style",-496642736),styles,new cljs.core.Keyword(null,"label","label",1718410804),label], null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"paid?","paid?",1217824088).cljs$core$IFn$_invoke$arity$1(sale_receipt))){
return cljs.core.assoc.call(null,G__20386,new cljs.core.Keyword(null,"class","class",-2030961996),"list-group-item table-button list-button paid");
} else {
return G__20386;
}
})(),pozn_adaptive$sale_receipt_list$subs$iter__20381.call(null,cljs.core.rest.call(null,s__20382__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__8453__auto__.call(null,cljs.core.vals.call(null,new cljs.core.Keyword(null,"sale-receipts","sale-receipts",630620995).cljs$core$IFn$_invoke$arity$1(db)));
}));

//# sourceMappingURL=subs.js.map
