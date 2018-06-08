// Compiled by ClojureScript 1.9.908 {}
goog.provide('re_com.typeahead');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('re_com.misc');
goog.require('re_com.util');
goog.require('re_com.popover');
goog.require('re_com.box');
goog.require('re_com.validate');
goog.require('reagent.core');
goog.require('goog.events.KeyCodes');

/**
 * Return an initial value for the typeahead state, given `args`.
 */
re_com.typeahead.make_typeahead_state = (function re_com$typeahead$make_typeahead_state(p__16140){
var map__16141 = p__16140;
var map__16141__$1 = ((((!((map__16141 == null)))?((((map__16141.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16141.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16141):map__16141);
var args = map__16141__$1;
var on_change = cljs.core.get.call(null,map__16141__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var rigid_QMARK_ = cljs.core.get.call(null,map__16141__$1,new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118));
var change_on_blur_QMARK_ = cljs.core.get.call(null,map__16141__$1,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925));
var data_source = cljs.core.get.call(null,map__16141__$1,new cljs.core.Keyword(null,"data-source","data-source",-658934676));
var suggestion_to_string = cljs.core.get.call(null,map__16141__$1,new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962));
var debounce_delay = cljs.core.get.call(null,map__16141__$1,new cljs.core.Keyword(null,"debounce-delay","debounce-delay",-608187982));
var model = cljs.core.get.call(null,map__16141__$1,new cljs.core.Keyword(null,"model","model",331153215));
var external_model_value = re_com.util.deref_or_value.call(null,model);
var G__16143 = (function (){var c_input = cljs.core.async.chan.call(null);
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962),new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),new cljs.core.Keyword(null,"input-text","input-text",-1336297114),new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118),new cljs.core.Keyword(null,"data-source","data-source",-658934676),new cljs.core.Keyword(null,"c-search","c-search",1832536180),new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),new cljs.core.Keyword(null,"suggestions","suggestions",-859472618),new cljs.core.Keyword(null,"c-input","c-input",-1821004232),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"external-model","external-model",506095421),new cljs.core.Keyword(null,"model","model",331153215)],[false,(function (){var or__7645__auto__ = suggestion_to_string;
if(cljs.core.truth_(or__7645__auto__)){
return or__7645__auto__;
} else {
return cljs.core.str;
}
})(),false,"",rigid_QMARK_,data_source,re_com.typeahead.debounce.call(null,c_input,debounce_delay),change_on_blur_QMARK_,cljs.core.PersistentVector.EMPTY,c_input,on_change,re_com.util.deref_or_value.call(null,model),re_com.util.deref_or_value.call(null,model)]);
})();
if(cljs.core.truth_(external_model_value)){
return re_com.typeahead.display_suggestion.call(null,G__16143,external_model_value);
} else {
return G__16143;
}
});
/**
 * Should `event` update the `typeahead` `model`?
 */
re_com.typeahead.event_updates_model_QMARK_ = (function re_com$typeahead$event_updates_model_QMARK_(p__16144,event){
var map__16145 = p__16144;
var map__16145__$1 = ((((!((map__16145 == null)))?((((map__16145.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16145.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16145):map__16145);
var state = map__16145__$1;
var change_on_blur_QMARK_ = cljs.core.get.call(null,map__16145__$1,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925));
var rigid_QMARK_ = cljs.core.get.call(null,map__16145__$1,new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118));
var change_on_blur_QMARK___$1 = re_com.util.deref_or_value.call(null,change_on_blur_QMARK_);
var rigid_QMARK___$1 = re_com.util.deref_or_value.call(null,rigid_QMARK_);
var G__16147 = event;
var G__16147__$1 = (((G__16147 instanceof cljs.core.Keyword))?G__16147.fqn:null);
switch (G__16147__$1) {
case "input-text-blurred":
var and__7633__auto__ = change_on_blur_QMARK___$1;
if(cljs.core.truth_(and__7633__auto__)){
return cljs.core.not.call(null,rigid_QMARK___$1);
} else {
return and__7633__auto__;
}

break;
case "suggestion-activated":
return cljs.core.not.call(null,change_on_blur_QMARK___$1);

break;
case "input-text-changed":
return cljs.core.not.call(null,(function (){var or__7645__auto__ = change_on_blur_QMARK___$1;
if(cljs.core.truth_(or__7645__auto__)){
return or__7645__auto__;
} else {
return rigid_QMARK___$1;
}
})());

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__16147__$1)].join('')));

}
});
/**
 * Should `event` cause the `input-text` value to be used to show the active suggestion?
 */
re_com.typeahead.event_displays_suggestion_QMARK_ = (function re_com$typeahead$event_displays_suggestion_QMARK_(p__16149,event){
var map__16150 = p__16149;
var map__16150__$1 = ((((!((map__16150 == null)))?((((map__16150.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16150.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16150):map__16150);
var state = map__16150__$1;
var change_on_blur_QMARK_ = cljs.core.get.call(null,map__16150__$1,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925));
var change_on_blur_QMARK___$1 = re_com.util.deref_or_value.call(null,change_on_blur_QMARK_);
var G__16152 = event;
var G__16152__$1 = (((G__16152 instanceof cljs.core.Keyword))?G__16152.fqn:null);
switch (G__16152__$1) {
case "suggestion-activated":
return cljs.core.not.call(null,change_on_blur_QMARK___$1);

break;
default:
return false;

}
});
/**
 * Change the `typeahead` `model` value to `new-value`
 */
re_com.typeahead.update_model = (function re_com$typeahead$update_model(p__16154,new_value){
var map__16155 = p__16154;
var map__16155__$1 = ((((!((map__16155 == null)))?((((map__16155.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16155.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16155):map__16155);
var state = map__16155__$1;
var on_change = cljs.core.get.call(null,map__16155__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
if(cljs.core.truth_(on_change)){
on_change.call(null,new_value);
} else {
}

return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"model","model",331153215),new_value);
});
/**
 * Change the `input-text` `model` to the string representation of `suggestion`
 */
re_com.typeahead.display_suggestion = (function re_com$typeahead$display_suggestion(p__16157,suggestion){
var map__16158 = p__16157;
var map__16158__$1 = ((((!((map__16158 == null)))?((((map__16158.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16158.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16158):map__16158);
var state = map__16158__$1;
var suggestion_to_string = cljs.core.get.call(null,map__16158__$1,new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962));
var suggestion_string = suggestion_to_string.call(null,suggestion);
var G__16160 = state;
if(cljs.core.truth_(suggestion_string)){
return cljs.core.assoc.call(null,G__16160,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),suggestion_string,new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),true);
} else {
return G__16160;
}
});
re_com.typeahead.clear_suggestions = (function re_com$typeahead$clear_suggestions(state){
return cljs.core.dissoc.call(null,state,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618),new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
});
/**
 * Make the suggestion at `index` the active suggestion
 */
re_com.typeahead.activate_suggestion_by_index = (function re_com$typeahead$activate_suggestion_by_index(p__16161,index){
var map__16162 = p__16161;
var map__16162__$1 = ((((!((map__16162 == null)))?((((map__16162.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16162.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16162):map__16162);
var state = map__16162__$1;
var suggestions = cljs.core.get.call(null,map__16162__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion = cljs.core.nth.call(null,suggestions,index);
var G__16164 = state;
var G__16164__$1 = cljs.core.assoc.call(null,G__16164,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728),index)
;
var G__16164__$2 = (cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_.call(null,state,new cljs.core.Keyword(null,"suggestion-activated","suggestion-activated",316961778)))?re_com.typeahead.update_model.call(null,G__16164__$1,suggestion):G__16164__$1);
if(cljs.core.truth_(re_com.typeahead.event_displays_suggestion_QMARK_.call(null,state,new cljs.core.Keyword(null,"suggestion-activated","suggestion-activated",316961778)))){
return re_com.typeahead.display_suggestion.call(null,G__16164__$2,suggestion);
} else {
return G__16164__$2;
}
});
/**
 * Choose the suggestion at `index`
 */
re_com.typeahead.choose_suggestion_by_index = (function re_com$typeahead$choose_suggestion_by_index(p__16165,index){
var map__16166 = p__16165;
var map__16166__$1 = ((((!((map__16166 == null)))?((((map__16166.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16166.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16166):map__16166);
var state = map__16166__$1;
var suggestions = cljs.core.get.call(null,map__16166__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion = cljs.core.nth.call(null,suggestions,index);
return re_com.typeahead.clear_suggestions.call(null,re_com.typeahead.display_suggestion.call(null,re_com.typeahead.update_model.call(null,re_com.typeahead.activate_suggestion_by_index.call(null,state,index),suggestion),suggestion));
});
re_com.typeahead.choose_suggestion_active = (function re_com$typeahead$choose_suggestion_active(p__16168){
var map__16169 = p__16168;
var map__16169__$1 = ((((!((map__16169 == null)))?((((map__16169.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16169.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16169):map__16169);
var state = map__16169__$1;
var suggestion_active_index = cljs.core.get.call(null,map__16169__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var G__16171 = state;
if(cljs.core.truth_(suggestion_active_index)){
return re_com.typeahead.choose_suggestion_by_index.call(null,G__16171,suggestion_active_index);
} else {
return G__16171;
}
});
re_com.typeahead.wrap = (function re_com$typeahead$wrap(index,count){
return cljs.core.mod.call(null,(count + index),count);
});
re_com.typeahead.activate_suggestion_next = (function re_com$typeahead$activate_suggestion_next(p__16172){
var map__16173 = p__16172;
var map__16173__$1 = ((((!((map__16173 == null)))?((((map__16173.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16173.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16173):map__16173);
var state = map__16173__$1;
var suggestions = cljs.core.get.call(null,map__16173__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion_active_index = cljs.core.get.call(null,map__16173__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var G__16175 = state;
if(cljs.core.truth_(suggestions)){
return re_com.typeahead.activate_suggestion_by_index.call(null,G__16175,re_com.typeahead.wrap.call(null,((function (){var or__7645__auto__ = suggestion_active_index;
if(cljs.core.truth_(or__7645__auto__)){
return or__7645__auto__;
} else {
return (-1);
}
})() + (1)),cljs.core.count.call(null,suggestions)));
} else {
return G__16175;
}
});
re_com.typeahead.activate_suggestion_prev = (function re_com$typeahead$activate_suggestion_prev(p__16176){
var map__16177 = p__16176;
var map__16177__$1 = ((((!((map__16177 == null)))?((((map__16177.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16177.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16177):map__16177);
var state = map__16177__$1;
var suggestions = cljs.core.get.call(null,map__16177__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion_active_index = cljs.core.get.call(null,map__16177__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var G__16179 = state;
if(cljs.core.truth_(suggestions)){
return re_com.typeahead.activate_suggestion_by_index.call(null,G__16179,re_com.typeahead.wrap.call(null,((function (){var or__7645__auto__ = suggestion_active_index;
if(cljs.core.truth_(or__7645__auto__)){
return or__7645__auto__;
} else {
return (0);
}
})() - (1)),cljs.core.count.call(null,suggestions)));
} else {
return G__16179;
}
});
re_com.typeahead.reset_typeahead = (function re_com$typeahead$reset_typeahead(state){
var G__16180 = state;
var G__16180__$1 = re_com.typeahead.clear_suggestions.call(null,G__16180)
;
var G__16180__$2 = cljs.core.assoc.call(null,G__16180__$1,new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),false,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),"",new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),false)
;
if(cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_.call(null,state,new cljs.core.Keyword(null,"input-text-changed","input-text-changed",-1906799535)))){
return re_com.typeahead.update_model.call(null,G__16180__$2,null);
} else {
return G__16180__$2;
}
});
/**
 * Update state when new suggestions are available
 */
re_com.typeahead.got_suggestions = (function re_com$typeahead$got_suggestions(state,suggestions){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618),suggestions,new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),false,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728),null);
});
/**
 * Update state when the `input-text` is about to lose focus.
 */
re_com.typeahead.input_text_will_blur = (function re_com$typeahead$input_text_will_blur(p__16181){
var map__16182 = p__16181;
var map__16182__$1 = ((((!((map__16182 == null)))?((((map__16182.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16182.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16182):map__16182);
var state = map__16182__$1;
var input_text = cljs.core.get.call(null,map__16182__$1,new cljs.core.Keyword(null,"input-text","input-text",-1336297114));
var displaying_suggestion_QMARK_ = cljs.core.get.call(null,map__16182__$1,new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862));
var G__16184 = state;
if(cljs.core.truth_((function (){var and__7633__auto__ = cljs.core.not.call(null,displaying_suggestion_QMARK_);
if(and__7633__auto__){
return re_com.typeahead.event_updates_model_QMARK_.call(null,state,new cljs.core.Keyword(null,"input-text-blurred","input-text-blurred",-501892307));
} else {
return and__7633__auto__;
}
})())){
return re_com.typeahead.update_model.call(null,G__16184,input_text);
} else {
return G__16184;
}
});
/**
 * Update `state` given a new `data-source`. Resets the typeahead since any existing suggestions
 *   came from the old `data-source`.
 */
re_com.typeahead.change_data_source = (function re_com$typeahead$change_data_source(state,data_source){
return cljs.core.assoc.call(null,re_com.typeahead.reset_typeahead.call(null,state),new cljs.core.Keyword(null,"data-source","data-source",-658934676),data_source);
});
/**
 * Update state when the external model value has changed.
 */
re_com.typeahead.external_model_changed = (function re_com$typeahead$external_model_changed(state,new_value){
return re_com.typeahead.clear_suggestions.call(null,re_com.typeahead.display_suggestion.call(null,re_com.typeahead.update_model.call(null,state,new_value),new_value));
});
/**
 * Call the `data-source` fn with `text`, and then call `got-suggestions` with the result
 *   (asynchronously, if `data-source` does not return a truthy value).
 */
re_com.typeahead.search_data_source_BANG_ = (function re_com$typeahead$search_data_source_BANG_(data_source,state_atom,text){
var temp__4655__auto__ = data_source.call(null,text,(function (p1__16185_SHARP_){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.got_suggestions,p1__16185_SHARP_);
}));
if(cljs.core.truth_(temp__4655__auto__)){
var return_value = temp__4655__auto__;
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.got_suggestions,return_value);
} else {
return cljs.core.swap_BANG_.call(null,state_atom,cljs.core.assoc,new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),true);
}
});
/**
 * For every value arriving on the `c-search` channel, call `search-data-source!`.
 */
re_com.typeahead.search_data_source_loop_BANG_ = (function re_com$typeahead$search_data_source_loop_BANG_(state_atom,c_search){
var c__14170__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14170__auto__){
return (function (){
var f__14171__auto__ = (function (){var switch__14082__auto__ = ((function (c__14170__auto__){
return (function (state_16202){
var state_val_16203 = (state_16202[(1)]);
if((state_val_16203 === (1))){
var state_16202__$1 = state_16202;
var statearr_16204_16216 = state_16202__$1;
(statearr_16204_16216[(2)] = null);

(statearr_16204_16216[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16203 === (2))){
var state_16202__$1 = state_16202;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16202__$1,(4),c_search);
} else {
if((state_val_16203 === (3))){
var inst_16200 = (state_16202[(2)]);
var state_16202__$1 = state_16202;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16202__$1,inst_16200);
} else {
if((state_val_16203 === (4))){
var inst_16188 = (state_16202[(7)]);
var inst_16188__$1 = (state_16202[(2)]);
var inst_16189 = cljs.core.deref.call(null,state_atom);
var inst_16190 = new cljs.core.Keyword(null,"data-source","data-source",-658934676).cljs$core$IFn$_invoke$arity$1(inst_16189);
var inst_16191 = cljs.core._EQ_.call(null,"",inst_16188__$1);
var state_16202__$1 = (function (){var statearr_16205 = state_16202;
(statearr_16205[(7)] = inst_16188__$1);

(statearr_16205[(8)] = inst_16190);

return statearr_16205;
})();
if(inst_16191){
var statearr_16206_16217 = state_16202__$1;
(statearr_16206_16217[(1)] = (5));

} else {
var statearr_16207_16218 = state_16202__$1;
(statearr_16207_16218[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16203 === (5))){
var inst_16193 = cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.reset_typeahead);
var state_16202__$1 = state_16202;
var statearr_16208_16219 = state_16202__$1;
(statearr_16208_16219[(2)] = inst_16193);

(statearr_16208_16219[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16203 === (6))){
var inst_16188 = (state_16202[(7)]);
var inst_16190 = (state_16202[(8)]);
var inst_16195 = re_com.typeahead.search_data_source_BANG_.call(null,inst_16190,state_atom,inst_16188);
var state_16202__$1 = state_16202;
var statearr_16209_16220 = state_16202__$1;
(statearr_16209_16220[(2)] = inst_16195);

(statearr_16209_16220[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16203 === (7))){
var inst_16197 = (state_16202[(2)]);
var state_16202__$1 = (function (){var statearr_16210 = state_16202;
(statearr_16210[(9)] = inst_16197);

return statearr_16210;
})();
var statearr_16211_16221 = state_16202__$1;
(statearr_16211_16221[(2)] = null);

(statearr_16211_16221[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__14170__auto__))
;
return ((function (switch__14082__auto__,c__14170__auto__){
return (function() {
var re_com$typeahead$search_data_source_loop_BANG__$_state_machine__14083__auto__ = null;
var re_com$typeahead$search_data_source_loop_BANG__$_state_machine__14083__auto____0 = (function (){
var statearr_16212 = [null,null,null,null,null,null,null,null,null,null];
(statearr_16212[(0)] = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__14083__auto__);

(statearr_16212[(1)] = (1));

return statearr_16212;
});
var re_com$typeahead$search_data_source_loop_BANG__$_state_machine__14083__auto____1 = (function (state_16202){
while(true){
var ret_value__14084__auto__ = (function (){try{while(true){
var result__14085__auto__ = switch__14082__auto__.call(null,state_16202);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14085__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14085__auto__;
}
break;
}
}catch (e16213){if((e16213 instanceof Object)){
var ex__14086__auto__ = e16213;
var statearr_16214_16222 = state_16202;
(statearr_16214_16222[(5)] = ex__14086__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16202);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16213;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14084__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16223 = state_16202;
state_16202 = G__16223;
continue;
} else {
return ret_value__14084__auto__;
}
break;
}
});
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__14083__auto__ = function(state_16202){
switch(arguments.length){
case 0:
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__14083__auto____0.call(this);
case 1:
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__14083__auto____1.call(this,state_16202);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__14083__auto__.cljs$core$IFn$_invoke$arity$0 = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__14083__auto____0;
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__14083__auto__.cljs$core$IFn$_invoke$arity$1 = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__14083__auto____1;
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__14083__auto__;
})()
;})(switch__14082__auto__,c__14170__auto__))
})();
var state__14172__auto__ = (function (){var statearr_16215 = f__14171__auto__.call(null);
(statearr_16215[(6)] = c__14170__auto__);

return statearr_16215;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14172__auto__);
});})(c__14170__auto__))
);

return c__14170__auto__;
});
/**
 * Update state in response to `input-text` `on-change`, and put text on the `c-input` channel
 */
re_com.typeahead.input_text_on_change_BANG_ = (function re_com$typeahead$input_text_on_change_BANG_(state_atom,new_text){
var map__16225 = cljs.core.deref.call(null,state_atom);
var map__16225__$1 = ((((!((map__16225 == null)))?((((map__16225.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16225.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16225):map__16225);
var state = map__16225__$1;
var input_text = cljs.core.get.call(null,map__16225__$1,new cljs.core.Keyword(null,"input-text","input-text",-1336297114));
var c_input = cljs.core.get.call(null,map__16225__$1,new cljs.core.Keyword(null,"c-input","c-input",-1821004232));
if(cljs.core._EQ_.call(null,new_text,input_text)){
return state;
} else {
if(clojure.string.blank_QMARK_.call(null,new_text)){
} else {
cljs.core.async.put_BANG_.call(null,c_input,new_text);
}

return cljs.core.swap_BANG_.call(null,state_atom,((function (map__16225,map__16225__$1,state,input_text,c_input){
return (function (p1__16224_SHARP_){
var G__16227 = p1__16224_SHARP_;
var G__16227__$1 = cljs.core.assoc.call(null,G__16227,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),new_text,new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),false)
;
if(cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_.call(null,state,new cljs.core.Keyword(null,"input-text-changed","input-text-changed",-1906799535)))){
return re_com.typeahead.update_model.call(null,G__16227__$1,new_text);
} else {
return G__16227__$1;
}
});})(map__16225,map__16225__$1,state,input_text,c_input))
);
}
});
re_com.typeahead.input_text_on_key_down_BANG_ = (function re_com$typeahead$input_text_on_key_down_BANG_(state_atom,event){
var pred__16228 = cljs.core._EQ_;
var expr__16229 = event.which;
if(cljs.core.truth_(pred__16228.call(null,goog.events.KeyCodes.UP,expr__16229))){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_prev);
} else {
if(cljs.core.truth_(pred__16228.call(null,goog.events.KeyCodes.DOWN,expr__16229))){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_next);
} else {
if(cljs.core.truth_(pred__16228.call(null,goog.events.KeyCodes.ENTER,expr__16229))){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.choose_suggestion_active);
} else {
if(cljs.core.truth_(pred__16228.call(null,goog.events.KeyCodes.ESC,expr__16229))){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.reset_typeahead);
} else {
if(cljs.core.truth_(pred__16228.call(null,goog.events.KeyCodes.TAB,expr__16229))){
if(cljs.core.truth_(cljs.core.not_empty.call(null,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state_atom))))){
cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_next);

return event.preventDefault();
} else {
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.input_text_will_blur);
}
} else {
return true;
}
}
}
}
}
});
re_com.typeahead.typeahead_args_desc = new cljs.core.PersistentVector(null, 18, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"data-source","data-source",-658934676),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"fn",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":data-source"], null)," supplies suggestion objects. This can either accept a single string argument (the search term), or a string and a callback. For the first case, the fn should return a collection of suggestion objects (which can be anything). For the second case, the fn should return ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"nil"], null),", and eventually result in a call to the callback with a collection of suggestion objects."], null)], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),null,new cljs.core.Keyword(null,"type","type",1174270348),"string -> nil",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":change-on-blur?"], null)," controls when it is called. It is passed a suggestion object."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),true,new cljs.core.Keyword(null,"type","type",1174270348),"boolean | atom",new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"when true, invoke ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":on-change"], null)," when the user chooses a suggestion, otherwise invoke it on every change (navigating through suggestions with the mouse or keyboard, or if ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"rigid?"], null)," is also ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"false"], null),", invoke it on every character typed.)"], null)], null),cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"model","model",331153215),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),null,new cljs.core.Keyword(null,"type","type",1174270348),"object | atom",new cljs.core.Keyword(null,"description","description",-1428560544),"The initial value of the typeahead (should match the suggestion objects returned by ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":data-source"], null),")."]),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"debounce-delay","debounce-delay",-608187982),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),(250),new cljs.core.Keyword(null,"type","type",1174270348),"integer",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.integer_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"After receiving input, the typeahead will wait this many milliseconds without receiving new input before calling ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":data-source"], null),"."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"render-suggestion","render-suggestion",1472406503),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"render fn",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"override the rendering of the suggestion items by passing a fn that returns hiccup forms. The fn will receive two arguments: the search term, and the suggestion object."], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"suggestion -> string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"When a suggestion is chosen, the input-text value will be set to the result of calling this fn with the suggestion object."], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),true,new cljs.core.Keyword(null,"type","type",1174270348),"boolean | atom",new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"If ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"false"], null)," the user will be allowed to choose arbitrary text input rather than a suggestion from ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":data-source"], null),". In this case, a string will be supplied in lieu of a suggestion object."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"keyword",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.input_status_type_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"validation status. ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"nil/omitted"], null)," for normal status or one of: ",re_com.validate.input_status_types_list], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"status-icon?","status-icon?",1328423612),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean",new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"when true, display an icon to match ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":status"], null)," (no icon for nil)"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"status-tooltip","status-tooltip",1912159007),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"displayed in status icon's tooltip"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"background text shown when empty"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),"250px",new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"standard CSS width setting for this input"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"standard CSS height setting for this input"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean | atom",new cljs.core.Keyword(null,"description","description",-1428560544),"if true, the user can't interact (input anything)"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS class names, space separated"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"CSS style map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.css_style_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS styles to add or override"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"HTML attr map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.html_attr_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"HTML attributes, like ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":on-mouse-move"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),"No ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":class"], null)," or ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":style"], null),"allowed"], null)], null)], null);
/**
 * typeahead reagent component
 */
re_com.typeahead.typeahead = (function re_com$typeahead$typeahead(var_args){
var args__8821__auto__ = [];
var len__8814__auto___16253 = arguments.length;
var i__8815__auto___16254 = (0);
while(true){
if((i__8815__auto___16254 < len__8814__auto___16253)){
args__8821__auto__.push((arguments[i__8815__auto___16254]));

var G__16255 = (i__8815__auto___16254 + (1));
i__8815__auto___16254 = G__16255;
continue;
} else {
}
break;
}

var argseq__8822__auto__ = ((((0) < args__8821__auto__.length))?(new cljs.core.IndexedSeq(args__8821__auto__.slice((0)),(0),null)):null);
return re_com.typeahead.typeahead.cljs$core$IFn$_invoke$arity$variadic(argseq__8822__auto__);
});

re_com.typeahead.typeahead.cljs$core$IFn$_invoke$arity$variadic = (function (p__16233){
var map__16234 = p__16233;
var map__16234__$1 = ((((!((map__16234 == null)))?((((map__16234.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16234.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16234):map__16234);
var args = map__16234__$1;
if(cljs.core.truth_(((!(goog.DEBUG))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.typeahead.typeahead_args_desc),args,"typeahead")))){
} else {
throw (new Error("Assert failed: (validate-args-macro typeahead-args-desc args \"typeahead\")"));
}

var map__16236 = re_com.typeahead.make_typeahead_state.call(null,args);
var map__16236__$1 = ((((!((map__16236 == null)))?((((map__16236.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16236.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16236):map__16236);
var state = map__16236__$1;
var c_search = cljs.core.get.call(null,map__16236__$1,new cljs.core.Keyword(null,"c-search","c-search",1832536180));
var c_input = cljs.core.get.call(null,map__16236__$1,new cljs.core.Keyword(null,"c-input","c-input",-1821004232));
var state_atom = reagent.core.atom.call(null,state);
var input_text_model = reagent.core.cursor.call(null,state_atom,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input-text","input-text",-1336297114)], null));
re_com.typeahead.search_data_source_loop_BANG_.call(null,state_atom,c_search);

return ((function (map__16236,map__16236__$1,state,c_search,c_input,state_atom,input_text_model,map__16234,map__16234__$1,args){
return (function() { 
var G__16256__delegate = function (p__16238){
var map__16239 = p__16238;
var map__16239__$1 = ((((!((map__16239 == null)))?((((map__16239.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16239.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16239):map__16239);
var args__$1 = map__16239__$1;
var disabled_QMARK_ = cljs.core.get.call(null,map__16239__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var status_icon_QMARK_ = cljs.core.get.call(null,map__16239__$1,new cljs.core.Keyword(null,"status-icon?","status-icon?",1328423612));
var height = cljs.core.get.call(null,map__16239__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var status_tooltip = cljs.core.get.call(null,map__16239__$1,new cljs.core.Keyword(null,"status-tooltip","status-tooltip",1912159007));
var model = cljs.core.get.call(null,map__16239__$1,new cljs.core.Keyword(null,"model","model",331153215));
var _debounce_delay = cljs.core.get.call(null,map__16239__$1,new cljs.core.Keyword(null,"_debounce-delay","_debounce-delay",-1476744225));
var _on_change = cljs.core.get.call(null,map__16239__$1,new cljs.core.Keyword(null,"_on-change","_on-change",156649312));
var placeholder = cljs.core.get.call(null,map__16239__$1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083));
var render_suggestion = cljs.core.get.call(null,map__16239__$1,new cljs.core.Keyword(null,"render-suggestion","render-suggestion",1472406503));
var _suggestion_to_string = cljs.core.get.call(null,map__16239__$1,new cljs.core.Keyword(null,"_suggestion-to-string","_suggestion-to-string",795407399));
var width = cljs.core.get.call(null,map__16239__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var data_source = cljs.core.get.call(null,map__16239__$1,new cljs.core.Keyword(null,"data-source","data-source",-658934676));
var _rigid_QMARK_ = cljs.core.get.call(null,map__16239__$1,new cljs.core.Keyword(null,"_rigid?","_rigid?",1424449294));
var style = cljs.core.get.call(null,map__16239__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var _change_on_blur_QMARK_ = cljs.core.get.call(null,map__16239__$1,new cljs.core.Keyword(null,"_change-on-blur?","_change-on-blur?",1219941073));
var status = cljs.core.get.call(null,map__16239__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var class$ = cljs.core.get.call(null,map__16239__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var _attr = cljs.core.get.call(null,map__16239__$1,new cljs.core.Keyword(null,"_attr","_attr",299438964));
if(cljs.core.truth_(((!(goog.DEBUG))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.typeahead.typeahead_args_desc),args__$1,"typeahead")))){
} else {
throw (new Error("Assert failed: (validate-args-macro typeahead-args-desc args \"typeahead\")"));
}

var map__16241 = cljs.core.deref.call(null,state_atom);
var map__16241__$1 = ((((!((map__16241 == null)))?((((map__16241.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16241.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16241):map__16241);
var state__$1 = map__16241__$1;
var suggestions = cljs.core.get.call(null,map__16241__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var waiting_QMARK_ = cljs.core.get.call(null,map__16241__$1,new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215));
var suggestion_active_index = cljs.core.get.call(null,map__16241__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var external_model = cljs.core.get.call(null,map__16241__$1,new cljs.core.Keyword(null,"external-model","external-model",506095421));
var last_data_source = new cljs.core.Keyword(null,"data-source","data-source",-658934676).cljs$core$IFn$_invoke$arity$1(state__$1);
var latest_external_model = re_com.util.deref_or_value.call(null,model);
var width__$1 = (function (){var or__7645__auto__ = width;
if(cljs.core.truth_(or__7645__auto__)){
return or__7645__auto__;
} else {
return "250px";
}
})();
if(cljs.core.not_EQ_.call(null,last_data_source,data_source)){
cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.change_data_source,data_source);
} else {
}

if(cljs.core.not_EQ_.call(null,latest_external_model,external_model)){
cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.external_model_changed,latest_external_model);
} else {
}

return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.v_box,new cljs.core.Keyword(null,"width","width",-384071477),width__$1,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 27, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.misc.input_text,new cljs.core.Keyword(null,"model","model",331153215),input_text_model,new cljs.core.Keyword(null,"class","class",-2030961996),class$,new cljs.core.Keyword(null,"style","style",-496642736),style,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),disabled_QMARK_,new cljs.core.Keyword(null,"status-icon?","status-icon?",1328423612),status_icon_QMARK_,new cljs.core.Keyword(null,"status","status",-1997798413),status,new cljs.core.Keyword(null,"status-tooltip","status-tooltip",1912159007),status_tooltip,new cljs.core.Keyword(null,"width","width",-384071477),width__$1,new cljs.core.Keyword(null,"height","height",1025178622),height,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),placeholder,new cljs.core.Keyword(null,"on-change","on-change",-732046149),cljs.core.partial.call(null,re_com.typeahead.input_text_on_change_BANG_,state_atom),new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),false,new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),cljs.core.partial.call(null,re_com.typeahead.input_text_on_key_down_BANG_,state_atom)], null)], null),(cljs.core.truth_((function (){var or__7645__auto__ = cljs.core.not_empty.call(null,suggestions);
if(cljs.core.truth_(or__7645__auto__)){
return or__7645__auto__;
} else {
return waiting_QMARK_;
}
})())?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative"], null),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.v_box,new cljs.core.Keyword(null,"class","class",-2030961996),"rc-typeahead-suggestions-container",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(waiting_QMARK_)?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.misc.throbber,new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"small","small",2133478704),new cljs.core.Keyword(null,"class","class",-2030961996),"rc-typeahead-throbber"], null)], null):null),(function (){var iter__8453__auto__ = ((function (map__16241,map__16241__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__16239,map__16239__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__16236,map__16236__$1,state,c_search,c_input,state_atom,input_text_model,map__16234,map__16234__$1,args){
return (function re_com$typeahead$iter__16243(s__16244){
return (new cljs.core.LazySeq(null,((function (map__16241,map__16241__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__16239,map__16239__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__16236,map__16236__$1,state,c_search,c_input,state_atom,input_text_model,map__16234,map__16234__$1,args){
return (function (){
var s__16244__$1 = s__16244;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__16244__$1);
if(temp__4657__auto__){
var s__16244__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__16244__$2)){
var c__8451__auto__ = cljs.core.chunk_first.call(null,s__16244__$2);
var size__8452__auto__ = cljs.core.count.call(null,c__8451__auto__);
var b__16246 = cljs.core.chunk_buffer.call(null,size__8452__auto__);
if((function (){var i__16245 = (0);
while(true){
if((i__16245 < size__8452__auto__)){
var vec__16247 = cljs.core._nth.call(null,c__8451__auto__,i__16245);
var i = cljs.core.nth.call(null,vec__16247,(0),null);
var s = cljs.core.nth.call(null,vec__16247,(1),null);
var selected_QMARK_ = cljs.core._EQ_.call(null,suggestion_active_index,i);
cljs.core.chunk_append.call(null,b__16246,cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"child","child",623967545),(cljs.core.truth_(render_suggestion)?render_suggestion.call(null,s):s),new cljs.core.Keyword(null,"class","class",-2030961996),["rc-typeahead-suggestion",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((selected_QMARK_)?" active":null))].join(''),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (i__16245,selected_QMARK_,vec__16247,i,s,c__8451__auto__,size__8452__auto__,b__16246,s__16244__$2,temp__4657__auto__,map__16241,map__16241__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__16239,map__16239__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__16236,map__16236__$1,state,c_search,c_input,state_atom,input_text_model,map__16234,map__16234__$1,args){
return (function (){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_by_index,i);
});})(i__16245,selected_QMARK_,vec__16247,i,s,c__8451__auto__,size__8452__auto__,b__16246,s__16244__$2,temp__4657__auto__,map__16241,map__16241__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__16239,map__16239__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__16236,map__16236__$1,state,c_search,c_input,state_atom,input_text_model,map__16234,map__16234__$1,args))
,new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),((function (i__16245,selected_QMARK_,vec__16247,i,s,c__8451__auto__,size__8452__auto__,b__16246,s__16244__$2,temp__4657__auto__,map__16241,map__16241__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__16239,map__16239__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__16236,map__16236__$1,state,c_search,c_input,state_atom,input_text_model,map__16234,map__16234__$1,args){
return (function (p1__16231_SHARP_){
p1__16231_SHARP_.preventDefault();

return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.choose_suggestion_by_index,i);
});})(i__16245,selected_QMARK_,vec__16247,i,s,c__8451__auto__,size__8452__auto__,b__16246,s__16244__$2,temp__4657__auto__,map__16241,map__16241__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__16239,map__16239__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__16236,map__16236__$1,state,c_search,c_input,state_atom,input_text_model,map__16234,map__16234__$1,args))
], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)));

var G__16257 = (i__16245 + (1));
i__16245 = G__16257;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16246),re_com$typeahead$iter__16243.call(null,cljs.core.chunk_rest.call(null,s__16244__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16246),null);
}
} else {
var vec__16250 = cljs.core.first.call(null,s__16244__$2);
var i = cljs.core.nth.call(null,vec__16250,(0),null);
var s = cljs.core.nth.call(null,vec__16250,(1),null);
var selected_QMARK_ = cljs.core._EQ_.call(null,suggestion_active_index,i);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"child","child",623967545),(cljs.core.truth_(render_suggestion)?render_suggestion.call(null,s):s),new cljs.core.Keyword(null,"class","class",-2030961996),["rc-typeahead-suggestion",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((selected_QMARK_)?" active":null))].join(''),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (selected_QMARK_,vec__16250,i,s,s__16244__$2,temp__4657__auto__,map__16241,map__16241__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__16239,map__16239__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__16236,map__16236__$1,state,c_search,c_input,state_atom,input_text_model,map__16234,map__16234__$1,args){
return (function (){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_by_index,i);
});})(selected_QMARK_,vec__16250,i,s,s__16244__$2,temp__4657__auto__,map__16241,map__16241__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__16239,map__16239__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__16236,map__16236__$1,state,c_search,c_input,state_atom,input_text_model,map__16234,map__16234__$1,args))
,new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),((function (selected_QMARK_,vec__16250,i,s,s__16244__$2,temp__4657__auto__,map__16241,map__16241__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__16239,map__16239__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__16236,map__16236__$1,state,c_search,c_input,state_atom,input_text_model,map__16234,map__16234__$1,args){
return (function (p1__16231_SHARP_){
p1__16231_SHARP_.preventDefault();

return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.choose_suggestion_by_index,i);
});})(selected_QMARK_,vec__16250,i,s,s__16244__$2,temp__4657__auto__,map__16241,map__16241__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__16239,map__16239__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__16236,map__16236__$1,state,c_search,c_input,state_atom,input_text_model,map__16234,map__16234__$1,args))
], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)),re_com$typeahead$iter__16243.call(null,cljs.core.rest.call(null,s__16244__$2)));
}
} else {
return null;
}
break;
}
});})(map__16241,map__16241__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__16239,map__16239__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__16236,map__16236__$1,state,c_search,c_input,state_atom,input_text_model,map__16234,map__16234__$1,args))
,null,null));
});})(map__16241,map__16241__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__16239,map__16239__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__16236,map__16236__$1,state,c_search,c_input,state_atom,input_text_model,map__16234,map__16234__$1,args))
;
return iter__8453__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.range.call(null),suggestions));
})()], null)], null)], null):null)], null)], null);
};
var G__16256 = function (var_args){
var p__16238 = null;
if (arguments.length > 0) {
var G__16258__i = 0, G__16258__a = new Array(arguments.length -  0);
while (G__16258__i < G__16258__a.length) {G__16258__a[G__16258__i] = arguments[G__16258__i + 0]; ++G__16258__i;}
  p__16238 = new cljs.core.IndexedSeq(G__16258__a,0,null);
} 
return G__16256__delegate.call(this,p__16238);};
G__16256.cljs$lang$maxFixedArity = 0;
G__16256.cljs$lang$applyTo = (function (arglist__16259){
var p__16238 = cljs.core.seq(arglist__16259);
return G__16256__delegate(p__16238);
});
G__16256.cljs$core$IFn$_invoke$arity$variadic = G__16256__delegate;
return G__16256;
})()
;
;})(map__16236,map__16236__$1,state,c_search,c_input,state_atom,input_text_model,map__16234,map__16234__$1,args))
});

re_com.typeahead.typeahead.cljs$lang$maxFixedArity = (0);

re_com.typeahead.typeahead.cljs$lang$applyTo = (function (seq16232){
return re_com.typeahead.typeahead.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16232));
});

/**
 * Return a channel which will receive a value from the `in` channel only
 *   if no further value is received on the `in` channel in the next `ms` milliseconds.
 */
re_com.typeahead.debounce = (function re_com$typeahead$debounce(in$,ms){
var out = cljs.core.async.chan.call(null);
var c__14170__auto___16340 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14170__auto___16340,out){
return (function (){
var f__14171__auto__ = (function (){var switch__14082__auto__ = ((function (c__14170__auto___16340,out){
return (function (state_16310){
var state_val_16311 = (state_16310[(1)]);
if((state_val_16311 === (7))){
var inst_16265 = (state_16310[(2)]);
var state_16310__$1 = state_16310;
var statearr_16312_16341 = state_16310__$1;
(statearr_16312_16341[(2)] = inst_16265);

(statearr_16312_16341[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16311 === (1))){
var inst_16260 = null;
var state_16310__$1 = (function (){var statearr_16313 = state_16310;
(statearr_16313[(7)] = inst_16260);

return statearr_16313;
})();
var statearr_16314_16342 = state_16310__$1;
(statearr_16314_16342[(2)] = null);

(statearr_16314_16342[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16311 === (4))){
var state_16310__$1 = state_16310;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16310__$1,(7),in$);
} else {
if((state_val_16311 === (15))){
var inst_16295 = (state_16310[(2)]);
var state_16310__$1 = (function (){var statearr_16315 = state_16310;
(statearr_16315[(8)] = inst_16295);

return statearr_16315;
})();
var statearr_16316_16343 = state_16310__$1;
(statearr_16316_16343[(2)] = null);

(statearr_16316_16343[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16311 === (13))){
var inst_16283 = (state_16310[(9)]);
var inst_16297 = cljs.core._EQ_.call(null,inst_16283,new cljs.core.Keyword(null,"default","default",-1987822328));
var state_16310__$1 = state_16310;
if(inst_16297){
var statearr_16317_16344 = state_16310__$1;
(statearr_16317_16344[(1)] = (16));

} else {
var statearr_16318_16345 = state_16310__$1;
(statearr_16318_16345[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16311 === (6))){
var inst_16269 = (state_16310[(10)]);
var inst_16268 = (state_16310[(2)]);
var inst_16269__$1 = cljs.core.async.timeout.call(null,ms);
var inst_16277 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_16278 = [in$,inst_16269__$1];
var inst_16279 = (new cljs.core.PersistentVector(null,2,(5),inst_16277,inst_16278,null));
var state_16310__$1 = (function (){var statearr_16319 = state_16310;
(statearr_16319[(10)] = inst_16269__$1);

(statearr_16319[(11)] = inst_16268);

return statearr_16319;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_16310__$1,(8),inst_16279);
} else {
if((state_val_16311 === (17))){
var state_16310__$1 = state_16310;
var statearr_16320_16346 = state_16310__$1;
(statearr_16320_16346[(2)] = null);

(statearr_16320_16346[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16311 === (3))){
var inst_16308 = (state_16310[(2)]);
var state_16310__$1 = state_16310;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16310__$1,inst_16308);
} else {
if((state_val_16311 === (12))){
var inst_16268 = (state_16310[(11)]);
var state_16310__$1 = state_16310;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16310__$1,(15),out,inst_16268);
} else {
if((state_val_16311 === (2))){
var inst_16260 = (state_16310[(7)]);
var inst_16262 = (inst_16260 == null);
var state_16310__$1 = state_16310;
if(cljs.core.truth_(inst_16262)){
var statearr_16321_16347 = state_16310__$1;
(statearr_16321_16347[(1)] = (4));

} else {
var statearr_16322_16348 = state_16310__$1;
(statearr_16322_16348[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16311 === (11))){
var inst_16305 = (state_16310[(2)]);
var inst_16260 = inst_16305;
var state_16310__$1 = (function (){var statearr_16323 = state_16310;
(statearr_16323[(7)] = inst_16260);

return statearr_16323;
})();
var statearr_16324_16349 = state_16310__$1;
(statearr_16324_16349[(2)] = null);

(statearr_16324_16349[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16311 === (9))){
var inst_16281 = (state_16310[(12)]);
var inst_16289 = cljs.core.nth.call(null,inst_16281,(0),null);
var inst_16290 = cljs.core.nth.call(null,inst_16281,(1),null);
var state_16310__$1 = (function (){var statearr_16325 = state_16310;
(statearr_16325[(13)] = inst_16290);

return statearr_16325;
})();
var statearr_16326_16350 = state_16310__$1;
(statearr_16326_16350[(2)] = inst_16289);

(statearr_16326_16350[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16311 === (5))){
var inst_16260 = (state_16310[(7)]);
var state_16310__$1 = state_16310;
var statearr_16327_16351 = state_16310__$1;
(statearr_16327_16351[(2)] = inst_16260);

(statearr_16327_16351[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16311 === (14))){
var inst_16303 = (state_16310[(2)]);
var state_16310__$1 = state_16310;
var statearr_16328_16352 = state_16310__$1;
(statearr_16328_16352[(2)] = inst_16303);

(statearr_16328_16352[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16311 === (16))){
var inst_16282 = (state_16310[(14)]);
var state_16310__$1 = state_16310;
var statearr_16329_16353 = state_16310__$1;
(statearr_16329_16353[(2)] = inst_16282);

(statearr_16329_16353[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16311 === (10))){
var inst_16283 = (state_16310[(9)]);
var inst_16269 = (state_16310[(10)]);
var inst_16292 = cljs.core._EQ_.call(null,inst_16283,inst_16269);
var state_16310__$1 = state_16310;
if(inst_16292){
var statearr_16330_16354 = state_16310__$1;
(statearr_16330_16354[(1)] = (12));

} else {
var statearr_16331_16355 = state_16310__$1;
(statearr_16331_16355[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16311 === (18))){
var inst_16301 = (state_16310[(2)]);
var state_16310__$1 = state_16310;
var statearr_16332_16356 = state_16310__$1;
(statearr_16332_16356[(2)] = inst_16301);

(statearr_16332_16356[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16311 === (8))){
var inst_16283 = (state_16310[(9)]);
var inst_16281 = (state_16310[(12)]);
var inst_16281__$1 = (state_16310[(2)]);
var inst_16282 = cljs.core.nth.call(null,inst_16281__$1,(0),null);
var inst_16283__$1 = cljs.core.nth.call(null,inst_16281__$1,(1),null);
var inst_16284 = cljs.core._EQ_.call(null,inst_16283__$1,in$);
var state_16310__$1 = (function (){var statearr_16333 = state_16310;
(statearr_16333[(9)] = inst_16283__$1);

(statearr_16333[(14)] = inst_16282);

(statearr_16333[(12)] = inst_16281__$1);

return statearr_16333;
})();
if(inst_16284){
var statearr_16334_16357 = state_16310__$1;
(statearr_16334_16357[(1)] = (9));

} else {
var statearr_16335_16358 = state_16310__$1;
(statearr_16335_16358[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__14170__auto___16340,out))
;
return ((function (switch__14082__auto__,c__14170__auto___16340,out){
return (function() {
var re_com$typeahead$debounce_$_state_machine__14083__auto__ = null;
var re_com$typeahead$debounce_$_state_machine__14083__auto____0 = (function (){
var statearr_16336 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16336[(0)] = re_com$typeahead$debounce_$_state_machine__14083__auto__);

(statearr_16336[(1)] = (1));

return statearr_16336;
});
var re_com$typeahead$debounce_$_state_machine__14083__auto____1 = (function (state_16310){
while(true){
var ret_value__14084__auto__ = (function (){try{while(true){
var result__14085__auto__ = switch__14082__auto__.call(null,state_16310);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14085__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14085__auto__;
}
break;
}
}catch (e16337){if((e16337 instanceof Object)){
var ex__14086__auto__ = e16337;
var statearr_16338_16359 = state_16310;
(statearr_16338_16359[(5)] = ex__14086__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16310);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16337;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14084__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16360 = state_16310;
state_16310 = G__16360;
continue;
} else {
return ret_value__14084__auto__;
}
break;
}
});
re_com$typeahead$debounce_$_state_machine__14083__auto__ = function(state_16310){
switch(arguments.length){
case 0:
return re_com$typeahead$debounce_$_state_machine__14083__auto____0.call(this);
case 1:
return re_com$typeahead$debounce_$_state_machine__14083__auto____1.call(this,state_16310);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
re_com$typeahead$debounce_$_state_machine__14083__auto__.cljs$core$IFn$_invoke$arity$0 = re_com$typeahead$debounce_$_state_machine__14083__auto____0;
re_com$typeahead$debounce_$_state_machine__14083__auto__.cljs$core$IFn$_invoke$arity$1 = re_com$typeahead$debounce_$_state_machine__14083__auto____1;
return re_com$typeahead$debounce_$_state_machine__14083__auto__;
})()
;})(switch__14082__auto__,c__14170__auto___16340,out))
})();
var state__14172__auto__ = (function (){var statearr_16339 = f__14171__auto__.call(null);
(statearr_16339[(6)] = c__14170__auto___16340);

return statearr_16339;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14172__auto__);
});})(c__14170__auto___16340,out))
);


return out;
});

//# sourceMappingURL=typeahead.js.map
