// Compiled by ClojureScript 1.9.908 {}
goog.provide('pozn_adaptive.dish.view');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('re_com.core');
goog.require('reagent.core');
goog.require('pozn_adaptive.dish.events');
goog.require('pozn_adaptive.events');
goog.require('pozn_adaptive.dish.subs');
pozn_adaptive.dish.view.modificators_input_component = (function pozn_adaptive$dish$view$modificators_input_component(){
var form_value = reagent.core.atom.call(null,"");
var selected_dish_modificators = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pozn-adaptive.dish.subs","selected-dish-modificators","pozn-adaptive.dish.subs/selected-dish-modificators",1447149772)], null));
return ((function (form_value,selected_dish_modificators){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.modificators-wrapper","div.modificators-wrapper",1612620097),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),"comments"], null),"\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#comments.modificators-input-wrapper","div#comments.modificators-input-wrapper",1149796596),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.search-dish","input.search-dish",1298134274),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,form_value),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (form_value,selected_dish_modificators){
return (function (p1__19678_SHARP_){
return cljs.core.reset_BANG_.call(null,form_value,p1__19678_SHARP_.target.value);
});})(form_value,selected_dish_modificators))
], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (form_value,selected_dish_modificators){
return (function (){
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pozn-adaptive.dish.events","change-active-dish-modificators","pozn-adaptive.dish.events/change-active-dish-modificators",-899759407),cljs.core.deref.call(null,form_value)], null));

return cljs.core.reset_BANG_.call(null,form_value,"");
});})(form_value,selected_dish_modificators))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["zmdi zmdi-hc-fw-rc zmdi-plus"].join('')], null)], null)], null)], null),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.added-comments","div.added-comments",1458868186)], null),(function (){var iter__8453__auto__ = ((function (form_value,selected_dish_modificators){
return (function pozn_adaptive$dish$view$modificators_input_component_$_iter__19679(s__19680){
return (new cljs.core.LazySeq(null,((function (form_value,selected_dish_modificators){
return (function (){
var s__19680__$1 = s__19680;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__19680__$1);
if(temp__4657__auto__){
var s__19680__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__19680__$2)){
var c__8451__auto__ = cljs.core.chunk_first.call(null,s__19680__$2);
var size__8452__auto__ = cljs.core.count.call(null,c__8451__auto__);
var b__19682 = cljs.core.chunk_buffer.call(null,size__8452__auto__);
if((function (){var i__19681 = (0);
while(true){
if((i__19681 < size__8452__auto__)){
var vec__19683 = cljs.core._nth.call(null,c__8451__auto__,i__19681);
var id = cljs.core.nth.call(null,vec__19683,(0),null);
var map__19686 = cljs.core.nth.call(null,vec__19683,(1),null);
var map__19686__$1 = ((((!((map__19686 == null)))?((((map__19686.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19686.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19686):map__19686);
var message = cljs.core.get.call(null,map__19686__$1,new cljs.core.Keyword(null,"message","message",-406056002));
cljs.core.chunk_append.call(null,b__19682,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),message,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),["zmdi zmdi-hc-fw-rc zmdi-close"].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__19681,vec__19683,id,map__19686,map__19686__$1,message,c__8451__auto__,size__8452__auto__,b__19682,s__19680__$2,temp__4657__auto__,form_value,selected_dish_modificators){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pozn-adaptive.dish.events","delete-modificator","pozn-adaptive.dish.events/delete-modificator",1592653207),id], null));
});})(i__19681,vec__19683,id,map__19686,map__19686__$1,message,c__8451__auto__,size__8452__auto__,b__19682,s__19680__$2,temp__4657__auto__,form_value,selected_dish_modificators))
], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)));

var G__19693 = (i__19681 + (1));
i__19681 = G__19693;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19682),pozn_adaptive$dish$view$modificators_input_component_$_iter__19679.call(null,cljs.core.chunk_rest.call(null,s__19680__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19682),null);
}
} else {
var vec__19688 = cljs.core.first.call(null,s__19680__$2);
var id = cljs.core.nth.call(null,vec__19688,(0),null);
var map__19691 = cljs.core.nth.call(null,vec__19688,(1),null);
var map__19691__$1 = ((((!((map__19691 == null)))?((((map__19691.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19691.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19691):map__19691);
var message = cljs.core.get.call(null,map__19691__$1,new cljs.core.Keyword(null,"message","message",-406056002));
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),message,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),["zmdi zmdi-hc-fw-rc zmdi-close"].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__19688,id,map__19691,map__19691__$1,message,s__19680__$2,temp__4657__auto__,form_value,selected_dish_modificators){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pozn-adaptive.dish.events","delete-modificator","pozn-adaptive.dish.events/delete-modificator",1592653207),id], null));
});})(vec__19688,id,map__19691,map__19691__$1,message,s__19680__$2,temp__4657__auto__,form_value,selected_dish_modificators))
], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)),pozn_adaptive$dish$view$modificators_input_component_$_iter__19679.call(null,cljs.core.rest.call(null,s__19680__$2)));
}
} else {
return null;
}
break;
}
});})(form_value,selected_dish_modificators))
,null,null));
});})(form_value,selected_dish_modificators))
;
return iter__8453__auto__.call(null,cljs.core.deref.call(null,selected_dish_modificators));
})())], null);
});
;})(form_value,selected_dish_modificators))
});
pozn_adaptive.dish.view.numbers_dish_comp = (function pozn_adaptive$dish$view$numbers_dish_comp(editing_QMARK_){
var custom_count = reagent.core.atom.call(null,"");
var remove_last = ((function (custom_count){
return (function (s){
return cljs.core.subs.call(null,s,(0),(cljs.core.count.call(null,s) - (1)));
});})(custom_count))
;
var concat_to_string = ((function (custom_count,remove_last){
return (function (n){
return cljs.core.swap_BANG_.call(null,custom_count,cljs.core.str,n);
});})(custom_count,remove_last))
;
var subtract_count = ((function (custom_count,remove_last,concat_to_string){
return (function (){
if((typeof cljs.core.deref.call(null,custom_count) === 'string') && (cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,custom_count),""))){
return cljs.core.swap_BANG_.call(null,custom_count,remove_last);
} else {
if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,custom_count),"")){
return cljs.core.swap_BANG_.call(null,custom_count,"");
} else {
return null;

}
}
});})(custom_count,remove_last,concat_to_string))
;
var price = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pozn-adaptive.dish.subs","active-dish-price","pozn-adaptive.dish.subs/active-dish-price",-830984816)], null));
var editing_dish_count = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pozn-adaptive.dish.subs","active-dish-count","pozn-adaptive.dish.subs/active-dish-count",30824146)], null));
var editing_dish_sum = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pozn-adaptive.dish.subs","active-dish-sum","pozn-adaptive.dish.subs/active-dish-sum",893202314)], null));
return ((function (custom_count,remove_last,concat_to_string,subtract_count,price,editing_dish_count,editing_dish_sum){
return (function (editing_QMARK___$1){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#count-dish-wrapper","div#count-dish-wrapper",73283691),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.dish-count","div.dish-count",-1585435929),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.deref.call(null,custom_count)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,editing_dish_count))," X ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,price))," = ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,editing_dish_sum))].join('')], null)], null),new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#number-buttons-wrapper","div#number-buttons-wrapper",870818471),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.number-button","button.number-button",703084304),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (custom_count,remove_last,concat_to_string,subtract_count,price,editing_dish_count,editing_dish_sum){
return (function (){
return concat_to_string.call(null,"1");
});})(custom_count,remove_last,concat_to_string,subtract_count,price,editing_dish_count,editing_dish_sum))
], null),(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.number-button","button.number-button",703084304),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (custom_count,remove_last,concat_to_string,subtract_count,price,editing_dish_count,editing_dish_sum){
return (function (){
return concat_to_string.call(null,"2");
});})(custom_count,remove_last,concat_to_string,subtract_count,price,editing_dish_count,editing_dish_sum))
], null),(2)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.number-button","button.number-button",703084304),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (custom_count,remove_last,concat_to_string,subtract_count,price,editing_dish_count,editing_dish_sum){
return (function (){
return concat_to_string.call(null,"3");
});})(custom_count,remove_last,concat_to_string,subtract_count,price,editing_dish_count,editing_dish_sum))
], null),(3)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.number-button","button.number-button",703084304),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (custom_count,remove_last,concat_to_string,subtract_count,price,editing_dish_count,editing_dish_sum){
return (function (){
return concat_to_string.call(null,"4");
});})(custom_count,remove_last,concat_to_string,subtract_count,price,editing_dish_count,editing_dish_sum))
], null),(4)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.number-button","button.number-button",703084304),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (custom_count,remove_last,concat_to_string,subtract_count,price,editing_dish_count,editing_dish_sum){
return (function (){
return concat_to_string.call(null,"5");
});})(custom_count,remove_last,concat_to_string,subtract_count,price,editing_dish_count,editing_dish_sum))
], null),(5)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.number-button","button.number-button",703084304),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (custom_count,remove_last,concat_to_string,subtract_count,price,editing_dish_count,editing_dish_sum){
return (function (){
return concat_to_string.call(null,"6");
});})(custom_count,remove_last,concat_to_string,subtract_count,price,editing_dish_count,editing_dish_sum))
], null),(6)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.number-button","button.number-button",703084304),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (custom_count,remove_last,concat_to_string,subtract_count,price,editing_dish_count,editing_dish_sum){
return (function (){
return concat_to_string.call(null,"7");
});})(custom_count,remove_last,concat_to_string,subtract_count,price,editing_dish_count,editing_dish_sum))
], null),(7)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.number-button","button.number-button",703084304),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (custom_count,remove_last,concat_to_string,subtract_count,price,editing_dish_count,editing_dish_sum){
return (function (){
return concat_to_string.call(null,"8");
});})(custom_count,remove_last,concat_to_string,subtract_count,price,editing_dish_count,editing_dish_sum))
], null),(8)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.number-button","button.number-button",703084304),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (custom_count,remove_last,concat_to_string,subtract_count,price,editing_dish_count,editing_dish_sum){
return (function (){
return concat_to_string.call(null,"9");
});})(custom_count,remove_last,concat_to_string,subtract_count,price,editing_dish_count,editing_dish_sum))
], null),(9)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.number-button","button.number-button",703084304),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (custom_count,remove_last,concat_to_string,subtract_count,price,editing_dish_count,editing_dish_sum){
return (function (){
return subtract_count.call(null);
});})(custom_count,remove_last,concat_to_string,subtract_count,price,editing_dish_count,editing_dish_sum))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["zmdi zmdi-hc-fw-rc zmdi-arrow-left"].join('')], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.number-button","button.number-button",703084304),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (custom_count,remove_last,concat_to_string,subtract_count,price,editing_dish_count,editing_dish_sum){
return (function (){
return concat_to_string.call(null,"0");
});})(custom_count,remove_last,concat_to_string,subtract_count,price,editing_dish_count,editing_dish_sum))
], null),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.number-button","button.number-button",703084304),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (custom_count,remove_last,concat_to_string,subtract_count,price,editing_dish_count,editing_dish_sum){
return (function (){
return concat_to_string.call(null,".5");
});})(custom_count,remove_last,concat_to_string,subtract_count,price,editing_dish_count,editing_dish_sum))
], null),0.5], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#bottom-buttons-count-dish","div#bottom-buttons-count-dish",-2143575089),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (custom_count,remove_last,concat_to_string,subtract_count,price,editing_dish_count,editing_dish_sum){
return (function (){
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pozn-adaptive.dish.events","change-dish-count-in-receipt","pozn-adaptive.dish.events/change-dish-count-in-receipt",-76459273),cljs.core._PLUS_,cljs.core.deref.call(null,custom_count)], null));

return cljs.core.reset_BANG_.call(null,custom_count,"");
});})(custom_count,remove_last,concat_to_string,subtract_count,price,editing_dish_count,editing_dish_sum))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["zmdi zmdi-hc-fw-rc zmdi-plus"].join('')], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (custom_count,remove_last,concat_to_string,subtract_count,price,editing_dish_count,editing_dish_sum){
return (function (){
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pozn-adaptive.dish.events","change-dish-count-in-receipt","pozn-adaptive.dish.events/change-dish-count-in-receipt",-76459273),cljs.core._,cljs.core.deref.call(null,custom_count)], null));

return cljs.core.reset_BANG_.call(null,custom_count,"");
});})(custom_count,remove_last,concat_to_string,subtract_count,price,editing_dish_count,editing_dish_sum))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["zmdi zmdi-hc-fw-rc zmdi-minus"].join('')], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (custom_count,remove_last,concat_to_string,subtract_count,price,editing_dish_count,editing_dish_sum){
return (function (){
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pozn-adaptive.dish.events","change-dish-count-in-receipt","pozn-adaptive.dish.events/change-dish-count-in-receipt",-76459273),null,cljs.core.deref.call(null,custom_count)], null));

return cljs.core.reset_BANG_.call(null,custom_count,"");
});})(custom_count,remove_last,concat_to_string,subtract_count,price,editing_dish_count,editing_dish_sum))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["zmdi zmdi-hc-fw-rc zmdi-refresh"].join('')], null)], null)], null),((cljs.core.not.call(null,cljs.core.deref.call(null,editing_QMARK___$1)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (custom_count,remove_last,concat_to_string,subtract_count,price,editing_dish_count,editing_dish_sum){
return (function (){
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pozn-adaptive.dish.events","add-new-dish-with-spec-count","pozn-adaptive.dish.events/add-new-dish-with-spec-count",758732791),cljs.core.deref.call(null,custom_count)], null));

return cljs.core.reset_BANG_.call(null,custom_count,"");
});})(custom_count,remove_last,concat_to_string,subtract_count,price,editing_dish_count,editing_dish_sum))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["zmdi zmdi-hc-fw-rc zmdi-flare"].join('')], null)], null)], null):null)], null)], null);
});
;})(custom_count,remove_last,concat_to_string,subtract_count,price,editing_dish_count,editing_dish_sum))
});
pozn_adaptive.dish.view.dish = (function pozn_adaptive$dish$view$dish(){
var short_name = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pozn-adaptive.dish.subs","active-dish-short-name","pozn-adaptive.dish.subs/active-dish-short-name",-536140030)], null));
var editing_QMARK_ = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pozn-adaptive.dish.subs","editing?","pozn-adaptive.dish.subs/editing?",166639685)], null));
return ((function (short_name,editing_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#product-wrapper","div#product-wrapper",-2035815401),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"gap","gap",80255254),"20px",new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.chevron-wrapper.chevron-wrapper-without-sandwich.dish-chevron","div.chevron-wrapper.chevron-wrapper-without-sandwich.dish-chevron",-833206173),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.md_icon_button,new cljs.core.Keyword(null,"md-icon-name","md-icon-name",681785863),"zmdi-chevron-left",new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"larger","larger",1304935444),new cljs.core.Keyword(null,"class","class",-2030961996),"back-button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (short_name,editing_QMARK_){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pozn-adaptive.dish.events","dish-back-hn","pozn-adaptive.dish.events/dish-back-hn",-1880819228)], null));
});})(short_name,editing_QMARK_))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"13%"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (short_name,editing_QMARK_){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pozn-adaptive.events","set-slide-window","pozn-adaptive.events/set-slide-window",130449657),true,new cljs.core.Keyword(null,"dish-desc","dish-desc",-1405365758)], null));
});})(short_name,editing_QMARK_))
], null),cljs.core.deref.call(null,short_name)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pozn_adaptive.dish.view.numbers_dish_comp,editing_QMARK_], null),((cljs.core.not.call(null,cljs.core.deref.call(null,editing_QMARK_)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (short_name,editing_QMARK_){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pozn-adaptive.dish.events","add-new-dish","pozn-adaptive.dish.events/add-new-dish",-67402052)], null));
});})(short_name,editing_QMARK_))
], null),"\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C"], null):null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pozn_adaptive.dish.view.modificators_input_component], null)], null)], null)], null);
});
;})(short_name,editing_QMARK_))
});

//# sourceMappingURL=view.js.map
