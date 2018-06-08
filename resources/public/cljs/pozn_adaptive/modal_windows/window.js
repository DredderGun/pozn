// Compiled by ClojureScript 1.9.908 {}
goog.provide('pozn_adaptive.modal_windows.window');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('pozn_adaptive.subs');
goog.require('pozn_adaptive.events');
pozn_adaptive.modal_windows.window.sandwich_menu = (function pozn_adaptive$modal_windows$window$sandwich_menu(dispatch_fn){
var clicked_on_sandwich_button_QMARK_ = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pozn-adaptive.subs","modal","pozn-adaptive.subs/modal",853590867)], null));
return ((function (clicked_on_sandwich_button_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),["sandwich-menu-container ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(new cljs.core.Keyword(null,"show?","show?",1543842127).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,clicked_on_sandwich_button_QMARK_)))?"change":null))].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (clicked_on_sandwich_button_QMARK_){
return (function (){
return dispatch_fn.call(null);
});})(clicked_on_sandwich_button_QMARK_))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.bar1","div.bar1",-253427799)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.bar2","div.bar2",49279752)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.bar3","div.bar3",-641890383)], null)], null);
});
;})(clicked_on_sandwich_button_QMARK_))
});
pozn_adaptive.modal_windows.window.modal_panel = (function pozn_adaptive$modal_windows$window$modal_panel(p__19663){
var map__19664 = p__19663;
var map__19664__$1 = ((((!((map__19664 == null)))?((((map__19664.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19664.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19664):map__19664);
var child = cljs.core.get.call(null,map__19664__$1,new cljs.core.Keyword(null,"child","child",623967545));
var show_QMARK_ = cljs.core.get.call(null,map__19664__$1,new cljs.core.Keyword(null,"show?","show?",1543842127));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"modal-wrapper"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"modal-backdrop",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__19664,map__19664__$1,child,show_QMARK_){
return (function (event){
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pozn-adaptive.events","modal","pozn-adaptive.events/modal",-1929500107),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"show?","show?",1543842127),cljs.core.not.call(null,show_QMARK_),new cljs.core.Keyword(null,"child","child",623967545),null,new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"default","default",-1987822328)], null)], null));

event.preventDefault();

return event.stopPropagation();
});})(map__19664,map__19664__$1,child,show_QMARK_))
], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"modal-child"], null),child], null)], null);
});
pozn_adaptive.modal_windows.window.modal = (function pozn_adaptive$modal_windows$window$modal(){
var modal = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pozn-adaptive.subs","modal","pozn-adaptive.subs/modal",853590867)], null));
return ((function (modal){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(cljs.core.truth_(new cljs.core.Keyword(null,"show?","show?",1543842127).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,modal)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pozn_adaptive.modal_windows.window.modal_panel,cljs.core.deref.call(null,modal)], null):null)], null);
});
;})(modal))
});

//# sourceMappingURL=window.js.map
