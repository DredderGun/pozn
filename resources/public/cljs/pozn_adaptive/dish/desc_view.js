// Compiled by ClojureScript 1.9.908 {}
goog.provide('pozn_adaptive.dish.desc_view');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('pozn_adaptive.events');
goog.require('pozn_adaptive.dish.subs');
goog.require('re_com.core');
pozn_adaptive.dish.desc_view.desc_view = (function pozn_adaptive$dish$desc_view$desc_view(){
var active_dish_short_name = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pozn-adaptive.dish.subs","active-dish-short-name","pozn-adaptive.dish.subs/active-dish-short-name",-536140030)], null));
var active_dish_description = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pozn-adaptive.dish.subs","active-dish-description","pozn-adaptive.dish.subs/active-dish-description",1279012996)], null));
return ((function (active_dish_short_name,active_dish_description){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#product-wrapper","div#product-wrapper",-2035815401),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"gap","gap",80255254),"20px",new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.chevron-wrapper.chevron-wrapper-without-sandwich.dish-chevron","div.chevron-wrapper.chevron-wrapper-without-sandwich.dish-chevron",-833206173),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (active_dish_short_name,active_dish_description){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pozn-adaptive.events","set-slide-window","pozn-adaptive.events/set-slide-window",130449657),true,new cljs.core.Keyword(null,"dish","dish",1444360049)], null));
});})(active_dish_short_name,active_dish_description))
], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.md_icon_button,new cljs.core.Keyword(null,"md-icon-name","md-icon-name",681785863),"zmdi-chevron-left",new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"larger","larger",1304935444),new cljs.core.Keyword(null,"class","class",-2030961996),"back-button"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"13%"], null)], null),cljs.core.deref.call(null,active_dish_short_name)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),"32px"], null)], null),cljs.core.deref.call(null,active_dish_description)], null)], null)], null)], null);
});
;})(active_dish_short_name,active_dish_description))
});

//# sourceMappingURL=desc_view.js.map
