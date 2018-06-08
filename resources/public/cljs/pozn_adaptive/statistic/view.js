// Compiled by ClojureScript 1.9.908 {}
goog.provide('pozn_adaptive.statistic.view');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('re_com.core');
goog.require('pozn_adaptive.statistic.events');
goog.require('pozn_adaptive.statistic.subs');
goog.require('reagent.core');
pozn_adaptive.statistic.view.statistic_view = (function pozn_adaptive$statistic$view$statistic_view(){
var with_let19884 = reagent.ratom.with_let_values.call(null,new cljs.core.Keyword(null,"with-let19884","with-let19884",-224845999));
var temp__4661__auto___19890 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__4661__auto___19890 == null)){
} else {
var c__10832__auto___19891 = temp__4661__auto___19890;
if((with_let19884.generation === c__10832__auto___19891.ratomGeneration)){
if(cljs.core.truth_(reagent.debug.has_console)){
(cljs.core.truth_(reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

with_let19884.generation = c__10832__auto___19891.ratomGeneration;
}


var init19885 = (with_let19884.length === (0));
var statistic = ((init19885)?(with_let19884[(0)] = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pozn-adaptive.statistic.subs","get-statistic","pozn-adaptive.statistic.subs/get-statistic",-1104012794)], null))):(with_let19884[(0)]));
var res__10833__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#statistic-wrapper","div#statistic-wrapper",1879858890),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"gap","gap",80255254),"5px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.chevron-wrapper.chevron-wrapper-without-sandwich","div.chevron-wrapper.chevron-wrapper-without-sandwich",-1784635464),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (init19885,statistic,with_let19884){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pozn-adaptive.statistic.events","change-layout","pozn-adaptive.statistic.events/change-layout",1449369912),new cljs.core.Keyword(null,"sale-receipts-layout","sale-receipts-layout",-542663967)], null));
});})(init19885,statistic,with_let19884))
], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.md_icon_button,new cljs.core.Keyword(null,"md-icon-name","md-icon-name",681785863),"zmdi-chevron-left",new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"larger","larger",1304935444),new cljs.core.Keyword(null,"class","class",-2030961996),"back-button"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"13%"], null),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),"\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0430",new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level2","level2",-2044031830)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),["\u0422\u0435\u043A\u0443\u0449\u0430\u044F \u0432\u044B\u0440\u0443\u0447\u043A\u0430 \u043F\u043E \u043E\u043F\u043B\u0430\u0447\u0435\u043D\u043D\u044B\u043C \u0447\u0435\u043A\u0430\u043C: "].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__8453__auto__ = ((function (init19885,statistic,with_let19884){
return (function pozn_adaptive$statistic$view$statistic_view_$_iter__19886(s__19887){
return (new cljs.core.LazySeq(null,((function (init19885,statistic,with_let19884){
return (function (){
var s__19887__$1 = s__19887;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__19887__$1);
if(temp__4657__auto__){
var s__19887__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__19887__$2)){
var c__8451__auto__ = cljs.core.chunk_first.call(null,s__19887__$2);
var size__8452__auto__ = cljs.core.count.call(null,c__8451__auto__);
var b__19889 = cljs.core.chunk_buffer.call(null,size__8452__auto__);
if((function (){var i__19888 = (0);
while(true){
if((i__19888 < size__8452__auto__)){
var dish = cljs.core._nth.call(null,c__8451__auto__,i__19888);
cljs.core.chunk_append.call(null,b__19889,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(dish))," \u041A\u043E\u043B-\u0432\u043E: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"count","count",2139924085).cljs$core$IFn$_invoke$arity$1(dish))].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(dish)], null)));

var G__19892 = (i__19888 + (1));
i__19888 = G__19892;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19889),pozn_adaptive$statistic$view$statistic_view_$_iter__19886.call(null,cljs.core.chunk_rest.call(null,s__19887__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19889),null);
}
} else {
var dish = cljs.core.first.call(null,s__19887__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(dish))," \u041A\u043E\u043B-\u0432\u043E: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"count","count",2139924085).cljs$core$IFn$_invoke$arity$1(dish))].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(dish)], null)),pozn_adaptive$statistic$view$statistic_view_$_iter__19886.call(null,cljs.core.rest.call(null,s__19887__$2)));
}
} else {
return null;
}
break;
}
});})(init19885,statistic,with_let19884))
,null,null));
});})(init19885,statistic,with_let19884))
;
return iter__8453__auto__.call(null,new cljs.core.Keyword(null,"sold-dishes-count","sold-dishes-count",2021194344).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,statistic)));
})()], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),["\u041D\u0430\u043B\u0438\u0447\u043D\u044B\u043C\u0438: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"cash-sum","cash-sum",1725028285).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,statistic)))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),["\u041A\u0430\u0440\u0442\u043E\u0439: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"card-sum","card-sum",-688128838).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,statistic)))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),["\u041A\u043E\u043B-\u0432\u043E \u043E\u043F\u043B\u0430\u0447\u0435\u043D\u043D\u044B\u0445 \u0447\u0435\u043A\u043E\u0432: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"paid-receipt-count","paid-receipt-count",-322676111).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,statistic)))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),["\u041A\u043E\u043B-\u0432\u043E \u043D\u0435\u043E\u043F\u043B\u0430\u0447\u0435\u043D\u043D\u044B\u0445 \u0447\u0435\u043A\u043E\u0432: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"unpaid-receipt-count","unpaid-receipt-count",693935521).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,statistic)))].join('')], null)], null)], null)], null)], null)], null);

return res__10833__auto__;
});

//# sourceMappingURL=view.js.map
