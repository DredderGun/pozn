// Compiled by ClojureScript 1.9.908 {}
goog.provide('pozn_adaptive.menu.subs');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('clojure.string');
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("pozn-adaptive.menu.subs","search-query","pozn-adaptive.menu.subs/search-query",18141111),(function (db,_){
return new cljs.core.Keyword(null,"dish-search-query","dish-search-query",1864156245).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("pozn-adaptive.menu.subs","filtered-dishes","pozn-adaptive.menu.subs/filtered-dishes",387015134),(function (db,_){
var filter_tokens = (function (filter_str){
return cljs.core.remove.call(null,cljs.core.empty_QMARK_,clojure.string.split.call(null,filter_str,/\s+/));
});
var filter_row = ((function (filter_tokens){
return (function (dish_search_query,dish_name){
return cljs.core.every_QMARK_.call(null,cljs.core.identity,(function (){var iter__8453__auto__ = ((function (filter_tokens){
return (function pozn_adaptive$menu$subs$iter__19727(s__19728){
return (new cljs.core.LazySeq(null,((function (filter_tokens){
return (function (){
var s__19728__$1 = s__19728;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__19728__$1);
if(temp__4657__auto__){
var s__19728__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__19728__$2)){
var c__8451__auto__ = cljs.core.chunk_first.call(null,s__19728__$2);
var size__8452__auto__ = cljs.core.count.call(null,c__8451__auto__);
var b__19730 = cljs.core.chunk_buffer.call(null,size__8452__auto__);
if((function (){var i__19729 = (0);
while(true){
if((i__19729 < size__8452__auto__)){
var filter = cljs.core._nth.call(null,c__8451__auto__,i__19729);
cljs.core.chunk_append.call(null,b__19730,clojure.string.index_of.call(null,clojure.string.upper_case.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(dish_name)].join('')),clojure.string.upper_case.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(filter)].join(''))));

var G__19731 = (i__19729 + (1));
i__19729 = G__19731;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19730),pozn_adaptive$menu$subs$iter__19727.call(null,cljs.core.chunk_rest.call(null,s__19728__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19730),null);
}
} else {
var filter = cljs.core.first.call(null,s__19728__$2);
return cljs.core.cons.call(null,clojure.string.index_of.call(null,clojure.string.upper_case.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(dish_name)].join('')),clojure.string.upper_case.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(filter)].join(''))),pozn_adaptive$menu$subs$iter__19727.call(null,cljs.core.rest.call(null,s__19728__$2)));
}
} else {
return null;
}
break;
}
});})(filter_tokens))
,null,null));
});})(filter_tokens))
;
return iter__8453__auto__.call(null,filter_tokens.call(null,dish_search_query));
})());
});})(filter_tokens))
;
if(cljs.core._EQ_.call(null,clojure.string.trim.call(null,new cljs.core.Keyword(null,"dish-search-query","dish-search-query",1864156245).cljs$core$IFn$_invoke$arity$1(db)),"")){
return new cljs.core.Keyword(null,"menu-items","menu-items",-1870634357).cljs$core$IFn$_invoke$arity$1(db);
} else {
return cljs.core.filter.call(null,((function (filter_tokens,filter_row){
return (function (p1__19726_SHARP_){
return filter_row.call(null,new cljs.core.Keyword(null,"dish-search-query","dish-search-query",1864156245).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.Keyword(null,"short_name","short_name",1420585806).cljs$core$IFn$_invoke$arity$1(p1__19726_SHARP_));
});})(filter_tokens,filter_row))
,new cljs.core.Keyword(null,"menu-items","menu-items",-1870634357).cljs$core$IFn$_invoke$arity$1(db));
}
}));

//# sourceMappingURL=subs.js.map
