// Compiled by ClojureScript 1.9.908 {}
goog.provide('re_frame.events');
goog.require('cljs.core');
goog.require('re_frame.db');
goog.require('re_frame.utils');
goog.require('re_frame.interop');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.interceptor');
goog.require('re_frame.trace');
re_frame.events.kind = new cljs.core.Keyword(null,"event","event",301435442);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.events.kind))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
/**
 * `interceptors` might have nested collections, and contain nil elements.
 *   return a flat collection, with all nils removed.
 *   This function is 9/10 about giving good error messages.
 */
re_frame.events.flatten_and_remove_nils = (function re_frame$events$flatten_and_remove_nils(id,interceptors){
var make_chain = (function (p1__11881_SHARP_){
return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,p1__11881_SHARP_));
});
if(!(re_frame.interop.debug_enabled_QMARK_)){
return make_chain.call(null,interceptors);
} else {
if(cljs.core.coll_QMARK_.call(null,interceptors)){
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: when registering ",id,", expected a collection of interceptors, got: ",interceptors);
}

var chain = make_chain.call(null,interceptors);
if(cljs.core.empty_QMARK_.call(null,chain)){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: when registering ",id,", given an empty interceptor chain");
} else {
}

var temp__4657__auto___11882 = cljs.core.first.call(null,cljs.core.remove.call(null,re_frame.interceptor.interceptor_QMARK_,chain));
if(cljs.core.truth_(temp__4657__auto___11882)){
var not_i_11883 = temp__4657__auto___11882;
if(cljs.core.fn_QMARK_.call(null,not_i_11883)){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: when registering ",id,", got a function instead of an interceptor. Did you provide old style middleware by mistake? Got: ",not_i_11883);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: when registering ",id,", expected interceptors, but got: ",not_i_11883);
}
} else {
}

return chain;
}
});
/**
 * Associate the given event `id` with the given collection of `interceptors`.
 * 
 * `interceptors` may contain nested collections and there may be nils
 * at any level,so process this structure into a simple, nil-less vector
 * before registration.
 * 
 * Typically, an `event handler` will be at the end of the chain (wrapped
 * in an interceptor).
 */
re_frame.events.register = (function re_frame$events$register(id,interceptors){
return re_frame.registrar.register_handler.call(null,re_frame.events.kind,id,re_frame.events.flatten_and_remove_nils.call(null,id,interceptors));
});
re_frame.events._STAR_handling_STAR_ = null;
/**
 * Given an event vector `event-v`, look up the associated interceptor chain, and execute it.
 */
re_frame.events.handle = (function re_frame$events$handle(event_v){
var event_id = re_frame.utils.first_in_vector.call(null,event_v);
var temp__4655__auto__ = re_frame.registrar.get_handler.call(null,re_frame.events.kind,event_id,true);
if(cljs.core.truth_(temp__4655__auto__)){
var interceptors = temp__4655__auto__;
if(cljs.core.truth_(re_frame.events._STAR_handling_STAR_)){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: while handling \"",re_frame.events._STAR_handling_STAR_,"\", dispatch-sync was called for \"",event_v,"\". You can't call dispatch-sync within an event handler.");
} else {
var _STAR_handling_STAR_11884 = re_frame.events._STAR_handling_STAR_;
re_frame.events._STAR_handling_STAR_ = event_v;

try{if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_11885 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),event_id,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),re_frame.events.kind,new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event","event",301435442),event_v], null)], null));

try{try{return re_frame.interceptor.execute.call(null,event_v,interceptors);
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__11829__auto___11898 = re_frame.interop.now.call(null);
var duration__11830__auto___11899 = (end__11829__auto___11898 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__11886_11900 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__11887_11901 = null;
var count__11888_11902 = (0);
var i__11889_11903 = (0);
while(true){
if((i__11889_11903 < count__11888_11902)){
var vec__11890_11904 = cljs.core._nth.call(null,chunk__11887_11901,i__11889_11903);
var k__11831__auto___11905 = cljs.core.nth.call(null,vec__11890_11904,(0),null);
var cb__11832__auto___11906 = cljs.core.nth.call(null,vec__11890_11904,(1),null);
try{cb__11832__auto___11906.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__11830__auto___11899,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e11893){if((e11893 instanceof java.lang.Exception)){
var e__11833__auto___11907 = e11893;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__11831__auto___11905,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__11833__auto___11907);
} else {
throw e11893;

}
}
var G__11908 = seq__11886_11900;
var G__11909 = chunk__11887_11901;
var G__11910 = count__11888_11902;
var G__11911 = (i__11889_11903 + (1));
seq__11886_11900 = G__11908;
chunk__11887_11901 = G__11909;
count__11888_11902 = G__11910;
i__11889_11903 = G__11911;
continue;
} else {
var temp__4657__auto___11912 = cljs.core.seq.call(null,seq__11886_11900);
if(temp__4657__auto___11912){
var seq__11886_11913__$1 = temp__4657__auto___11912;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11886_11913__$1)){
var c__8484__auto___11914 = cljs.core.chunk_first.call(null,seq__11886_11913__$1);
var G__11915 = cljs.core.chunk_rest.call(null,seq__11886_11913__$1);
var G__11916 = c__8484__auto___11914;
var G__11917 = cljs.core.count.call(null,c__8484__auto___11914);
var G__11918 = (0);
seq__11886_11900 = G__11915;
chunk__11887_11901 = G__11916;
count__11888_11902 = G__11917;
i__11889_11903 = G__11918;
continue;
} else {
var vec__11894_11919 = cljs.core.first.call(null,seq__11886_11913__$1);
var k__11831__auto___11920 = cljs.core.nth.call(null,vec__11894_11919,(0),null);
var cb__11832__auto___11921 = cljs.core.nth.call(null,vec__11894_11919,(1),null);
try{cb__11832__auto___11921.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__11830__auto___11899,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e11897){if((e11897 instanceof java.lang.Exception)){
var e__11833__auto___11922 = e11897;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__11831__auto___11920,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__11833__auto___11922);
} else {
throw e11897;

}
}
var G__11923 = cljs.core.next.call(null,seq__11886_11913__$1);
var G__11924 = null;
var G__11925 = (0);
var G__11926 = (0);
seq__11886_11900 = G__11923;
chunk__11887_11901 = G__11924;
count__11888_11902 = G__11925;
i__11889_11903 = G__11926;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_11885;
}} else {
return re_frame.interceptor.execute.call(null,event_v,interceptors);
}
}finally {re_frame.events._STAR_handling_STAR_ = _STAR_handling_STAR_11884;
}}
} else {
return null;
}
});

//# sourceMappingURL=events.js.map
