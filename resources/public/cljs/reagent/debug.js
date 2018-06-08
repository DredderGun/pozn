// Compiled by ClojureScript 1.9.908 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__10727__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__10727 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10728__i = 0, G__10728__a = new Array(arguments.length -  0);
while (G__10728__i < G__10728__a.length) {G__10728__a[G__10728__i] = arguments[G__10728__i + 0]; ++G__10728__i;}
  args = new cljs.core.IndexedSeq(G__10728__a,0,null);
} 
return G__10727__delegate.call(this,args);};
G__10727.cljs$lang$maxFixedArity = 0;
G__10727.cljs$lang$applyTo = (function (arglist__10729){
var args = cljs.core.seq(arglist__10729);
return G__10727__delegate(args);
});
G__10727.cljs$core$IFn$_invoke$arity$variadic = G__10727__delegate;
return G__10727;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__10730__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__10730 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10731__i = 0, G__10731__a = new Array(arguments.length -  0);
while (G__10731__i < G__10731__a.length) {G__10731__a[G__10731__i] = arguments[G__10731__i + 0]; ++G__10731__i;}
  args = new cljs.core.IndexedSeq(G__10731__a,0,null);
} 
return G__10730__delegate.call(this,args);};
G__10730.cljs$lang$maxFixedArity = 0;
G__10730.cljs$lang$applyTo = (function (arglist__10732){
var args = cljs.core.seq(arglist__10732);
return G__10730__delegate(args);
});
G__10730.cljs$core$IFn$_invoke$arity$variadic = G__10730__delegate;
return G__10730;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map
