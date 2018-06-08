// Compiled by ClojureScript 1.9.908 {}
goog.provide('pozn_adaptive.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('pozn_adaptive.events');
goog.require('pozn_adaptive.main');
goog.require('pozn_adaptive.config');
pozn_adaptive.core.dev_setup = (function pozn_adaptive$core$dev_setup(){
if(pozn_adaptive.config.debug_QMARK_){
cljs.core.enable_console_print_BANG_.call(null);

return cljs.core.println.call(null,"dev mode");
} else {
return null;
}
});
pozn_adaptive.core.mount_root = (function pozn_adaptive$core$mount_root(){
re_frame.core.clear_subscription_cache_BANG_.call(null);

reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pozn_adaptive.main.main_panel], null),document.getElementById("app"));

return window.addEventListener("resize",(function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pozn-adaptive.events","set-window-width","pozn-adaptive.events/set-window-width",-306097698),window.innerWidth], null));
}));
});
pozn_adaptive.core.init = (function pozn_adaptive$core$init(){
re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pozn-adaptive.events","initialize-db","pozn-adaptive.events/initialize-db",1396362901)], null));

pozn_adaptive.core.dev_setup.call(null);

return pozn_adaptive.core.mount_root.call(null);
});
goog.exportSymbol('pozn_adaptive.core.init', pozn_adaptive.core.init);

//# sourceMappingURL=core.js.map
