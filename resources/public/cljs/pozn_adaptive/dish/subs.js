// Compiled by ClojureScript 1.9.908 {}
goog.provide('pozn_adaptive.dish.subs');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('pozn_adaptive.subs');
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("pozn-adaptive.subs","active-items","pozn-adaptive.subs/active-items",-253995993),(function (db,_){
return new cljs.core.Keyword(null,"active-items","active-items",-1682550794).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("pozn-adaptive.dish.subs","editing","pozn-adaptive.dish.subs/editing",-912315286),(function (db,_){
return new cljs.core.Keyword(null,"editing","editing",1365491601).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("pozn-adaptive.dish.subs","editing?","pozn-adaptive.dish.subs/editing?",166639685),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pozn-adaptive.dish.subs","editing","pozn-adaptive.dish.subs/editing",-912315286)], null),(function (editing){
return editing;
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("pozn-adaptive.dish.subs","active-dish-in-receipt","pozn-adaptive.dish.subs/active-dish-in-receipt",546256928),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pozn-adaptive.subs","active-items","pozn-adaptive.subs/active-items",-253995993)], null),(function (active_items){
return new cljs.core.Keyword(null,"active-dish-in-receipt","active-dish-in-receipt",-934600953).cljs$core$IFn$_invoke$arity$1(active_items);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("pozn-adaptive.dish.subs","temporary-dish","pozn-adaptive.dish.subs/temporary-dish",-1318763011),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pozn-adaptive.subs","active-items","pozn-adaptive.subs/active-items",-253995993)], null),(function (active_items){
return new cljs.core.Keyword(null,"temporary-dish","temporary-dish",1497972516).cljs$core$IFn$_invoke$arity$1(active_items);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("pozn-adaptive.dish.subs","active-dish","pozn-adaptive.dish.subs/active-dish",1328532633),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pozn-adaptive.dish.subs","active-dish-in-receipt","pozn-adaptive.dish.subs/active-dish-in-receipt",546256928)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pozn-adaptive.dish.subs","temporary-dish","pozn-adaptive.dish.subs/temporary-dish",-1318763011)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pozn-adaptive.dish.subs","editing","pozn-adaptive.dish.subs/editing",-912315286)], null),(function (p__19668){
var vec__19669 = p__19668;
var active_dish_in_receipt = cljs.core.nth.call(null,vec__19669,(0),null);
var temporary_dish = cljs.core.nth.call(null,vec__19669,(1),null);
var editing = cljs.core.nth.call(null,vec__19669,(2),null);
if(cljs.core.truth_(editing)){
return active_dish_in_receipt;
} else {
return temporary_dish;
}
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("pozn-adaptive.dish.subs","active-dish-price","pozn-adaptive.dish.subs/active-dish-price",-830984816),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pozn-adaptive.dish.subs","active-dish","pozn-adaptive.dish.subs/active-dish",1328532633)], null),(function (active_dish){
return new cljs.core.Keyword(null,"price","price",22129180).cljs$core$IFn$_invoke$arity$1(active_dish);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("pozn-adaptive.dish.subs","active-dish-short-name","pozn-adaptive.dish.subs/active-dish-short-name",-536140030),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pozn-adaptive.dish.subs","active-dish","pozn-adaptive.dish.subs/active-dish",1328532633)], null),(function (active_dish){
return new cljs.core.Keyword(null,"short_name","short_name",1420585806).cljs$core$IFn$_invoke$arity$1(active_dish);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("pozn-adaptive.dish.subs","active-dish-description","pozn-adaptive.dish.subs/active-dish-description",1279012996),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pozn-adaptive.dish.subs","active-dish","pozn-adaptive.dish.subs/active-dish",1328532633)], null),(function (active_dish){
return new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(active_dish);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("pozn-adaptive.dish.subs","active-dish-count","pozn-adaptive.dish.subs/active-dish-count",30824146),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pozn-adaptive.dish.subs","active-dish","pozn-adaptive.dish.subs/active-dish",1328532633)], null),(function (active_dish){
return new cljs.core.Keyword(null,"count","count",2139924085).cljs$core$IFn$_invoke$arity$1(active_dish);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("pozn-adaptive.dish.subs","active-dish-sum","pozn-adaptive.dish.subs/active-dish-sum",893202314),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pozn-adaptive.dish.subs","active-dish-price","pozn-adaptive.dish.subs/active-dish-price",-830984816)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pozn-adaptive.dish.subs","active-dish-count","pozn-adaptive.dish.subs/active-dish-count",30824146)], null),(function (p__19672){
var vec__19673 = p__19672;
var active_dish_price = cljs.core.nth.call(null,vec__19673,(0),null);
var active_dish_count = cljs.core.nth.call(null,vec__19673,(1),null);
return (active_dish_price * active_dish_count);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("pozn-adaptive.dish.subs","selected-dish-modificators","pozn-adaptive.dish.subs/selected-dish-modificators",1447149772),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pozn-adaptive.dish.subs","active-dish","pozn-adaptive.dish.subs/active-dish",1328532633)], null),(function (active_dish){
return new cljs.core.Keyword(null,"modificators","modificators",791127331).cljs$core$IFn$_invoke$arity$1(active_dish);
}));

//# sourceMappingURL=subs.js.map
