// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__14216 = arguments.length;
switch (G__14216) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async14217 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14217 = (function (f,blockable,meta14218){
this.f = f;
this.blockable = blockable;
this.meta14218 = meta14218;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async14217.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14219,meta14218__$1){
var self__ = this;
var _14219__$1 = this;
return (new cljs.core.async.t_cljs$core$async14217(self__.f,self__.blockable,meta14218__$1));
});

cljs.core.async.t_cljs$core$async14217.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14219){
var self__ = this;
var _14219__$1 = this;
return self__.meta14218;
});

cljs.core.async.t_cljs$core$async14217.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async14217.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async14217.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async14217.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async14217.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta14218","meta14218",-1828903747,null)], null);
});

cljs.core.async.t_cljs$core$async14217.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14217.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14217";

cljs.core.async.t_cljs$core$async14217.cljs$lang$ctorPrWriter = (function (this__8270__auto__,writer__8271__auto__,opt__8272__auto__){
return cljs.core._write.call(null,writer__8271__auto__,"cljs.core.async/t_cljs$core$async14217");
});

cljs.core.async.__GT_t_cljs$core$async14217 = (function cljs$core$async$__GT_t_cljs$core$async14217(f__$1,blockable__$1,meta14218){
return (new cljs.core.async.t_cljs$core$async14217(f__$1,blockable__$1,meta14218));
});

}

return (new cljs.core.async.t_cljs$core$async14217(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__14223 = arguments.length;
switch (G__14223) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__14226 = arguments.length;
switch (G__14226) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__14229 = arguments.length;
switch (G__14229) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_14231 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_14231);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_14231,ret){
return (function (){
return fn1.call(null,val_14231);
});})(val_14231,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__14233 = arguments.length;
switch (G__14233) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__8590__auto___14235 = n;
var x_14236 = (0);
while(true){
if((x_14236 < n__8590__auto___14235)){
(a[x_14236] = (0));

var G__14237 = (x_14236 + (1));
x_14236 = G__14237;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__14238 = (i + (1));
i = G__14238;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async14239 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14239 = (function (flag,meta14240){
this.flag = flag;
this.meta14240 = meta14240;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async14239.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_14241,meta14240__$1){
var self__ = this;
var _14241__$1 = this;
return (new cljs.core.async.t_cljs$core$async14239(self__.flag,meta14240__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async14239.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_14241){
var self__ = this;
var _14241__$1 = this;
return self__.meta14240;
});})(flag))
;

cljs.core.async.t_cljs$core$async14239.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async14239.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async14239.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async14239.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async14239.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta14240","meta14240",-579557966,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async14239.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14239.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14239";

cljs.core.async.t_cljs$core$async14239.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__8270__auto__,writer__8271__auto__,opt__8272__auto__){
return cljs.core._write.call(null,writer__8271__auto__,"cljs.core.async/t_cljs$core$async14239");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async14239 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async14239(flag__$1,meta14240){
return (new cljs.core.async.t_cljs$core$async14239(flag__$1,meta14240));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async14239(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async14242 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14242 = (function (flag,cb,meta14243){
this.flag = flag;
this.cb = cb;
this.meta14243 = meta14243;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async14242.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14244,meta14243__$1){
var self__ = this;
var _14244__$1 = this;
return (new cljs.core.async.t_cljs$core$async14242(self__.flag,self__.cb,meta14243__$1));
});

cljs.core.async.t_cljs$core$async14242.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14244){
var self__ = this;
var _14244__$1 = this;
return self__.meta14243;
});

cljs.core.async.t_cljs$core$async14242.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async14242.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async14242.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async14242.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async14242.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta14243","meta14243",-1746669448,null)], null);
});

cljs.core.async.t_cljs$core$async14242.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14242.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14242";

cljs.core.async.t_cljs$core$async14242.cljs$lang$ctorPrWriter = (function (this__8270__auto__,writer__8271__auto__,opt__8272__auto__){
return cljs.core._write.call(null,writer__8271__auto__,"cljs.core.async/t_cljs$core$async14242");
});

cljs.core.async.__GT_t_cljs$core$async14242 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async14242(flag__$1,cb__$1,meta14243){
return (new cljs.core.async.t_cljs$core$async14242(flag__$1,cb__$1,meta14243));
});

}

return (new cljs.core.async.t_cljs$core$async14242(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__14245_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14245_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__14246_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14246_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__7645__auto__ = wport;
if(cljs.core.truth_(or__7645__auto__)){
return or__7645__auto__;
} else {
return port;
}
})()], null));
} else {
var G__14247 = (i + (1));
i = G__14247;
continue;
}
} else {
return null;
}
break;
}
})();
var or__7645__auto__ = ret;
if(cljs.core.truth_(or__7645__auto__)){
return or__7645__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__7633__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__7633__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__7633__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__8821__auto__ = [];
var len__8814__auto___14253 = arguments.length;
var i__8815__auto___14254 = (0);
while(true){
if((i__8815__auto___14254 < len__8814__auto___14253)){
args__8821__auto__.push((arguments[i__8815__auto___14254]));

var G__14255 = (i__8815__auto___14254 + (1));
i__8815__auto___14254 = G__14255;
continue;
} else {
}
break;
}

var argseq__8822__auto__ = ((((1) < args__8821__auto__.length))?(new cljs.core.IndexedSeq(args__8821__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8822__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__14250){
var map__14251 = p__14250;
var map__14251__$1 = ((((!((map__14251 == null)))?((((map__14251.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14251.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14251):map__14251);
var opts = map__14251__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq14248){
var G__14249 = cljs.core.first.call(null,seq14248);
var seq14248__$1 = cljs.core.next.call(null,seq14248);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14249,seq14248__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__14257 = arguments.length;
switch (G__14257) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__14170__auto___14303 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14170__auto___14303){
return (function (){
var f__14171__auto__ = (function (){var switch__14082__auto__ = ((function (c__14170__auto___14303){
return (function (state_14281){
var state_val_14282 = (state_14281[(1)]);
if((state_val_14282 === (7))){
var inst_14277 = (state_14281[(2)]);
var state_14281__$1 = state_14281;
var statearr_14283_14304 = state_14281__$1;
(statearr_14283_14304[(2)] = inst_14277);

(statearr_14283_14304[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14282 === (1))){
var state_14281__$1 = state_14281;
var statearr_14284_14305 = state_14281__$1;
(statearr_14284_14305[(2)] = null);

(statearr_14284_14305[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14282 === (4))){
var inst_14260 = (state_14281[(7)]);
var inst_14260__$1 = (state_14281[(2)]);
var inst_14261 = (inst_14260__$1 == null);
var state_14281__$1 = (function (){var statearr_14285 = state_14281;
(statearr_14285[(7)] = inst_14260__$1);

return statearr_14285;
})();
if(cljs.core.truth_(inst_14261)){
var statearr_14286_14306 = state_14281__$1;
(statearr_14286_14306[(1)] = (5));

} else {
var statearr_14287_14307 = state_14281__$1;
(statearr_14287_14307[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14282 === (13))){
var state_14281__$1 = state_14281;
var statearr_14288_14308 = state_14281__$1;
(statearr_14288_14308[(2)] = null);

(statearr_14288_14308[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14282 === (6))){
var inst_14260 = (state_14281[(7)]);
var state_14281__$1 = state_14281;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14281__$1,(11),to,inst_14260);
} else {
if((state_val_14282 === (3))){
var inst_14279 = (state_14281[(2)]);
var state_14281__$1 = state_14281;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14281__$1,inst_14279);
} else {
if((state_val_14282 === (12))){
var state_14281__$1 = state_14281;
var statearr_14289_14309 = state_14281__$1;
(statearr_14289_14309[(2)] = null);

(statearr_14289_14309[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14282 === (2))){
var state_14281__$1 = state_14281;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14281__$1,(4),from);
} else {
if((state_val_14282 === (11))){
var inst_14270 = (state_14281[(2)]);
var state_14281__$1 = state_14281;
if(cljs.core.truth_(inst_14270)){
var statearr_14290_14310 = state_14281__$1;
(statearr_14290_14310[(1)] = (12));

} else {
var statearr_14291_14311 = state_14281__$1;
(statearr_14291_14311[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14282 === (9))){
var state_14281__$1 = state_14281;
var statearr_14292_14312 = state_14281__$1;
(statearr_14292_14312[(2)] = null);

(statearr_14292_14312[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14282 === (5))){
var state_14281__$1 = state_14281;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14293_14313 = state_14281__$1;
(statearr_14293_14313[(1)] = (8));

} else {
var statearr_14294_14314 = state_14281__$1;
(statearr_14294_14314[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14282 === (14))){
var inst_14275 = (state_14281[(2)]);
var state_14281__$1 = state_14281;
var statearr_14295_14315 = state_14281__$1;
(statearr_14295_14315[(2)] = inst_14275);

(statearr_14295_14315[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14282 === (10))){
var inst_14267 = (state_14281[(2)]);
var state_14281__$1 = state_14281;
var statearr_14296_14316 = state_14281__$1;
(statearr_14296_14316[(2)] = inst_14267);

(statearr_14296_14316[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14282 === (8))){
var inst_14264 = cljs.core.async.close_BANG_.call(null,to);
var state_14281__$1 = state_14281;
var statearr_14297_14317 = state_14281__$1;
(statearr_14297_14317[(2)] = inst_14264);

(statearr_14297_14317[(1)] = (10));


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
});})(c__14170__auto___14303))
;
return ((function (switch__14082__auto__,c__14170__auto___14303){
return (function() {
var cljs$core$async$state_machine__14083__auto__ = null;
var cljs$core$async$state_machine__14083__auto____0 = (function (){
var statearr_14298 = [null,null,null,null,null,null,null,null];
(statearr_14298[(0)] = cljs$core$async$state_machine__14083__auto__);

(statearr_14298[(1)] = (1));

return statearr_14298;
});
var cljs$core$async$state_machine__14083__auto____1 = (function (state_14281){
while(true){
var ret_value__14084__auto__ = (function (){try{while(true){
var result__14085__auto__ = switch__14082__auto__.call(null,state_14281);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14085__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14085__auto__;
}
break;
}
}catch (e14299){if((e14299 instanceof Object)){
var ex__14086__auto__ = e14299;
var statearr_14300_14318 = state_14281;
(statearr_14300_14318[(5)] = ex__14086__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14281);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14299;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14084__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14319 = state_14281;
state_14281 = G__14319;
continue;
} else {
return ret_value__14084__auto__;
}
break;
}
});
cljs$core$async$state_machine__14083__auto__ = function(state_14281){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14083__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14083__auto____1.call(this,state_14281);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__14083__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14083__auto____0;
cljs$core$async$state_machine__14083__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14083__auto____1;
return cljs$core$async$state_machine__14083__auto__;
})()
;})(switch__14082__auto__,c__14170__auto___14303))
})();
var state__14172__auto__ = (function (){var statearr_14301 = f__14171__auto__.call(null);
(statearr_14301[(6)] = c__14170__auto___14303);

return statearr_14301;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14172__auto__);
});})(c__14170__auto___14303))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__14320){
var vec__14321 = p__14320;
var v = cljs.core.nth.call(null,vec__14321,(0),null);
var p = cljs.core.nth.call(null,vec__14321,(1),null);
var job = vec__14321;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__14170__auto___14492 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14170__auto___14492,res,vec__14321,v,p,job,jobs,results){
return (function (){
var f__14171__auto__ = (function (){var switch__14082__auto__ = ((function (c__14170__auto___14492,res,vec__14321,v,p,job,jobs,results){
return (function (state_14328){
var state_val_14329 = (state_14328[(1)]);
if((state_val_14329 === (1))){
var state_14328__$1 = state_14328;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14328__$1,(2),res,v);
} else {
if((state_val_14329 === (2))){
var inst_14325 = (state_14328[(2)]);
var inst_14326 = cljs.core.async.close_BANG_.call(null,res);
var state_14328__$1 = (function (){var statearr_14330 = state_14328;
(statearr_14330[(7)] = inst_14325);

return statearr_14330;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14328__$1,inst_14326);
} else {
return null;
}
}
});})(c__14170__auto___14492,res,vec__14321,v,p,job,jobs,results))
;
return ((function (switch__14082__auto__,c__14170__auto___14492,res,vec__14321,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14083__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14083__auto____0 = (function (){
var statearr_14331 = [null,null,null,null,null,null,null,null];
(statearr_14331[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14083__auto__);

(statearr_14331[(1)] = (1));

return statearr_14331;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14083__auto____1 = (function (state_14328){
while(true){
var ret_value__14084__auto__ = (function (){try{while(true){
var result__14085__auto__ = switch__14082__auto__.call(null,state_14328);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14085__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14085__auto__;
}
break;
}
}catch (e14332){if((e14332 instanceof Object)){
var ex__14086__auto__ = e14332;
var statearr_14333_14493 = state_14328;
(statearr_14333_14493[(5)] = ex__14086__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14328);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14332;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14084__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14494 = state_14328;
state_14328 = G__14494;
continue;
} else {
return ret_value__14084__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14083__auto__ = function(state_14328){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14083__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14083__auto____1.call(this,state_14328);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__14083__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14083__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14083__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14083__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14083__auto__;
})()
;})(switch__14082__auto__,c__14170__auto___14492,res,vec__14321,v,p,job,jobs,results))
})();
var state__14172__auto__ = (function (){var statearr_14334 = f__14171__auto__.call(null);
(statearr_14334[(6)] = c__14170__auto___14492);

return statearr_14334;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14172__auto__);
});})(c__14170__auto___14492,res,vec__14321,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__14335){
var vec__14336 = p__14335;
var v = cljs.core.nth.call(null,vec__14336,(0),null);
var p = cljs.core.nth.call(null,vec__14336,(1),null);
var job = vec__14336;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__8590__auto___14495 = n;
var __14496 = (0);
while(true){
if((__14496 < n__8590__auto___14495)){
var G__14339_14497 = type;
var G__14339_14498__$1 = (((G__14339_14497 instanceof cljs.core.Keyword))?G__14339_14497.fqn:null);
switch (G__14339_14498__$1) {
case "compute":
var c__14170__auto___14500 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__14496,c__14170__auto___14500,G__14339_14497,G__14339_14498__$1,n__8590__auto___14495,jobs,results,process,async){
return (function (){
var f__14171__auto__ = (function (){var switch__14082__auto__ = ((function (__14496,c__14170__auto___14500,G__14339_14497,G__14339_14498__$1,n__8590__auto___14495,jobs,results,process,async){
return (function (state_14352){
var state_val_14353 = (state_14352[(1)]);
if((state_val_14353 === (1))){
var state_14352__$1 = state_14352;
var statearr_14354_14501 = state_14352__$1;
(statearr_14354_14501[(2)] = null);

(statearr_14354_14501[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14353 === (2))){
var state_14352__$1 = state_14352;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14352__$1,(4),jobs);
} else {
if((state_val_14353 === (3))){
var inst_14350 = (state_14352[(2)]);
var state_14352__$1 = state_14352;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14352__$1,inst_14350);
} else {
if((state_val_14353 === (4))){
var inst_14342 = (state_14352[(2)]);
var inst_14343 = process.call(null,inst_14342);
var state_14352__$1 = state_14352;
if(cljs.core.truth_(inst_14343)){
var statearr_14355_14502 = state_14352__$1;
(statearr_14355_14502[(1)] = (5));

} else {
var statearr_14356_14503 = state_14352__$1;
(statearr_14356_14503[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14353 === (5))){
var state_14352__$1 = state_14352;
var statearr_14357_14504 = state_14352__$1;
(statearr_14357_14504[(2)] = null);

(statearr_14357_14504[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14353 === (6))){
var state_14352__$1 = state_14352;
var statearr_14358_14505 = state_14352__$1;
(statearr_14358_14505[(2)] = null);

(statearr_14358_14505[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14353 === (7))){
var inst_14348 = (state_14352[(2)]);
var state_14352__$1 = state_14352;
var statearr_14359_14506 = state_14352__$1;
(statearr_14359_14506[(2)] = inst_14348);

(statearr_14359_14506[(1)] = (3));


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
});})(__14496,c__14170__auto___14500,G__14339_14497,G__14339_14498__$1,n__8590__auto___14495,jobs,results,process,async))
;
return ((function (__14496,switch__14082__auto__,c__14170__auto___14500,G__14339_14497,G__14339_14498__$1,n__8590__auto___14495,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14083__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14083__auto____0 = (function (){
var statearr_14360 = [null,null,null,null,null,null,null];
(statearr_14360[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14083__auto__);

(statearr_14360[(1)] = (1));

return statearr_14360;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14083__auto____1 = (function (state_14352){
while(true){
var ret_value__14084__auto__ = (function (){try{while(true){
var result__14085__auto__ = switch__14082__auto__.call(null,state_14352);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14085__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14085__auto__;
}
break;
}
}catch (e14361){if((e14361 instanceof Object)){
var ex__14086__auto__ = e14361;
var statearr_14362_14507 = state_14352;
(statearr_14362_14507[(5)] = ex__14086__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14352);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14361;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14084__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14508 = state_14352;
state_14352 = G__14508;
continue;
} else {
return ret_value__14084__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14083__auto__ = function(state_14352){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14083__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14083__auto____1.call(this,state_14352);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__14083__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14083__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14083__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14083__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14083__auto__;
})()
;})(__14496,switch__14082__auto__,c__14170__auto___14500,G__14339_14497,G__14339_14498__$1,n__8590__auto___14495,jobs,results,process,async))
})();
var state__14172__auto__ = (function (){var statearr_14363 = f__14171__auto__.call(null);
(statearr_14363[(6)] = c__14170__auto___14500);

return statearr_14363;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14172__auto__);
});})(__14496,c__14170__auto___14500,G__14339_14497,G__14339_14498__$1,n__8590__auto___14495,jobs,results,process,async))
);


break;
case "async":
var c__14170__auto___14509 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__14496,c__14170__auto___14509,G__14339_14497,G__14339_14498__$1,n__8590__auto___14495,jobs,results,process,async){
return (function (){
var f__14171__auto__ = (function (){var switch__14082__auto__ = ((function (__14496,c__14170__auto___14509,G__14339_14497,G__14339_14498__$1,n__8590__auto___14495,jobs,results,process,async){
return (function (state_14376){
var state_val_14377 = (state_14376[(1)]);
if((state_val_14377 === (1))){
var state_14376__$1 = state_14376;
var statearr_14378_14510 = state_14376__$1;
(statearr_14378_14510[(2)] = null);

(statearr_14378_14510[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14377 === (2))){
var state_14376__$1 = state_14376;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14376__$1,(4),jobs);
} else {
if((state_val_14377 === (3))){
var inst_14374 = (state_14376[(2)]);
var state_14376__$1 = state_14376;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14376__$1,inst_14374);
} else {
if((state_val_14377 === (4))){
var inst_14366 = (state_14376[(2)]);
var inst_14367 = async.call(null,inst_14366);
var state_14376__$1 = state_14376;
if(cljs.core.truth_(inst_14367)){
var statearr_14379_14511 = state_14376__$1;
(statearr_14379_14511[(1)] = (5));

} else {
var statearr_14380_14512 = state_14376__$1;
(statearr_14380_14512[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14377 === (5))){
var state_14376__$1 = state_14376;
var statearr_14381_14513 = state_14376__$1;
(statearr_14381_14513[(2)] = null);

(statearr_14381_14513[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14377 === (6))){
var state_14376__$1 = state_14376;
var statearr_14382_14514 = state_14376__$1;
(statearr_14382_14514[(2)] = null);

(statearr_14382_14514[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14377 === (7))){
var inst_14372 = (state_14376[(2)]);
var state_14376__$1 = state_14376;
var statearr_14383_14515 = state_14376__$1;
(statearr_14383_14515[(2)] = inst_14372);

(statearr_14383_14515[(1)] = (3));


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
});})(__14496,c__14170__auto___14509,G__14339_14497,G__14339_14498__$1,n__8590__auto___14495,jobs,results,process,async))
;
return ((function (__14496,switch__14082__auto__,c__14170__auto___14509,G__14339_14497,G__14339_14498__$1,n__8590__auto___14495,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14083__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14083__auto____0 = (function (){
var statearr_14384 = [null,null,null,null,null,null,null];
(statearr_14384[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14083__auto__);

(statearr_14384[(1)] = (1));

return statearr_14384;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14083__auto____1 = (function (state_14376){
while(true){
var ret_value__14084__auto__ = (function (){try{while(true){
var result__14085__auto__ = switch__14082__auto__.call(null,state_14376);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14085__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14085__auto__;
}
break;
}
}catch (e14385){if((e14385 instanceof Object)){
var ex__14086__auto__ = e14385;
var statearr_14386_14516 = state_14376;
(statearr_14386_14516[(5)] = ex__14086__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14376);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14385;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14084__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14517 = state_14376;
state_14376 = G__14517;
continue;
} else {
return ret_value__14084__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14083__auto__ = function(state_14376){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14083__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14083__auto____1.call(this,state_14376);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__14083__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14083__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14083__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14083__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14083__auto__;
})()
;})(__14496,switch__14082__auto__,c__14170__auto___14509,G__14339_14497,G__14339_14498__$1,n__8590__auto___14495,jobs,results,process,async))
})();
var state__14172__auto__ = (function (){var statearr_14387 = f__14171__auto__.call(null);
(statearr_14387[(6)] = c__14170__auto___14509);

return statearr_14387;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14172__auto__);
});})(__14496,c__14170__auto___14509,G__14339_14497,G__14339_14498__$1,n__8590__auto___14495,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__14339_14498__$1)].join('')));

}

var G__14518 = (__14496 + (1));
__14496 = G__14518;
continue;
} else {
}
break;
}

var c__14170__auto___14519 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14170__auto___14519,jobs,results,process,async){
return (function (){
var f__14171__auto__ = (function (){var switch__14082__auto__ = ((function (c__14170__auto___14519,jobs,results,process,async){
return (function (state_14409){
var state_val_14410 = (state_14409[(1)]);
if((state_val_14410 === (1))){
var state_14409__$1 = state_14409;
var statearr_14411_14520 = state_14409__$1;
(statearr_14411_14520[(2)] = null);

(statearr_14411_14520[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14410 === (2))){
var state_14409__$1 = state_14409;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14409__$1,(4),from);
} else {
if((state_val_14410 === (3))){
var inst_14407 = (state_14409[(2)]);
var state_14409__$1 = state_14409;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14409__$1,inst_14407);
} else {
if((state_val_14410 === (4))){
var inst_14390 = (state_14409[(7)]);
var inst_14390__$1 = (state_14409[(2)]);
var inst_14391 = (inst_14390__$1 == null);
var state_14409__$1 = (function (){var statearr_14412 = state_14409;
(statearr_14412[(7)] = inst_14390__$1);

return statearr_14412;
})();
if(cljs.core.truth_(inst_14391)){
var statearr_14413_14521 = state_14409__$1;
(statearr_14413_14521[(1)] = (5));

} else {
var statearr_14414_14522 = state_14409__$1;
(statearr_14414_14522[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14410 === (5))){
var inst_14393 = cljs.core.async.close_BANG_.call(null,jobs);
var state_14409__$1 = state_14409;
var statearr_14415_14523 = state_14409__$1;
(statearr_14415_14523[(2)] = inst_14393);

(statearr_14415_14523[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14410 === (6))){
var inst_14395 = (state_14409[(8)]);
var inst_14390 = (state_14409[(7)]);
var inst_14395__$1 = cljs.core.async.chan.call(null,(1));
var inst_14396 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_14397 = [inst_14390,inst_14395__$1];
var inst_14398 = (new cljs.core.PersistentVector(null,2,(5),inst_14396,inst_14397,null));
var state_14409__$1 = (function (){var statearr_14416 = state_14409;
(statearr_14416[(8)] = inst_14395__$1);

return statearr_14416;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14409__$1,(8),jobs,inst_14398);
} else {
if((state_val_14410 === (7))){
var inst_14405 = (state_14409[(2)]);
var state_14409__$1 = state_14409;
var statearr_14417_14524 = state_14409__$1;
(statearr_14417_14524[(2)] = inst_14405);

(statearr_14417_14524[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14410 === (8))){
var inst_14395 = (state_14409[(8)]);
var inst_14400 = (state_14409[(2)]);
var state_14409__$1 = (function (){var statearr_14418 = state_14409;
(statearr_14418[(9)] = inst_14400);

return statearr_14418;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14409__$1,(9),results,inst_14395);
} else {
if((state_val_14410 === (9))){
var inst_14402 = (state_14409[(2)]);
var state_14409__$1 = (function (){var statearr_14419 = state_14409;
(statearr_14419[(10)] = inst_14402);

return statearr_14419;
})();
var statearr_14420_14525 = state_14409__$1;
(statearr_14420_14525[(2)] = null);

(statearr_14420_14525[(1)] = (2));


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
});})(c__14170__auto___14519,jobs,results,process,async))
;
return ((function (switch__14082__auto__,c__14170__auto___14519,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14083__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14083__auto____0 = (function (){
var statearr_14421 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_14421[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14083__auto__);

(statearr_14421[(1)] = (1));

return statearr_14421;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14083__auto____1 = (function (state_14409){
while(true){
var ret_value__14084__auto__ = (function (){try{while(true){
var result__14085__auto__ = switch__14082__auto__.call(null,state_14409);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14085__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14085__auto__;
}
break;
}
}catch (e14422){if((e14422 instanceof Object)){
var ex__14086__auto__ = e14422;
var statearr_14423_14526 = state_14409;
(statearr_14423_14526[(5)] = ex__14086__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14409);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14422;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14084__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14527 = state_14409;
state_14409 = G__14527;
continue;
} else {
return ret_value__14084__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14083__auto__ = function(state_14409){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14083__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14083__auto____1.call(this,state_14409);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__14083__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14083__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14083__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14083__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14083__auto__;
})()
;})(switch__14082__auto__,c__14170__auto___14519,jobs,results,process,async))
})();
var state__14172__auto__ = (function (){var statearr_14424 = f__14171__auto__.call(null);
(statearr_14424[(6)] = c__14170__auto___14519);

return statearr_14424;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14172__auto__);
});})(c__14170__auto___14519,jobs,results,process,async))
);


var c__14170__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14170__auto__,jobs,results,process,async){
return (function (){
var f__14171__auto__ = (function (){var switch__14082__auto__ = ((function (c__14170__auto__,jobs,results,process,async){
return (function (state_14462){
var state_val_14463 = (state_14462[(1)]);
if((state_val_14463 === (7))){
var inst_14458 = (state_14462[(2)]);
var state_14462__$1 = state_14462;
var statearr_14464_14528 = state_14462__$1;
(statearr_14464_14528[(2)] = inst_14458);

(statearr_14464_14528[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14463 === (20))){
var state_14462__$1 = state_14462;
var statearr_14465_14529 = state_14462__$1;
(statearr_14465_14529[(2)] = null);

(statearr_14465_14529[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14463 === (1))){
var state_14462__$1 = state_14462;
var statearr_14466_14530 = state_14462__$1;
(statearr_14466_14530[(2)] = null);

(statearr_14466_14530[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14463 === (4))){
var inst_14427 = (state_14462[(7)]);
var inst_14427__$1 = (state_14462[(2)]);
var inst_14428 = (inst_14427__$1 == null);
var state_14462__$1 = (function (){var statearr_14467 = state_14462;
(statearr_14467[(7)] = inst_14427__$1);

return statearr_14467;
})();
if(cljs.core.truth_(inst_14428)){
var statearr_14468_14531 = state_14462__$1;
(statearr_14468_14531[(1)] = (5));

} else {
var statearr_14469_14532 = state_14462__$1;
(statearr_14469_14532[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14463 === (15))){
var inst_14440 = (state_14462[(8)]);
var state_14462__$1 = state_14462;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14462__$1,(18),to,inst_14440);
} else {
if((state_val_14463 === (21))){
var inst_14453 = (state_14462[(2)]);
var state_14462__$1 = state_14462;
var statearr_14470_14533 = state_14462__$1;
(statearr_14470_14533[(2)] = inst_14453);

(statearr_14470_14533[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14463 === (13))){
var inst_14455 = (state_14462[(2)]);
var state_14462__$1 = (function (){var statearr_14471 = state_14462;
(statearr_14471[(9)] = inst_14455);

return statearr_14471;
})();
var statearr_14472_14534 = state_14462__$1;
(statearr_14472_14534[(2)] = null);

(statearr_14472_14534[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14463 === (6))){
var inst_14427 = (state_14462[(7)]);
var state_14462__$1 = state_14462;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14462__$1,(11),inst_14427);
} else {
if((state_val_14463 === (17))){
var inst_14448 = (state_14462[(2)]);
var state_14462__$1 = state_14462;
if(cljs.core.truth_(inst_14448)){
var statearr_14473_14535 = state_14462__$1;
(statearr_14473_14535[(1)] = (19));

} else {
var statearr_14474_14536 = state_14462__$1;
(statearr_14474_14536[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14463 === (3))){
var inst_14460 = (state_14462[(2)]);
var state_14462__$1 = state_14462;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14462__$1,inst_14460);
} else {
if((state_val_14463 === (12))){
var inst_14437 = (state_14462[(10)]);
var state_14462__$1 = state_14462;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14462__$1,(14),inst_14437);
} else {
if((state_val_14463 === (2))){
var state_14462__$1 = state_14462;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14462__$1,(4),results);
} else {
if((state_val_14463 === (19))){
var state_14462__$1 = state_14462;
var statearr_14475_14537 = state_14462__$1;
(statearr_14475_14537[(2)] = null);

(statearr_14475_14537[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14463 === (11))){
var inst_14437 = (state_14462[(2)]);
var state_14462__$1 = (function (){var statearr_14476 = state_14462;
(statearr_14476[(10)] = inst_14437);

return statearr_14476;
})();
var statearr_14477_14538 = state_14462__$1;
(statearr_14477_14538[(2)] = null);

(statearr_14477_14538[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14463 === (9))){
var state_14462__$1 = state_14462;
var statearr_14478_14539 = state_14462__$1;
(statearr_14478_14539[(2)] = null);

(statearr_14478_14539[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14463 === (5))){
var state_14462__$1 = state_14462;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14479_14540 = state_14462__$1;
(statearr_14479_14540[(1)] = (8));

} else {
var statearr_14480_14541 = state_14462__$1;
(statearr_14480_14541[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14463 === (14))){
var inst_14440 = (state_14462[(8)]);
var inst_14442 = (state_14462[(11)]);
var inst_14440__$1 = (state_14462[(2)]);
var inst_14441 = (inst_14440__$1 == null);
var inst_14442__$1 = cljs.core.not.call(null,inst_14441);
var state_14462__$1 = (function (){var statearr_14481 = state_14462;
(statearr_14481[(8)] = inst_14440__$1);

(statearr_14481[(11)] = inst_14442__$1);

return statearr_14481;
})();
if(inst_14442__$1){
var statearr_14482_14542 = state_14462__$1;
(statearr_14482_14542[(1)] = (15));

} else {
var statearr_14483_14543 = state_14462__$1;
(statearr_14483_14543[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14463 === (16))){
var inst_14442 = (state_14462[(11)]);
var state_14462__$1 = state_14462;
var statearr_14484_14544 = state_14462__$1;
(statearr_14484_14544[(2)] = inst_14442);

(statearr_14484_14544[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14463 === (10))){
var inst_14434 = (state_14462[(2)]);
var state_14462__$1 = state_14462;
var statearr_14485_14545 = state_14462__$1;
(statearr_14485_14545[(2)] = inst_14434);

(statearr_14485_14545[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14463 === (18))){
var inst_14445 = (state_14462[(2)]);
var state_14462__$1 = state_14462;
var statearr_14486_14546 = state_14462__$1;
(statearr_14486_14546[(2)] = inst_14445);

(statearr_14486_14546[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14463 === (8))){
var inst_14431 = cljs.core.async.close_BANG_.call(null,to);
var state_14462__$1 = state_14462;
var statearr_14487_14547 = state_14462__$1;
(statearr_14487_14547[(2)] = inst_14431);

(statearr_14487_14547[(1)] = (10));


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
}
}
}
});})(c__14170__auto__,jobs,results,process,async))
;
return ((function (switch__14082__auto__,c__14170__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14083__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14083__auto____0 = (function (){
var statearr_14488 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14488[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14083__auto__);

(statearr_14488[(1)] = (1));

return statearr_14488;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14083__auto____1 = (function (state_14462){
while(true){
var ret_value__14084__auto__ = (function (){try{while(true){
var result__14085__auto__ = switch__14082__auto__.call(null,state_14462);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14085__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14085__auto__;
}
break;
}
}catch (e14489){if((e14489 instanceof Object)){
var ex__14086__auto__ = e14489;
var statearr_14490_14548 = state_14462;
(statearr_14490_14548[(5)] = ex__14086__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14462);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14489;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14084__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14549 = state_14462;
state_14462 = G__14549;
continue;
} else {
return ret_value__14084__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14083__auto__ = function(state_14462){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14083__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14083__auto____1.call(this,state_14462);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__14083__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14083__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14083__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14083__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14083__auto__;
})()
;})(switch__14082__auto__,c__14170__auto__,jobs,results,process,async))
})();
var state__14172__auto__ = (function (){var statearr_14491 = f__14171__auto__.call(null);
(statearr_14491[(6)] = c__14170__auto__);

return statearr_14491;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14172__auto__);
});})(c__14170__auto__,jobs,results,process,async))
);

return c__14170__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__14551 = arguments.length;
switch (G__14551) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__14554 = arguments.length;
switch (G__14554) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__14557 = arguments.length;
switch (G__14557) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__14170__auto___14606 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14170__auto___14606,tc,fc){
return (function (){
var f__14171__auto__ = (function (){var switch__14082__auto__ = ((function (c__14170__auto___14606,tc,fc){
return (function (state_14583){
var state_val_14584 = (state_14583[(1)]);
if((state_val_14584 === (7))){
var inst_14579 = (state_14583[(2)]);
var state_14583__$1 = state_14583;
var statearr_14585_14607 = state_14583__$1;
(statearr_14585_14607[(2)] = inst_14579);

(statearr_14585_14607[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14584 === (1))){
var state_14583__$1 = state_14583;
var statearr_14586_14608 = state_14583__$1;
(statearr_14586_14608[(2)] = null);

(statearr_14586_14608[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14584 === (4))){
var inst_14560 = (state_14583[(7)]);
var inst_14560__$1 = (state_14583[(2)]);
var inst_14561 = (inst_14560__$1 == null);
var state_14583__$1 = (function (){var statearr_14587 = state_14583;
(statearr_14587[(7)] = inst_14560__$1);

return statearr_14587;
})();
if(cljs.core.truth_(inst_14561)){
var statearr_14588_14609 = state_14583__$1;
(statearr_14588_14609[(1)] = (5));

} else {
var statearr_14589_14610 = state_14583__$1;
(statearr_14589_14610[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14584 === (13))){
var state_14583__$1 = state_14583;
var statearr_14590_14611 = state_14583__$1;
(statearr_14590_14611[(2)] = null);

(statearr_14590_14611[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14584 === (6))){
var inst_14560 = (state_14583[(7)]);
var inst_14566 = p.call(null,inst_14560);
var state_14583__$1 = state_14583;
if(cljs.core.truth_(inst_14566)){
var statearr_14591_14612 = state_14583__$1;
(statearr_14591_14612[(1)] = (9));

} else {
var statearr_14592_14613 = state_14583__$1;
(statearr_14592_14613[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14584 === (3))){
var inst_14581 = (state_14583[(2)]);
var state_14583__$1 = state_14583;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14583__$1,inst_14581);
} else {
if((state_val_14584 === (12))){
var state_14583__$1 = state_14583;
var statearr_14593_14614 = state_14583__$1;
(statearr_14593_14614[(2)] = null);

(statearr_14593_14614[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14584 === (2))){
var state_14583__$1 = state_14583;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14583__$1,(4),ch);
} else {
if((state_val_14584 === (11))){
var inst_14560 = (state_14583[(7)]);
var inst_14570 = (state_14583[(2)]);
var state_14583__$1 = state_14583;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14583__$1,(8),inst_14570,inst_14560);
} else {
if((state_val_14584 === (9))){
var state_14583__$1 = state_14583;
var statearr_14594_14615 = state_14583__$1;
(statearr_14594_14615[(2)] = tc);

(statearr_14594_14615[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14584 === (5))){
var inst_14563 = cljs.core.async.close_BANG_.call(null,tc);
var inst_14564 = cljs.core.async.close_BANG_.call(null,fc);
var state_14583__$1 = (function (){var statearr_14595 = state_14583;
(statearr_14595[(8)] = inst_14563);

return statearr_14595;
})();
var statearr_14596_14616 = state_14583__$1;
(statearr_14596_14616[(2)] = inst_14564);

(statearr_14596_14616[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14584 === (14))){
var inst_14577 = (state_14583[(2)]);
var state_14583__$1 = state_14583;
var statearr_14597_14617 = state_14583__$1;
(statearr_14597_14617[(2)] = inst_14577);

(statearr_14597_14617[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14584 === (10))){
var state_14583__$1 = state_14583;
var statearr_14598_14618 = state_14583__$1;
(statearr_14598_14618[(2)] = fc);

(statearr_14598_14618[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14584 === (8))){
var inst_14572 = (state_14583[(2)]);
var state_14583__$1 = state_14583;
if(cljs.core.truth_(inst_14572)){
var statearr_14599_14619 = state_14583__$1;
(statearr_14599_14619[(1)] = (12));

} else {
var statearr_14600_14620 = state_14583__$1;
(statearr_14600_14620[(1)] = (13));

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
});})(c__14170__auto___14606,tc,fc))
;
return ((function (switch__14082__auto__,c__14170__auto___14606,tc,fc){
return (function() {
var cljs$core$async$state_machine__14083__auto__ = null;
var cljs$core$async$state_machine__14083__auto____0 = (function (){
var statearr_14601 = [null,null,null,null,null,null,null,null,null];
(statearr_14601[(0)] = cljs$core$async$state_machine__14083__auto__);

(statearr_14601[(1)] = (1));

return statearr_14601;
});
var cljs$core$async$state_machine__14083__auto____1 = (function (state_14583){
while(true){
var ret_value__14084__auto__ = (function (){try{while(true){
var result__14085__auto__ = switch__14082__auto__.call(null,state_14583);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14085__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14085__auto__;
}
break;
}
}catch (e14602){if((e14602 instanceof Object)){
var ex__14086__auto__ = e14602;
var statearr_14603_14621 = state_14583;
(statearr_14603_14621[(5)] = ex__14086__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14583);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14602;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14084__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14622 = state_14583;
state_14583 = G__14622;
continue;
} else {
return ret_value__14084__auto__;
}
break;
}
});
cljs$core$async$state_machine__14083__auto__ = function(state_14583){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14083__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14083__auto____1.call(this,state_14583);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__14083__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14083__auto____0;
cljs$core$async$state_machine__14083__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14083__auto____1;
return cljs$core$async$state_machine__14083__auto__;
})()
;})(switch__14082__auto__,c__14170__auto___14606,tc,fc))
})();
var state__14172__auto__ = (function (){var statearr_14604 = f__14171__auto__.call(null);
(statearr_14604[(6)] = c__14170__auto___14606);

return statearr_14604;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14172__auto__);
});})(c__14170__auto___14606,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__14170__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14170__auto__){
return (function (){
var f__14171__auto__ = (function (){var switch__14082__auto__ = ((function (c__14170__auto__){
return (function (state_14643){
var state_val_14644 = (state_14643[(1)]);
if((state_val_14644 === (7))){
var inst_14639 = (state_14643[(2)]);
var state_14643__$1 = state_14643;
var statearr_14645_14663 = state_14643__$1;
(statearr_14645_14663[(2)] = inst_14639);

(statearr_14645_14663[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14644 === (1))){
var inst_14623 = init;
var state_14643__$1 = (function (){var statearr_14646 = state_14643;
(statearr_14646[(7)] = inst_14623);

return statearr_14646;
})();
var statearr_14647_14664 = state_14643__$1;
(statearr_14647_14664[(2)] = null);

(statearr_14647_14664[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14644 === (4))){
var inst_14626 = (state_14643[(8)]);
var inst_14626__$1 = (state_14643[(2)]);
var inst_14627 = (inst_14626__$1 == null);
var state_14643__$1 = (function (){var statearr_14648 = state_14643;
(statearr_14648[(8)] = inst_14626__$1);

return statearr_14648;
})();
if(cljs.core.truth_(inst_14627)){
var statearr_14649_14665 = state_14643__$1;
(statearr_14649_14665[(1)] = (5));

} else {
var statearr_14650_14666 = state_14643__$1;
(statearr_14650_14666[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14644 === (6))){
var inst_14626 = (state_14643[(8)]);
var inst_14623 = (state_14643[(7)]);
var inst_14630 = (state_14643[(9)]);
var inst_14630__$1 = f.call(null,inst_14623,inst_14626);
var inst_14631 = cljs.core.reduced_QMARK_.call(null,inst_14630__$1);
var state_14643__$1 = (function (){var statearr_14651 = state_14643;
(statearr_14651[(9)] = inst_14630__$1);

return statearr_14651;
})();
if(inst_14631){
var statearr_14652_14667 = state_14643__$1;
(statearr_14652_14667[(1)] = (8));

} else {
var statearr_14653_14668 = state_14643__$1;
(statearr_14653_14668[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14644 === (3))){
var inst_14641 = (state_14643[(2)]);
var state_14643__$1 = state_14643;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14643__$1,inst_14641);
} else {
if((state_val_14644 === (2))){
var state_14643__$1 = state_14643;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14643__$1,(4),ch);
} else {
if((state_val_14644 === (9))){
var inst_14630 = (state_14643[(9)]);
var inst_14623 = inst_14630;
var state_14643__$1 = (function (){var statearr_14654 = state_14643;
(statearr_14654[(7)] = inst_14623);

return statearr_14654;
})();
var statearr_14655_14669 = state_14643__$1;
(statearr_14655_14669[(2)] = null);

(statearr_14655_14669[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14644 === (5))){
var inst_14623 = (state_14643[(7)]);
var state_14643__$1 = state_14643;
var statearr_14656_14670 = state_14643__$1;
(statearr_14656_14670[(2)] = inst_14623);

(statearr_14656_14670[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14644 === (10))){
var inst_14637 = (state_14643[(2)]);
var state_14643__$1 = state_14643;
var statearr_14657_14671 = state_14643__$1;
(statearr_14657_14671[(2)] = inst_14637);

(statearr_14657_14671[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14644 === (8))){
var inst_14630 = (state_14643[(9)]);
var inst_14633 = cljs.core.deref.call(null,inst_14630);
var state_14643__$1 = state_14643;
var statearr_14658_14672 = state_14643__$1;
(statearr_14658_14672[(2)] = inst_14633);

(statearr_14658_14672[(1)] = (10));


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
});})(c__14170__auto__))
;
return ((function (switch__14082__auto__,c__14170__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__14083__auto__ = null;
var cljs$core$async$reduce_$_state_machine__14083__auto____0 = (function (){
var statearr_14659 = [null,null,null,null,null,null,null,null,null,null];
(statearr_14659[(0)] = cljs$core$async$reduce_$_state_machine__14083__auto__);

(statearr_14659[(1)] = (1));

return statearr_14659;
});
var cljs$core$async$reduce_$_state_machine__14083__auto____1 = (function (state_14643){
while(true){
var ret_value__14084__auto__ = (function (){try{while(true){
var result__14085__auto__ = switch__14082__auto__.call(null,state_14643);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14085__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14085__auto__;
}
break;
}
}catch (e14660){if((e14660 instanceof Object)){
var ex__14086__auto__ = e14660;
var statearr_14661_14673 = state_14643;
(statearr_14661_14673[(5)] = ex__14086__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14643);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14660;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14084__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14674 = state_14643;
state_14643 = G__14674;
continue;
} else {
return ret_value__14084__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__14083__auto__ = function(state_14643){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__14083__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__14083__auto____1.call(this,state_14643);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__14083__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__14083__auto____0;
cljs$core$async$reduce_$_state_machine__14083__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__14083__auto____1;
return cljs$core$async$reduce_$_state_machine__14083__auto__;
})()
;})(switch__14082__auto__,c__14170__auto__))
})();
var state__14172__auto__ = (function (){var statearr_14662 = f__14171__auto__.call(null);
(statearr_14662[(6)] = c__14170__auto__);

return statearr_14662;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14172__auto__);
});})(c__14170__auto__))
);

return c__14170__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__14676 = arguments.length;
switch (G__14676) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__14170__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14170__auto__){
return (function (){
var f__14171__auto__ = (function (){var switch__14082__auto__ = ((function (c__14170__auto__){
return (function (state_14701){
var state_val_14702 = (state_14701[(1)]);
if((state_val_14702 === (7))){
var inst_14683 = (state_14701[(2)]);
var state_14701__$1 = state_14701;
var statearr_14703_14724 = state_14701__$1;
(statearr_14703_14724[(2)] = inst_14683);

(statearr_14703_14724[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14702 === (1))){
var inst_14677 = cljs.core.seq.call(null,coll);
var inst_14678 = inst_14677;
var state_14701__$1 = (function (){var statearr_14704 = state_14701;
(statearr_14704[(7)] = inst_14678);

return statearr_14704;
})();
var statearr_14705_14725 = state_14701__$1;
(statearr_14705_14725[(2)] = null);

(statearr_14705_14725[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14702 === (4))){
var inst_14678 = (state_14701[(7)]);
var inst_14681 = cljs.core.first.call(null,inst_14678);
var state_14701__$1 = state_14701;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14701__$1,(7),ch,inst_14681);
} else {
if((state_val_14702 === (13))){
var inst_14695 = (state_14701[(2)]);
var state_14701__$1 = state_14701;
var statearr_14706_14726 = state_14701__$1;
(statearr_14706_14726[(2)] = inst_14695);

(statearr_14706_14726[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14702 === (6))){
var inst_14686 = (state_14701[(2)]);
var state_14701__$1 = state_14701;
if(cljs.core.truth_(inst_14686)){
var statearr_14707_14727 = state_14701__$1;
(statearr_14707_14727[(1)] = (8));

} else {
var statearr_14708_14728 = state_14701__$1;
(statearr_14708_14728[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14702 === (3))){
var inst_14699 = (state_14701[(2)]);
var state_14701__$1 = state_14701;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14701__$1,inst_14699);
} else {
if((state_val_14702 === (12))){
var state_14701__$1 = state_14701;
var statearr_14709_14729 = state_14701__$1;
(statearr_14709_14729[(2)] = null);

(statearr_14709_14729[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14702 === (2))){
var inst_14678 = (state_14701[(7)]);
var state_14701__$1 = state_14701;
if(cljs.core.truth_(inst_14678)){
var statearr_14710_14730 = state_14701__$1;
(statearr_14710_14730[(1)] = (4));

} else {
var statearr_14711_14731 = state_14701__$1;
(statearr_14711_14731[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14702 === (11))){
var inst_14692 = cljs.core.async.close_BANG_.call(null,ch);
var state_14701__$1 = state_14701;
var statearr_14712_14732 = state_14701__$1;
(statearr_14712_14732[(2)] = inst_14692);

(statearr_14712_14732[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14702 === (9))){
var state_14701__$1 = state_14701;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14713_14733 = state_14701__$1;
(statearr_14713_14733[(1)] = (11));

} else {
var statearr_14714_14734 = state_14701__$1;
(statearr_14714_14734[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14702 === (5))){
var inst_14678 = (state_14701[(7)]);
var state_14701__$1 = state_14701;
var statearr_14715_14735 = state_14701__$1;
(statearr_14715_14735[(2)] = inst_14678);

(statearr_14715_14735[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14702 === (10))){
var inst_14697 = (state_14701[(2)]);
var state_14701__$1 = state_14701;
var statearr_14716_14736 = state_14701__$1;
(statearr_14716_14736[(2)] = inst_14697);

(statearr_14716_14736[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14702 === (8))){
var inst_14678 = (state_14701[(7)]);
var inst_14688 = cljs.core.next.call(null,inst_14678);
var inst_14678__$1 = inst_14688;
var state_14701__$1 = (function (){var statearr_14717 = state_14701;
(statearr_14717[(7)] = inst_14678__$1);

return statearr_14717;
})();
var statearr_14718_14737 = state_14701__$1;
(statearr_14718_14737[(2)] = null);

(statearr_14718_14737[(1)] = (2));


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
});})(c__14170__auto__))
;
return ((function (switch__14082__auto__,c__14170__auto__){
return (function() {
var cljs$core$async$state_machine__14083__auto__ = null;
var cljs$core$async$state_machine__14083__auto____0 = (function (){
var statearr_14719 = [null,null,null,null,null,null,null,null];
(statearr_14719[(0)] = cljs$core$async$state_machine__14083__auto__);

(statearr_14719[(1)] = (1));

return statearr_14719;
});
var cljs$core$async$state_machine__14083__auto____1 = (function (state_14701){
while(true){
var ret_value__14084__auto__ = (function (){try{while(true){
var result__14085__auto__ = switch__14082__auto__.call(null,state_14701);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14085__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14085__auto__;
}
break;
}
}catch (e14720){if((e14720 instanceof Object)){
var ex__14086__auto__ = e14720;
var statearr_14721_14738 = state_14701;
(statearr_14721_14738[(5)] = ex__14086__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14701);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14720;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14084__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14739 = state_14701;
state_14701 = G__14739;
continue;
} else {
return ret_value__14084__auto__;
}
break;
}
});
cljs$core$async$state_machine__14083__auto__ = function(state_14701){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14083__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14083__auto____1.call(this,state_14701);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__14083__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14083__auto____0;
cljs$core$async$state_machine__14083__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14083__auto____1;
return cljs$core$async$state_machine__14083__auto__;
})()
;})(switch__14082__auto__,c__14170__auto__))
})();
var state__14172__auto__ = (function (){var statearr_14722 = f__14171__auto__.call(null);
(statearr_14722[(6)] = c__14170__auto__);

return statearr_14722;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14172__auto__);
});})(c__14170__auto__))
);

return c__14170__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__8328__auto__ = (((_ == null))?null:_);
var m__8329__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__8328__auto__)]);
if(!((m__8329__auto__ == null))){
return m__8329__auto__.call(null,_);
} else {
var m__8329__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__8329__auto____$1 == null))){
return m__8329__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__8328__auto__ = (((m == null))?null:m);
var m__8329__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__8328__auto__)]);
if(!((m__8329__auto__ == null))){
return m__8329__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__8329__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__8329__auto____$1 == null))){
return m__8329__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__8328__auto__ = (((m == null))?null:m);
var m__8329__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__8328__auto__)]);
if(!((m__8329__auto__ == null))){
return m__8329__auto__.call(null,m,ch);
} else {
var m__8329__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__8329__auto____$1 == null))){
return m__8329__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__8328__auto__ = (((m == null))?null:m);
var m__8329__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__8328__auto__)]);
if(!((m__8329__auto__ == null))){
return m__8329__auto__.call(null,m);
} else {
var m__8329__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__8329__auto____$1 == null))){
return m__8329__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async14740 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14740 = (function (ch,cs,meta14741){
this.ch = ch;
this.cs = cs;
this.meta14741 = meta14741;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async14740.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_14742,meta14741__$1){
var self__ = this;
var _14742__$1 = this;
return (new cljs.core.async.t_cljs$core$async14740(self__.ch,self__.cs,meta14741__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async14740.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_14742){
var self__ = this;
var _14742__$1 = this;
return self__.meta14741;
});})(cs))
;

cljs.core.async.t_cljs$core$async14740.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async14740.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async14740.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async14740.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async14740.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async14740.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async14740.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta14741","meta14741",-1910192781,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async14740.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14740.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14740";

cljs.core.async.t_cljs$core$async14740.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__8270__auto__,writer__8271__auto__,opt__8272__auto__){
return cljs.core._write.call(null,writer__8271__auto__,"cljs.core.async/t_cljs$core$async14740");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async14740 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async14740(ch__$1,cs__$1,meta14741){
return (new cljs.core.async.t_cljs$core$async14740(ch__$1,cs__$1,meta14741));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async14740(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__14170__auto___14962 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14170__auto___14962,cs,m,dchan,dctr,done){
return (function (){
var f__14171__auto__ = (function (){var switch__14082__auto__ = ((function (c__14170__auto___14962,cs,m,dchan,dctr,done){
return (function (state_14877){
var state_val_14878 = (state_14877[(1)]);
if((state_val_14878 === (7))){
var inst_14873 = (state_14877[(2)]);
var state_14877__$1 = state_14877;
var statearr_14879_14963 = state_14877__$1;
(statearr_14879_14963[(2)] = inst_14873);

(statearr_14879_14963[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14878 === (20))){
var inst_14776 = (state_14877[(7)]);
var inst_14788 = cljs.core.first.call(null,inst_14776);
var inst_14789 = cljs.core.nth.call(null,inst_14788,(0),null);
var inst_14790 = cljs.core.nth.call(null,inst_14788,(1),null);
var state_14877__$1 = (function (){var statearr_14880 = state_14877;
(statearr_14880[(8)] = inst_14789);

return statearr_14880;
})();
if(cljs.core.truth_(inst_14790)){
var statearr_14881_14964 = state_14877__$1;
(statearr_14881_14964[(1)] = (22));

} else {
var statearr_14882_14965 = state_14877__$1;
(statearr_14882_14965[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14878 === (27))){
var inst_14820 = (state_14877[(9)]);
var inst_14825 = (state_14877[(10)]);
var inst_14745 = (state_14877[(11)]);
var inst_14818 = (state_14877[(12)]);
var inst_14825__$1 = cljs.core._nth.call(null,inst_14818,inst_14820);
var inst_14826 = cljs.core.async.put_BANG_.call(null,inst_14825__$1,inst_14745,done);
var state_14877__$1 = (function (){var statearr_14883 = state_14877;
(statearr_14883[(10)] = inst_14825__$1);

return statearr_14883;
})();
if(cljs.core.truth_(inst_14826)){
var statearr_14884_14966 = state_14877__$1;
(statearr_14884_14966[(1)] = (30));

} else {
var statearr_14885_14967 = state_14877__$1;
(statearr_14885_14967[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14878 === (1))){
var state_14877__$1 = state_14877;
var statearr_14886_14968 = state_14877__$1;
(statearr_14886_14968[(2)] = null);

(statearr_14886_14968[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14878 === (24))){
var inst_14776 = (state_14877[(7)]);
var inst_14795 = (state_14877[(2)]);
var inst_14796 = cljs.core.next.call(null,inst_14776);
var inst_14754 = inst_14796;
var inst_14755 = null;
var inst_14756 = (0);
var inst_14757 = (0);
var state_14877__$1 = (function (){var statearr_14887 = state_14877;
(statearr_14887[(13)] = inst_14795);

(statearr_14887[(14)] = inst_14756);

(statearr_14887[(15)] = inst_14755);

(statearr_14887[(16)] = inst_14754);

(statearr_14887[(17)] = inst_14757);

return statearr_14887;
})();
var statearr_14888_14969 = state_14877__$1;
(statearr_14888_14969[(2)] = null);

(statearr_14888_14969[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14878 === (39))){
var state_14877__$1 = state_14877;
var statearr_14892_14970 = state_14877__$1;
(statearr_14892_14970[(2)] = null);

(statearr_14892_14970[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14878 === (4))){
var inst_14745 = (state_14877[(11)]);
var inst_14745__$1 = (state_14877[(2)]);
var inst_14746 = (inst_14745__$1 == null);
var state_14877__$1 = (function (){var statearr_14893 = state_14877;
(statearr_14893[(11)] = inst_14745__$1);

return statearr_14893;
})();
if(cljs.core.truth_(inst_14746)){
var statearr_14894_14971 = state_14877__$1;
(statearr_14894_14971[(1)] = (5));

} else {
var statearr_14895_14972 = state_14877__$1;
(statearr_14895_14972[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14878 === (15))){
var inst_14756 = (state_14877[(14)]);
var inst_14755 = (state_14877[(15)]);
var inst_14754 = (state_14877[(16)]);
var inst_14757 = (state_14877[(17)]);
var inst_14772 = (state_14877[(2)]);
var inst_14773 = (inst_14757 + (1));
var tmp14889 = inst_14756;
var tmp14890 = inst_14755;
var tmp14891 = inst_14754;
var inst_14754__$1 = tmp14891;
var inst_14755__$1 = tmp14890;
var inst_14756__$1 = tmp14889;
var inst_14757__$1 = inst_14773;
var state_14877__$1 = (function (){var statearr_14896 = state_14877;
(statearr_14896[(18)] = inst_14772);

(statearr_14896[(14)] = inst_14756__$1);

(statearr_14896[(15)] = inst_14755__$1);

(statearr_14896[(16)] = inst_14754__$1);

(statearr_14896[(17)] = inst_14757__$1);

return statearr_14896;
})();
var statearr_14897_14973 = state_14877__$1;
(statearr_14897_14973[(2)] = null);

(statearr_14897_14973[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14878 === (21))){
var inst_14799 = (state_14877[(2)]);
var state_14877__$1 = state_14877;
var statearr_14901_14974 = state_14877__$1;
(statearr_14901_14974[(2)] = inst_14799);

(statearr_14901_14974[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14878 === (31))){
var inst_14825 = (state_14877[(10)]);
var inst_14829 = done.call(null,null);
var inst_14830 = cljs.core.async.untap_STAR_.call(null,m,inst_14825);
var state_14877__$1 = (function (){var statearr_14902 = state_14877;
(statearr_14902[(19)] = inst_14829);

return statearr_14902;
})();
var statearr_14903_14975 = state_14877__$1;
(statearr_14903_14975[(2)] = inst_14830);

(statearr_14903_14975[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14878 === (32))){
var inst_14820 = (state_14877[(9)]);
var inst_14819 = (state_14877[(20)]);
var inst_14817 = (state_14877[(21)]);
var inst_14818 = (state_14877[(12)]);
var inst_14832 = (state_14877[(2)]);
var inst_14833 = (inst_14820 + (1));
var tmp14898 = inst_14819;
var tmp14899 = inst_14817;
var tmp14900 = inst_14818;
var inst_14817__$1 = tmp14899;
var inst_14818__$1 = tmp14900;
var inst_14819__$1 = tmp14898;
var inst_14820__$1 = inst_14833;
var state_14877__$1 = (function (){var statearr_14904 = state_14877;
(statearr_14904[(9)] = inst_14820__$1);

(statearr_14904[(20)] = inst_14819__$1);

(statearr_14904[(21)] = inst_14817__$1);

(statearr_14904[(22)] = inst_14832);

(statearr_14904[(12)] = inst_14818__$1);

return statearr_14904;
})();
var statearr_14905_14976 = state_14877__$1;
(statearr_14905_14976[(2)] = null);

(statearr_14905_14976[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14878 === (40))){
var inst_14845 = (state_14877[(23)]);
var inst_14849 = done.call(null,null);
var inst_14850 = cljs.core.async.untap_STAR_.call(null,m,inst_14845);
var state_14877__$1 = (function (){var statearr_14906 = state_14877;
(statearr_14906[(24)] = inst_14849);

return statearr_14906;
})();
var statearr_14907_14977 = state_14877__$1;
(statearr_14907_14977[(2)] = inst_14850);

(statearr_14907_14977[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14878 === (33))){
var inst_14836 = (state_14877[(25)]);
var inst_14838 = cljs.core.chunked_seq_QMARK_.call(null,inst_14836);
var state_14877__$1 = state_14877;
if(inst_14838){
var statearr_14908_14978 = state_14877__$1;
(statearr_14908_14978[(1)] = (36));

} else {
var statearr_14909_14979 = state_14877__$1;
(statearr_14909_14979[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14878 === (13))){
var inst_14766 = (state_14877[(26)]);
var inst_14769 = cljs.core.async.close_BANG_.call(null,inst_14766);
var state_14877__$1 = state_14877;
var statearr_14910_14980 = state_14877__$1;
(statearr_14910_14980[(2)] = inst_14769);

(statearr_14910_14980[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14878 === (22))){
var inst_14789 = (state_14877[(8)]);
var inst_14792 = cljs.core.async.close_BANG_.call(null,inst_14789);
var state_14877__$1 = state_14877;
var statearr_14911_14981 = state_14877__$1;
(statearr_14911_14981[(2)] = inst_14792);

(statearr_14911_14981[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14878 === (36))){
var inst_14836 = (state_14877[(25)]);
var inst_14840 = cljs.core.chunk_first.call(null,inst_14836);
var inst_14841 = cljs.core.chunk_rest.call(null,inst_14836);
var inst_14842 = cljs.core.count.call(null,inst_14840);
var inst_14817 = inst_14841;
var inst_14818 = inst_14840;
var inst_14819 = inst_14842;
var inst_14820 = (0);
var state_14877__$1 = (function (){var statearr_14912 = state_14877;
(statearr_14912[(9)] = inst_14820);

(statearr_14912[(20)] = inst_14819);

(statearr_14912[(21)] = inst_14817);

(statearr_14912[(12)] = inst_14818);

return statearr_14912;
})();
var statearr_14913_14982 = state_14877__$1;
(statearr_14913_14982[(2)] = null);

(statearr_14913_14982[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14878 === (41))){
var inst_14836 = (state_14877[(25)]);
var inst_14852 = (state_14877[(2)]);
var inst_14853 = cljs.core.next.call(null,inst_14836);
var inst_14817 = inst_14853;
var inst_14818 = null;
var inst_14819 = (0);
var inst_14820 = (0);
var state_14877__$1 = (function (){var statearr_14914 = state_14877;
(statearr_14914[(9)] = inst_14820);

(statearr_14914[(20)] = inst_14819);

(statearr_14914[(21)] = inst_14817);

(statearr_14914[(27)] = inst_14852);

(statearr_14914[(12)] = inst_14818);

return statearr_14914;
})();
var statearr_14915_14983 = state_14877__$1;
(statearr_14915_14983[(2)] = null);

(statearr_14915_14983[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14878 === (43))){
var state_14877__$1 = state_14877;
var statearr_14916_14984 = state_14877__$1;
(statearr_14916_14984[(2)] = null);

(statearr_14916_14984[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14878 === (29))){
var inst_14861 = (state_14877[(2)]);
var state_14877__$1 = state_14877;
var statearr_14917_14985 = state_14877__$1;
(statearr_14917_14985[(2)] = inst_14861);

(statearr_14917_14985[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14878 === (44))){
var inst_14870 = (state_14877[(2)]);
var state_14877__$1 = (function (){var statearr_14918 = state_14877;
(statearr_14918[(28)] = inst_14870);

return statearr_14918;
})();
var statearr_14919_14986 = state_14877__$1;
(statearr_14919_14986[(2)] = null);

(statearr_14919_14986[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14878 === (6))){
var inst_14809 = (state_14877[(29)]);
var inst_14808 = cljs.core.deref.call(null,cs);
var inst_14809__$1 = cljs.core.keys.call(null,inst_14808);
var inst_14810 = cljs.core.count.call(null,inst_14809__$1);
var inst_14811 = cljs.core.reset_BANG_.call(null,dctr,inst_14810);
var inst_14816 = cljs.core.seq.call(null,inst_14809__$1);
var inst_14817 = inst_14816;
var inst_14818 = null;
var inst_14819 = (0);
var inst_14820 = (0);
var state_14877__$1 = (function (){var statearr_14920 = state_14877;
(statearr_14920[(9)] = inst_14820);

(statearr_14920[(20)] = inst_14819);

(statearr_14920[(29)] = inst_14809__$1);

(statearr_14920[(21)] = inst_14817);

(statearr_14920[(30)] = inst_14811);

(statearr_14920[(12)] = inst_14818);

return statearr_14920;
})();
var statearr_14921_14987 = state_14877__$1;
(statearr_14921_14987[(2)] = null);

(statearr_14921_14987[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14878 === (28))){
var inst_14836 = (state_14877[(25)]);
var inst_14817 = (state_14877[(21)]);
var inst_14836__$1 = cljs.core.seq.call(null,inst_14817);
var state_14877__$1 = (function (){var statearr_14922 = state_14877;
(statearr_14922[(25)] = inst_14836__$1);

return statearr_14922;
})();
if(inst_14836__$1){
var statearr_14923_14988 = state_14877__$1;
(statearr_14923_14988[(1)] = (33));

} else {
var statearr_14924_14989 = state_14877__$1;
(statearr_14924_14989[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14878 === (25))){
var inst_14820 = (state_14877[(9)]);
var inst_14819 = (state_14877[(20)]);
var inst_14822 = (inst_14820 < inst_14819);
var inst_14823 = inst_14822;
var state_14877__$1 = state_14877;
if(cljs.core.truth_(inst_14823)){
var statearr_14925_14990 = state_14877__$1;
(statearr_14925_14990[(1)] = (27));

} else {
var statearr_14926_14991 = state_14877__$1;
(statearr_14926_14991[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14878 === (34))){
var state_14877__$1 = state_14877;
var statearr_14927_14992 = state_14877__$1;
(statearr_14927_14992[(2)] = null);

(statearr_14927_14992[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14878 === (17))){
var state_14877__$1 = state_14877;
var statearr_14928_14993 = state_14877__$1;
(statearr_14928_14993[(2)] = null);

(statearr_14928_14993[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14878 === (3))){
var inst_14875 = (state_14877[(2)]);
var state_14877__$1 = state_14877;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14877__$1,inst_14875);
} else {
if((state_val_14878 === (12))){
var inst_14804 = (state_14877[(2)]);
var state_14877__$1 = state_14877;
var statearr_14929_14994 = state_14877__$1;
(statearr_14929_14994[(2)] = inst_14804);

(statearr_14929_14994[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14878 === (2))){
var state_14877__$1 = state_14877;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14877__$1,(4),ch);
} else {
if((state_val_14878 === (23))){
var state_14877__$1 = state_14877;
var statearr_14930_14995 = state_14877__$1;
(statearr_14930_14995[(2)] = null);

(statearr_14930_14995[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14878 === (35))){
var inst_14859 = (state_14877[(2)]);
var state_14877__$1 = state_14877;
var statearr_14931_14996 = state_14877__$1;
(statearr_14931_14996[(2)] = inst_14859);

(statearr_14931_14996[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14878 === (19))){
var inst_14776 = (state_14877[(7)]);
var inst_14780 = cljs.core.chunk_first.call(null,inst_14776);
var inst_14781 = cljs.core.chunk_rest.call(null,inst_14776);
var inst_14782 = cljs.core.count.call(null,inst_14780);
var inst_14754 = inst_14781;
var inst_14755 = inst_14780;
var inst_14756 = inst_14782;
var inst_14757 = (0);
var state_14877__$1 = (function (){var statearr_14932 = state_14877;
(statearr_14932[(14)] = inst_14756);

(statearr_14932[(15)] = inst_14755);

(statearr_14932[(16)] = inst_14754);

(statearr_14932[(17)] = inst_14757);

return statearr_14932;
})();
var statearr_14933_14997 = state_14877__$1;
(statearr_14933_14997[(2)] = null);

(statearr_14933_14997[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14878 === (11))){
var inst_14776 = (state_14877[(7)]);
var inst_14754 = (state_14877[(16)]);
var inst_14776__$1 = cljs.core.seq.call(null,inst_14754);
var state_14877__$1 = (function (){var statearr_14934 = state_14877;
(statearr_14934[(7)] = inst_14776__$1);

return statearr_14934;
})();
if(inst_14776__$1){
var statearr_14935_14998 = state_14877__$1;
(statearr_14935_14998[(1)] = (16));

} else {
var statearr_14936_14999 = state_14877__$1;
(statearr_14936_14999[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14878 === (9))){
var inst_14806 = (state_14877[(2)]);
var state_14877__$1 = state_14877;
var statearr_14937_15000 = state_14877__$1;
(statearr_14937_15000[(2)] = inst_14806);

(statearr_14937_15000[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14878 === (5))){
var inst_14752 = cljs.core.deref.call(null,cs);
var inst_14753 = cljs.core.seq.call(null,inst_14752);
var inst_14754 = inst_14753;
var inst_14755 = null;
var inst_14756 = (0);
var inst_14757 = (0);
var state_14877__$1 = (function (){var statearr_14938 = state_14877;
(statearr_14938[(14)] = inst_14756);

(statearr_14938[(15)] = inst_14755);

(statearr_14938[(16)] = inst_14754);

(statearr_14938[(17)] = inst_14757);

return statearr_14938;
})();
var statearr_14939_15001 = state_14877__$1;
(statearr_14939_15001[(2)] = null);

(statearr_14939_15001[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14878 === (14))){
var state_14877__$1 = state_14877;
var statearr_14940_15002 = state_14877__$1;
(statearr_14940_15002[(2)] = null);

(statearr_14940_15002[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14878 === (45))){
var inst_14867 = (state_14877[(2)]);
var state_14877__$1 = state_14877;
var statearr_14941_15003 = state_14877__$1;
(statearr_14941_15003[(2)] = inst_14867);

(statearr_14941_15003[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14878 === (26))){
var inst_14809 = (state_14877[(29)]);
var inst_14863 = (state_14877[(2)]);
var inst_14864 = cljs.core.seq.call(null,inst_14809);
var state_14877__$1 = (function (){var statearr_14942 = state_14877;
(statearr_14942[(31)] = inst_14863);

return statearr_14942;
})();
if(inst_14864){
var statearr_14943_15004 = state_14877__$1;
(statearr_14943_15004[(1)] = (42));

} else {
var statearr_14944_15005 = state_14877__$1;
(statearr_14944_15005[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14878 === (16))){
var inst_14776 = (state_14877[(7)]);
var inst_14778 = cljs.core.chunked_seq_QMARK_.call(null,inst_14776);
var state_14877__$1 = state_14877;
if(inst_14778){
var statearr_14945_15006 = state_14877__$1;
(statearr_14945_15006[(1)] = (19));

} else {
var statearr_14946_15007 = state_14877__$1;
(statearr_14946_15007[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14878 === (38))){
var inst_14856 = (state_14877[(2)]);
var state_14877__$1 = state_14877;
var statearr_14947_15008 = state_14877__$1;
(statearr_14947_15008[(2)] = inst_14856);

(statearr_14947_15008[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14878 === (30))){
var state_14877__$1 = state_14877;
var statearr_14948_15009 = state_14877__$1;
(statearr_14948_15009[(2)] = null);

(statearr_14948_15009[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14878 === (10))){
var inst_14755 = (state_14877[(15)]);
var inst_14757 = (state_14877[(17)]);
var inst_14765 = cljs.core._nth.call(null,inst_14755,inst_14757);
var inst_14766 = cljs.core.nth.call(null,inst_14765,(0),null);
var inst_14767 = cljs.core.nth.call(null,inst_14765,(1),null);
var state_14877__$1 = (function (){var statearr_14949 = state_14877;
(statearr_14949[(26)] = inst_14766);

return statearr_14949;
})();
if(cljs.core.truth_(inst_14767)){
var statearr_14950_15010 = state_14877__$1;
(statearr_14950_15010[(1)] = (13));

} else {
var statearr_14951_15011 = state_14877__$1;
(statearr_14951_15011[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14878 === (18))){
var inst_14802 = (state_14877[(2)]);
var state_14877__$1 = state_14877;
var statearr_14952_15012 = state_14877__$1;
(statearr_14952_15012[(2)] = inst_14802);

(statearr_14952_15012[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14878 === (42))){
var state_14877__$1 = state_14877;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14877__$1,(45),dchan);
} else {
if((state_val_14878 === (37))){
var inst_14836 = (state_14877[(25)]);
var inst_14845 = (state_14877[(23)]);
var inst_14745 = (state_14877[(11)]);
var inst_14845__$1 = cljs.core.first.call(null,inst_14836);
var inst_14846 = cljs.core.async.put_BANG_.call(null,inst_14845__$1,inst_14745,done);
var state_14877__$1 = (function (){var statearr_14953 = state_14877;
(statearr_14953[(23)] = inst_14845__$1);

return statearr_14953;
})();
if(cljs.core.truth_(inst_14846)){
var statearr_14954_15013 = state_14877__$1;
(statearr_14954_15013[(1)] = (39));

} else {
var statearr_14955_15014 = state_14877__$1;
(statearr_14955_15014[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14878 === (8))){
var inst_14756 = (state_14877[(14)]);
var inst_14757 = (state_14877[(17)]);
var inst_14759 = (inst_14757 < inst_14756);
var inst_14760 = inst_14759;
var state_14877__$1 = state_14877;
if(cljs.core.truth_(inst_14760)){
var statearr_14956_15015 = state_14877__$1;
(statearr_14956_15015[(1)] = (10));

} else {
var statearr_14957_15016 = state_14877__$1;
(statearr_14957_15016[(1)] = (11));

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
}
}
}
}
}
}
}
}
}
});})(c__14170__auto___14962,cs,m,dchan,dctr,done))
;
return ((function (switch__14082__auto__,c__14170__auto___14962,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__14083__auto__ = null;
var cljs$core$async$mult_$_state_machine__14083__auto____0 = (function (){
var statearr_14958 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14958[(0)] = cljs$core$async$mult_$_state_machine__14083__auto__);

(statearr_14958[(1)] = (1));

return statearr_14958;
});
var cljs$core$async$mult_$_state_machine__14083__auto____1 = (function (state_14877){
while(true){
var ret_value__14084__auto__ = (function (){try{while(true){
var result__14085__auto__ = switch__14082__auto__.call(null,state_14877);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14085__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14085__auto__;
}
break;
}
}catch (e14959){if((e14959 instanceof Object)){
var ex__14086__auto__ = e14959;
var statearr_14960_15017 = state_14877;
(statearr_14960_15017[(5)] = ex__14086__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14877);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14959;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14084__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15018 = state_14877;
state_14877 = G__15018;
continue;
} else {
return ret_value__14084__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__14083__auto__ = function(state_14877){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__14083__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__14083__auto____1.call(this,state_14877);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__14083__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__14083__auto____0;
cljs$core$async$mult_$_state_machine__14083__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__14083__auto____1;
return cljs$core$async$mult_$_state_machine__14083__auto__;
})()
;})(switch__14082__auto__,c__14170__auto___14962,cs,m,dchan,dctr,done))
})();
var state__14172__auto__ = (function (){var statearr_14961 = f__14171__auto__.call(null);
(statearr_14961[(6)] = c__14170__auto___14962);

return statearr_14961;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14172__auto__);
});})(c__14170__auto___14962,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__15020 = arguments.length;
switch (G__15020) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__8328__auto__ = (((m == null))?null:m);
var m__8329__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__8328__auto__)]);
if(!((m__8329__auto__ == null))){
return m__8329__auto__.call(null,m,ch);
} else {
var m__8329__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__8329__auto____$1 == null))){
return m__8329__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__8328__auto__ = (((m == null))?null:m);
var m__8329__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__8328__auto__)]);
if(!((m__8329__auto__ == null))){
return m__8329__auto__.call(null,m,ch);
} else {
var m__8329__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__8329__auto____$1 == null))){
return m__8329__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__8328__auto__ = (((m == null))?null:m);
var m__8329__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__8328__auto__)]);
if(!((m__8329__auto__ == null))){
return m__8329__auto__.call(null,m);
} else {
var m__8329__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__8329__auto____$1 == null))){
return m__8329__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__8328__auto__ = (((m == null))?null:m);
var m__8329__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__8328__auto__)]);
if(!((m__8329__auto__ == null))){
return m__8329__auto__.call(null,m,state_map);
} else {
var m__8329__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__8329__auto____$1 == null))){
return m__8329__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__8328__auto__ = (((m == null))?null:m);
var m__8329__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__8328__auto__)]);
if(!((m__8329__auto__ == null))){
return m__8329__auto__.call(null,m,mode);
} else {
var m__8329__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__8329__auto____$1 == null))){
return m__8329__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__8821__auto__ = [];
var len__8814__auto___15032 = arguments.length;
var i__8815__auto___15033 = (0);
while(true){
if((i__8815__auto___15033 < len__8814__auto___15032)){
args__8821__auto__.push((arguments[i__8815__auto___15033]));

var G__15034 = (i__8815__auto___15033 + (1));
i__8815__auto___15033 = G__15034;
continue;
} else {
}
break;
}

var argseq__8822__auto__ = ((((3) < args__8821__auto__.length))?(new cljs.core.IndexedSeq(args__8821__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8822__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__15026){
var map__15027 = p__15026;
var map__15027__$1 = ((((!((map__15027 == null)))?((((map__15027.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15027.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15027):map__15027);
var opts = map__15027__$1;
var statearr_15029_15035 = state;
(statearr_15029_15035[(1)] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__15027,map__15027__$1,opts){
return (function (val){
var statearr_15030_15036 = state;
(statearr_15030_15036[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__15027,map__15027__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_15031_15037 = state;
(statearr_15031_15037[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq15022){
var G__15023 = cljs.core.first.call(null,seq15022);
var seq15022__$1 = cljs.core.next.call(null,seq15022);
var G__15024 = cljs.core.first.call(null,seq15022__$1);
var seq15022__$2 = cljs.core.next.call(null,seq15022__$1);
var G__15025 = cljs.core.first.call(null,seq15022__$2);
var seq15022__$3 = cljs.core.next.call(null,seq15022__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15023,G__15024,G__15025,seq15022__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async15038 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15038 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta15039){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta15039 = meta15039;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async15038.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_15040,meta15039__$1){
var self__ = this;
var _15040__$1 = this;
return (new cljs.core.async.t_cljs$core$async15038(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta15039__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15038.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_15040){
var self__ = this;
var _15040__$1 = this;
return self__.meta15039;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15038.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15038.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15038.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15038.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15038.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15038.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15038.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15038.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15038.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta15039","meta15039",-416420451,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15038.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15038.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15038";

cljs.core.async.t_cljs$core$async15038.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__8270__auto__,writer__8271__auto__,opt__8272__auto__){
return cljs.core._write.call(null,writer__8271__auto__,"cljs.core.async/t_cljs$core$async15038");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async15038 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async15038(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta15039){
return (new cljs.core.async.t_cljs$core$async15038(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta15039));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async15038(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__14170__auto___15202 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14170__auto___15202,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__14171__auto__ = (function (){var switch__14082__auto__ = ((function (c__14170__auto___15202,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_15142){
var state_val_15143 = (state_15142[(1)]);
if((state_val_15143 === (7))){
var inst_15057 = (state_15142[(2)]);
var state_15142__$1 = state_15142;
var statearr_15144_15203 = state_15142__$1;
(statearr_15144_15203[(2)] = inst_15057);

(statearr_15144_15203[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15143 === (20))){
var inst_15069 = (state_15142[(7)]);
var state_15142__$1 = state_15142;
var statearr_15145_15204 = state_15142__$1;
(statearr_15145_15204[(2)] = inst_15069);

(statearr_15145_15204[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15143 === (27))){
var state_15142__$1 = state_15142;
var statearr_15146_15205 = state_15142__$1;
(statearr_15146_15205[(2)] = null);

(statearr_15146_15205[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15143 === (1))){
var inst_15044 = (state_15142[(8)]);
var inst_15044__$1 = calc_state.call(null);
var inst_15046 = (inst_15044__$1 == null);
var inst_15047 = cljs.core.not.call(null,inst_15046);
var state_15142__$1 = (function (){var statearr_15147 = state_15142;
(statearr_15147[(8)] = inst_15044__$1);

return statearr_15147;
})();
if(inst_15047){
var statearr_15148_15206 = state_15142__$1;
(statearr_15148_15206[(1)] = (2));

} else {
var statearr_15149_15207 = state_15142__$1;
(statearr_15149_15207[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15143 === (24))){
var inst_15102 = (state_15142[(9)]);
var inst_15093 = (state_15142[(10)]);
var inst_15116 = (state_15142[(11)]);
var inst_15116__$1 = inst_15093.call(null,inst_15102);
var state_15142__$1 = (function (){var statearr_15150 = state_15142;
(statearr_15150[(11)] = inst_15116__$1);

return statearr_15150;
})();
if(cljs.core.truth_(inst_15116__$1)){
var statearr_15151_15208 = state_15142__$1;
(statearr_15151_15208[(1)] = (29));

} else {
var statearr_15152_15209 = state_15142__$1;
(statearr_15152_15209[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15143 === (4))){
var inst_15060 = (state_15142[(2)]);
var state_15142__$1 = state_15142;
if(cljs.core.truth_(inst_15060)){
var statearr_15153_15210 = state_15142__$1;
(statearr_15153_15210[(1)] = (8));

} else {
var statearr_15154_15211 = state_15142__$1;
(statearr_15154_15211[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15143 === (15))){
var inst_15087 = (state_15142[(2)]);
var state_15142__$1 = state_15142;
if(cljs.core.truth_(inst_15087)){
var statearr_15155_15212 = state_15142__$1;
(statearr_15155_15212[(1)] = (19));

} else {
var statearr_15156_15213 = state_15142__$1;
(statearr_15156_15213[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15143 === (21))){
var inst_15092 = (state_15142[(12)]);
var inst_15092__$1 = (state_15142[(2)]);
var inst_15093 = cljs.core.get.call(null,inst_15092__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_15094 = cljs.core.get.call(null,inst_15092__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_15095 = cljs.core.get.call(null,inst_15092__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_15142__$1 = (function (){var statearr_15157 = state_15142;
(statearr_15157[(12)] = inst_15092__$1);

(statearr_15157[(10)] = inst_15093);

(statearr_15157[(13)] = inst_15094);

return statearr_15157;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_15142__$1,(22),inst_15095);
} else {
if((state_val_15143 === (31))){
var inst_15124 = (state_15142[(2)]);
var state_15142__$1 = state_15142;
if(cljs.core.truth_(inst_15124)){
var statearr_15158_15214 = state_15142__$1;
(statearr_15158_15214[(1)] = (32));

} else {
var statearr_15159_15215 = state_15142__$1;
(statearr_15159_15215[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15143 === (32))){
var inst_15101 = (state_15142[(14)]);
var state_15142__$1 = state_15142;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15142__$1,(35),out,inst_15101);
} else {
if((state_val_15143 === (33))){
var inst_15092 = (state_15142[(12)]);
var inst_15069 = inst_15092;
var state_15142__$1 = (function (){var statearr_15160 = state_15142;
(statearr_15160[(7)] = inst_15069);

return statearr_15160;
})();
var statearr_15161_15216 = state_15142__$1;
(statearr_15161_15216[(2)] = null);

(statearr_15161_15216[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15143 === (13))){
var inst_15069 = (state_15142[(7)]);
var inst_15076 = inst_15069.cljs$lang$protocol_mask$partition0$;
var inst_15077 = (inst_15076 & (64));
var inst_15078 = inst_15069.cljs$core$ISeq$;
var inst_15079 = (cljs.core.PROTOCOL_SENTINEL === inst_15078);
var inst_15080 = (inst_15077) || (inst_15079);
var state_15142__$1 = state_15142;
if(cljs.core.truth_(inst_15080)){
var statearr_15162_15217 = state_15142__$1;
(statearr_15162_15217[(1)] = (16));

} else {
var statearr_15163_15218 = state_15142__$1;
(statearr_15163_15218[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15143 === (22))){
var inst_15102 = (state_15142[(9)]);
var inst_15101 = (state_15142[(14)]);
var inst_15100 = (state_15142[(2)]);
var inst_15101__$1 = cljs.core.nth.call(null,inst_15100,(0),null);
var inst_15102__$1 = cljs.core.nth.call(null,inst_15100,(1),null);
var inst_15103 = (inst_15101__$1 == null);
var inst_15104 = cljs.core._EQ_.call(null,inst_15102__$1,change);
var inst_15105 = (inst_15103) || (inst_15104);
var state_15142__$1 = (function (){var statearr_15164 = state_15142;
(statearr_15164[(9)] = inst_15102__$1);

(statearr_15164[(14)] = inst_15101__$1);

return statearr_15164;
})();
if(cljs.core.truth_(inst_15105)){
var statearr_15165_15219 = state_15142__$1;
(statearr_15165_15219[(1)] = (23));

} else {
var statearr_15166_15220 = state_15142__$1;
(statearr_15166_15220[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15143 === (36))){
var inst_15092 = (state_15142[(12)]);
var inst_15069 = inst_15092;
var state_15142__$1 = (function (){var statearr_15167 = state_15142;
(statearr_15167[(7)] = inst_15069);

return statearr_15167;
})();
var statearr_15168_15221 = state_15142__$1;
(statearr_15168_15221[(2)] = null);

(statearr_15168_15221[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15143 === (29))){
var inst_15116 = (state_15142[(11)]);
var state_15142__$1 = state_15142;
var statearr_15169_15222 = state_15142__$1;
(statearr_15169_15222[(2)] = inst_15116);

(statearr_15169_15222[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15143 === (6))){
var state_15142__$1 = state_15142;
var statearr_15170_15223 = state_15142__$1;
(statearr_15170_15223[(2)] = false);

(statearr_15170_15223[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15143 === (28))){
var inst_15112 = (state_15142[(2)]);
var inst_15113 = calc_state.call(null);
var inst_15069 = inst_15113;
var state_15142__$1 = (function (){var statearr_15171 = state_15142;
(statearr_15171[(7)] = inst_15069);

(statearr_15171[(15)] = inst_15112);

return statearr_15171;
})();
var statearr_15172_15224 = state_15142__$1;
(statearr_15172_15224[(2)] = null);

(statearr_15172_15224[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15143 === (25))){
var inst_15138 = (state_15142[(2)]);
var state_15142__$1 = state_15142;
var statearr_15173_15225 = state_15142__$1;
(statearr_15173_15225[(2)] = inst_15138);

(statearr_15173_15225[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15143 === (34))){
var inst_15136 = (state_15142[(2)]);
var state_15142__$1 = state_15142;
var statearr_15174_15226 = state_15142__$1;
(statearr_15174_15226[(2)] = inst_15136);

(statearr_15174_15226[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15143 === (17))){
var state_15142__$1 = state_15142;
var statearr_15175_15227 = state_15142__$1;
(statearr_15175_15227[(2)] = false);

(statearr_15175_15227[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15143 === (3))){
var state_15142__$1 = state_15142;
var statearr_15176_15228 = state_15142__$1;
(statearr_15176_15228[(2)] = false);

(statearr_15176_15228[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15143 === (12))){
var inst_15140 = (state_15142[(2)]);
var state_15142__$1 = state_15142;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15142__$1,inst_15140);
} else {
if((state_val_15143 === (2))){
var inst_15044 = (state_15142[(8)]);
var inst_15049 = inst_15044.cljs$lang$protocol_mask$partition0$;
var inst_15050 = (inst_15049 & (64));
var inst_15051 = inst_15044.cljs$core$ISeq$;
var inst_15052 = (cljs.core.PROTOCOL_SENTINEL === inst_15051);
var inst_15053 = (inst_15050) || (inst_15052);
var state_15142__$1 = state_15142;
if(cljs.core.truth_(inst_15053)){
var statearr_15177_15229 = state_15142__$1;
(statearr_15177_15229[(1)] = (5));

} else {
var statearr_15178_15230 = state_15142__$1;
(statearr_15178_15230[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15143 === (23))){
var inst_15101 = (state_15142[(14)]);
var inst_15107 = (inst_15101 == null);
var state_15142__$1 = state_15142;
if(cljs.core.truth_(inst_15107)){
var statearr_15179_15231 = state_15142__$1;
(statearr_15179_15231[(1)] = (26));

} else {
var statearr_15180_15232 = state_15142__$1;
(statearr_15180_15232[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15143 === (35))){
var inst_15127 = (state_15142[(2)]);
var state_15142__$1 = state_15142;
if(cljs.core.truth_(inst_15127)){
var statearr_15181_15233 = state_15142__$1;
(statearr_15181_15233[(1)] = (36));

} else {
var statearr_15182_15234 = state_15142__$1;
(statearr_15182_15234[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15143 === (19))){
var inst_15069 = (state_15142[(7)]);
var inst_15089 = cljs.core.apply.call(null,cljs.core.hash_map,inst_15069);
var state_15142__$1 = state_15142;
var statearr_15183_15235 = state_15142__$1;
(statearr_15183_15235[(2)] = inst_15089);

(statearr_15183_15235[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15143 === (11))){
var inst_15069 = (state_15142[(7)]);
var inst_15073 = (inst_15069 == null);
var inst_15074 = cljs.core.not.call(null,inst_15073);
var state_15142__$1 = state_15142;
if(inst_15074){
var statearr_15184_15236 = state_15142__$1;
(statearr_15184_15236[(1)] = (13));

} else {
var statearr_15185_15237 = state_15142__$1;
(statearr_15185_15237[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15143 === (9))){
var inst_15044 = (state_15142[(8)]);
var state_15142__$1 = state_15142;
var statearr_15186_15238 = state_15142__$1;
(statearr_15186_15238[(2)] = inst_15044);

(statearr_15186_15238[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15143 === (5))){
var state_15142__$1 = state_15142;
var statearr_15187_15239 = state_15142__$1;
(statearr_15187_15239[(2)] = true);

(statearr_15187_15239[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15143 === (14))){
var state_15142__$1 = state_15142;
var statearr_15188_15240 = state_15142__$1;
(statearr_15188_15240[(2)] = false);

(statearr_15188_15240[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15143 === (26))){
var inst_15102 = (state_15142[(9)]);
var inst_15109 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_15102);
var state_15142__$1 = state_15142;
var statearr_15189_15241 = state_15142__$1;
(statearr_15189_15241[(2)] = inst_15109);

(statearr_15189_15241[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15143 === (16))){
var state_15142__$1 = state_15142;
var statearr_15190_15242 = state_15142__$1;
(statearr_15190_15242[(2)] = true);

(statearr_15190_15242[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15143 === (38))){
var inst_15132 = (state_15142[(2)]);
var state_15142__$1 = state_15142;
var statearr_15191_15243 = state_15142__$1;
(statearr_15191_15243[(2)] = inst_15132);

(statearr_15191_15243[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15143 === (30))){
var inst_15102 = (state_15142[(9)]);
var inst_15093 = (state_15142[(10)]);
var inst_15094 = (state_15142[(13)]);
var inst_15119 = cljs.core.empty_QMARK_.call(null,inst_15093);
var inst_15120 = inst_15094.call(null,inst_15102);
var inst_15121 = cljs.core.not.call(null,inst_15120);
var inst_15122 = (inst_15119) && (inst_15121);
var state_15142__$1 = state_15142;
var statearr_15192_15244 = state_15142__$1;
(statearr_15192_15244[(2)] = inst_15122);

(statearr_15192_15244[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15143 === (10))){
var inst_15044 = (state_15142[(8)]);
var inst_15065 = (state_15142[(2)]);
var inst_15066 = cljs.core.get.call(null,inst_15065,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_15067 = cljs.core.get.call(null,inst_15065,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_15068 = cljs.core.get.call(null,inst_15065,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_15069 = inst_15044;
var state_15142__$1 = (function (){var statearr_15193 = state_15142;
(statearr_15193[(16)] = inst_15068);

(statearr_15193[(7)] = inst_15069);

(statearr_15193[(17)] = inst_15067);

(statearr_15193[(18)] = inst_15066);

return statearr_15193;
})();
var statearr_15194_15245 = state_15142__$1;
(statearr_15194_15245[(2)] = null);

(statearr_15194_15245[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15143 === (18))){
var inst_15084 = (state_15142[(2)]);
var state_15142__$1 = state_15142;
var statearr_15195_15246 = state_15142__$1;
(statearr_15195_15246[(2)] = inst_15084);

(statearr_15195_15246[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15143 === (37))){
var state_15142__$1 = state_15142;
var statearr_15196_15247 = state_15142__$1;
(statearr_15196_15247[(2)] = null);

(statearr_15196_15247[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15143 === (8))){
var inst_15044 = (state_15142[(8)]);
var inst_15062 = cljs.core.apply.call(null,cljs.core.hash_map,inst_15044);
var state_15142__$1 = state_15142;
var statearr_15197_15248 = state_15142__$1;
(statearr_15197_15248[(2)] = inst_15062);

(statearr_15197_15248[(1)] = (10));


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
}
}
});})(c__14170__auto___15202,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__14082__auto__,c__14170__auto___15202,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__14083__auto__ = null;
var cljs$core$async$mix_$_state_machine__14083__auto____0 = (function (){
var statearr_15198 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15198[(0)] = cljs$core$async$mix_$_state_machine__14083__auto__);

(statearr_15198[(1)] = (1));

return statearr_15198;
});
var cljs$core$async$mix_$_state_machine__14083__auto____1 = (function (state_15142){
while(true){
var ret_value__14084__auto__ = (function (){try{while(true){
var result__14085__auto__ = switch__14082__auto__.call(null,state_15142);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14085__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14085__auto__;
}
break;
}
}catch (e15199){if((e15199 instanceof Object)){
var ex__14086__auto__ = e15199;
var statearr_15200_15249 = state_15142;
(statearr_15200_15249[(5)] = ex__14086__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15142);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15199;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14084__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15250 = state_15142;
state_15142 = G__15250;
continue;
} else {
return ret_value__14084__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__14083__auto__ = function(state_15142){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__14083__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__14083__auto____1.call(this,state_15142);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__14083__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__14083__auto____0;
cljs$core$async$mix_$_state_machine__14083__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__14083__auto____1;
return cljs$core$async$mix_$_state_machine__14083__auto__;
})()
;})(switch__14082__auto__,c__14170__auto___15202,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__14172__auto__ = (function (){var statearr_15201 = f__14171__auto__.call(null);
(statearr_15201[(6)] = c__14170__auto___15202);

return statearr_15201;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14172__auto__);
});})(c__14170__auto___15202,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__8328__auto__ = (((p == null))?null:p);
var m__8329__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__8328__auto__)]);
if(!((m__8329__auto__ == null))){
return m__8329__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__8329__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__8329__auto____$1 == null))){
return m__8329__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__8328__auto__ = (((p == null))?null:p);
var m__8329__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__8328__auto__)]);
if(!((m__8329__auto__ == null))){
return m__8329__auto__.call(null,p,v,ch);
} else {
var m__8329__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__8329__auto____$1 == null))){
return m__8329__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__15252 = arguments.length;
switch (G__15252) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__8328__auto__ = (((p == null))?null:p);
var m__8329__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__8328__auto__)]);
if(!((m__8329__auto__ == null))){
return m__8329__auto__.call(null,p);
} else {
var m__8329__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__8329__auto____$1 == null))){
return m__8329__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__8328__auto__ = (((p == null))?null:p);
var m__8329__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__8328__auto__)]);
if(!((m__8329__auto__ == null))){
return m__8329__auto__.call(null,p,v);
} else {
var m__8329__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__8329__auto____$1 == null))){
return m__8329__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__15256 = arguments.length;
switch (G__15256) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__7645__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__7645__auto__)){
return or__7645__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__7645__auto__,mults){
return (function (p1__15254_SHARP_){
if(cljs.core.truth_(p1__15254_SHARP_.call(null,topic))){
return p1__15254_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__15254_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__7645__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async15257 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15257 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta15258){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta15258 = meta15258;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async15257.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_15259,meta15258__$1){
var self__ = this;
var _15259__$1 = this;
return (new cljs.core.async.t_cljs$core$async15257(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta15258__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15257.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_15259){
var self__ = this;
var _15259__$1 = this;
return self__.meta15258;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15257.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15257.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15257.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15257.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15257.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15257.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15257.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15257.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta15258","meta15258",1777135583,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15257.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15257.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15257";

cljs.core.async.t_cljs$core$async15257.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__8270__auto__,writer__8271__auto__,opt__8272__auto__){
return cljs.core._write.call(null,writer__8271__auto__,"cljs.core.async/t_cljs$core$async15257");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async15257 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async15257(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta15258){
return (new cljs.core.async.t_cljs$core$async15257(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta15258));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async15257(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__14170__auto___15377 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14170__auto___15377,mults,ensure_mult,p){
return (function (){
var f__14171__auto__ = (function (){var switch__14082__auto__ = ((function (c__14170__auto___15377,mults,ensure_mult,p){
return (function (state_15331){
var state_val_15332 = (state_15331[(1)]);
if((state_val_15332 === (7))){
var inst_15327 = (state_15331[(2)]);
var state_15331__$1 = state_15331;
var statearr_15333_15378 = state_15331__$1;
(statearr_15333_15378[(2)] = inst_15327);

(statearr_15333_15378[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15332 === (20))){
var state_15331__$1 = state_15331;
var statearr_15334_15379 = state_15331__$1;
(statearr_15334_15379[(2)] = null);

(statearr_15334_15379[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15332 === (1))){
var state_15331__$1 = state_15331;
var statearr_15335_15380 = state_15331__$1;
(statearr_15335_15380[(2)] = null);

(statearr_15335_15380[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15332 === (24))){
var inst_15310 = (state_15331[(7)]);
var inst_15319 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_15310);
var state_15331__$1 = state_15331;
var statearr_15336_15381 = state_15331__$1;
(statearr_15336_15381[(2)] = inst_15319);

(statearr_15336_15381[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15332 === (4))){
var inst_15262 = (state_15331[(8)]);
var inst_15262__$1 = (state_15331[(2)]);
var inst_15263 = (inst_15262__$1 == null);
var state_15331__$1 = (function (){var statearr_15337 = state_15331;
(statearr_15337[(8)] = inst_15262__$1);

return statearr_15337;
})();
if(cljs.core.truth_(inst_15263)){
var statearr_15338_15382 = state_15331__$1;
(statearr_15338_15382[(1)] = (5));

} else {
var statearr_15339_15383 = state_15331__$1;
(statearr_15339_15383[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15332 === (15))){
var inst_15304 = (state_15331[(2)]);
var state_15331__$1 = state_15331;
var statearr_15340_15384 = state_15331__$1;
(statearr_15340_15384[(2)] = inst_15304);

(statearr_15340_15384[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15332 === (21))){
var inst_15324 = (state_15331[(2)]);
var state_15331__$1 = (function (){var statearr_15341 = state_15331;
(statearr_15341[(9)] = inst_15324);

return statearr_15341;
})();
var statearr_15342_15385 = state_15331__$1;
(statearr_15342_15385[(2)] = null);

(statearr_15342_15385[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15332 === (13))){
var inst_15286 = (state_15331[(10)]);
var inst_15288 = cljs.core.chunked_seq_QMARK_.call(null,inst_15286);
var state_15331__$1 = state_15331;
if(inst_15288){
var statearr_15343_15386 = state_15331__$1;
(statearr_15343_15386[(1)] = (16));

} else {
var statearr_15344_15387 = state_15331__$1;
(statearr_15344_15387[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15332 === (22))){
var inst_15316 = (state_15331[(2)]);
var state_15331__$1 = state_15331;
if(cljs.core.truth_(inst_15316)){
var statearr_15345_15388 = state_15331__$1;
(statearr_15345_15388[(1)] = (23));

} else {
var statearr_15346_15389 = state_15331__$1;
(statearr_15346_15389[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15332 === (6))){
var inst_15312 = (state_15331[(11)]);
var inst_15310 = (state_15331[(7)]);
var inst_15262 = (state_15331[(8)]);
var inst_15310__$1 = topic_fn.call(null,inst_15262);
var inst_15311 = cljs.core.deref.call(null,mults);
var inst_15312__$1 = cljs.core.get.call(null,inst_15311,inst_15310__$1);
var state_15331__$1 = (function (){var statearr_15347 = state_15331;
(statearr_15347[(11)] = inst_15312__$1);

(statearr_15347[(7)] = inst_15310__$1);

return statearr_15347;
})();
if(cljs.core.truth_(inst_15312__$1)){
var statearr_15348_15390 = state_15331__$1;
(statearr_15348_15390[(1)] = (19));

} else {
var statearr_15349_15391 = state_15331__$1;
(statearr_15349_15391[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15332 === (25))){
var inst_15321 = (state_15331[(2)]);
var state_15331__$1 = state_15331;
var statearr_15350_15392 = state_15331__$1;
(statearr_15350_15392[(2)] = inst_15321);

(statearr_15350_15392[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15332 === (17))){
var inst_15286 = (state_15331[(10)]);
var inst_15295 = cljs.core.first.call(null,inst_15286);
var inst_15296 = cljs.core.async.muxch_STAR_.call(null,inst_15295);
var inst_15297 = cljs.core.async.close_BANG_.call(null,inst_15296);
var inst_15298 = cljs.core.next.call(null,inst_15286);
var inst_15272 = inst_15298;
var inst_15273 = null;
var inst_15274 = (0);
var inst_15275 = (0);
var state_15331__$1 = (function (){var statearr_15351 = state_15331;
(statearr_15351[(12)] = inst_15272);

(statearr_15351[(13)] = inst_15275);

(statearr_15351[(14)] = inst_15297);

(statearr_15351[(15)] = inst_15273);

(statearr_15351[(16)] = inst_15274);

return statearr_15351;
})();
var statearr_15352_15393 = state_15331__$1;
(statearr_15352_15393[(2)] = null);

(statearr_15352_15393[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15332 === (3))){
var inst_15329 = (state_15331[(2)]);
var state_15331__$1 = state_15331;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15331__$1,inst_15329);
} else {
if((state_val_15332 === (12))){
var inst_15306 = (state_15331[(2)]);
var state_15331__$1 = state_15331;
var statearr_15353_15394 = state_15331__$1;
(statearr_15353_15394[(2)] = inst_15306);

(statearr_15353_15394[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15332 === (2))){
var state_15331__$1 = state_15331;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15331__$1,(4),ch);
} else {
if((state_val_15332 === (23))){
var state_15331__$1 = state_15331;
var statearr_15354_15395 = state_15331__$1;
(statearr_15354_15395[(2)] = null);

(statearr_15354_15395[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15332 === (19))){
var inst_15312 = (state_15331[(11)]);
var inst_15262 = (state_15331[(8)]);
var inst_15314 = cljs.core.async.muxch_STAR_.call(null,inst_15312);
var state_15331__$1 = state_15331;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15331__$1,(22),inst_15314,inst_15262);
} else {
if((state_val_15332 === (11))){
var inst_15272 = (state_15331[(12)]);
var inst_15286 = (state_15331[(10)]);
var inst_15286__$1 = cljs.core.seq.call(null,inst_15272);
var state_15331__$1 = (function (){var statearr_15355 = state_15331;
(statearr_15355[(10)] = inst_15286__$1);

return statearr_15355;
})();
if(inst_15286__$1){
var statearr_15356_15396 = state_15331__$1;
(statearr_15356_15396[(1)] = (13));

} else {
var statearr_15357_15397 = state_15331__$1;
(statearr_15357_15397[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15332 === (9))){
var inst_15308 = (state_15331[(2)]);
var state_15331__$1 = state_15331;
var statearr_15358_15398 = state_15331__$1;
(statearr_15358_15398[(2)] = inst_15308);

(statearr_15358_15398[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15332 === (5))){
var inst_15269 = cljs.core.deref.call(null,mults);
var inst_15270 = cljs.core.vals.call(null,inst_15269);
var inst_15271 = cljs.core.seq.call(null,inst_15270);
var inst_15272 = inst_15271;
var inst_15273 = null;
var inst_15274 = (0);
var inst_15275 = (0);
var state_15331__$1 = (function (){var statearr_15359 = state_15331;
(statearr_15359[(12)] = inst_15272);

(statearr_15359[(13)] = inst_15275);

(statearr_15359[(15)] = inst_15273);

(statearr_15359[(16)] = inst_15274);

return statearr_15359;
})();
var statearr_15360_15399 = state_15331__$1;
(statearr_15360_15399[(2)] = null);

(statearr_15360_15399[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15332 === (14))){
var state_15331__$1 = state_15331;
var statearr_15364_15400 = state_15331__$1;
(statearr_15364_15400[(2)] = null);

(statearr_15364_15400[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15332 === (16))){
var inst_15286 = (state_15331[(10)]);
var inst_15290 = cljs.core.chunk_first.call(null,inst_15286);
var inst_15291 = cljs.core.chunk_rest.call(null,inst_15286);
var inst_15292 = cljs.core.count.call(null,inst_15290);
var inst_15272 = inst_15291;
var inst_15273 = inst_15290;
var inst_15274 = inst_15292;
var inst_15275 = (0);
var state_15331__$1 = (function (){var statearr_15365 = state_15331;
(statearr_15365[(12)] = inst_15272);

(statearr_15365[(13)] = inst_15275);

(statearr_15365[(15)] = inst_15273);

(statearr_15365[(16)] = inst_15274);

return statearr_15365;
})();
var statearr_15366_15401 = state_15331__$1;
(statearr_15366_15401[(2)] = null);

(statearr_15366_15401[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15332 === (10))){
var inst_15272 = (state_15331[(12)]);
var inst_15275 = (state_15331[(13)]);
var inst_15273 = (state_15331[(15)]);
var inst_15274 = (state_15331[(16)]);
var inst_15280 = cljs.core._nth.call(null,inst_15273,inst_15275);
var inst_15281 = cljs.core.async.muxch_STAR_.call(null,inst_15280);
var inst_15282 = cljs.core.async.close_BANG_.call(null,inst_15281);
var inst_15283 = (inst_15275 + (1));
var tmp15361 = inst_15272;
var tmp15362 = inst_15273;
var tmp15363 = inst_15274;
var inst_15272__$1 = tmp15361;
var inst_15273__$1 = tmp15362;
var inst_15274__$1 = tmp15363;
var inst_15275__$1 = inst_15283;
var state_15331__$1 = (function (){var statearr_15367 = state_15331;
(statearr_15367[(12)] = inst_15272__$1);

(statearr_15367[(17)] = inst_15282);

(statearr_15367[(13)] = inst_15275__$1);

(statearr_15367[(15)] = inst_15273__$1);

(statearr_15367[(16)] = inst_15274__$1);

return statearr_15367;
})();
var statearr_15368_15402 = state_15331__$1;
(statearr_15368_15402[(2)] = null);

(statearr_15368_15402[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15332 === (18))){
var inst_15301 = (state_15331[(2)]);
var state_15331__$1 = state_15331;
var statearr_15369_15403 = state_15331__$1;
(statearr_15369_15403[(2)] = inst_15301);

(statearr_15369_15403[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15332 === (8))){
var inst_15275 = (state_15331[(13)]);
var inst_15274 = (state_15331[(16)]);
var inst_15277 = (inst_15275 < inst_15274);
var inst_15278 = inst_15277;
var state_15331__$1 = state_15331;
if(cljs.core.truth_(inst_15278)){
var statearr_15370_15404 = state_15331__$1;
(statearr_15370_15404[(1)] = (10));

} else {
var statearr_15371_15405 = state_15331__$1;
(statearr_15371_15405[(1)] = (11));

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
}
}
}
}
}
}
}
});})(c__14170__auto___15377,mults,ensure_mult,p))
;
return ((function (switch__14082__auto__,c__14170__auto___15377,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__14083__auto__ = null;
var cljs$core$async$state_machine__14083__auto____0 = (function (){
var statearr_15372 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15372[(0)] = cljs$core$async$state_machine__14083__auto__);

(statearr_15372[(1)] = (1));

return statearr_15372;
});
var cljs$core$async$state_machine__14083__auto____1 = (function (state_15331){
while(true){
var ret_value__14084__auto__ = (function (){try{while(true){
var result__14085__auto__ = switch__14082__auto__.call(null,state_15331);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14085__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14085__auto__;
}
break;
}
}catch (e15373){if((e15373 instanceof Object)){
var ex__14086__auto__ = e15373;
var statearr_15374_15406 = state_15331;
(statearr_15374_15406[(5)] = ex__14086__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15331);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15373;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14084__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15407 = state_15331;
state_15331 = G__15407;
continue;
} else {
return ret_value__14084__auto__;
}
break;
}
});
cljs$core$async$state_machine__14083__auto__ = function(state_15331){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14083__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14083__auto____1.call(this,state_15331);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__14083__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14083__auto____0;
cljs$core$async$state_machine__14083__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14083__auto____1;
return cljs$core$async$state_machine__14083__auto__;
})()
;})(switch__14082__auto__,c__14170__auto___15377,mults,ensure_mult,p))
})();
var state__14172__auto__ = (function (){var statearr_15375 = f__14171__auto__.call(null);
(statearr_15375[(6)] = c__14170__auto___15377);

return statearr_15375;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14172__auto__);
});})(c__14170__auto___15377,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__15409 = arguments.length;
switch (G__15409) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__15412 = arguments.length;
switch (G__15412) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__15415 = arguments.length;
switch (G__15415) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__14170__auto___15482 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14170__auto___15482,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__14171__auto__ = (function (){var switch__14082__auto__ = ((function (c__14170__auto___15482,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_15454){
var state_val_15455 = (state_15454[(1)]);
if((state_val_15455 === (7))){
var state_15454__$1 = state_15454;
var statearr_15456_15483 = state_15454__$1;
(statearr_15456_15483[(2)] = null);

(statearr_15456_15483[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15455 === (1))){
var state_15454__$1 = state_15454;
var statearr_15457_15484 = state_15454__$1;
(statearr_15457_15484[(2)] = null);

(statearr_15457_15484[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15455 === (4))){
var inst_15418 = (state_15454[(7)]);
var inst_15420 = (inst_15418 < cnt);
var state_15454__$1 = state_15454;
if(cljs.core.truth_(inst_15420)){
var statearr_15458_15485 = state_15454__$1;
(statearr_15458_15485[(1)] = (6));

} else {
var statearr_15459_15486 = state_15454__$1;
(statearr_15459_15486[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15455 === (15))){
var inst_15450 = (state_15454[(2)]);
var state_15454__$1 = state_15454;
var statearr_15460_15487 = state_15454__$1;
(statearr_15460_15487[(2)] = inst_15450);

(statearr_15460_15487[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15455 === (13))){
var inst_15443 = cljs.core.async.close_BANG_.call(null,out);
var state_15454__$1 = state_15454;
var statearr_15461_15488 = state_15454__$1;
(statearr_15461_15488[(2)] = inst_15443);

(statearr_15461_15488[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15455 === (6))){
var state_15454__$1 = state_15454;
var statearr_15462_15489 = state_15454__$1;
(statearr_15462_15489[(2)] = null);

(statearr_15462_15489[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15455 === (3))){
var inst_15452 = (state_15454[(2)]);
var state_15454__$1 = state_15454;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15454__$1,inst_15452);
} else {
if((state_val_15455 === (12))){
var inst_15440 = (state_15454[(8)]);
var inst_15440__$1 = (state_15454[(2)]);
var inst_15441 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_15440__$1);
var state_15454__$1 = (function (){var statearr_15463 = state_15454;
(statearr_15463[(8)] = inst_15440__$1);

return statearr_15463;
})();
if(cljs.core.truth_(inst_15441)){
var statearr_15464_15490 = state_15454__$1;
(statearr_15464_15490[(1)] = (13));

} else {
var statearr_15465_15491 = state_15454__$1;
(statearr_15465_15491[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15455 === (2))){
var inst_15417 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_15418 = (0);
var state_15454__$1 = (function (){var statearr_15466 = state_15454;
(statearr_15466[(9)] = inst_15417);

(statearr_15466[(7)] = inst_15418);

return statearr_15466;
})();
var statearr_15467_15492 = state_15454__$1;
(statearr_15467_15492[(2)] = null);

(statearr_15467_15492[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15455 === (11))){
var inst_15418 = (state_15454[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_15454,(10),Object,null,(9));
var inst_15427 = chs__$1.call(null,inst_15418);
var inst_15428 = done.call(null,inst_15418);
var inst_15429 = cljs.core.async.take_BANG_.call(null,inst_15427,inst_15428);
var state_15454__$1 = state_15454;
var statearr_15468_15493 = state_15454__$1;
(statearr_15468_15493[(2)] = inst_15429);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15454__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15455 === (9))){
var inst_15418 = (state_15454[(7)]);
var inst_15431 = (state_15454[(2)]);
var inst_15432 = (inst_15418 + (1));
var inst_15418__$1 = inst_15432;
var state_15454__$1 = (function (){var statearr_15469 = state_15454;
(statearr_15469[(7)] = inst_15418__$1);

(statearr_15469[(10)] = inst_15431);

return statearr_15469;
})();
var statearr_15470_15494 = state_15454__$1;
(statearr_15470_15494[(2)] = null);

(statearr_15470_15494[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15455 === (5))){
var inst_15438 = (state_15454[(2)]);
var state_15454__$1 = (function (){var statearr_15471 = state_15454;
(statearr_15471[(11)] = inst_15438);

return statearr_15471;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15454__$1,(12),dchan);
} else {
if((state_val_15455 === (14))){
var inst_15440 = (state_15454[(8)]);
var inst_15445 = cljs.core.apply.call(null,f,inst_15440);
var state_15454__$1 = state_15454;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15454__$1,(16),out,inst_15445);
} else {
if((state_val_15455 === (16))){
var inst_15447 = (state_15454[(2)]);
var state_15454__$1 = (function (){var statearr_15472 = state_15454;
(statearr_15472[(12)] = inst_15447);

return statearr_15472;
})();
var statearr_15473_15495 = state_15454__$1;
(statearr_15473_15495[(2)] = null);

(statearr_15473_15495[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15455 === (10))){
var inst_15422 = (state_15454[(2)]);
var inst_15423 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_15454__$1 = (function (){var statearr_15474 = state_15454;
(statearr_15474[(13)] = inst_15422);

return statearr_15474;
})();
var statearr_15475_15496 = state_15454__$1;
(statearr_15475_15496[(2)] = inst_15423);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15454__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15455 === (8))){
var inst_15436 = (state_15454[(2)]);
var state_15454__$1 = state_15454;
var statearr_15476_15497 = state_15454__$1;
(statearr_15476_15497[(2)] = inst_15436);

(statearr_15476_15497[(1)] = (5));


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
});})(c__14170__auto___15482,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__14082__auto__,c__14170__auto___15482,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__14083__auto__ = null;
var cljs$core$async$state_machine__14083__auto____0 = (function (){
var statearr_15477 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15477[(0)] = cljs$core$async$state_machine__14083__auto__);

(statearr_15477[(1)] = (1));

return statearr_15477;
});
var cljs$core$async$state_machine__14083__auto____1 = (function (state_15454){
while(true){
var ret_value__14084__auto__ = (function (){try{while(true){
var result__14085__auto__ = switch__14082__auto__.call(null,state_15454);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14085__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14085__auto__;
}
break;
}
}catch (e15478){if((e15478 instanceof Object)){
var ex__14086__auto__ = e15478;
var statearr_15479_15498 = state_15454;
(statearr_15479_15498[(5)] = ex__14086__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15454);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15478;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14084__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15499 = state_15454;
state_15454 = G__15499;
continue;
} else {
return ret_value__14084__auto__;
}
break;
}
});
cljs$core$async$state_machine__14083__auto__ = function(state_15454){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14083__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14083__auto____1.call(this,state_15454);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__14083__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14083__auto____0;
cljs$core$async$state_machine__14083__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14083__auto____1;
return cljs$core$async$state_machine__14083__auto__;
})()
;})(switch__14082__auto__,c__14170__auto___15482,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__14172__auto__ = (function (){var statearr_15480 = f__14171__auto__.call(null);
(statearr_15480[(6)] = c__14170__auto___15482);

return statearr_15480;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14172__auto__);
});})(c__14170__auto___15482,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__15502 = arguments.length;
switch (G__15502) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__14170__auto___15556 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14170__auto___15556,out){
return (function (){
var f__14171__auto__ = (function (){var switch__14082__auto__ = ((function (c__14170__auto___15556,out){
return (function (state_15534){
var state_val_15535 = (state_15534[(1)]);
if((state_val_15535 === (7))){
var inst_15514 = (state_15534[(7)]);
var inst_15513 = (state_15534[(8)]);
var inst_15513__$1 = (state_15534[(2)]);
var inst_15514__$1 = cljs.core.nth.call(null,inst_15513__$1,(0),null);
var inst_15515 = cljs.core.nth.call(null,inst_15513__$1,(1),null);
var inst_15516 = (inst_15514__$1 == null);
var state_15534__$1 = (function (){var statearr_15536 = state_15534;
(statearr_15536[(7)] = inst_15514__$1);

(statearr_15536[(9)] = inst_15515);

(statearr_15536[(8)] = inst_15513__$1);

return statearr_15536;
})();
if(cljs.core.truth_(inst_15516)){
var statearr_15537_15557 = state_15534__$1;
(statearr_15537_15557[(1)] = (8));

} else {
var statearr_15538_15558 = state_15534__$1;
(statearr_15538_15558[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15535 === (1))){
var inst_15503 = cljs.core.vec.call(null,chs);
var inst_15504 = inst_15503;
var state_15534__$1 = (function (){var statearr_15539 = state_15534;
(statearr_15539[(10)] = inst_15504);

return statearr_15539;
})();
var statearr_15540_15559 = state_15534__$1;
(statearr_15540_15559[(2)] = null);

(statearr_15540_15559[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15535 === (4))){
var inst_15504 = (state_15534[(10)]);
var state_15534__$1 = state_15534;
return cljs.core.async.ioc_alts_BANG_.call(null,state_15534__$1,(7),inst_15504);
} else {
if((state_val_15535 === (6))){
var inst_15530 = (state_15534[(2)]);
var state_15534__$1 = state_15534;
var statearr_15541_15560 = state_15534__$1;
(statearr_15541_15560[(2)] = inst_15530);

(statearr_15541_15560[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15535 === (3))){
var inst_15532 = (state_15534[(2)]);
var state_15534__$1 = state_15534;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15534__$1,inst_15532);
} else {
if((state_val_15535 === (2))){
var inst_15504 = (state_15534[(10)]);
var inst_15506 = cljs.core.count.call(null,inst_15504);
var inst_15507 = (inst_15506 > (0));
var state_15534__$1 = state_15534;
if(cljs.core.truth_(inst_15507)){
var statearr_15543_15561 = state_15534__$1;
(statearr_15543_15561[(1)] = (4));

} else {
var statearr_15544_15562 = state_15534__$1;
(statearr_15544_15562[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15535 === (11))){
var inst_15504 = (state_15534[(10)]);
var inst_15523 = (state_15534[(2)]);
var tmp15542 = inst_15504;
var inst_15504__$1 = tmp15542;
var state_15534__$1 = (function (){var statearr_15545 = state_15534;
(statearr_15545[(10)] = inst_15504__$1);

(statearr_15545[(11)] = inst_15523);

return statearr_15545;
})();
var statearr_15546_15563 = state_15534__$1;
(statearr_15546_15563[(2)] = null);

(statearr_15546_15563[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15535 === (9))){
var inst_15514 = (state_15534[(7)]);
var state_15534__$1 = state_15534;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15534__$1,(11),out,inst_15514);
} else {
if((state_val_15535 === (5))){
var inst_15528 = cljs.core.async.close_BANG_.call(null,out);
var state_15534__$1 = state_15534;
var statearr_15547_15564 = state_15534__$1;
(statearr_15547_15564[(2)] = inst_15528);

(statearr_15547_15564[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15535 === (10))){
var inst_15526 = (state_15534[(2)]);
var state_15534__$1 = state_15534;
var statearr_15548_15565 = state_15534__$1;
(statearr_15548_15565[(2)] = inst_15526);

(statearr_15548_15565[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15535 === (8))){
var inst_15514 = (state_15534[(7)]);
var inst_15515 = (state_15534[(9)]);
var inst_15513 = (state_15534[(8)]);
var inst_15504 = (state_15534[(10)]);
var inst_15518 = (function (){var cs = inst_15504;
var vec__15509 = inst_15513;
var v = inst_15514;
var c = inst_15515;
return ((function (cs,vec__15509,v,c,inst_15514,inst_15515,inst_15513,inst_15504,state_val_15535,c__14170__auto___15556,out){
return (function (p1__15500_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__15500_SHARP_);
});
;})(cs,vec__15509,v,c,inst_15514,inst_15515,inst_15513,inst_15504,state_val_15535,c__14170__auto___15556,out))
})();
var inst_15519 = cljs.core.filterv.call(null,inst_15518,inst_15504);
var inst_15504__$1 = inst_15519;
var state_15534__$1 = (function (){var statearr_15549 = state_15534;
(statearr_15549[(10)] = inst_15504__$1);

return statearr_15549;
})();
var statearr_15550_15566 = state_15534__$1;
(statearr_15550_15566[(2)] = null);

(statearr_15550_15566[(1)] = (2));


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
});})(c__14170__auto___15556,out))
;
return ((function (switch__14082__auto__,c__14170__auto___15556,out){
return (function() {
var cljs$core$async$state_machine__14083__auto__ = null;
var cljs$core$async$state_machine__14083__auto____0 = (function (){
var statearr_15551 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15551[(0)] = cljs$core$async$state_machine__14083__auto__);

(statearr_15551[(1)] = (1));

return statearr_15551;
});
var cljs$core$async$state_machine__14083__auto____1 = (function (state_15534){
while(true){
var ret_value__14084__auto__ = (function (){try{while(true){
var result__14085__auto__ = switch__14082__auto__.call(null,state_15534);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14085__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14085__auto__;
}
break;
}
}catch (e15552){if((e15552 instanceof Object)){
var ex__14086__auto__ = e15552;
var statearr_15553_15567 = state_15534;
(statearr_15553_15567[(5)] = ex__14086__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15534);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15552;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14084__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15568 = state_15534;
state_15534 = G__15568;
continue;
} else {
return ret_value__14084__auto__;
}
break;
}
});
cljs$core$async$state_machine__14083__auto__ = function(state_15534){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14083__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14083__auto____1.call(this,state_15534);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__14083__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14083__auto____0;
cljs$core$async$state_machine__14083__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14083__auto____1;
return cljs$core$async$state_machine__14083__auto__;
})()
;})(switch__14082__auto__,c__14170__auto___15556,out))
})();
var state__14172__auto__ = (function (){var statearr_15554 = f__14171__auto__.call(null);
(statearr_15554[(6)] = c__14170__auto___15556);

return statearr_15554;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14172__auto__);
});})(c__14170__auto___15556,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__15570 = arguments.length;
switch (G__15570) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__14170__auto___15615 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14170__auto___15615,out){
return (function (){
var f__14171__auto__ = (function (){var switch__14082__auto__ = ((function (c__14170__auto___15615,out){
return (function (state_15594){
var state_val_15595 = (state_15594[(1)]);
if((state_val_15595 === (7))){
var inst_15576 = (state_15594[(7)]);
var inst_15576__$1 = (state_15594[(2)]);
var inst_15577 = (inst_15576__$1 == null);
var inst_15578 = cljs.core.not.call(null,inst_15577);
var state_15594__$1 = (function (){var statearr_15596 = state_15594;
(statearr_15596[(7)] = inst_15576__$1);

return statearr_15596;
})();
if(inst_15578){
var statearr_15597_15616 = state_15594__$1;
(statearr_15597_15616[(1)] = (8));

} else {
var statearr_15598_15617 = state_15594__$1;
(statearr_15598_15617[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15595 === (1))){
var inst_15571 = (0);
var state_15594__$1 = (function (){var statearr_15599 = state_15594;
(statearr_15599[(8)] = inst_15571);

return statearr_15599;
})();
var statearr_15600_15618 = state_15594__$1;
(statearr_15600_15618[(2)] = null);

(statearr_15600_15618[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15595 === (4))){
var state_15594__$1 = state_15594;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15594__$1,(7),ch);
} else {
if((state_val_15595 === (6))){
var inst_15589 = (state_15594[(2)]);
var state_15594__$1 = state_15594;
var statearr_15601_15619 = state_15594__$1;
(statearr_15601_15619[(2)] = inst_15589);

(statearr_15601_15619[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15595 === (3))){
var inst_15591 = (state_15594[(2)]);
var inst_15592 = cljs.core.async.close_BANG_.call(null,out);
var state_15594__$1 = (function (){var statearr_15602 = state_15594;
(statearr_15602[(9)] = inst_15591);

return statearr_15602;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15594__$1,inst_15592);
} else {
if((state_val_15595 === (2))){
var inst_15571 = (state_15594[(8)]);
var inst_15573 = (inst_15571 < n);
var state_15594__$1 = state_15594;
if(cljs.core.truth_(inst_15573)){
var statearr_15603_15620 = state_15594__$1;
(statearr_15603_15620[(1)] = (4));

} else {
var statearr_15604_15621 = state_15594__$1;
(statearr_15604_15621[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15595 === (11))){
var inst_15571 = (state_15594[(8)]);
var inst_15581 = (state_15594[(2)]);
var inst_15582 = (inst_15571 + (1));
var inst_15571__$1 = inst_15582;
var state_15594__$1 = (function (){var statearr_15605 = state_15594;
(statearr_15605[(10)] = inst_15581);

(statearr_15605[(8)] = inst_15571__$1);

return statearr_15605;
})();
var statearr_15606_15622 = state_15594__$1;
(statearr_15606_15622[(2)] = null);

(statearr_15606_15622[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15595 === (9))){
var state_15594__$1 = state_15594;
var statearr_15607_15623 = state_15594__$1;
(statearr_15607_15623[(2)] = null);

(statearr_15607_15623[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15595 === (5))){
var state_15594__$1 = state_15594;
var statearr_15608_15624 = state_15594__$1;
(statearr_15608_15624[(2)] = null);

(statearr_15608_15624[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15595 === (10))){
var inst_15586 = (state_15594[(2)]);
var state_15594__$1 = state_15594;
var statearr_15609_15625 = state_15594__$1;
(statearr_15609_15625[(2)] = inst_15586);

(statearr_15609_15625[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15595 === (8))){
var inst_15576 = (state_15594[(7)]);
var state_15594__$1 = state_15594;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15594__$1,(11),out,inst_15576);
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
});})(c__14170__auto___15615,out))
;
return ((function (switch__14082__auto__,c__14170__auto___15615,out){
return (function() {
var cljs$core$async$state_machine__14083__auto__ = null;
var cljs$core$async$state_machine__14083__auto____0 = (function (){
var statearr_15610 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15610[(0)] = cljs$core$async$state_machine__14083__auto__);

(statearr_15610[(1)] = (1));

return statearr_15610;
});
var cljs$core$async$state_machine__14083__auto____1 = (function (state_15594){
while(true){
var ret_value__14084__auto__ = (function (){try{while(true){
var result__14085__auto__ = switch__14082__auto__.call(null,state_15594);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14085__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14085__auto__;
}
break;
}
}catch (e15611){if((e15611 instanceof Object)){
var ex__14086__auto__ = e15611;
var statearr_15612_15626 = state_15594;
(statearr_15612_15626[(5)] = ex__14086__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15594);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15611;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14084__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15627 = state_15594;
state_15594 = G__15627;
continue;
} else {
return ret_value__14084__auto__;
}
break;
}
});
cljs$core$async$state_machine__14083__auto__ = function(state_15594){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14083__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14083__auto____1.call(this,state_15594);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__14083__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14083__auto____0;
cljs$core$async$state_machine__14083__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14083__auto____1;
return cljs$core$async$state_machine__14083__auto__;
})()
;})(switch__14082__auto__,c__14170__auto___15615,out))
})();
var state__14172__auto__ = (function (){var statearr_15613 = f__14171__auto__.call(null);
(statearr_15613[(6)] = c__14170__auto___15615);

return statearr_15613;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14172__auto__);
});})(c__14170__auto___15615,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async15629 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15629 = (function (f,ch,meta15630){
this.f = f;
this.ch = ch;
this.meta15630 = meta15630;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async15629.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15631,meta15630__$1){
var self__ = this;
var _15631__$1 = this;
return (new cljs.core.async.t_cljs$core$async15629(self__.f,self__.ch,meta15630__$1));
});

cljs.core.async.t_cljs$core$async15629.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15631){
var self__ = this;
var _15631__$1 = this;
return self__.meta15630;
});

cljs.core.async.t_cljs$core$async15629.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15629.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async15629.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async15629.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15629.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async15632 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15632 = (function (f,ch,meta15630,_,fn1,meta15633){
this.f = f;
this.ch = ch;
this.meta15630 = meta15630;
this._ = _;
this.fn1 = fn1;
this.meta15633 = meta15633;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async15632.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_15634,meta15633__$1){
var self__ = this;
var _15634__$1 = this;
return (new cljs.core.async.t_cljs$core$async15632(self__.f,self__.ch,self__.meta15630,self__._,self__.fn1,meta15633__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async15632.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_15634){
var self__ = this;
var _15634__$1 = this;
return self__.meta15633;
});})(___$1))
;

cljs.core.async.t_cljs$core$async15632.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15632.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async15632.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async15632.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__15628_SHARP_){
return f1.call(null,(((p1__15628_SHARP_ == null))?null:self__.f.call(null,p1__15628_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async15632.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta15630","meta15630",-143260953,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async15629","cljs.core.async/t_cljs$core$async15629",1098965624,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta15633","meta15633",1700578639,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async15632.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15632.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15632";

cljs.core.async.t_cljs$core$async15632.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__8270__auto__,writer__8271__auto__,opt__8272__auto__){
return cljs.core._write.call(null,writer__8271__auto__,"cljs.core.async/t_cljs$core$async15632");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async15632 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async15632(f__$1,ch__$1,meta15630__$1,___$2,fn1__$1,meta15633){
return (new cljs.core.async.t_cljs$core$async15632(f__$1,ch__$1,meta15630__$1,___$2,fn1__$1,meta15633));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async15632(self__.f,self__.ch,self__.meta15630,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__7633__auto__ = ret;
if(cljs.core.truth_(and__7633__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__7633__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async15629.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15629.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async15629.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta15630","meta15630",-143260953,null)], null);
});

cljs.core.async.t_cljs$core$async15629.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15629.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15629";

cljs.core.async.t_cljs$core$async15629.cljs$lang$ctorPrWriter = (function (this__8270__auto__,writer__8271__auto__,opt__8272__auto__){
return cljs.core._write.call(null,writer__8271__auto__,"cljs.core.async/t_cljs$core$async15629");
});

cljs.core.async.__GT_t_cljs$core$async15629 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async15629(f__$1,ch__$1,meta15630){
return (new cljs.core.async.t_cljs$core$async15629(f__$1,ch__$1,meta15630));
});

}

return (new cljs.core.async.t_cljs$core$async15629(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async15635 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15635 = (function (f,ch,meta15636){
this.f = f;
this.ch = ch;
this.meta15636 = meta15636;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async15635.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15637,meta15636__$1){
var self__ = this;
var _15637__$1 = this;
return (new cljs.core.async.t_cljs$core$async15635(self__.f,self__.ch,meta15636__$1));
});

cljs.core.async.t_cljs$core$async15635.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15637){
var self__ = this;
var _15637__$1 = this;
return self__.meta15636;
});

cljs.core.async.t_cljs$core$async15635.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15635.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async15635.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15635.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async15635.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15635.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async15635.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta15636","meta15636",-1950122232,null)], null);
});

cljs.core.async.t_cljs$core$async15635.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15635.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15635";

cljs.core.async.t_cljs$core$async15635.cljs$lang$ctorPrWriter = (function (this__8270__auto__,writer__8271__auto__,opt__8272__auto__){
return cljs.core._write.call(null,writer__8271__auto__,"cljs.core.async/t_cljs$core$async15635");
});

cljs.core.async.__GT_t_cljs$core$async15635 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async15635(f__$1,ch__$1,meta15636){
return (new cljs.core.async.t_cljs$core$async15635(f__$1,ch__$1,meta15636));
});

}

return (new cljs.core.async.t_cljs$core$async15635(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async15638 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15638 = (function (p,ch,meta15639){
this.p = p;
this.ch = ch;
this.meta15639 = meta15639;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async15638.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15640,meta15639__$1){
var self__ = this;
var _15640__$1 = this;
return (new cljs.core.async.t_cljs$core$async15638(self__.p,self__.ch,meta15639__$1));
});

cljs.core.async.t_cljs$core$async15638.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15640){
var self__ = this;
var _15640__$1 = this;
return self__.meta15639;
});

cljs.core.async.t_cljs$core$async15638.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15638.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async15638.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async15638.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15638.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async15638.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15638.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async15638.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta15639","meta15639",-950656809,null)], null);
});

cljs.core.async.t_cljs$core$async15638.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15638.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15638";

cljs.core.async.t_cljs$core$async15638.cljs$lang$ctorPrWriter = (function (this__8270__auto__,writer__8271__auto__,opt__8272__auto__){
return cljs.core._write.call(null,writer__8271__auto__,"cljs.core.async/t_cljs$core$async15638");
});

cljs.core.async.__GT_t_cljs$core$async15638 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async15638(p__$1,ch__$1,meta15639){
return (new cljs.core.async.t_cljs$core$async15638(p__$1,ch__$1,meta15639));
});

}

return (new cljs.core.async.t_cljs$core$async15638(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__15642 = arguments.length;
switch (G__15642) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__14170__auto___15682 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14170__auto___15682,out){
return (function (){
var f__14171__auto__ = (function (){var switch__14082__auto__ = ((function (c__14170__auto___15682,out){
return (function (state_15663){
var state_val_15664 = (state_15663[(1)]);
if((state_val_15664 === (7))){
var inst_15659 = (state_15663[(2)]);
var state_15663__$1 = state_15663;
var statearr_15665_15683 = state_15663__$1;
(statearr_15665_15683[(2)] = inst_15659);

(statearr_15665_15683[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15664 === (1))){
var state_15663__$1 = state_15663;
var statearr_15666_15684 = state_15663__$1;
(statearr_15666_15684[(2)] = null);

(statearr_15666_15684[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15664 === (4))){
var inst_15645 = (state_15663[(7)]);
var inst_15645__$1 = (state_15663[(2)]);
var inst_15646 = (inst_15645__$1 == null);
var state_15663__$1 = (function (){var statearr_15667 = state_15663;
(statearr_15667[(7)] = inst_15645__$1);

return statearr_15667;
})();
if(cljs.core.truth_(inst_15646)){
var statearr_15668_15685 = state_15663__$1;
(statearr_15668_15685[(1)] = (5));

} else {
var statearr_15669_15686 = state_15663__$1;
(statearr_15669_15686[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15664 === (6))){
var inst_15645 = (state_15663[(7)]);
var inst_15650 = p.call(null,inst_15645);
var state_15663__$1 = state_15663;
if(cljs.core.truth_(inst_15650)){
var statearr_15670_15687 = state_15663__$1;
(statearr_15670_15687[(1)] = (8));

} else {
var statearr_15671_15688 = state_15663__$1;
(statearr_15671_15688[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15664 === (3))){
var inst_15661 = (state_15663[(2)]);
var state_15663__$1 = state_15663;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15663__$1,inst_15661);
} else {
if((state_val_15664 === (2))){
var state_15663__$1 = state_15663;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15663__$1,(4),ch);
} else {
if((state_val_15664 === (11))){
var inst_15653 = (state_15663[(2)]);
var state_15663__$1 = state_15663;
var statearr_15672_15689 = state_15663__$1;
(statearr_15672_15689[(2)] = inst_15653);

(statearr_15672_15689[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15664 === (9))){
var state_15663__$1 = state_15663;
var statearr_15673_15690 = state_15663__$1;
(statearr_15673_15690[(2)] = null);

(statearr_15673_15690[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15664 === (5))){
var inst_15648 = cljs.core.async.close_BANG_.call(null,out);
var state_15663__$1 = state_15663;
var statearr_15674_15691 = state_15663__$1;
(statearr_15674_15691[(2)] = inst_15648);

(statearr_15674_15691[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15664 === (10))){
var inst_15656 = (state_15663[(2)]);
var state_15663__$1 = (function (){var statearr_15675 = state_15663;
(statearr_15675[(8)] = inst_15656);

return statearr_15675;
})();
var statearr_15676_15692 = state_15663__$1;
(statearr_15676_15692[(2)] = null);

(statearr_15676_15692[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15664 === (8))){
var inst_15645 = (state_15663[(7)]);
var state_15663__$1 = state_15663;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15663__$1,(11),out,inst_15645);
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
});})(c__14170__auto___15682,out))
;
return ((function (switch__14082__auto__,c__14170__auto___15682,out){
return (function() {
var cljs$core$async$state_machine__14083__auto__ = null;
var cljs$core$async$state_machine__14083__auto____0 = (function (){
var statearr_15677 = [null,null,null,null,null,null,null,null,null];
(statearr_15677[(0)] = cljs$core$async$state_machine__14083__auto__);

(statearr_15677[(1)] = (1));

return statearr_15677;
});
var cljs$core$async$state_machine__14083__auto____1 = (function (state_15663){
while(true){
var ret_value__14084__auto__ = (function (){try{while(true){
var result__14085__auto__ = switch__14082__auto__.call(null,state_15663);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14085__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14085__auto__;
}
break;
}
}catch (e15678){if((e15678 instanceof Object)){
var ex__14086__auto__ = e15678;
var statearr_15679_15693 = state_15663;
(statearr_15679_15693[(5)] = ex__14086__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15663);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15678;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14084__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15694 = state_15663;
state_15663 = G__15694;
continue;
} else {
return ret_value__14084__auto__;
}
break;
}
});
cljs$core$async$state_machine__14083__auto__ = function(state_15663){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14083__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14083__auto____1.call(this,state_15663);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__14083__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14083__auto____0;
cljs$core$async$state_machine__14083__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14083__auto____1;
return cljs$core$async$state_machine__14083__auto__;
})()
;})(switch__14082__auto__,c__14170__auto___15682,out))
})();
var state__14172__auto__ = (function (){var statearr_15680 = f__14171__auto__.call(null);
(statearr_15680[(6)] = c__14170__auto___15682);

return statearr_15680;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14172__auto__);
});})(c__14170__auto___15682,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__15696 = arguments.length;
switch (G__15696) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__14170__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14170__auto__){
return (function (){
var f__14171__auto__ = (function (){var switch__14082__auto__ = ((function (c__14170__auto__){
return (function (state_15759){
var state_val_15760 = (state_15759[(1)]);
if((state_val_15760 === (7))){
var inst_15755 = (state_15759[(2)]);
var state_15759__$1 = state_15759;
var statearr_15761_15799 = state_15759__$1;
(statearr_15761_15799[(2)] = inst_15755);

(statearr_15761_15799[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15760 === (20))){
var inst_15725 = (state_15759[(7)]);
var inst_15736 = (state_15759[(2)]);
var inst_15737 = cljs.core.next.call(null,inst_15725);
var inst_15711 = inst_15737;
var inst_15712 = null;
var inst_15713 = (0);
var inst_15714 = (0);
var state_15759__$1 = (function (){var statearr_15762 = state_15759;
(statearr_15762[(8)] = inst_15714);

(statearr_15762[(9)] = inst_15736);

(statearr_15762[(10)] = inst_15711);

(statearr_15762[(11)] = inst_15713);

(statearr_15762[(12)] = inst_15712);

return statearr_15762;
})();
var statearr_15763_15800 = state_15759__$1;
(statearr_15763_15800[(2)] = null);

(statearr_15763_15800[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15760 === (1))){
var state_15759__$1 = state_15759;
var statearr_15764_15801 = state_15759__$1;
(statearr_15764_15801[(2)] = null);

(statearr_15764_15801[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15760 === (4))){
var inst_15700 = (state_15759[(13)]);
var inst_15700__$1 = (state_15759[(2)]);
var inst_15701 = (inst_15700__$1 == null);
var state_15759__$1 = (function (){var statearr_15765 = state_15759;
(statearr_15765[(13)] = inst_15700__$1);

return statearr_15765;
})();
if(cljs.core.truth_(inst_15701)){
var statearr_15766_15802 = state_15759__$1;
(statearr_15766_15802[(1)] = (5));

} else {
var statearr_15767_15803 = state_15759__$1;
(statearr_15767_15803[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15760 === (15))){
var state_15759__$1 = state_15759;
var statearr_15771_15804 = state_15759__$1;
(statearr_15771_15804[(2)] = null);

(statearr_15771_15804[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15760 === (21))){
var state_15759__$1 = state_15759;
var statearr_15772_15805 = state_15759__$1;
(statearr_15772_15805[(2)] = null);

(statearr_15772_15805[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15760 === (13))){
var inst_15714 = (state_15759[(8)]);
var inst_15711 = (state_15759[(10)]);
var inst_15713 = (state_15759[(11)]);
var inst_15712 = (state_15759[(12)]);
var inst_15721 = (state_15759[(2)]);
var inst_15722 = (inst_15714 + (1));
var tmp15768 = inst_15711;
var tmp15769 = inst_15713;
var tmp15770 = inst_15712;
var inst_15711__$1 = tmp15768;
var inst_15712__$1 = tmp15770;
var inst_15713__$1 = tmp15769;
var inst_15714__$1 = inst_15722;
var state_15759__$1 = (function (){var statearr_15773 = state_15759;
(statearr_15773[(14)] = inst_15721);

(statearr_15773[(8)] = inst_15714__$1);

(statearr_15773[(10)] = inst_15711__$1);

(statearr_15773[(11)] = inst_15713__$1);

(statearr_15773[(12)] = inst_15712__$1);

return statearr_15773;
})();
var statearr_15774_15806 = state_15759__$1;
(statearr_15774_15806[(2)] = null);

(statearr_15774_15806[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15760 === (22))){
var state_15759__$1 = state_15759;
var statearr_15775_15807 = state_15759__$1;
(statearr_15775_15807[(2)] = null);

(statearr_15775_15807[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15760 === (6))){
var inst_15700 = (state_15759[(13)]);
var inst_15709 = f.call(null,inst_15700);
var inst_15710 = cljs.core.seq.call(null,inst_15709);
var inst_15711 = inst_15710;
var inst_15712 = null;
var inst_15713 = (0);
var inst_15714 = (0);
var state_15759__$1 = (function (){var statearr_15776 = state_15759;
(statearr_15776[(8)] = inst_15714);

(statearr_15776[(10)] = inst_15711);

(statearr_15776[(11)] = inst_15713);

(statearr_15776[(12)] = inst_15712);

return statearr_15776;
})();
var statearr_15777_15808 = state_15759__$1;
(statearr_15777_15808[(2)] = null);

(statearr_15777_15808[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15760 === (17))){
var inst_15725 = (state_15759[(7)]);
var inst_15729 = cljs.core.chunk_first.call(null,inst_15725);
var inst_15730 = cljs.core.chunk_rest.call(null,inst_15725);
var inst_15731 = cljs.core.count.call(null,inst_15729);
var inst_15711 = inst_15730;
var inst_15712 = inst_15729;
var inst_15713 = inst_15731;
var inst_15714 = (0);
var state_15759__$1 = (function (){var statearr_15778 = state_15759;
(statearr_15778[(8)] = inst_15714);

(statearr_15778[(10)] = inst_15711);

(statearr_15778[(11)] = inst_15713);

(statearr_15778[(12)] = inst_15712);

return statearr_15778;
})();
var statearr_15779_15809 = state_15759__$1;
(statearr_15779_15809[(2)] = null);

(statearr_15779_15809[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15760 === (3))){
var inst_15757 = (state_15759[(2)]);
var state_15759__$1 = state_15759;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15759__$1,inst_15757);
} else {
if((state_val_15760 === (12))){
var inst_15745 = (state_15759[(2)]);
var state_15759__$1 = state_15759;
var statearr_15780_15810 = state_15759__$1;
(statearr_15780_15810[(2)] = inst_15745);

(statearr_15780_15810[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15760 === (2))){
var state_15759__$1 = state_15759;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15759__$1,(4),in$);
} else {
if((state_val_15760 === (23))){
var inst_15753 = (state_15759[(2)]);
var state_15759__$1 = state_15759;
var statearr_15781_15811 = state_15759__$1;
(statearr_15781_15811[(2)] = inst_15753);

(statearr_15781_15811[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15760 === (19))){
var inst_15740 = (state_15759[(2)]);
var state_15759__$1 = state_15759;
var statearr_15782_15812 = state_15759__$1;
(statearr_15782_15812[(2)] = inst_15740);

(statearr_15782_15812[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15760 === (11))){
var inst_15725 = (state_15759[(7)]);
var inst_15711 = (state_15759[(10)]);
var inst_15725__$1 = cljs.core.seq.call(null,inst_15711);
var state_15759__$1 = (function (){var statearr_15783 = state_15759;
(statearr_15783[(7)] = inst_15725__$1);

return statearr_15783;
})();
if(inst_15725__$1){
var statearr_15784_15813 = state_15759__$1;
(statearr_15784_15813[(1)] = (14));

} else {
var statearr_15785_15814 = state_15759__$1;
(statearr_15785_15814[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15760 === (9))){
var inst_15747 = (state_15759[(2)]);
var inst_15748 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_15759__$1 = (function (){var statearr_15786 = state_15759;
(statearr_15786[(15)] = inst_15747);

return statearr_15786;
})();
if(cljs.core.truth_(inst_15748)){
var statearr_15787_15815 = state_15759__$1;
(statearr_15787_15815[(1)] = (21));

} else {
var statearr_15788_15816 = state_15759__$1;
(statearr_15788_15816[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15760 === (5))){
var inst_15703 = cljs.core.async.close_BANG_.call(null,out);
var state_15759__$1 = state_15759;
var statearr_15789_15817 = state_15759__$1;
(statearr_15789_15817[(2)] = inst_15703);

(statearr_15789_15817[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15760 === (14))){
var inst_15725 = (state_15759[(7)]);
var inst_15727 = cljs.core.chunked_seq_QMARK_.call(null,inst_15725);
var state_15759__$1 = state_15759;
if(inst_15727){
var statearr_15790_15818 = state_15759__$1;
(statearr_15790_15818[(1)] = (17));

} else {
var statearr_15791_15819 = state_15759__$1;
(statearr_15791_15819[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15760 === (16))){
var inst_15743 = (state_15759[(2)]);
var state_15759__$1 = state_15759;
var statearr_15792_15820 = state_15759__$1;
(statearr_15792_15820[(2)] = inst_15743);

(statearr_15792_15820[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15760 === (10))){
var inst_15714 = (state_15759[(8)]);
var inst_15712 = (state_15759[(12)]);
var inst_15719 = cljs.core._nth.call(null,inst_15712,inst_15714);
var state_15759__$1 = state_15759;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15759__$1,(13),out,inst_15719);
} else {
if((state_val_15760 === (18))){
var inst_15725 = (state_15759[(7)]);
var inst_15734 = cljs.core.first.call(null,inst_15725);
var state_15759__$1 = state_15759;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15759__$1,(20),out,inst_15734);
} else {
if((state_val_15760 === (8))){
var inst_15714 = (state_15759[(8)]);
var inst_15713 = (state_15759[(11)]);
var inst_15716 = (inst_15714 < inst_15713);
var inst_15717 = inst_15716;
var state_15759__$1 = state_15759;
if(cljs.core.truth_(inst_15717)){
var statearr_15793_15821 = state_15759__$1;
(statearr_15793_15821[(1)] = (10));

} else {
var statearr_15794_15822 = state_15759__$1;
(statearr_15794_15822[(1)] = (11));

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
}
}
}
}
}
});})(c__14170__auto__))
;
return ((function (switch__14082__auto__,c__14170__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__14083__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__14083__auto____0 = (function (){
var statearr_15795 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15795[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__14083__auto__);

(statearr_15795[(1)] = (1));

return statearr_15795;
});
var cljs$core$async$mapcat_STAR__$_state_machine__14083__auto____1 = (function (state_15759){
while(true){
var ret_value__14084__auto__ = (function (){try{while(true){
var result__14085__auto__ = switch__14082__auto__.call(null,state_15759);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14085__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14085__auto__;
}
break;
}
}catch (e15796){if((e15796 instanceof Object)){
var ex__14086__auto__ = e15796;
var statearr_15797_15823 = state_15759;
(statearr_15797_15823[(5)] = ex__14086__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15759);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15796;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14084__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15824 = state_15759;
state_15759 = G__15824;
continue;
} else {
return ret_value__14084__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__14083__auto__ = function(state_15759){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__14083__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__14083__auto____1.call(this,state_15759);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__14083__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__14083__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__14083__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__14083__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__14083__auto__;
})()
;})(switch__14082__auto__,c__14170__auto__))
})();
var state__14172__auto__ = (function (){var statearr_15798 = f__14171__auto__.call(null);
(statearr_15798[(6)] = c__14170__auto__);

return statearr_15798;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14172__auto__);
});})(c__14170__auto__))
);

return c__14170__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__15826 = arguments.length;
switch (G__15826) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__15829 = arguments.length;
switch (G__15829) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__15832 = arguments.length;
switch (G__15832) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__14170__auto___15879 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14170__auto___15879,out){
return (function (){
var f__14171__auto__ = (function (){var switch__14082__auto__ = ((function (c__14170__auto___15879,out){
return (function (state_15856){
var state_val_15857 = (state_15856[(1)]);
if((state_val_15857 === (7))){
var inst_15851 = (state_15856[(2)]);
var state_15856__$1 = state_15856;
var statearr_15858_15880 = state_15856__$1;
(statearr_15858_15880[(2)] = inst_15851);

(statearr_15858_15880[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15857 === (1))){
var inst_15833 = null;
var state_15856__$1 = (function (){var statearr_15859 = state_15856;
(statearr_15859[(7)] = inst_15833);

return statearr_15859;
})();
var statearr_15860_15881 = state_15856__$1;
(statearr_15860_15881[(2)] = null);

(statearr_15860_15881[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15857 === (4))){
var inst_15836 = (state_15856[(8)]);
var inst_15836__$1 = (state_15856[(2)]);
var inst_15837 = (inst_15836__$1 == null);
var inst_15838 = cljs.core.not.call(null,inst_15837);
var state_15856__$1 = (function (){var statearr_15861 = state_15856;
(statearr_15861[(8)] = inst_15836__$1);

return statearr_15861;
})();
if(inst_15838){
var statearr_15862_15882 = state_15856__$1;
(statearr_15862_15882[(1)] = (5));

} else {
var statearr_15863_15883 = state_15856__$1;
(statearr_15863_15883[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15857 === (6))){
var state_15856__$1 = state_15856;
var statearr_15864_15884 = state_15856__$1;
(statearr_15864_15884[(2)] = null);

(statearr_15864_15884[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15857 === (3))){
var inst_15853 = (state_15856[(2)]);
var inst_15854 = cljs.core.async.close_BANG_.call(null,out);
var state_15856__$1 = (function (){var statearr_15865 = state_15856;
(statearr_15865[(9)] = inst_15853);

return statearr_15865;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15856__$1,inst_15854);
} else {
if((state_val_15857 === (2))){
var state_15856__$1 = state_15856;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15856__$1,(4),ch);
} else {
if((state_val_15857 === (11))){
var inst_15836 = (state_15856[(8)]);
var inst_15845 = (state_15856[(2)]);
var inst_15833 = inst_15836;
var state_15856__$1 = (function (){var statearr_15866 = state_15856;
(statearr_15866[(7)] = inst_15833);

(statearr_15866[(10)] = inst_15845);

return statearr_15866;
})();
var statearr_15867_15885 = state_15856__$1;
(statearr_15867_15885[(2)] = null);

(statearr_15867_15885[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15857 === (9))){
var inst_15836 = (state_15856[(8)]);
var state_15856__$1 = state_15856;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15856__$1,(11),out,inst_15836);
} else {
if((state_val_15857 === (5))){
var inst_15833 = (state_15856[(7)]);
var inst_15836 = (state_15856[(8)]);
var inst_15840 = cljs.core._EQ_.call(null,inst_15836,inst_15833);
var state_15856__$1 = state_15856;
if(inst_15840){
var statearr_15869_15886 = state_15856__$1;
(statearr_15869_15886[(1)] = (8));

} else {
var statearr_15870_15887 = state_15856__$1;
(statearr_15870_15887[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15857 === (10))){
var inst_15848 = (state_15856[(2)]);
var state_15856__$1 = state_15856;
var statearr_15871_15888 = state_15856__$1;
(statearr_15871_15888[(2)] = inst_15848);

(statearr_15871_15888[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15857 === (8))){
var inst_15833 = (state_15856[(7)]);
var tmp15868 = inst_15833;
var inst_15833__$1 = tmp15868;
var state_15856__$1 = (function (){var statearr_15872 = state_15856;
(statearr_15872[(7)] = inst_15833__$1);

return statearr_15872;
})();
var statearr_15873_15889 = state_15856__$1;
(statearr_15873_15889[(2)] = null);

(statearr_15873_15889[(1)] = (2));


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
});})(c__14170__auto___15879,out))
;
return ((function (switch__14082__auto__,c__14170__auto___15879,out){
return (function() {
var cljs$core$async$state_machine__14083__auto__ = null;
var cljs$core$async$state_machine__14083__auto____0 = (function (){
var statearr_15874 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15874[(0)] = cljs$core$async$state_machine__14083__auto__);

(statearr_15874[(1)] = (1));

return statearr_15874;
});
var cljs$core$async$state_machine__14083__auto____1 = (function (state_15856){
while(true){
var ret_value__14084__auto__ = (function (){try{while(true){
var result__14085__auto__ = switch__14082__auto__.call(null,state_15856);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14085__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14085__auto__;
}
break;
}
}catch (e15875){if((e15875 instanceof Object)){
var ex__14086__auto__ = e15875;
var statearr_15876_15890 = state_15856;
(statearr_15876_15890[(5)] = ex__14086__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15856);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15875;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14084__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15891 = state_15856;
state_15856 = G__15891;
continue;
} else {
return ret_value__14084__auto__;
}
break;
}
});
cljs$core$async$state_machine__14083__auto__ = function(state_15856){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14083__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14083__auto____1.call(this,state_15856);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__14083__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14083__auto____0;
cljs$core$async$state_machine__14083__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14083__auto____1;
return cljs$core$async$state_machine__14083__auto__;
})()
;})(switch__14082__auto__,c__14170__auto___15879,out))
})();
var state__14172__auto__ = (function (){var statearr_15877 = f__14171__auto__.call(null);
(statearr_15877[(6)] = c__14170__auto___15879);

return statearr_15877;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14172__auto__);
});})(c__14170__auto___15879,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__15893 = arguments.length;
switch (G__15893) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__14170__auto___15959 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14170__auto___15959,out){
return (function (){
var f__14171__auto__ = (function (){var switch__14082__auto__ = ((function (c__14170__auto___15959,out){
return (function (state_15931){
var state_val_15932 = (state_15931[(1)]);
if((state_val_15932 === (7))){
var inst_15927 = (state_15931[(2)]);
var state_15931__$1 = state_15931;
var statearr_15933_15960 = state_15931__$1;
(statearr_15933_15960[(2)] = inst_15927);

(statearr_15933_15960[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15932 === (1))){
var inst_15894 = (new Array(n));
var inst_15895 = inst_15894;
var inst_15896 = (0);
var state_15931__$1 = (function (){var statearr_15934 = state_15931;
(statearr_15934[(7)] = inst_15896);

(statearr_15934[(8)] = inst_15895);

return statearr_15934;
})();
var statearr_15935_15961 = state_15931__$1;
(statearr_15935_15961[(2)] = null);

(statearr_15935_15961[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15932 === (4))){
var inst_15899 = (state_15931[(9)]);
var inst_15899__$1 = (state_15931[(2)]);
var inst_15900 = (inst_15899__$1 == null);
var inst_15901 = cljs.core.not.call(null,inst_15900);
var state_15931__$1 = (function (){var statearr_15936 = state_15931;
(statearr_15936[(9)] = inst_15899__$1);

return statearr_15936;
})();
if(inst_15901){
var statearr_15937_15962 = state_15931__$1;
(statearr_15937_15962[(1)] = (5));

} else {
var statearr_15938_15963 = state_15931__$1;
(statearr_15938_15963[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15932 === (15))){
var inst_15921 = (state_15931[(2)]);
var state_15931__$1 = state_15931;
var statearr_15939_15964 = state_15931__$1;
(statearr_15939_15964[(2)] = inst_15921);

(statearr_15939_15964[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15932 === (13))){
var state_15931__$1 = state_15931;
var statearr_15940_15965 = state_15931__$1;
(statearr_15940_15965[(2)] = null);

(statearr_15940_15965[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15932 === (6))){
var inst_15896 = (state_15931[(7)]);
var inst_15917 = (inst_15896 > (0));
var state_15931__$1 = state_15931;
if(cljs.core.truth_(inst_15917)){
var statearr_15941_15966 = state_15931__$1;
(statearr_15941_15966[(1)] = (12));

} else {
var statearr_15942_15967 = state_15931__$1;
(statearr_15942_15967[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15932 === (3))){
var inst_15929 = (state_15931[(2)]);
var state_15931__$1 = state_15931;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15931__$1,inst_15929);
} else {
if((state_val_15932 === (12))){
var inst_15895 = (state_15931[(8)]);
var inst_15919 = cljs.core.vec.call(null,inst_15895);
var state_15931__$1 = state_15931;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15931__$1,(15),out,inst_15919);
} else {
if((state_val_15932 === (2))){
var state_15931__$1 = state_15931;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15931__$1,(4),ch);
} else {
if((state_val_15932 === (11))){
var inst_15911 = (state_15931[(2)]);
var inst_15912 = (new Array(n));
var inst_15895 = inst_15912;
var inst_15896 = (0);
var state_15931__$1 = (function (){var statearr_15943 = state_15931;
(statearr_15943[(7)] = inst_15896);

(statearr_15943[(8)] = inst_15895);

(statearr_15943[(10)] = inst_15911);

return statearr_15943;
})();
var statearr_15944_15968 = state_15931__$1;
(statearr_15944_15968[(2)] = null);

(statearr_15944_15968[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15932 === (9))){
var inst_15895 = (state_15931[(8)]);
var inst_15909 = cljs.core.vec.call(null,inst_15895);
var state_15931__$1 = state_15931;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15931__$1,(11),out,inst_15909);
} else {
if((state_val_15932 === (5))){
var inst_15896 = (state_15931[(7)]);
var inst_15904 = (state_15931[(11)]);
var inst_15895 = (state_15931[(8)]);
var inst_15899 = (state_15931[(9)]);
var inst_15903 = (inst_15895[inst_15896] = inst_15899);
var inst_15904__$1 = (inst_15896 + (1));
var inst_15905 = (inst_15904__$1 < n);
var state_15931__$1 = (function (){var statearr_15945 = state_15931;
(statearr_15945[(11)] = inst_15904__$1);

(statearr_15945[(12)] = inst_15903);

return statearr_15945;
})();
if(cljs.core.truth_(inst_15905)){
var statearr_15946_15969 = state_15931__$1;
(statearr_15946_15969[(1)] = (8));

} else {
var statearr_15947_15970 = state_15931__$1;
(statearr_15947_15970[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15932 === (14))){
var inst_15924 = (state_15931[(2)]);
var inst_15925 = cljs.core.async.close_BANG_.call(null,out);
var state_15931__$1 = (function (){var statearr_15949 = state_15931;
(statearr_15949[(13)] = inst_15924);

return statearr_15949;
})();
var statearr_15950_15971 = state_15931__$1;
(statearr_15950_15971[(2)] = inst_15925);

(statearr_15950_15971[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15932 === (10))){
var inst_15915 = (state_15931[(2)]);
var state_15931__$1 = state_15931;
var statearr_15951_15972 = state_15931__$1;
(statearr_15951_15972[(2)] = inst_15915);

(statearr_15951_15972[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15932 === (8))){
var inst_15904 = (state_15931[(11)]);
var inst_15895 = (state_15931[(8)]);
var tmp15948 = inst_15895;
var inst_15895__$1 = tmp15948;
var inst_15896 = inst_15904;
var state_15931__$1 = (function (){var statearr_15952 = state_15931;
(statearr_15952[(7)] = inst_15896);

(statearr_15952[(8)] = inst_15895__$1);

return statearr_15952;
})();
var statearr_15953_15973 = state_15931__$1;
(statearr_15953_15973[(2)] = null);

(statearr_15953_15973[(1)] = (2));


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
});})(c__14170__auto___15959,out))
;
return ((function (switch__14082__auto__,c__14170__auto___15959,out){
return (function() {
var cljs$core$async$state_machine__14083__auto__ = null;
var cljs$core$async$state_machine__14083__auto____0 = (function (){
var statearr_15954 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15954[(0)] = cljs$core$async$state_machine__14083__auto__);

(statearr_15954[(1)] = (1));

return statearr_15954;
});
var cljs$core$async$state_machine__14083__auto____1 = (function (state_15931){
while(true){
var ret_value__14084__auto__ = (function (){try{while(true){
var result__14085__auto__ = switch__14082__auto__.call(null,state_15931);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14085__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14085__auto__;
}
break;
}
}catch (e15955){if((e15955 instanceof Object)){
var ex__14086__auto__ = e15955;
var statearr_15956_15974 = state_15931;
(statearr_15956_15974[(5)] = ex__14086__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15931);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15955;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14084__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15975 = state_15931;
state_15931 = G__15975;
continue;
} else {
return ret_value__14084__auto__;
}
break;
}
});
cljs$core$async$state_machine__14083__auto__ = function(state_15931){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14083__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14083__auto____1.call(this,state_15931);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__14083__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14083__auto____0;
cljs$core$async$state_machine__14083__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14083__auto____1;
return cljs$core$async$state_machine__14083__auto__;
})()
;})(switch__14082__auto__,c__14170__auto___15959,out))
})();
var state__14172__auto__ = (function (){var statearr_15957 = f__14171__auto__.call(null);
(statearr_15957[(6)] = c__14170__auto___15959);

return statearr_15957;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14172__auto__);
});})(c__14170__auto___15959,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__15977 = arguments.length;
switch (G__15977) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__14170__auto___16047 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14170__auto___16047,out){
return (function (){
var f__14171__auto__ = (function (){var switch__14082__auto__ = ((function (c__14170__auto___16047,out){
return (function (state_16019){
var state_val_16020 = (state_16019[(1)]);
if((state_val_16020 === (7))){
var inst_16015 = (state_16019[(2)]);
var state_16019__$1 = state_16019;
var statearr_16021_16048 = state_16019__$1;
(statearr_16021_16048[(2)] = inst_16015);

(statearr_16021_16048[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16020 === (1))){
var inst_15978 = [];
var inst_15979 = inst_15978;
var inst_15980 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_16019__$1 = (function (){var statearr_16022 = state_16019;
(statearr_16022[(7)] = inst_15980);

(statearr_16022[(8)] = inst_15979);

return statearr_16022;
})();
var statearr_16023_16049 = state_16019__$1;
(statearr_16023_16049[(2)] = null);

(statearr_16023_16049[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16020 === (4))){
var inst_15983 = (state_16019[(9)]);
var inst_15983__$1 = (state_16019[(2)]);
var inst_15984 = (inst_15983__$1 == null);
var inst_15985 = cljs.core.not.call(null,inst_15984);
var state_16019__$1 = (function (){var statearr_16024 = state_16019;
(statearr_16024[(9)] = inst_15983__$1);

return statearr_16024;
})();
if(inst_15985){
var statearr_16025_16050 = state_16019__$1;
(statearr_16025_16050[(1)] = (5));

} else {
var statearr_16026_16051 = state_16019__$1;
(statearr_16026_16051[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16020 === (15))){
var inst_16009 = (state_16019[(2)]);
var state_16019__$1 = state_16019;
var statearr_16027_16052 = state_16019__$1;
(statearr_16027_16052[(2)] = inst_16009);

(statearr_16027_16052[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16020 === (13))){
var state_16019__$1 = state_16019;
var statearr_16028_16053 = state_16019__$1;
(statearr_16028_16053[(2)] = null);

(statearr_16028_16053[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16020 === (6))){
var inst_15979 = (state_16019[(8)]);
var inst_16004 = inst_15979.length;
var inst_16005 = (inst_16004 > (0));
var state_16019__$1 = state_16019;
if(cljs.core.truth_(inst_16005)){
var statearr_16029_16054 = state_16019__$1;
(statearr_16029_16054[(1)] = (12));

} else {
var statearr_16030_16055 = state_16019__$1;
(statearr_16030_16055[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16020 === (3))){
var inst_16017 = (state_16019[(2)]);
var state_16019__$1 = state_16019;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16019__$1,inst_16017);
} else {
if((state_val_16020 === (12))){
var inst_15979 = (state_16019[(8)]);
var inst_16007 = cljs.core.vec.call(null,inst_15979);
var state_16019__$1 = state_16019;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16019__$1,(15),out,inst_16007);
} else {
if((state_val_16020 === (2))){
var state_16019__$1 = state_16019;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16019__$1,(4),ch);
} else {
if((state_val_16020 === (11))){
var inst_15987 = (state_16019[(10)]);
var inst_15983 = (state_16019[(9)]);
var inst_15997 = (state_16019[(2)]);
var inst_15998 = [];
var inst_15999 = inst_15998.push(inst_15983);
var inst_15979 = inst_15998;
var inst_15980 = inst_15987;
var state_16019__$1 = (function (){var statearr_16031 = state_16019;
(statearr_16031[(11)] = inst_15999);

(statearr_16031[(7)] = inst_15980);

(statearr_16031[(8)] = inst_15979);

(statearr_16031[(12)] = inst_15997);

return statearr_16031;
})();
var statearr_16032_16056 = state_16019__$1;
(statearr_16032_16056[(2)] = null);

(statearr_16032_16056[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16020 === (9))){
var inst_15979 = (state_16019[(8)]);
var inst_15995 = cljs.core.vec.call(null,inst_15979);
var state_16019__$1 = state_16019;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16019__$1,(11),out,inst_15995);
} else {
if((state_val_16020 === (5))){
var inst_15987 = (state_16019[(10)]);
var inst_15983 = (state_16019[(9)]);
var inst_15980 = (state_16019[(7)]);
var inst_15987__$1 = f.call(null,inst_15983);
var inst_15988 = cljs.core._EQ_.call(null,inst_15987__$1,inst_15980);
var inst_15989 = cljs.core.keyword_identical_QMARK_.call(null,inst_15980,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_15990 = (inst_15988) || (inst_15989);
var state_16019__$1 = (function (){var statearr_16033 = state_16019;
(statearr_16033[(10)] = inst_15987__$1);

return statearr_16033;
})();
if(cljs.core.truth_(inst_15990)){
var statearr_16034_16057 = state_16019__$1;
(statearr_16034_16057[(1)] = (8));

} else {
var statearr_16035_16058 = state_16019__$1;
(statearr_16035_16058[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16020 === (14))){
var inst_16012 = (state_16019[(2)]);
var inst_16013 = cljs.core.async.close_BANG_.call(null,out);
var state_16019__$1 = (function (){var statearr_16037 = state_16019;
(statearr_16037[(13)] = inst_16012);

return statearr_16037;
})();
var statearr_16038_16059 = state_16019__$1;
(statearr_16038_16059[(2)] = inst_16013);

(statearr_16038_16059[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16020 === (10))){
var inst_16002 = (state_16019[(2)]);
var state_16019__$1 = state_16019;
var statearr_16039_16060 = state_16019__$1;
(statearr_16039_16060[(2)] = inst_16002);

(statearr_16039_16060[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16020 === (8))){
var inst_15987 = (state_16019[(10)]);
var inst_15983 = (state_16019[(9)]);
var inst_15979 = (state_16019[(8)]);
var inst_15992 = inst_15979.push(inst_15983);
var tmp16036 = inst_15979;
var inst_15979__$1 = tmp16036;
var inst_15980 = inst_15987;
var state_16019__$1 = (function (){var statearr_16040 = state_16019;
(statearr_16040[(7)] = inst_15980);

(statearr_16040[(14)] = inst_15992);

(statearr_16040[(8)] = inst_15979__$1);

return statearr_16040;
})();
var statearr_16041_16061 = state_16019__$1;
(statearr_16041_16061[(2)] = null);

(statearr_16041_16061[(1)] = (2));


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
});})(c__14170__auto___16047,out))
;
return ((function (switch__14082__auto__,c__14170__auto___16047,out){
return (function() {
var cljs$core$async$state_machine__14083__auto__ = null;
var cljs$core$async$state_machine__14083__auto____0 = (function (){
var statearr_16042 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16042[(0)] = cljs$core$async$state_machine__14083__auto__);

(statearr_16042[(1)] = (1));

return statearr_16042;
});
var cljs$core$async$state_machine__14083__auto____1 = (function (state_16019){
while(true){
var ret_value__14084__auto__ = (function (){try{while(true){
var result__14085__auto__ = switch__14082__auto__.call(null,state_16019);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14085__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14085__auto__;
}
break;
}
}catch (e16043){if((e16043 instanceof Object)){
var ex__14086__auto__ = e16043;
var statearr_16044_16062 = state_16019;
(statearr_16044_16062[(5)] = ex__14086__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16019);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16043;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14084__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16063 = state_16019;
state_16019 = G__16063;
continue;
} else {
return ret_value__14084__auto__;
}
break;
}
});
cljs$core$async$state_machine__14083__auto__ = function(state_16019){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14083__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14083__auto____1.call(this,state_16019);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__14083__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14083__auto____0;
cljs$core$async$state_machine__14083__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14083__auto____1;
return cljs$core$async$state_machine__14083__auto__;
})()
;})(switch__14082__auto__,c__14170__auto___16047,out))
})();
var state__14172__auto__ = (function (){var statearr_16045 = f__14171__auto__.call(null);
(statearr_16045[(6)] = c__14170__auto___16047);

return statearr_16045;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14172__auto__);
});})(c__14170__auto___16047,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map
