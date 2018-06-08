// Compiled by ClojureScript 1.9.908 {}
goog.provide('pozn_adaptive.menu.view');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('re_com.core');
goog.require('pozn_adaptive.menu.events');
goog.require('pozn_adaptive.menu.subs');
pozn_adaptive.menu.view.search_dish = (function pozn_adaptive$menu$view$search_dish(){
var search_query = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pozn-adaptive.menu.subs","search-query","pozn-adaptive.menu.subs/search-query",18141111)], null));
return ((function (search_query){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.search-dish-form","div.search-dish-form",311884927),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.search-dish","input.search-dish",1298134274),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,search_query),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (search_query){
return (function (p1__19734_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pozn-adaptive.menu.events","set-search-query","pozn-adaptive.menu.events/set-search-query",1578606125),p1__19734_SHARP_.target.value], null));
});})(search_query))
], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.clear-search","button.clear-search",-1645911597),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (search_query){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pozn-adaptive.menu.events","set-search-query","pozn-adaptive.menu.events/set-search-query",1578606125),""], null));
});})(search_query))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.md_icon_button,new cljs.core.Keyword(null,"md-icon-name","md-icon-name",681785863),"zmdi-close"], null)], null)], null);
});
;})(search_query))
});
pozn_adaptive.menu.view.menu_view = (function pozn_adaptive$menu$view$menu_view(){
var filtered_dishes = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pozn-adaptive.menu.subs","filtered-dishes","pozn-adaptive.menu.subs/filtered-dishes",387015134)], null));
return ((function (filtered_dishes){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.menu-wrapper","div.menu-wrapper",1537569773),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pozn_adaptive.menu.view.search_dish], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.menu-list","div.menu-list",-786375307),(function (){var iter__8453__auto__ = ((function (filtered_dishes){
return (function pozn_adaptive$menu$view$menu_view_$_iter__19735(s__19736){
return (new cljs.core.LazySeq(null,((function (filtered_dishes){
return (function (){
var s__19736__$1 = s__19736;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__19736__$1);
if(temp__4657__auto__){
var s__19736__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__19736__$2)){
var c__8451__auto__ = cljs.core.chunk_first.call(null,s__19736__$2);
var size__8452__auto__ = cljs.core.count.call(null,c__8451__auto__);
var b__19738 = cljs.core.chunk_buffer.call(null,size__8452__auto__);
if((function (){var i__19737 = (0);
while(true){
if((i__19737 < size__8452__auto__)){
var dish = cljs.core._nth.call(null,c__8451__auto__,i__19737);
cljs.core.chunk_append.call(null,b__19738,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.menu-dish-buttons-wrapper","div.menu-dish-buttons-wrapper",49026178),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__19737,dish,c__8451__auto__,size__8452__auto__,b__19738,s__19736__$2,temp__4657__auto__,filtered_dishes){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pozn-adaptive.menu.events","add-new-dish-fast","pozn-adaptive.menu.events/add-new-dish-fast",-1267514310),dish,true], null));
});})(i__19737,dish,c__8451__auto__,size__8452__auto__,b__19738,s__19736__$2,temp__4657__auto__,filtered_dishes))
,new cljs.core.Keyword(null,"class","class",-2030961996),"list-group-item product-button list-button"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.Keyword(null,"short_name","short_name",1420585806).cljs$core$IFn$_invoke$arity$1(dish),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.md_icon_button,new cljs.core.Keyword(null,"md-icon-name","md-icon-name",681785863),"zmdi-plus-circle-o"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.right-area-menu-dish-button","div.right-area-menu-dish-button",-1112628614),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__19737,dish,c__8451__auto__,size__8452__auto__,b__19738,s__19736__$2,temp__4657__auto__,filtered_dishes){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pozn-adaptive.menu.events","edit-new-dish","pozn-adaptive.menu.events/edit-new-dish",2086053859),dish], null));
});})(i__19737,dish,c__8451__auto__,size__8452__auto__,b__19738,s__19736__$2,temp__4657__auto__,filtered_dishes))
], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(dish)], null)));

var G__19739 = (i__19737 + (1));
i__19737 = G__19739;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19738),pozn_adaptive$menu$view$menu_view_$_iter__19735.call(null,cljs.core.chunk_rest.call(null,s__19736__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19738),null);
}
} else {
var dish = cljs.core.first.call(null,s__19736__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.menu-dish-buttons-wrapper","div.menu-dish-buttons-wrapper",49026178),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (dish,s__19736__$2,temp__4657__auto__,filtered_dishes){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pozn-adaptive.menu.events","add-new-dish-fast","pozn-adaptive.menu.events/add-new-dish-fast",-1267514310),dish,true], null));
});})(dish,s__19736__$2,temp__4657__auto__,filtered_dishes))
,new cljs.core.Keyword(null,"class","class",-2030961996),"list-group-item product-button list-button"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.Keyword(null,"short_name","short_name",1420585806).cljs$core$IFn$_invoke$arity$1(dish),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.md_icon_button,new cljs.core.Keyword(null,"md-icon-name","md-icon-name",681785863),"zmdi-plus-circle-o"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.right-area-menu-dish-button","div.right-area-menu-dish-button",-1112628614),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (dish,s__19736__$2,temp__4657__auto__,filtered_dishes){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pozn-adaptive.menu.events","edit-new-dish","pozn-adaptive.menu.events/edit-new-dish",2086053859),dish], null));
});})(dish,s__19736__$2,temp__4657__auto__,filtered_dishes))
], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(dish)], null)),pozn_adaptive$menu$view$menu_view_$_iter__19735.call(null,cljs.core.rest.call(null,s__19736__$2)));
}
} else {
return null;
}
break;
}
});})(filtered_dishes))
,null,null));
});})(filtered_dishes))
;
return iter__8453__auto__.call(null,cljs.core.deref.call(null,filtered_dishes));
})()], null)], null);
});
;})(filtered_dishes))
});

//# sourceMappingURL=view.js.map
