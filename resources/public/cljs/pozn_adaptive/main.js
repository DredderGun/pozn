// Compiled by ClojureScript 1.9.908 {}
goog.provide('pozn_adaptive.main');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('pozn_adaptive.subs');
goog.require('pozn_adaptive.tables.view');
goog.require('pozn_adaptive.receipt.view');
goog.require('pozn_adaptive.menu.view');
goog.require('pozn_adaptive.dish.view');
goog.require('pozn_adaptive.pay.view');
goog.require('pozn_adaptive.statistic.view');
goog.require('pozn_adaptive.sale_receipt_list.view');
goog.require('pozn_adaptive.modal_windows.window');
pozn_adaptive.main.main_panel = (function pozn_adaptive$main$main_panel(){
var layout = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pozn-adaptive.subs","layout","pozn-adaptive.subs/layout",837750442)], null));
return cljs.core.conj.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var G__20397 = cljs.core.deref.call(null,layout);
var G__20397__$1 = (((G__20397 instanceof cljs.core.Keyword))?G__20397.fqn:null);
switch (G__20397__$1) {
case "sale-receipts-layout":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pozn_adaptive.sale_receipt_list.view.sale_receipt_list], null);

break;
case "tables":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pozn_adaptive.tables.view.table_main], null);

break;
case "old-tables":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pozn_adaptive.tables.view.table_main,false], null);

break;
case "new-sale-receipt":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pozn_adaptive.receipt.view.new_sale_receipt], null);

break;
case "menu-view":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pozn_adaptive.menu.view.menu_view], null);

break;
case "dish":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pozn_adaptive.dish.view.dish], null);

break;
case "pay":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pozn_adaptive.pay.view.pay_view], null);

break;
case "statistic-view":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pozn_adaptive.statistic.view.statistic_view], null);

break;
default:
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"No content"], null);

}
})()], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pozn_adaptive.modal_windows.window.modal], null));
});

//# sourceMappingURL=main.js.map
