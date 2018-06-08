// Compiled by ClojureScript 1.9.908 {}
goog.provide('pozn_adaptive.tables.events');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('cljs_time.core');
goog.require('pozn_adaptive.helpers');
goog.require('cljs_time.format');
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("pozn-adaptive.tables.events","change-tables-view","pozn-adaptive.tables.events/change-tables-view",162883188),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v], null),(function (db,p__19482){
var vec__19483 = p__19482;
var view_id = cljs.core.nth.call(null,vec__19483,(0),null);
return cljs.core.assoc.call(null,cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-items","active-items",-1682550794),new cljs.core.Keyword(null,"tables-view","tables-view",-2038232512)], null),view_id),new cljs.core.Keyword(null,"modal-windows","modal-windows",-797029455),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"show?","show?",1543842127),false,new cljs.core.Keyword(null,"child","child",623967545),null], null));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("pozn-adaptive.tables.events","add-new-receipt","pozn-adaptive.tables.events/add-new-receipt",-901125534),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v], null),(function (db,p__19487){
var vec__19488 = p__19487;
var curr_area = cljs.core.nth.call(null,vec__19488,(0),null);
var curr_table = cljs.core.nth.call(null,vec__19488,(1),null);
var next_receipt_id = pozn_adaptive.helpers.allocate_next_id.call(null,new cljs.core.Keyword(null,"sale-receipts","sale-receipts",630620995).cljs$core$IFn$_invoke$arity$1(db));
var formatted_date = ((function (next_receipt_id,vec__19488,curr_area,curr_table){
return (function (p1__19486_SHARP_){
if(cljs.core.truth_(p1__19486_SHARP_)){
return cljs_time.format.unparse.call(null,cljs_time.format.formatter.call(null,"dd-MM-yyyy HH:mm:ss"),p1__19486_SHARP_);
} else {
return null;
}
});})(next_receipt_id,vec__19488,curr_area,curr_table))
;
return cljs.core.update_in.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"layout","layout",-2120940921),new cljs.core.Keyword(null,"new-sale-receipt","new-sale-receipt",-587581497)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sale-receipts","sale-receipts",630620995),next_receipt_id], null),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"id","id",-1388402092),next_receipt_id,new cljs.core.Keyword(null,"guests","guests",617113038),new cljs.core.PersistentArrayMap(null, 1, [(1),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(1),new cljs.core.Keyword(null,"dishes","dishes",1259783877),cljs.core.PersistentVector.EMPTY], null)], null),new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [curr_area,curr_table], null),new cljs.core.Keyword(null,"paid?","paid?",1217824088),false,new cljs.core.Keyword(null,"sent?","sent?",1251086682),false,new cljs.core.Keyword(null,"dates","dates",-1600154075),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"origin","origin",1037372088),formatted_date.call(null,cljs_time.core.time_now.call(null))], null),new cljs.core.Keyword(null,"sum","sum",136986814),(0)], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-items","active-items",-1682550794)], null),cljs.core.assoc,new cljs.core.Keyword(null,"active-table","active-table",39998616),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [curr_area,curr_table], null),new cljs.core.Keyword(null,"active-receipt","active-receipt",916564651),next_receipt_id,new cljs.core.Keyword(null,"active-guest","active-guest",1493829244),(1));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("pozn-adaptive.tables.events","change-table-in-receipt","pozn-adaptive.tables.events/change-table-in-receipt",2121650187),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v], null),(function (db,p__19491){
var vec__19492 = p__19491;
var curr_area = cljs.core.nth.call(null,vec__19492,(0),null);
var curr_table = cljs.core.nth.call(null,vec__19492,(1),null);
return cljs.core.assoc.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sale-receipts","sale-receipts",630620995),new cljs.core.Keyword(null,"active-receipt","active-receipt",916564651).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"active-items","active-items",-1682550794).cljs$core$IFn$_invoke$arity$1(db)),new cljs.core.Keyword(null,"table","table",-564943036)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [curr_area,curr_table], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-items","active-items",-1682550794),new cljs.core.Keyword(null,"active-table","active-table",39998616)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [curr_area,curr_table], null)),new cljs.core.Keyword(null,"layout","layout",-2120940921),new cljs.core.Keyword(null,"new-sale-receipt","new-sale-receipt",-587581497));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("pozn-adaptive.tables.events","activate-area","pozn-adaptive.tables.events/activate-area",-1769584038),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v], null),(function (db,p__19495){
var vec__19496 = p__19495;
var table_key = cljs.core.nth.call(null,vec__19496,(0),null);
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-items","active-items",-1682550794),new cljs.core.Keyword(null,"active-table","active-table",39998616)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [table_key], null));
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("pozn-adaptive.tables.events","dispatch-receipt-wo-table","pozn-adaptive.tables.events/dispatch-receipt-wo-table",-483739897),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v], null),(function (p__19499,_){
var map__19500 = p__19499;
var map__19500__$1 = ((((!((map__19500 == null)))?((((map__19500.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19500.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19500):map__19500);
var cofx = map__19500__$1;
var db = cljs.core.get.call(null,map__19500__$1,new cljs.core.Keyword(null,"db","db",993250759));
return cljs.core.assoc.call(null,cofx,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(cljs.core.truth_(new cljs.core.Keyword(null,"editing","editing",1365491601).cljs$core$IFn$_invoke$arity$1(db))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pozn-adaptive.tables.events","add-new-receipt","pozn-adaptive.tables.events/add-new-receipt",-901125534),(0),(0)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pozn-adaptive.tables.events","change-table-in-receipt","pozn-adaptive.tables.events/change-table-in-receipt",2121650187),(0),(0)], null)));
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("pozn-adaptive.tables.events","process-table","pozn-adaptive.tables.events/process-table",-1657578927),(function (p__19502,p__19503){
var map__19504 = p__19502;
var map__19504__$1 = ((((!((map__19504 == null)))?((((map__19504.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19504.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19504):map__19504);
var cofx = map__19504__$1;
var db = cljs.core.get.call(null,map__19504__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__19505 = p__19503;
var _ = cljs.core.nth.call(null,vec__19505,(0),null);
var table = cljs.core.nth.call(null,vec__19505,(1),null);
return cljs.core.assoc.call(null,cofx,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(cljs.core.truth_(new cljs.core.Keyword(null,"editing","editing",1365491601).cljs$core$IFn$_invoke$arity$1(db))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pozn-adaptive.tables.events","change-table-in-receipt","pozn-adaptive.tables.events/change-table-in-receipt",2121650187),cljs.core.first.call(null,new cljs.core.Keyword(null,"active-table","active-table",39998616).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"active-items","active-items",-1682550794).cljs$core$IFn$_invoke$arity$1(db))),table], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pozn-adaptive.tables.events","add-new-receipt","pozn-adaptive.tables.events/add-new-receipt",-901125534),cljs.core.first.call(null,new cljs.core.Keyword(null,"active-table","active-table",39998616).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"active-items","active-items",-1682550794).cljs$core$IFn$_invoke$arity$1(db))),table], null)));
}));

//# sourceMappingURL=events.js.map
