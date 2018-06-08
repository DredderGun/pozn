// Compiled by ClojureScript 1.9.908 {}
goog.provide('pozn_adaptive.tables.view');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('re_com.core');
goog.require('pozn_adaptive.tables.events');
goog.require('pozn_adaptive.events');
goog.require('pozn_adaptive.tables.subs');
goog.require('pozn_adaptive.modal_windows.window');
pozn_adaptive.tables.view.tabs_component = (function pozn_adaptive$tables$view$tabs_component(tabs_definition){
var active_area = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pozn-adaptive.tables.subs","active-area","pozn-adaptive.tables.subs/active-area",-866598012)], null));
var active_area_tables = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pozn-adaptive.tables.subs","active-area-tables","pozn-adaptive.tables.subs/active-area-tables",2036121080)], null));
return ((function (active_area,active_area_tables){
return (function (tabs_definition__$1){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"class","class",-2030961996),"top-wrapper",new cljs.core.Keyword(null,"justify","justify",-722524056),new cljs.core.Keyword(null,"around","around",-265975553),new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.horizontal_bar_tabs,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin","margin",-995903681),"auto",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"20px"], null),new cljs.core.Keyword(null,"model","model",331153215),active_area,new cljs.core.Keyword(null,"tabs","tabs",-779855354),tabs_definition__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (active_area,active_area_tables){
return (function (p1__19851_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pozn-adaptive.tables.events","activate-area","pozn-adaptive.tables.events/activate-area",-1769584038),p1__19851_SHARP_], null));
});})(active_area,active_area_tables))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.list-group.tables-list","div.list-group.tables-list",1457567456),(function (){var iter__8453__auto__ = ((function (active_area,active_area_tables){
return (function pozn_adaptive$tables$view$tabs_component_$_iter__19852(s__19853){
return (new cljs.core.LazySeq(null,((function (active_area,active_area_tables){
return (function (){
var s__19853__$1 = s__19853;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__19853__$1);
if(temp__4657__auto__){
var s__19853__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__19853__$2)){
var c__8451__auto__ = cljs.core.chunk_first.call(null,s__19853__$2);
var size__8452__auto__ = cljs.core.count.call(null,c__8451__auto__);
var b__19855 = cljs.core.chunk_buffer.call(null,size__8452__auto__);
if((function (){var i__19854 = (0);
while(true){
if((i__19854 < size__8452__auto__)){
var table = cljs.core._nth.call(null,c__8451__auto__,i__19854);
cljs.core.chunk_append.call(null,b__19855,cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,new cljs.core.Keyword(null,"class","class",-2030961996),"list-group-item table-button list-button",new cljs.core.Keyword(null,"label","label",1718410804),["\u0421\u0442\u043E\u043B ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,active_area)),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(table)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__19854,table,c__8451__auto__,size__8452__auto__,b__19855,s__19853__$2,temp__4657__auto__,active_area,active_area_tables){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pozn-adaptive.tables.events","process-table","pozn-adaptive.tables.events/process-table",-1657578927),table], null));
});})(i__19854,table,c__8451__auto__,size__8452__auto__,b__19855,s__19853__$2,temp__4657__auto__,active_area,active_area_tables))
], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),table], null)));

var G__19856 = (i__19854 + (1));
i__19854 = G__19856;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19855),pozn_adaptive$tables$view$tabs_component_$_iter__19852.call(null,cljs.core.chunk_rest.call(null,s__19853__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19855),null);
}
} else {
var table = cljs.core.first.call(null,s__19853__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,new cljs.core.Keyword(null,"class","class",-2030961996),"list-group-item table-button list-button",new cljs.core.Keyword(null,"label","label",1718410804),["\u0421\u0442\u043E\u043B ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,active_area)),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(table)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (table,s__19853__$2,temp__4657__auto__,active_area,active_area_tables){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pozn-adaptive.tables.events","process-table","pozn-adaptive.tables.events/process-table",-1657578927),table], null));
});})(table,s__19853__$2,temp__4657__auto__,active_area,active_area_tables))
], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),table], null)),pozn_adaptive$tables$view$tabs_component_$_iter__19852.call(null,cljs.core.rest.call(null,s__19853__$2)));
}
} else {
return null;
}
break;
}
});})(active_area,active_area_tables))
,null,null));
});})(active_area,active_area_tables))
;
return iter__8453__auto__.call(null,new cljs.core.Keyword(null,"tables","tables",1334623052).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,active_area_tables)));
})()], null)], null)], null);
});
;})(active_area,active_area_tables))
});
pozn_adaptive.tables.view.list_component = (function pozn_adaptive$tables$view$list_component(tabs_definition){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var iter__8453__auto__ = (function pozn_adaptive$tables$view$list_component_$_iter__19857(s__19858){
return (new cljs.core.LazySeq(null,(function (){
var s__19858__$1 = s__19858;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__19858__$1);
if(temp__4657__auto__){
var s__19858__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__19858__$2)){
var c__8451__auto__ = cljs.core.chunk_first.call(null,s__19858__$2);
var size__8452__auto__ = cljs.core.count.call(null,c__8451__auto__);
var b__19860 = cljs.core.chunk_buffer.call(null,size__8452__auto__);
if((function (){var i__19859 = (0);
while(true){
if((i__19859 < size__8452__auto__)){
var area_map = cljs.core._nth.call(null,c__8451__auto__,i__19859);
cljs.core.chunk_append.call(null,b__19860,cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"class","class",-2030961996),"top-wrapper",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2.bg-primary.area-subheader","h2.bg-primary.area-subheader",-1852384967),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(area_map)], null),(function (){var iter__8453__auto__ = ((function (i__19859,area_map,c__8451__auto__,size__8452__auto__,b__19860,s__19858__$2,temp__4657__auto__){
return (function pozn_adaptive$tables$view$list_component_$_iter__19857_$_iter__19861(s__19862){
return (new cljs.core.LazySeq(null,((function (i__19859,area_map,c__8451__auto__,size__8452__auto__,b__19860,s__19858__$2,temp__4657__auto__){
return (function (){
var s__19862__$1 = s__19862;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__19862__$1);
if(temp__4657__auto____$1){
var s__19862__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__19862__$2)){
var c__8451__auto____$1 = cljs.core.chunk_first.call(null,s__19862__$2);
var size__8452__auto____$1 = cljs.core.count.call(null,c__8451__auto____$1);
var b__19864 = cljs.core.chunk_buffer.call(null,size__8452__auto____$1);
if((function (){var i__19863 = (0);
while(true){
if((i__19863 < size__8452__auto____$1)){
var table = cljs.core._nth.call(null,c__8451__auto____$1,i__19863);
cljs.core.chunk_append.call(null,b__19864,cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,new cljs.core.Keyword(null,"class","class",-2030961996),"list-group-item table-button list-button",new cljs.core.Keyword(null,"label","label",1718410804),["\u0421\u0442\u043E\u043B ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(area_map)),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(table)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__19863,i__19859,table,c__8451__auto____$1,size__8452__auto____$1,b__19864,s__19862__$2,temp__4657__auto____$1,area_map,c__8451__auto__,size__8452__auto__,b__19860,s__19858__$2,temp__4657__auto__){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pozn-adaptive.tables.events","process-table","pozn-adaptive.tables.events/process-table",-1657578927),table], null));
});})(i__19863,i__19859,table,c__8451__auto____$1,size__8452__auto____$1,b__19864,s__19862__$2,temp__4657__auto____$1,area_map,c__8451__auto__,size__8452__auto__,b__19860,s__19858__$2,temp__4657__auto__))
], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),table], null)));

var G__19869 = (i__19863 + (1));
i__19863 = G__19869;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19864),pozn_adaptive$tables$view$list_component_$_iter__19857_$_iter__19861.call(null,cljs.core.chunk_rest.call(null,s__19862__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19864),null);
}
} else {
var table = cljs.core.first.call(null,s__19862__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,new cljs.core.Keyword(null,"class","class",-2030961996),"list-group-item table-button list-button",new cljs.core.Keyword(null,"label","label",1718410804),["\u0421\u0442\u043E\u043B ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(area_map)),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(table)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__19859,table,s__19862__$2,temp__4657__auto____$1,area_map,c__8451__auto__,size__8452__auto__,b__19860,s__19858__$2,temp__4657__auto__){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pozn-adaptive.tables.events","process-table","pozn-adaptive.tables.events/process-table",-1657578927),table], null));
});})(i__19859,table,s__19862__$2,temp__4657__auto____$1,area_map,c__8451__auto__,size__8452__auto__,b__19860,s__19858__$2,temp__4657__auto__))
], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),table], null)),pozn_adaptive$tables$view$list_component_$_iter__19857_$_iter__19861.call(null,cljs.core.rest.call(null,s__19862__$2)));
}
} else {
return null;
}
break;
}
});})(i__19859,area_map,c__8451__auto__,size__8452__auto__,b__19860,s__19858__$2,temp__4657__auto__))
,null,null));
});})(i__19859,area_map,c__8451__auto__,size__8452__auto__,b__19860,s__19858__$2,temp__4657__auto__))
;
return iter__8453__auto__.call(null,new cljs.core.Keyword(null,"tables","tables",1334623052).cljs$core$IFn$_invoke$arity$1(area_map));
})()], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(area_map)], null)));

var G__19870 = (i__19859 + (1));
i__19859 = G__19870;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19860),pozn_adaptive$tables$view$list_component_$_iter__19857.call(null,cljs.core.chunk_rest.call(null,s__19858__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19860),null);
}
} else {
var area_map = cljs.core.first.call(null,s__19858__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"class","class",-2030961996),"top-wrapper",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2.bg-primary.area-subheader","h2.bg-primary.area-subheader",-1852384967),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(area_map)], null),(function (){var iter__8453__auto__ = ((function (area_map,s__19858__$2,temp__4657__auto__){
return (function pozn_adaptive$tables$view$list_component_$_iter__19857_$_iter__19865(s__19866){
return (new cljs.core.LazySeq(null,((function (area_map,s__19858__$2,temp__4657__auto__){
return (function (){
var s__19866__$1 = s__19866;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__19866__$1);
if(temp__4657__auto____$1){
var s__19866__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__19866__$2)){
var c__8451__auto__ = cljs.core.chunk_first.call(null,s__19866__$2);
var size__8452__auto__ = cljs.core.count.call(null,c__8451__auto__);
var b__19868 = cljs.core.chunk_buffer.call(null,size__8452__auto__);
if((function (){var i__19867 = (0);
while(true){
if((i__19867 < size__8452__auto__)){
var table = cljs.core._nth.call(null,c__8451__auto__,i__19867);
cljs.core.chunk_append.call(null,b__19868,cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,new cljs.core.Keyword(null,"class","class",-2030961996),"list-group-item table-button list-button",new cljs.core.Keyword(null,"label","label",1718410804),["\u0421\u0442\u043E\u043B ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(area_map)),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(table)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__19867,table,c__8451__auto__,size__8452__auto__,b__19868,s__19866__$2,temp__4657__auto____$1,area_map,s__19858__$2,temp__4657__auto__){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pozn-adaptive.tables.events","process-table","pozn-adaptive.tables.events/process-table",-1657578927),table], null));
});})(i__19867,table,c__8451__auto__,size__8452__auto__,b__19868,s__19866__$2,temp__4657__auto____$1,area_map,s__19858__$2,temp__4657__auto__))
], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),table], null)));

var G__19871 = (i__19867 + (1));
i__19867 = G__19871;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19868),pozn_adaptive$tables$view$list_component_$_iter__19857_$_iter__19865.call(null,cljs.core.chunk_rest.call(null,s__19866__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19868),null);
}
} else {
var table = cljs.core.first.call(null,s__19866__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,new cljs.core.Keyword(null,"class","class",-2030961996),"list-group-item table-button list-button",new cljs.core.Keyword(null,"label","label",1718410804),["\u0421\u0442\u043E\u043B ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(area_map)),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(table)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (table,s__19866__$2,temp__4657__auto____$1,area_map,s__19858__$2,temp__4657__auto__){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pozn-adaptive.tables.events","process-table","pozn-adaptive.tables.events/process-table",-1657578927),table], null));
});})(table,s__19866__$2,temp__4657__auto____$1,area_map,s__19858__$2,temp__4657__auto__))
], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),table], null)),pozn_adaptive$tables$view$list_component_$_iter__19857_$_iter__19865.call(null,cljs.core.rest.call(null,s__19866__$2)));
}
} else {
return null;
}
break;
}
});})(area_map,s__19858__$2,temp__4657__auto__))
,null,null));
});})(area_map,s__19858__$2,temp__4657__auto__))
;
return iter__8453__auto__.call(null,new cljs.core.Keyword(null,"tables","tables",1334623052).cljs$core$IFn$_invoke$arity$1(area_map));
})()], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(area_map)], null)),pozn_adaptive$tables$view$list_component_$_iter__19857.call(null,cljs.core.rest.call(null,s__19858__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__8453__auto__.call(null,cljs.core.deref.call(null,tabs_definition));
})()], null);
});
pozn_adaptive.tables.view.table_pictures_component = (function pozn_adaptive$tables$view$table_pictures_component(tabs_definition){
var active_area = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pozn-adaptive.tables.subs","active-area","pozn-adaptive.tables.subs/active-area",-866598012)], null));
var active_area_tables = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pozn-adaptive.tables.subs","active-area-tables","pozn-adaptive.tables.subs/active-area-tables",2036121080),cljs.core.deref.call(null,active_area)], null));
return ((function (active_area,active_area_tables){
return (function (tabs_definition__$1){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"class","class",-2030961996),"top-wrapper",new cljs.core.Keyword(null,"justify","justify",-722524056),new cljs.core.Keyword(null,"around","around",-265975553),new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.horizontal_bar_tabs,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin","margin",-995903681),"auto",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"20px"], null),new cljs.core.Keyword(null,"model","model",331153215),active_area,new cljs.core.Keyword(null,"tabs","tabs",-779855354),tabs_definition__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (active_area,active_area_tables){
return (function (p1__19872_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pozn-adaptive.tables.events","activate-area","pozn-adaptive.tables.events/activate-area",-1769584038),p1__19872_SHARP_], null));
});})(active_area,active_area_tables))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.tables-picture-view","div.tables-picture-view",-1776003291),(function (){var iter__8453__auto__ = ((function (active_area,active_area_tables){
return (function pozn_adaptive$tables$view$table_pictures_component_$_iter__19873(s__19874){
return (new cljs.core.LazySeq(null,((function (active_area,active_area_tables){
return (function (){
var s__19874__$1 = s__19874;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__19874__$1);
if(temp__4657__auto__){
var s__19874__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__19874__$2)){
var c__8451__auto__ = cljs.core.chunk_first.call(null,s__19874__$2);
var size__8452__auto__ = cljs.core.count.call(null,c__8451__auto__);
var b__19876 = cljs.core.chunk_buffer.call(null,size__8452__auto__);
if((function (){var i__19875 = (0);
while(true){
if((i__19875 < size__8452__auto__)){
var table = cljs.core._nth.call(null,c__8451__auto__,i__19875);
cljs.core.chunk_append.call(null,b__19876,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,cljs.core.rem.call(null,table,(2)),(0)))?"tp tp-small":"tp tp-big"),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__19875,table,c__8451__auto__,size__8452__auto__,b__19876,s__19874__$2,temp__4657__auto__,active_area,active_area_tables){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pozn-adaptive.tables.events","process-table","pozn-adaptive.tables.events/process-table",-1657578927),table], null));
});})(i__19875,table,c__8451__auto__,size__8452__auto__,b__19876,s__19874__$2,temp__4657__auto__,active_area,active_area_tables))
], null),["\u0421\u0442\u043E\u043B ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,active_area)),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(table)].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),table], null)));

var G__19877 = (i__19875 + (1));
i__19875 = G__19877;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19876),pozn_adaptive$tables$view$table_pictures_component_$_iter__19873.call(null,cljs.core.chunk_rest.call(null,s__19874__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19876),null);
}
} else {
var table = cljs.core.first.call(null,s__19874__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,cljs.core.rem.call(null,table,(2)),(0)))?"tp tp-small":"tp tp-big"),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (table,s__19874__$2,temp__4657__auto__,active_area,active_area_tables){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pozn-adaptive.tables.events","process-table","pozn-adaptive.tables.events/process-table",-1657578927),table], null));
});})(table,s__19874__$2,temp__4657__auto__,active_area,active_area_tables))
], null),["\u0421\u0442\u043E\u043B ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,active_area)),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(table)].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),table], null)),pozn_adaptive$tables$view$table_pictures_component_$_iter__19873.call(null,cljs.core.rest.call(null,s__19874__$2)));
}
} else {
return null;
}
break;
}
});})(active_area,active_area_tables))
,null,null));
});})(active_area,active_area_tables))
;
return iter__8453__auto__.call(null,new cljs.core.Keyword(null,"tables","tables",1334623052).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,active_area_tables)));
})()], null)], null)], null);
});
;})(active_area,active_area_tables))
});
pozn_adaptive.tables.view.tables_modal_window = (function pozn_adaptive$tables$view$tables_modal_window(){
var active_tables_view = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pozn-adaptive.tables.subs","active-tables-view","pozn-adaptive.tables.subs/active-tables-view",-1468916889)], null));
return ((function (active_tables_view){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.modal-window.sandwich-panel","div.modal-window.sandwich-panel",-878536920),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),["modal-window-panel-item ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.call(null,cljs.core.deref.call(null,active_tables_view),(0)))?"selected-bar":null))].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (active_tables_view){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pozn-adaptive.tables.events","change-tables-view","pozn-adaptive.tables.events/change-tables-view",162883188),(0)], null));
});})(active_tables_view))
], null),"\u0412\u0438\u0434 1"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),["modal-window-panel-item ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.call(null,cljs.core.deref.call(null,active_tables_view),(1)))?"selected-bar":null))].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (active_tables_view){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pozn-adaptive.tables.events","change-tables-view","pozn-adaptive.tables.events/change-tables-view",162883188),(1)], null));
});})(active_tables_view))
], null),"\u0412\u0438\u0434 2"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.sandwich-panel-item","div.sandwich-panel-item",-1022522960),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),["modal-window-panel-item ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.call(null,cljs.core.deref.call(null,active_tables_view),(2)))?"selected-bar":null))].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (active_tables_view){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pozn-adaptive.tables.events","change-tables-view","pozn-adaptive.tables.events/change-tables-view",162883188),(2)], null));
});})(active_tables_view))
], null),"\u0412\u0438\u0434 3"], null)], null);
});
;})(active_tables_view))
});
pozn_adaptive.tables.view.table_main = (function pozn_adaptive$tables$view$table_main(){
var tables_areas = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pozn-adaptive.tables.subs","table-areas","pozn-adaptive.tables.subs/table-areas",-959986961)], null));
var active_tables_view = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pozn-adaptive.tables.subs","active-tables-view","pozn-adaptive.tables.subs/active-tables-view",-1468916889)], null));
return ((function (tables_areas,active_tables_view){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"justify","justify",-722524056),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"class","class",-2030961996),"tables-wrapper",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.chevron-wrapper","div.chevron-wrapper",1655762071),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.top-panel-left-wrapper","div.top-panel-left-wrapper",-1061964862),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.md_circle_icon_button,new cljs.core.Keyword(null,"md-icon-name","md-icon-name",681785863),"zmdi-phone",new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"regular","regular",-1153375582),new cljs.core.Keyword(null,"class","class",-2030961996),"table-icon"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.md_circle_icon_button,new cljs.core.Keyword(null,"md-icon-name","md-icon-name",681785863),"zmdi-walk",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (tables_areas,active_tables_view){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pozn-adaptive.tables.events","dispatch-receipt-wo-table","pozn-adaptive.tables.events/dispatch-receipt-wo-table",-483739897)], null));
});})(tables_areas,active_tables_view))
,new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"regular","regular",-1153375582),new cljs.core.Keyword(null,"class","class",-2030961996),"table-icon"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pozn_adaptive.modal_windows.window.sandwich_menu,((function (tables_areas,active_tables_view){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pozn-adaptive.events","modal","pozn-adaptive.events/modal",-1929500107),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"show?","show?",1543842127),true,new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pozn_adaptive.tables.view.tables_modal_window], null),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"small","small",2133478704)], null)], null));
});})(tables_areas,active_tables_view))
], null)], null)], null),(function (){var G__19878 = cljs.core.deref.call(null,active_tables_view);
switch (G__19878) {
case (0):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pozn_adaptive.tables.view.tabs_component,tables_areas], null);

break;
case (1):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pozn_adaptive.tables.view.list_component,tables_areas], null);

break;
case (2):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pozn_adaptive.tables.view.table_pictures_component,tables_areas], null);

break;
default:
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"No template"], null);

}
})()], null)], null);
});
;})(tables_areas,active_tables_view))
});

//# sourceMappingURL=view.js.map
