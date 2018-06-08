// Compiled by ClojureScript 1.9.908 {}
goog.provide('pozn_adaptive.pay.subs');
goog.require('cljs.core');
goog.require('re_frame.core');
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("pozn-adaptive.pay.subs","active-receipt-sum-and-payment","pozn-adaptive.pay.subs/active-receipt-sum-and-payment",2147326906),(function (db,_){
return (function (receipt){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sum-price","sum-price",375522511),new cljs.core.Keyword(null,"sum_price","sum_price",1832391009).cljs$core$IFn$_invoke$arity$1(receipt),new cljs.core.Keyword(null,"payment","payment",-1682035288),new cljs.core.Keyword(null,"payment","payment",-1682035288).cljs$core$IFn$_invoke$arity$1(receipt)], null);
}).call(null,cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sale-receipts","sale-receipts",630620995),new cljs.core.Keyword(null,"active-receipt","active-receipt",916564651).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"active-items","active-items",-1682550794).cljs$core$IFn$_invoke$arity$1(db))], null)));
}));

//# sourceMappingURL=subs.js.map
