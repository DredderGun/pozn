// Compiled by ClojureScript 1.9.908 {}
goog.provide('pozn_adaptive.routes');
goog.require('cljs.core');
goog.require('goog.History');
goog.require('secretary.core');
goog.require('goog.events');
goog.require('goog.history.EventType');
goog.require('re_frame.core');
goog.require('pozn_adaptive.events');
pozn_adaptive.routes.hook_browser_navigation_BANG_ = (function pozn_adaptive$routes$hook_browser_navigation_BANG_(){
var G__20537 = (new goog.History());
goog.events.listen(G__20537,goog.history.EventType.NAVIGATE,((function (G__20537){
return (function (event){
return secretary.core.dispatch_BANG_.call(null,event.token);
});})(G__20537))
);

G__20537.setEnabled(true);

return G__20537;
});
pozn_adaptive.routes.app_routes = (function pozn_adaptive$routes$app_routes(){
secretary.core.set_config_BANG_.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),"#");

var action__20412__auto___20548 = (function (params__20413__auto__){
if(cljs.core.map_QMARK_.call(null,params__20413__auto__)){
var map__20538 = params__20413__auto__;
var map__20538__$1 = ((((!((map__20538 == null)))?((((map__20538.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20538.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20538):map__20538);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pozn-adaptive.events","set-active-panel","pozn-adaptive.events/set-active-panel",-1880617565),new cljs.core.Keyword(null,"home-panel","home-panel",1226198754)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__20413__auto__)){
var vec__20540 = params__20413__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pozn-adaptive.events","set-active-panel","pozn-adaptive.events/set-active-panel",-1880617565),new cljs.core.Keyword(null,"home-panel","home-panel",1226198754)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__20412__auto___20548);


var action__20412__auto___20549 = (function (params__20413__auto__){
if(cljs.core.map_QMARK_.call(null,params__20413__auto__)){
var map__20543 = params__20413__auto__;
var map__20543__$1 = ((((!((map__20543 == null)))?((((map__20543.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20543.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20543):map__20543);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pozn-adaptive.events","set-active-panel","pozn-adaptive.events/set-active-panel",-1880617565),new cljs.core.Keyword(null,"about-panel","about-panel",334628515)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__20413__auto__)){
var vec__20545 = params__20413__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pozn-adaptive.events","set-active-panel","pozn-adaptive.events/set-active-panel",-1880617565),new cljs.core.Keyword(null,"about-panel","about-panel",334628515)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/about",action__20412__auto___20549);


return pozn_adaptive.routes.hook_browser_navigation_BANG_.call(null);
});

//# sourceMappingURL=routes.js.map
