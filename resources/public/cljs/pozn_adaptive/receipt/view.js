// Compiled by ClojureScript 1.9.908 {}
goog.provide('pozn_adaptive.receipt.view');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('re_com.core');
goog.require('pozn_adaptive.receipt.events');
goog.require('pozn_adaptive.receipt.subs');
goog.require('pozn_adaptive.modal_windows.window');
goog.require('pozn_adaptive.events');
goog.require('pozn_adaptive.menu.view');
goog.require('pozn_adaptive.dish.view');
goog.require('pozn_adaptive.dish.desc_view');
pozn_adaptive.receipt.view.process_guest_modal = (function pozn_adaptive$receipt$view$process_guest_modal(guest_id){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"more-menu"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.modal-window","div.modal-window",148231286),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center"], null)], null),["\u0413\u043E\u0441\u0442\u044C ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(guest_id)].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.modal-window-panel-item","div.modal-window-panel-item",-800587321),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pozn-adaptive.receipt.events","delete-the-guest","pozn-adaptive.receipt.events/delete-the-guest",-391549551),guest_id], null));
})], null),"\u0423\u0434\u0430\u043B\u0438\u0442\u044C"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.modal-window-panel-item","div.modal-window-panel-item",-800587321),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return console.log("\u0412 \u043E\u0442\u0434\u0435\u043B\u044C\u043D\u044B\u0439 \u0447\u0435\u043A");
})], null),"\u0412 \u043E\u0442\u0434\u0435\u043B\u044C\u043D\u044B\u0439 \u0447\u0435\u043A"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.modal-window-panel-item","div.modal-window-panel-item",-800587321),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return console.log("\u041F\u0440\u0435\u0434\u0447\u0435\u043A");
})], null),"\u041F\u0440\u0435\u0434\u0447\u0435\u043A"], null)], null)], null);
});
pozn_adaptive.receipt.view.more_menu = (function pozn_adaptive$receipt$view$more_menu(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"more-menu"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.modal-window","div.modal-window",148231286),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.modal-window-panel-item","div.modal-window-panel-item",-800587321),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pozn-adaptive.receipt.events","delete-selected-dishes","pozn-adaptive.receipt.events/delete-selected-dishes",513274046)], null));
})], null),"\u0423\u0434\u0430\u043B\u0438\u0442\u044C"], null)], null)], null);
});
pozn_adaptive.receipt.view.dates_modal_window = (function pozn_adaptive$receipt$view$dates_modal_window(){
var active_receipts_dates = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pozn-adaptive.receipt.subs","active-receipt-dates","pozn-adaptive.receipt.subs/active-receipt-dates",-1160423355)], null));
var id = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pozn-adaptive.receipt.subs","active-receipt-id","pozn-adaptive.receipt.subs/active-receipt-id",1120691601)], null));
return ((function (active_receipts_dates,id){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.modal-window","div.modal-window",148231286),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.modal-window-panel-item","div.modal-window-panel-item",-800587321),["\u0427\u0435\u043A \u2116 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,id))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.modal-window-panel-item","div.modal-window-panel-item",-800587321),["\u0412\u0440\u0435\u043C\u044F \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u044F \u0447\u0435\u043A\u0430 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"origin","origin",1037372088).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,active_receipts_dates)))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.modal-window-panel-item","div.modal-window-panel-item",-800587321),["\u0412\u0440\u0435\u043C\u044F \u043E\u0442\u043F\u0440\u0430\u0432\u043A\u0438 \u0447\u0435\u043A\u0430 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"send","send",-652151114).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,active_receipts_dates)))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.modal-window-panel-item","div.modal-window-panel-item",-800587321),["\u0412\u0440\u0435\u043C\u044F \u043E\u043F\u043B\u0430\u0442\u044B \u0447\u0435\u043A\u0430 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pay","pay",-1672734919).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,active_receipts_dates)))].join('')], null)], null);
});
;})(active_receipts_dates,id))
});
pozn_adaptive.receipt.view.receipt_modal_window = (function pozn_adaptive$receipt$view$receipt_modal_window(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.modal-window.sandwich-panel","div.modal-window.sandwich-panel",-878536920),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"modal-window-panel-item",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pozn-adaptive.events","modal","pozn-adaptive.events/modal",-1929500107),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"show?","show?",1543842127),true,new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pozn_adaptive.receipt.view.dates_modal_window], null),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"small","small",2133478704)], null)], null));
})], null),"\u0418\u043D\u0444\u043E"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"modal-window-panel-item",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pozn-adaptive.receipt.events","quite-to-list","pozn-adaptive.receipt.events/quite-to-list",-231299049)], null));
})], null),"\u041A \u0441\u043F\u0438\u0441\u043A\u0443 \u0447\u0435\u043A\u043E\u0432"], null)], null);
});
pozn_adaptive.receipt.view.swipe_button_component = (function pozn_adaptive$receipt$view$swipe_button_component(guest_id){
var specified_guest_sum = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pozn-adaptive.receipt.subs","specified-guest-sum","pozn-adaptive.receipt.subs/specified-guest-sum",-1891415677),guest_id], null));
var active_guest_QMARK_ = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pozn-adaptive.receipt.subs","active-guest?","pozn-adaptive.receipt.subs/active-guest?",-1228045896),guest_id], null));
var current_x = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pozn-adaptive.receipt.subs","current-position","pozn-adaptive.receipt.subs/current-position",1777463783),guest_id], null));
var swipe_transition_QMARK_ = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pozn-adaptive.receipt.subs","swipe-transition?","pozn-adaptive.receipt.subs/swipe-transition?",1626254505),guest_id], null));
return ((function (specified_guest_sum,active_guest_QMARK_,current_x,swipe_transition_QMARK_){
return (function (guest_id__$1){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"class","class",-2030961996),"guest-group-button form-group has-success has-feedback",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.delete-guest-button","div.delete-guest-button",468315700),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.md_icon_button,new cljs.core.Keyword(null,"md-icon-name","md-icon-name",681785863),"zmdi-more",new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"larger","larger",1304935444),new cljs.core.Keyword(null,"class","class",-2030961996),"button-receipt delete-button-receipt",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (specified_guest_sum,active_guest_QMARK_,current_x,swipe_transition_QMARK_){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pozn-adaptive.events","modal","pozn-adaptive.events/modal",-1929500107),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"show?","show?",1543842127),true,new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pozn_adaptive.receipt.view.process_guest_modal,guest_id__$1], null),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"small","small",2133478704)], null)], null));
});})(specified_guest_sum,active_guest_QMARK_,current_x,swipe_transition_QMARK_))
], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.md_icon_button,new cljs.core.Keyword(null,"md-icon-name","md-icon-name",681785863),"zmdi-mail-send",new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"larger","larger",1304935444),new cljs.core.Keyword(null,"class","class",-2030961996),"button-receipt mail-send-button-receipt",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (specified_guest_sum,active_guest_QMARK_,current_x,swipe_transition_QMARK_){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pozn-adaptive.receipt.events","send-receipt","pozn-adaptive.receipt.events/send-receipt",-750288453)], null));
});})(specified_guest_sum,active_guest_QMARK_,current_x,swipe_transition_QMARK_))
], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.md_icon_button,new cljs.core.Keyword(null,"md-icon-name","md-icon-name",681785863),"zmdi-card",new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"larger","larger",1304935444),new cljs.core.Keyword(null,"class","class",-2030961996),"button-receipt card-button-receipt",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (specified_guest_sum,active_guest_QMARK_,current_x,swipe_transition_QMARK_){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pozn-adaptive.receipt.events","change-layout","pozn-adaptive.receipt.events/change-layout",504749728),new cljs.core.Keyword(null,"pay","pay",-1672734919)], null));
});})(specified_guest_sum,active_guest_QMARK_,current_x,swipe_transition_QMARK_))
], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.guest-button.btn.btn-primary","button.guest-button.btn.btn-primary",358129399),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (specified_guest_sum,active_guest_QMARK_,current_x,swipe_transition_QMARK_){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pozn-adaptive.receipt.events","activate-guest","pozn-adaptive.receipt.events/activate-guest",350997688),guest_id__$1], null));
});})(specified_guest_sum,active_guest_QMARK_,current_x,swipe_transition_QMARK_))
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"relative","relative",22796862),new cljs.core.Keyword(null,"transform","transform",1381301764),["translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,current_x)),"px)"].join(''),new cljs.core.Keyword(null,"transition","transition",765692007),(cljs.core.truth_(cljs.core.deref.call(null,swipe_transition_QMARK_))?"transform 200ms":null)], null),new cljs.core.Keyword(null,"on-touch-start","on-touch-start",447239419),((function (specified_guest_sum,active_guest_QMARK_,current_x,swipe_transition_QMARK_){
return (function (p1__19744_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pozn-adaptive.receipt.events","start-coord","pozn-adaptive.receipt.events/start-coord",1118131016),(p1__19744_SHARP_["touches"][(0)]["pageX"]),guest_id__$1], null));
});})(specified_guest_sum,active_guest_QMARK_,current_x,swipe_transition_QMARK_))
,new cljs.core.Keyword(null,"on-touch-move","on-touch-move",1587118423),((function (specified_guest_sum,active_guest_QMARK_,current_x,swipe_transition_QMARK_){
return (function (p1__19745_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pozn-adaptive.receipt.events","swipe-element","pozn-adaptive.receipt.events/swipe-element",-1178432382),(p1__19745_SHARP_["touches"][(0)]["pageX"])], null));
});})(specified_guest_sum,active_guest_QMARK_,current_x,swipe_transition_QMARK_))
,new cljs.core.Keyword(null,"on-touch-end","on-touch-end",1515667389),((function (specified_guest_sum,active_guest_QMARK_,current_x,swipe_transition_QMARK_){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pozn-adaptive.receipt.events","end-move","pozn-adaptive.receipt.events/end-move",-1630458872)], null));
});})(specified_guest_sum,active_guest_QMARK_,current_x,swipe_transition_QMARK_))
,new cljs.core.Keyword(null,"on-transition-end","on-transition-end",-1169027318),((function (specified_guest_sum,active_guest_QMARK_,current_x,swipe_transition_QMARK_){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pozn-adaptive.receipt.events","transition-end","pozn-adaptive.receipt.events/transition-end",622456536)], null));
});})(specified_guest_sum,active_guest_QMARK_,current_x,swipe_transition_QMARK_))
], null),["\u0413\u043E\u0441\u0442\u044C ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(guest_id__$1)].join(''),(cljs.core.truth_(cljs.core.deref.call(null,active_guest_QMARK_))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.active-guest-dot","span.active-guest-dot",-599258074)], null):null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.guest-price-label.input-group-addon","span.guest-price-label.input-group-addon",-1878984861),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (specified_guest_sum,active_guest_QMARK_,current_x,swipe_transition_QMARK_){
return (function (){
if(cljs.core.truth_(cljs.core.deref.call(null,active_guest_QMARK_))){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pozn-adaptive.receipt.events","slide-button","pozn-adaptive.receipt.events/slide-button",1492196666)], null));
} else {
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pozn-adaptive.receipt.events","activate-guest","pozn-adaptive.receipt.events/activate-guest",350997688),guest_id__$1], null));
}
});})(specified_guest_sum,active_guest_QMARK_,current_x,swipe_transition_QMARK_))
], null),cljs.core.deref.call(null,specified_guest_sum)], null)], null)], null);
});
;})(specified_guest_sum,active_guest_QMARK_,current_x,swipe_transition_QMARK_))
});
pozn_adaptive.receipt.view.dish_row_comp = (function pozn_adaptive$receipt$view$dish_row_comp(dish){
var trunc = (function (s,n){
if((cljs.core.count.call(null,s) > n)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.call(null,s,(0),n))," ... "].join('');
} else {
return s;
}
});
return ((function (trunc){
return (function (p__19746){
var map__19747 = p__19746;
var map__19747__$1 = ((((!((map__19747 == null)))?((((map__19747.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19747.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19747):map__19747);
var dish__$1 = map__19747__$1;
var guest_id = cljs.core.get.call(null,map__19747__$1,new cljs.core.Keyword(null,"guest-id","guest-id",-686443324));
var receipt_id = cljs.core.get.call(null,map__19747__$1,new cljs.core.Keyword(null,"receipt-id","receipt-id",1658819866));
var short_name = cljs.core.get.call(null,map__19747__$1,new cljs.core.Keyword(null,"short_name","short_name",1420585806));
var count = cljs.core.get.call(null,map__19747__$1,new cljs.core.Keyword(null,"count","count",2139924085));
var modificators = cljs.core.get.call(null,map__19747__$1,new cljs.core.Keyword(null,"modificators","modificators",791127331));
var selected_QMARK_ = cljs.core.get.call(null,map__19747__$1,new cljs.core.Keyword(null,"selected?","selected?",-742502788));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(selected_QMARK_)?"selected-dish":null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.left-area-receipt-row","div.left-area-receipt-row",1432843511),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__19747,map__19747__$1,dish__$1,guest_id,receipt_id,short_name,count,modificators,selected_QMARK_,trunc){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pozn-adaptive.receipt.events","select-dish-in-receipt","pozn-adaptive.receipt.events/select-dish-in-receipt",858427326),guest_id,receipt_id], null));
});})(map__19747,map__19747__$1,dish__$1,guest_id,receipt_id,short_name,count,modificators,selected_QMARK_,trunc))
], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.right-area-receipt-row","div.right-area-receipt-row",-69096340),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__19747,map__19747__$1,dish__$1,guest_id,receipt_id,short_name,count,modificators,selected_QMARK_,trunc){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pozn-adaptive.receipt.events","set-old-dish","pozn-adaptive.receipt.events/set-old-dish",1595605709),dish__$1,guest_id], null));
});})(map__19747,map__19747__$1,dish__$1,guest_id,receipt_id,short_name,count,modificators,selected_QMARK_,trunc))
], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.dish-text","div.dish-text",-1049405305),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.name","p.name",-2118801343),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(trunc.call(null,short_name,(27))),"(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(count),")"].join('')], null),((!(cljs.core.empty_QMARK_.call(null,modificators)))?cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403)], null),(function (){var iter__8453__auto__ = ((function (map__19747,map__19747__$1,dish__$1,guest_id,receipt_id,short_name,count,modificators,selected_QMARK_,trunc){
return (function pozn_adaptive$receipt$view$dish_row_comp_$_iter__19749(s__19750){
return (new cljs.core.LazySeq(null,((function (map__19747,map__19747__$1,dish__$1,guest_id,receipt_id,short_name,count,modificators,selected_QMARK_,trunc){
return (function (){
var s__19750__$1 = s__19750;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__19750__$1);
if(temp__4657__auto__){
var s__19750__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__19750__$2)){
var c__8451__auto__ = cljs.core.chunk_first.call(null,s__19750__$2);
var size__8452__auto__ = cljs.core.count.call(null,c__8451__auto__);
var b__19752 = cljs.core.chunk_buffer.call(null,size__8452__auto__);
if((function (){var i__19751 = (0);
while(true){
if((i__19751 < size__8452__auto__)){
var vec__19753 = cljs.core._nth.call(null,c__8451__auto__,i__19751);
var id = cljs.core.nth.call(null,vec__19753,(0),null);
var map__19756 = cljs.core.nth.call(null,vec__19753,(1),null);
var map__19756__$1 = ((((!((map__19756 == null)))?((((map__19756.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19756.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19756):map__19756);
var message = cljs.core.get.call(null,map__19756__$1,new cljs.core.Keyword(null,"message","message",-406056002));
cljs.core.chunk_append.call(null,b__19752,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),message], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)));

var G__19763 = (i__19751 + (1));
i__19751 = G__19763;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19752),pozn_adaptive$receipt$view$dish_row_comp_$_iter__19749.call(null,cljs.core.chunk_rest.call(null,s__19750__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19752),null);
}
} else {
var vec__19758 = cljs.core.first.call(null,s__19750__$2);
var id = cljs.core.nth.call(null,vec__19758,(0),null);
var map__19761 = cljs.core.nth.call(null,vec__19758,(1),null);
var map__19761__$1 = ((((!((map__19761 == null)))?((((map__19761.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19761.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19761):map__19761);
var message = cljs.core.get.call(null,map__19761__$1,new cljs.core.Keyword(null,"message","message",-406056002));
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),message], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)),pozn_adaptive$receipt$view$dish_row_comp_$_iter__19749.call(null,cljs.core.rest.call(null,s__19750__$2)));
}
} else {
return null;
}
break;
}
});})(map__19747,map__19747__$1,dish__$1,guest_id,receipt_id,short_name,count,modificators,selected_QMARK_,trunc))
,null,null));
});})(map__19747,map__19747__$1,dish__$1,guest_id,receipt_id,short_name,count,modificators,selected_QMARK_,trunc))
;
return iter__8453__auto__.call(null,modificators);
})()):null)], null)], null)], null);
});
;})(trunc))
});
pozn_adaptive.receipt.view.guest_component = (function pozn_adaptive$receipt$view$guest_component(guest_id){
var specified_guest = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pozn-adaptive.receipt.subs","specified-guest","pozn-adaptive.receipt.subs/specified-guest",1474086063),guest_id], null));
return ((function (specified_guest){
return (function (guest_id__$1){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pozn_adaptive.receipt.view.swipe_button_component,guest_id__$1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.new-receipt-table","table.new-receipt-table",463831753),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300)], null),(function (){var iter__8453__auto__ = ((function (specified_guest){
return (function pozn_adaptive$receipt$view$guest_component_$_iter__19764(s__19765){
return (new cljs.core.LazySeq(null,((function (specified_guest){
return (function (){
var s__19765__$1 = s__19765;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__19765__$1);
if(temp__4657__auto__){
var s__19765__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__19765__$2)){
var c__8451__auto__ = cljs.core.chunk_first.call(null,s__19765__$2);
var size__8452__auto__ = cljs.core.count.call(null,c__8451__auto__);
var b__19767 = cljs.core.chunk_buffer.call(null,size__8452__auto__);
if((function (){var i__19766 = (0);
while(true){
if((i__19766 < size__8452__auto__)){
var dish = cljs.core._nth.call(null,c__8451__auto__,i__19766);
cljs.core.chunk_append.call(null,b__19767,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pozn_adaptive.receipt.view.dish_row_comp,dish], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"receipt-id","receipt-id",1658819866).cljs$core$IFn$_invoke$arity$1(dish)], null)));

var G__19768 = (i__19766 + (1));
i__19766 = G__19768;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19767),pozn_adaptive$receipt$view$guest_component_$_iter__19764.call(null,cljs.core.chunk_rest.call(null,s__19765__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19767),null);
}
} else {
var dish = cljs.core.first.call(null,s__19765__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pozn_adaptive.receipt.view.dish_row_comp,dish], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"receipt-id","receipt-id",1658819866).cljs$core$IFn$_invoke$arity$1(dish)], null)),pozn_adaptive$receipt$view$guest_component_$_iter__19764.call(null,cljs.core.rest.call(null,s__19765__$2)));
}
} else {
return null;
}
break;
}
});})(specified_guest))
,null,null));
});})(specified_guest))
;
return iter__8453__auto__.call(null,new cljs.core.Keyword(null,"dishes","dishes",1259783877).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,specified_guest)));
})())], null)], null)], null);
});
;})(specified_guest))
});
pozn_adaptive.receipt.view.order_list_component = (function pozn_adaptive$receipt$view$order_list_component(){
var active_receipts_guests_ids = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pozn-adaptive.receipt.subs","active-receipts-guests-ids","pozn-adaptive.receipt.subs/active-receipts-guests-ids",1775629068)], null));
return ((function (active_receipts_guests_ids){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.order-list","div.order-list",967628758),(function (){var iter__8453__auto__ = ((function (active_receipts_guests_ids){
return (function pozn_adaptive$receipt$view$order_list_component_$_iter__19769(s__19770){
return (new cljs.core.LazySeq(null,((function (active_receipts_guests_ids){
return (function (){
var s__19770__$1 = s__19770;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__19770__$1);
if(temp__4657__auto__){
var s__19770__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__19770__$2)){
var c__8451__auto__ = cljs.core.chunk_first.call(null,s__19770__$2);
var size__8452__auto__ = cljs.core.count.call(null,c__8451__auto__);
var b__19772 = cljs.core.chunk_buffer.call(null,size__8452__auto__);
if((function (){var i__19771 = (0);
while(true){
if((i__19771 < size__8452__auto__)){
var guest_id = cljs.core._nth.call(null,c__8451__auto__,i__19771);
cljs.core.chunk_append.call(null,b__19772,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pozn_adaptive.receipt.view.guest_component,guest_id], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),guest_id], null)));

var G__19773 = (i__19771 + (1));
i__19771 = G__19773;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19772),pozn_adaptive$receipt$view$order_list_component_$_iter__19769.call(null,cljs.core.chunk_rest.call(null,s__19770__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19772),null);
}
} else {
var guest_id = cljs.core.first.call(null,s__19770__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pozn_adaptive.receipt.view.guest_component,guest_id], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),guest_id], null)),pozn_adaptive$receipt$view$order_list_component_$_iter__19769.call(null,cljs.core.rest.call(null,s__19770__$2)));
}
} else {
return null;
}
break;
}
});})(active_receipts_guests_ids))
,null,null));
});})(active_receipts_guests_ids))
;
return iter__8453__auto__.call(null,cljs.core.deref.call(null,active_receipts_guests_ids));
})()], null);
});
;})(active_receipts_guests_ids))
});
pozn_adaptive.receipt.view.slide_panel = (function pozn_adaptive$receipt$view$slide_panel(){
var left_position_template = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pozn-adaptive.receipt.subs","position-slide-panel","pozn-adaptive.receipt.subs/position-slide-panel",915026715)], null));
var menu_panel_width = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pozn-adaptive.receipt.subs","menu-panel-width","pozn-adaptive.receipt.subs/menu-panel-width",681070577)], null));
var slide_panel_template = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pozn-adaptive.receipt.subs","slide-panel-template","pozn-adaptive.receipt.subs/slide-panel-template",-1028951275)], null));
var handle_bubbled_event = ((function (left_position_template,menu_panel_width,slide_panel_template){
return (function (e){
if(cljs.core._EQ_.call(null,e.currentTarget,e.target)){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pozn-adaptive.events","close-slide-window","pozn-adaptive.events/close-slide-window",-1482635624)], null));
} else {
return false;
}
});})(left_position_template,menu_panel_width,slide_panel_template))
;
return ((function (left_position_template,menu_panel_width,slide_panel_template,handle_bubbled_event){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#menu-backdrop","div#menu-backdrop",1825523929),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),["translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,left_position_template)),"px)"].join('')], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (left_position_template,menu_panel_width,slide_panel_template,handle_bubbled_event){
return (function (p1__19774_SHARP_){
return handle_bubbled_event.call(null,p1__19774_SHARP_);
});})(left_position_template,menu_panel_width,slide_panel_template,handle_bubbled_event))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#slide-panel","div#slide-panel",-1140191373),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),cljs.core.deref.call(null,menu_panel_width)], null)], null),(function (){var G__19775 = cljs.core.deref.call(null,slide_panel_template);
var G__19775__$1 = (((G__19775 instanceof cljs.core.Keyword))?G__19775.fqn:null);
switch (G__19775__$1) {
case "menu":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pozn_adaptive.menu.view.menu_view], null);

break;
case "dish":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pozn_adaptive.dish.view.dish], null);

break;
case "dish-desc":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pozn_adaptive.dish.desc_view.desc_view], null);

break;
default:
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"\u041D\u0435\u0442 \u0448\u0430\u0431\u043B\u043E\u043D\u0430"], null);

}
})()], null)], null);
});
;})(left_position_template,menu_panel_width,slide_panel_template,handle_bubbled_event))
});
pozn_adaptive.receipt.view.new_sale_receipt = (function pozn_adaptive$receipt$view$new_sale_receipt(){
var active_receipt = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pozn-adaptive.receipt.subs","active-receipt","pozn-adaptive.receipt.subs/active-receipt",121614836)], null));
var receipt_status_text = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pozn-adaptive.receipt.subs","receipt-status-text","pozn-adaptive.receipt.subs/receipt-status-text",-1875552495)], null));
var top_bar_table_text = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pozn-adaptive.receipt.subs","top-bar-table-text","pozn-adaptive.receipt.subs/top-bar-table-text",-1042273234)], null));
return ((function (active_receipt,receipt_status_text,top_bar_table_text){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"class","class",-2030961996),"new-sale-receipt",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pointer-events","pointer-events",-1053858853),(cljs.core.truth_(new cljs.core.Keyword(null,"paid?","paid?",1217824088).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,active_receipt)))?"none":"auto")], null),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.chevron-wrapper","div.chevron-wrapper",1655762071),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),(0),new cljs.core.Keyword(null,"pointer-events","pointer-events",-1053858853),"auto"], null)], null),(((cljs.core.not.call(null,new cljs.core.Keyword(null,"paid?","paid?",1217824088).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,active_receipt)))) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"sent?","sent?",1251086682).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,active_receipt)))))?new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.md_icon_button,new cljs.core.Keyword(null,"md-icon-name","md-icon-name",681785863),"zmdi-mail-send",new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"larger","larger",1304935444),new cljs.core.Keyword(null,"class","class",-2030961996),"button-receipt mail-send-button-receipt",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (active_receipt,receipt_status_text,top_bar_table_text){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pozn-adaptive.receipt.events","send-receipt","pozn-adaptive.receipt.events/send-receipt",-750288453)], null));
});})(active_receipt,receipt_status_text,top_bar_table_text))
], null):null),((cljs.core.not.call(null,new cljs.core.Keyword(null,"paid?","paid?",1217824088).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,active_receipt))))?new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.md_icon_button,new cljs.core.Keyword(null,"md-icon-name","md-icon-name",681785863),"zmdi-card",new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"larger","larger",1304935444),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"5%"], null),new cljs.core.Keyword(null,"class","class",-2030961996),"button-receipt card-button-receipt",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (active_receipt,receipt_status_text,top_bar_table_text){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pozn-adaptive.receipt.events","change-layout","pozn-adaptive.receipt.events/change-layout",504749728),new cljs.core.Keyword(null,"pay","pay",-1672734919)], null));
});})(active_receipt,receipt_status_text,top_bar_table_text))
], null):null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3.receipt-sum-label","h3.receipt-sum-label",932977926),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (active_receipt,receipt_status_text,top_bar_table_text){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pozn-adaptive.receipt.events","edit-table","pozn-adaptive.receipt.events/edit-table",-453702273)], null));
});})(active_receipt,receipt_status_text,top_bar_table_text))
], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"sum","sum",136986814).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,active_receipt)))," \u0440"].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (active_receipt,receipt_status_text,top_bar_table_text){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pozn-adaptive.receipt.events","edit-table","pozn-adaptive.receipt.events/edit-table",-453702273)], null));
});})(active_receipt,receipt_status_text,top_bar_table_text))
], null),cljs.core.deref.call(null,top_bar_table_text)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pozn_adaptive.modal_windows.window.sandwich_menu,((function (active_receipt,receipt_status_text,top_bar_table_text){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pozn-adaptive.events","modal","pozn-adaptive.events/modal",-1929500107),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"show?","show?",1543842127),true,new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pozn_adaptive.receipt.view.receipt_modal_window], null),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"small","small",2133478704)], null)], null));
});})(active_receipt,receipt_status_text,top_bar_table_text))
], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center",new cljs.core.Keyword(null,"display","display",242065432),((cljs.core.not.call(null,(function (){var or__7645__auto__ = new cljs.core.Keyword(null,"paid?","paid?",1217824088).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,active_receipt));
if(cljs.core.truth_(or__7645__auto__)){
return or__7645__auto__;
} else {
return new cljs.core.Keyword(null,"sent?","sent?",1251086682).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,active_receipt));
}
})()))?"none":null)], null)], null),cljs.core.deref.call(null,receipt_status_text)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.receipt-content-wrapper","div.receipt-content-wrapper",1977882031),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pozn_adaptive.receipt.view.order_list_component], null),((cljs.core.not.call(null,new cljs.core.Keyword(null,"paid?","paid?",1217824088).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,active_receipt))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.fixed-buttons.selected-dishes","button.fixed-buttons.selected-dishes",-686826587),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (active_receipt,receipt_status_text,top_bar_table_text){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pozn-adaptive.events","modal","pozn-adaptive.events/modal",-1929500107),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"show?","show?",1543842127),true,new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pozn_adaptive.receipt.view.more_menu], null),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"small","small",2133478704)], null)], null));
});})(active_receipt,receipt_status_text,top_bar_table_text))
], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.md_icon_button,new cljs.core.Keyword(null,"md-icon-name","md-icon-name",681785863),"zmdi-check",new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"larger","larger",1304935444)], null)], null):null),((cljs.core.not.call(null,new cljs.core.Keyword(null,"paid?","paid?",1217824088).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,active_receipt))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.fixed-buttons.add-guest","button.fixed-buttons.add-guest",-1179704282),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (active_receipt,receipt_status_text,top_bar_table_text){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pozn-adaptive.receipt.events","add-new-guest","pozn-adaptive.receipt.events/add-new-guest",-1377278271)], null));
});})(active_receipt,receipt_status_text,top_bar_table_text))
], null),"\u0413+"], null):null),((cljs.core.not.call(null,new cljs.core.Keyword(null,"paid?","paid?",1217824088).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,active_receipt))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.fixed-buttons.add-dish","button.fixed-buttons.add-dish",1389555940),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (active_receipt,receipt_status_text,top_bar_table_text){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pozn-adaptive.events","set-slide-window","pozn-adaptive.events/set-slide-window",130449657),true,new cljs.core.Keyword(null,"menu","menu",352255198)], null));
});})(active_receipt,receipt_status_text,top_bar_table_text))
], null),"\u0411+"], null):null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pozn_adaptive.receipt.view.slide_panel], null)], null)], null);
});
;})(active_receipt,receipt_status_text,top_bar_table_text))
});

//# sourceMappingURL=view.js.map
