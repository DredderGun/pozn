// Compiled by ClojureScript 1.9.908 {}
goog.provide('pozn_adaptive.errors.error_window');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('pozn_adaptive.errors.subs');
pozn_adaptive.errors.error_window.error_window = (function pozn_adaptive$errors$error_window$error_window(){
var error = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pozn-adaptive.errors.subs","error","pozn-adaptive.errors.subs/error",-706351440)], null));
if(cljs.core.truth_(new cljs.core.Keyword(null,"msg","msg",-1386103444).cljs$core$IFn$_invoke$arity$1(error))){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.error-window.alert.alert-danger","div.error-window.alert.alert-danger",-1356147457),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"role","role",-736691072),"alert"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.close","button.close",-1545560743),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"data-dismiss","data-dismiss",-2004576016),"alert",new cljs.core.Keyword(null,"aria-label","aria-label",455891514),"Close"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"aria-hidden","aria-hidden",399337029),"true"], null)], null),"X"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),"\u041E\u0448\u0438\u0431\u043A\u0430!"], null),[" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"msg","msg",-1386103444).cljs$core$IFn$_invoke$arity$1(error))].join('')], null);
} else {
return null;
}
});

//# sourceMappingURL=error_window.js.map
