// Compiled by ClojureScript 1.9.908 {}
goog.provide('pozn_adaptive.tables.subs');
goog.require('cljs.core');
goog.require('re_frame.core');
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("pozn-adaptive.tables.subs","active-items","pozn-adaptive.tables.subs/active-items",-438594252),(function (db,_){
return new cljs.core.Keyword(null,"active-items","active-items",-1682550794).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("pozn-adaptive.tables.subs","table-areas","pozn-adaptive.tables.subs/table-areas",-959986961),(function (db,_){
return new cljs.core.Keyword(null,"table-areas","table-areas",-2071841619).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("pozn-adaptive.tables.subs","active-tables-view","pozn-adaptive.tables.subs/active-tables-view",-1468916889),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pozn-adaptive.tables.subs","active-items","pozn-adaptive.tables.subs/active-items",-438594252)], null),(function (active_items){
return new cljs.core.Keyword(null,"tables-view","tables-view",-2038232512).cljs$core$IFn$_invoke$arity$1(active_items);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("pozn-adaptive.tables.subs","active-area","pozn-adaptive.tables.subs/active-area",-866598012),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pozn-adaptive.tables.subs","active-items","pozn-adaptive.tables.subs/active-items",-438594252)], null),(function (active_items){
var active_table = new cljs.core.Keyword(null,"active-table","active-table",39998616).cljs$core$IFn$_invoke$arity$1(active_items);
if(cljs.core._EQ_.call(null,cljs.core.nth.call(null,active_table,(0)),(0))){
return (1);
} else {
return cljs.core.nth.call(null,active_table,(0));
}
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("pozn-adaptive.tables.subs","active-area-tables","pozn-adaptive.tables.subs/active-area-tables",2036121080),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pozn-adaptive.tables.subs","active-area","pozn-adaptive.tables.subs/active-area",-866598012)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pozn-adaptive.tables.subs","table-areas","pozn-adaptive.tables.subs/table-areas",-959986961)], null),(function (p__19845){
var vec__19846 = p__19845;
var active_area = cljs.core.nth.call(null,vec__19846,(0),null);
var table_areas = cljs.core.nth.call(null,vec__19846,(1),null);
return cljs.core.some.call(null,((function (vec__19846,active_area,table_areas){
return (function (p1__19844_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__19844_SHARP_),active_area)){
return p1__19844_SHARP_;
} else {
return null;
}
});})(vec__19846,active_area,table_areas))
,table_areas);
}));

//# sourceMappingURL=subs.js.map
