// Compiled by ClojureScript 1.9.908 {}
goog.provide('pozn_adaptive.pay.view');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('re_com.core');
goog.require('pozn_adaptive.pay.events');
goog.require('pozn_adaptive.pay.subs');
pozn_adaptive.pay.view.pay_view = (function pozn_adaptive$pay$view$pay_view(){
var receipt_sum = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pozn-adaptive.pay.subs","active-receipt-sum-and-payment","pozn-adaptive.pay.subs/active-receipt-sum-and-payment",2147326906)], null));
return ((function (receipt_sum){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"gap","gap",80255254),"20px",new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.chevron-wrapper.chevron-wrapper-without-sandwich","div.chevron-wrapper.chevron-wrapper-without-sandwich",-1784635464),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.md_icon_button,new cljs.core.Keyword(null,"md-icon-name","md-icon-name",681785863),"zmdi-chevron-left",new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"larger","larger",1304935444),new cljs.core.Keyword(null,"class","class",-2030961996),"back-button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (receipt_sum){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pozn-adaptive.pay.events","change-layout","pozn-adaptive.pay.events/change-layout",-1584724784),new cljs.core.Keyword(null,"new-sale-receipt","new-sale-receipt",-587581497)], null));
});})(receipt_sum))
], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"13%"], null),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),"\u041E\u043F\u043B\u0430\u0442\u0430",new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level2","level2",-2044031830)], null)], null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),["\u041E\u0431\u0449\u0430\u044F \u0441\u0443\u043C\u043C\u0430: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"sum-price","sum-price",375522511).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,receipt_sum)))].join(''),new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level1","level1",813811133),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),new cljs.core.Keyword(null,"center","center",-748944368)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"align-self","align-self",1475936794),new cljs.core.Keyword(null,"end","end",-268185958),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.label,new cljs.core.Keyword(null,"label","label",1718410804),"\u041D\u0430\u043B\u0438\u0447\u043D\u044B\u0435"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,new cljs.core.Keyword(null,"label","label",1718410804),"\u0412\u0441\u044E \u0441\u0443\u043C\u043C\u0443 ->",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (receipt_sum){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pozn-adaptive.pay.events","add-all-sum-to-specified-payment","pozn-adaptive.pay.events/add-all-sum-to-specified-payment",-1240827199),new cljs.core.Keyword(null,"cash","cash",181122222)], null));
});})(receipt_sum))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"cash","cash",181122222).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"payment","payment",-1682035288).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,receipt_sum))),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (receipt_sum){
return (function (p1__17524_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pozn-adaptive.pay.events","change-card-or-cash-sum","pozn-adaptive.pay.events/change-card-or-cash-sum",-1583735376),new cljs.core.Keyword(null,"cash","cash",181122222),p1__17524_SHARP_.target.value], null));
});})(receipt_sum))
], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.gap,new cljs.core.Keyword(null,"size","size",1098693007),"15px"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"align-self","align-self",1475936794),new cljs.core.Keyword(null,"end","end",-268185958),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.label,new cljs.core.Keyword(null,"label","label",1718410804),"\u041A\u0430\u0440\u0442\u0430"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,new cljs.core.Keyword(null,"label","label",1718410804),"\u0412\u0441\u044E \u0441\u0443\u043C\u043C\u0443 ->",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (receipt_sum){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pozn-adaptive.pay.events","add-all-sum-to-specified-payment","pozn-adaptive.pay.events/add-all-sum-to-specified-payment",-1240827199),new cljs.core.Keyword(null,"card","card",-1430355152)], null));
});})(receipt_sum))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"card","card",-1430355152).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"payment","payment",-1682035288).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,receipt_sum))),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (receipt_sum){
return (function (p1__17525_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pozn-adaptive.pay.events","change-card-or-cash-sum","pozn-adaptive.pay.events/change-card-or-cash-sum",-1583735376),new cljs.core.Keyword(null,"card","card",-1430355152),p1__17525_SHARP_.target.value], null));
});})(receipt_sum))
], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.gap,new cljs.core.Keyword(null,"size","size",1098693007),"15px"], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,new cljs.core.Keyword(null,"label","label",1718410804),"\u041E\u043F\u043B\u0430\u0442\u0438\u0442\u044C",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (receipt_sum){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pozn-adaptive.pay.events","pay-receipt","pozn-adaptive.pay.events/pay-receipt",-1939569645)], null));
});})(receipt_sum))
], null)], null)], null)], null)], null);
});
;})(receipt_sum))
});

//# sourceMappingURL=view.js.map
