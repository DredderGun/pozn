// Compiled by ClojureScript 1.9.908 {}
goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.fx.kind))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
/**
 * Register the given effect `handler` for the given `id`.
 * 
 *   `id` is keyword, often namespaced.
 *   `handler` is a side-effecting function which takes a single argument and whose return
 *   value is ignored.
 * 
 *   Example Use
 *   -----------
 * 
 *   First, registration ... associate `:effect2` with a handler.
 * 
 *   (reg-fx
 *   :effect2
 *   (fn [value]
 *      ... do something side-effect-y))
 * 
 *   Then, later, if an event handler were to return this effects map ...
 * 
 *   {...
 * :effect2  [1 2]}
 * 
 * ... then the `handler` `fn` we registered previously, using `reg-fx`, will be
 * called with an argument of `[1 2]`.
 */
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler.call(null,re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
var seq__12001 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__12002 = null;
var count__12003 = (0);
var i__12004 = (0);
while(true){
if((i__12004 < count__12003)){
var vec__12005 = cljs.core._nth.call(null,chunk__12002,i__12004);
var effect_key = cljs.core.nth.call(null,vec__12005,(0),null);
var effect_value = cljs.core.nth.call(null,vec__12005,(1),null);
var temp__4655__auto___12011 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___12011)){
var effect_fn_12012 = temp__4655__auto___12011;
effect_fn_12012.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect: \"",effect_key,"\". Ignoring.");
}

var G__12013 = seq__12001;
var G__12014 = chunk__12002;
var G__12015 = count__12003;
var G__12016 = (i__12004 + (1));
seq__12001 = G__12013;
chunk__12002 = G__12014;
count__12003 = G__12015;
i__12004 = G__12016;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__12001);
if(temp__4657__auto__){
var seq__12001__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12001__$1)){
var c__8484__auto__ = cljs.core.chunk_first.call(null,seq__12001__$1);
var G__12017 = cljs.core.chunk_rest.call(null,seq__12001__$1);
var G__12018 = c__8484__auto__;
var G__12019 = cljs.core.count.call(null,c__8484__auto__);
var G__12020 = (0);
seq__12001 = G__12017;
chunk__12002 = G__12018;
count__12003 = G__12019;
i__12004 = G__12020;
continue;
} else {
var vec__12008 = cljs.core.first.call(null,seq__12001__$1);
var effect_key = cljs.core.nth.call(null,vec__12008,(0),null);
var effect_value = cljs.core.nth.call(null,vec__12008,(1),null);
var temp__4655__auto___12021 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___12021)){
var effect_fn_12022 = temp__4655__auto___12021;
effect_fn_12022.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect: \"",effect_key,"\". Ignoring.");
}

var G__12023 = cljs.core.next.call(null,seq__12001__$1);
var G__12024 = null;
var G__12025 = (0);
var G__12026 = (0);
seq__12001 = G__12023;
chunk__12002 = G__12024;
count__12003 = G__12025;
i__12004 = G__12026;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__12027 = cljs.core.seq.call(null,value);
var chunk__12028 = null;
var count__12029 = (0);
var i__12030 = (0);
while(true){
if((i__12030 < count__12029)){
var map__12031 = cljs.core._nth.call(null,chunk__12028,i__12030);
var map__12031__$1 = ((((!((map__12031 == null)))?((((map__12031.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12031.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12031):map__12031);
var effect = map__12031__$1;
var ms = cljs.core.get.call(null,map__12031__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__12031__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__12027,chunk__12028,count__12029,i__12030,map__12031,map__12031__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__12027,chunk__12028,count__12029,i__12030,map__12031,map__12031__$1,effect,ms,dispatch))
,ms);
}

var G__12035 = seq__12027;
var G__12036 = chunk__12028;
var G__12037 = count__12029;
var G__12038 = (i__12030 + (1));
seq__12027 = G__12035;
chunk__12028 = G__12036;
count__12029 = G__12037;
i__12030 = G__12038;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__12027);
if(temp__4657__auto__){
var seq__12027__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12027__$1)){
var c__8484__auto__ = cljs.core.chunk_first.call(null,seq__12027__$1);
var G__12039 = cljs.core.chunk_rest.call(null,seq__12027__$1);
var G__12040 = c__8484__auto__;
var G__12041 = cljs.core.count.call(null,c__8484__auto__);
var G__12042 = (0);
seq__12027 = G__12039;
chunk__12028 = G__12040;
count__12029 = G__12041;
i__12030 = G__12042;
continue;
} else {
var map__12033 = cljs.core.first.call(null,seq__12027__$1);
var map__12033__$1 = ((((!((map__12033 == null)))?((((map__12033.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12033.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12033):map__12033);
var effect = map__12033__$1;
var ms = cljs.core.get.call(null,map__12033__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__12033__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__12027,chunk__12028,count__12029,i__12030,map__12033,map__12033__$1,effect,ms,dispatch,seq__12027__$1,temp__4657__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__12027,chunk__12028,count__12029,i__12030,map__12033,map__12033__$1,effect,ms,dispatch,seq__12027__$1,temp__4657__auto__))
,ms);
}

var G__12043 = cljs.core.next.call(null,seq__12027__$1);
var G__12044 = null;
var G__12045 = (0);
var G__12046 = (0);
seq__12027 = G__12043;
chunk__12028 = G__12044;
count__12029 = G__12045;
i__12030 = G__12046;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if(!(cljs.core.vector_QMARK_.call(null,value))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value);
} else {
return re_frame.router.dispatch.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if(!(cljs.core.sequential_QMARK_.call(null,value))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-n value. Expected a collection, got got:",value);
} else {
var seq__12047 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__12048 = null;
var count__12049 = (0);
var i__12050 = (0);
while(true){
if((i__12050 < count__12049)){
var event = cljs.core._nth.call(null,chunk__12048,i__12050);
re_frame.router.dispatch.call(null,event);

var G__12051 = seq__12047;
var G__12052 = chunk__12048;
var G__12053 = count__12049;
var G__12054 = (i__12050 + (1));
seq__12047 = G__12051;
chunk__12048 = G__12052;
count__12049 = G__12053;
i__12050 = G__12054;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__12047);
if(temp__4657__auto__){
var seq__12047__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12047__$1)){
var c__8484__auto__ = cljs.core.chunk_first.call(null,seq__12047__$1);
var G__12055 = cljs.core.chunk_rest.call(null,seq__12047__$1);
var G__12056 = c__8484__auto__;
var G__12057 = cljs.core.count.call(null,c__8484__auto__);
var G__12058 = (0);
seq__12047 = G__12055;
chunk__12048 = G__12056;
count__12049 = G__12057;
i__12050 = G__12058;
continue;
} else {
var event = cljs.core.first.call(null,seq__12047__$1);
re_frame.router.dispatch.call(null,event);

var G__12059 = cljs.core.next.call(null,seq__12047__$1);
var G__12060 = null;
var G__12061 = (0);
var G__12062 = (0);
seq__12047 = G__12059;
chunk__12048 = G__12060;
count__12049 = G__12061;
i__12050 = G__12062;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.call(null,re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_.call(null,value)){
var seq__12063 = cljs.core.seq.call(null,value);
var chunk__12064 = null;
var count__12065 = (0);
var i__12066 = (0);
while(true){
if((i__12066 < count__12065)){
var event = cljs.core._nth.call(null,chunk__12064,i__12066);
clear_event.call(null,event);

var G__12067 = seq__12063;
var G__12068 = chunk__12064;
var G__12069 = count__12065;
var G__12070 = (i__12066 + (1));
seq__12063 = G__12067;
chunk__12064 = G__12068;
count__12065 = G__12069;
i__12066 = G__12070;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__12063);
if(temp__4657__auto__){
var seq__12063__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12063__$1)){
var c__8484__auto__ = cljs.core.chunk_first.call(null,seq__12063__$1);
var G__12071 = cljs.core.chunk_rest.call(null,seq__12063__$1);
var G__12072 = c__8484__auto__;
var G__12073 = cljs.core.count.call(null,c__8484__auto__);
var G__12074 = (0);
seq__12063 = G__12071;
chunk__12064 = G__12072;
count__12065 = G__12073;
i__12066 = G__12074;
continue;
} else {
var event = cljs.core.first.call(null,seq__12063__$1);
clear_event.call(null,event);

var G__12075 = cljs.core.next.call(null,seq__12063__$1);
var G__12076 = null;
var G__12077 = (0);
var G__12078 = (0);
seq__12063 = G__12075;
chunk__12064 = G__12076;
count__12065 = G__12077;
i__12066 = G__12078;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if(!((cljs.core.deref.call(null,re_frame.db.app_db) === value))){
return cljs.core.reset_BANG_.call(null,re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=fx.js.map
