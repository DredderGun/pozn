// Compiled by ClojureScript 1.9.908 {}
goog.provide('pozn_adaptive.sale_receipt_list.events');
goog.require('cljs.core');
goog.require('re_frame.core');
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("pozn-adaptive.sale-receipt-list.events","change-layout","pozn-adaptive.sale-receipt-list.events/change-layout",-1277227815),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v], null),(function (db,p__19899){
var vec__19900 = p__19899;
var layout_key = cljs.core.nth.call(null,vec__19900,(0),null);
if(cljs.core._EQ_.call(null,layout_key,new cljs.core.Keyword(null,"new-sale-receipt","new-sale-receipt",-587581497))){
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"layout","layout",-2120940921),layout_key),new cljs.core.Keyword(null,"old-dish?","old-dish?",888066017),false);
} else {
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"layout","layout",-2120940921),layout_key);
}
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("pozn-adaptive.sale-receipt-list.events","turn-on-old-receipt","pozn-adaptive.sale-receipt-list.events/turn-on-old-receipt",112178146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v], null),(function (db,p__19903){
var vec__19904 = p__19903;
var receipt_id = cljs.core.nth.call(null,vec__19904,(0),null);
return cljs.core.assoc_in.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"layout","layout",-2120940921),new cljs.core.Keyword(null,"new-sale-receipt","new-sale-receipt",-587581497)),new cljs.core.Keyword(null,"active-guest","active-guest",1493829244),(1)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-items","active-items",-1682550794),new cljs.core.Keyword(null,"active-receipt","active-receipt",916564651)], null),receipt_id);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("pozn-adaptive.sale-receipt-list.events","give-statistic","pozn-adaptive.sale-receipt-list.events/give-statistic",-220736221),cljs.core.PersistentVector.EMPTY,(function (db,_){
var sold_dishes_count = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
var common_sum = cljs.core.atom.call(null,(0));
var card_sum = cljs.core.atom.call(null,(0));
var cash_sum = cljs.core.atom.call(null,(0));
var paid_receipt_count = cljs.core.atom.call(null,(0));
var unpaid_receipt_count = cljs.core.atom.call(null,(0));
var seq__19907_20013 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"menu-items","menu-items",-1870634357).cljs$core$IFn$_invoke$arity$1(db));
var chunk__19908_20014 = null;
var count__19909_20015 = (0);
var i__19910_20016 = (0);
while(true){
if((i__19910_20016 < count__19909_20015)){
var dish_from_menu_20017 = cljs.core._nth.call(null,chunk__19908_20014,i__19910_20016);
var current_count_20018 = cljs.core.atom.call(null,(0));
var seq__19911_20019 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"sale-receipts","sale-receipts",630620995).cljs$core$IFn$_invoke$arity$1(db));
var chunk__19912_20020 = null;
var count__19913_20021 = (0);
var i__19914_20022 = (0);
while(true){
if((i__19914_20022 < count__19913_20021)){
var vec__19915_20023 = cljs.core._nth.call(null,chunk__19912_20020,i__19914_20022);
var id_20024 = cljs.core.nth.call(null,vec__19915_20023,(0),null);
var receipt_20025 = cljs.core.nth.call(null,vec__19915_20023,(1),null);
var seq__19918_20026 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"guests","guests",617113038).cljs$core$IFn$_invoke$arity$1(receipt_20025));
var chunk__19919_20027 = null;
var count__19920_20028 = (0);
var i__19921_20029 = (0);
while(true){
if((i__19921_20029 < count__19920_20028)){
var vec__19922_20030 = cljs.core._nth.call(null,chunk__19919_20027,i__19921_20029);
var id_20031__$1 = cljs.core.nth.call(null,vec__19922_20030,(0),null);
var guest_20032 = cljs.core.nth.call(null,vec__19922_20030,(1),null);
var seq__19925_20033 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"dishes","dishes",1259783877).cljs$core$IFn$_invoke$arity$1(guest_20032));
var chunk__19926_20034 = null;
var count__19927_20035 = (0);
var i__19928_20036 = (0);
while(true){
if((i__19928_20036 < count__19927_20035)){
var dish_from_receipt_20037 = cljs.core._nth.call(null,chunk__19926_20034,i__19928_20036);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(dish_from_menu_20017),new cljs.core.Keyword(null,"menu-item-id","menu-item-id",-1188488418).cljs$core$IFn$_invoke$arity$1(dish_from_receipt_20037))){
cljs.core.swap_BANG_.call(null,current_count_20018,cljs.core._PLUS_,new cljs.core.Keyword(null,"count","count",2139924085).cljs$core$IFn$_invoke$arity$1(dish_from_receipt_20037));
} else {
}

var G__20038 = seq__19925_20033;
var G__20039 = chunk__19926_20034;
var G__20040 = count__19927_20035;
var G__20041 = (i__19928_20036 + (1));
seq__19925_20033 = G__20038;
chunk__19926_20034 = G__20039;
count__19927_20035 = G__20040;
i__19928_20036 = G__20041;
continue;
} else {
var temp__4657__auto___20042 = cljs.core.seq.call(null,seq__19925_20033);
if(temp__4657__auto___20042){
var seq__19925_20043__$1 = temp__4657__auto___20042;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19925_20043__$1)){
var c__8484__auto___20044 = cljs.core.chunk_first.call(null,seq__19925_20043__$1);
var G__20045 = cljs.core.chunk_rest.call(null,seq__19925_20043__$1);
var G__20046 = c__8484__auto___20044;
var G__20047 = cljs.core.count.call(null,c__8484__auto___20044);
var G__20048 = (0);
seq__19925_20033 = G__20045;
chunk__19926_20034 = G__20046;
count__19927_20035 = G__20047;
i__19928_20036 = G__20048;
continue;
} else {
var dish_from_receipt_20049 = cljs.core.first.call(null,seq__19925_20043__$1);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(dish_from_menu_20017),new cljs.core.Keyword(null,"menu-item-id","menu-item-id",-1188488418).cljs$core$IFn$_invoke$arity$1(dish_from_receipt_20049))){
cljs.core.swap_BANG_.call(null,current_count_20018,cljs.core._PLUS_,new cljs.core.Keyword(null,"count","count",2139924085).cljs$core$IFn$_invoke$arity$1(dish_from_receipt_20049));
} else {
}

var G__20050 = cljs.core.next.call(null,seq__19925_20043__$1);
var G__20051 = null;
var G__20052 = (0);
var G__20053 = (0);
seq__19925_20033 = G__20050;
chunk__19926_20034 = G__20051;
count__19927_20035 = G__20052;
i__19928_20036 = G__20053;
continue;
}
} else {
}
}
break;
}

var G__20054 = seq__19918_20026;
var G__20055 = chunk__19919_20027;
var G__20056 = count__19920_20028;
var G__20057 = (i__19921_20029 + (1));
seq__19918_20026 = G__20054;
chunk__19919_20027 = G__20055;
count__19920_20028 = G__20056;
i__19921_20029 = G__20057;
continue;
} else {
var temp__4657__auto___20058 = cljs.core.seq.call(null,seq__19918_20026);
if(temp__4657__auto___20058){
var seq__19918_20059__$1 = temp__4657__auto___20058;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19918_20059__$1)){
var c__8484__auto___20060 = cljs.core.chunk_first.call(null,seq__19918_20059__$1);
var G__20061 = cljs.core.chunk_rest.call(null,seq__19918_20059__$1);
var G__20062 = c__8484__auto___20060;
var G__20063 = cljs.core.count.call(null,c__8484__auto___20060);
var G__20064 = (0);
seq__19918_20026 = G__20061;
chunk__19919_20027 = G__20062;
count__19920_20028 = G__20063;
i__19921_20029 = G__20064;
continue;
} else {
var vec__19929_20065 = cljs.core.first.call(null,seq__19918_20059__$1);
var id_20066__$1 = cljs.core.nth.call(null,vec__19929_20065,(0),null);
var guest_20067 = cljs.core.nth.call(null,vec__19929_20065,(1),null);
var seq__19932_20068 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"dishes","dishes",1259783877).cljs$core$IFn$_invoke$arity$1(guest_20067));
var chunk__19933_20069 = null;
var count__19934_20070 = (0);
var i__19935_20071 = (0);
while(true){
if((i__19935_20071 < count__19934_20070)){
var dish_from_receipt_20072 = cljs.core._nth.call(null,chunk__19933_20069,i__19935_20071);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(dish_from_menu_20017),new cljs.core.Keyword(null,"menu-item-id","menu-item-id",-1188488418).cljs$core$IFn$_invoke$arity$1(dish_from_receipt_20072))){
cljs.core.swap_BANG_.call(null,current_count_20018,cljs.core._PLUS_,new cljs.core.Keyword(null,"count","count",2139924085).cljs$core$IFn$_invoke$arity$1(dish_from_receipt_20072));
} else {
}

var G__20073 = seq__19932_20068;
var G__20074 = chunk__19933_20069;
var G__20075 = count__19934_20070;
var G__20076 = (i__19935_20071 + (1));
seq__19932_20068 = G__20073;
chunk__19933_20069 = G__20074;
count__19934_20070 = G__20075;
i__19935_20071 = G__20076;
continue;
} else {
var temp__4657__auto___20077__$1 = cljs.core.seq.call(null,seq__19932_20068);
if(temp__4657__auto___20077__$1){
var seq__19932_20078__$1 = temp__4657__auto___20077__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19932_20078__$1)){
var c__8484__auto___20079 = cljs.core.chunk_first.call(null,seq__19932_20078__$1);
var G__20080 = cljs.core.chunk_rest.call(null,seq__19932_20078__$1);
var G__20081 = c__8484__auto___20079;
var G__20082 = cljs.core.count.call(null,c__8484__auto___20079);
var G__20083 = (0);
seq__19932_20068 = G__20080;
chunk__19933_20069 = G__20081;
count__19934_20070 = G__20082;
i__19935_20071 = G__20083;
continue;
} else {
var dish_from_receipt_20084 = cljs.core.first.call(null,seq__19932_20078__$1);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(dish_from_menu_20017),new cljs.core.Keyword(null,"menu-item-id","menu-item-id",-1188488418).cljs$core$IFn$_invoke$arity$1(dish_from_receipt_20084))){
cljs.core.swap_BANG_.call(null,current_count_20018,cljs.core._PLUS_,new cljs.core.Keyword(null,"count","count",2139924085).cljs$core$IFn$_invoke$arity$1(dish_from_receipt_20084));
} else {
}

var G__20085 = cljs.core.next.call(null,seq__19932_20078__$1);
var G__20086 = null;
var G__20087 = (0);
var G__20088 = (0);
seq__19932_20068 = G__20085;
chunk__19933_20069 = G__20086;
count__19934_20070 = G__20087;
i__19935_20071 = G__20088;
continue;
}
} else {
}
}
break;
}

var G__20089 = cljs.core.next.call(null,seq__19918_20059__$1);
var G__20090 = null;
var G__20091 = (0);
var G__20092 = (0);
seq__19918_20026 = G__20089;
chunk__19919_20027 = G__20090;
count__19920_20028 = G__20091;
i__19921_20029 = G__20092;
continue;
}
} else {
}
}
break;
}

var G__20093 = seq__19911_20019;
var G__20094 = chunk__19912_20020;
var G__20095 = count__19913_20021;
var G__20096 = (i__19914_20022 + (1));
seq__19911_20019 = G__20093;
chunk__19912_20020 = G__20094;
count__19913_20021 = G__20095;
i__19914_20022 = G__20096;
continue;
} else {
var temp__4657__auto___20097 = cljs.core.seq.call(null,seq__19911_20019);
if(temp__4657__auto___20097){
var seq__19911_20098__$1 = temp__4657__auto___20097;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19911_20098__$1)){
var c__8484__auto___20099 = cljs.core.chunk_first.call(null,seq__19911_20098__$1);
var G__20100 = cljs.core.chunk_rest.call(null,seq__19911_20098__$1);
var G__20101 = c__8484__auto___20099;
var G__20102 = cljs.core.count.call(null,c__8484__auto___20099);
var G__20103 = (0);
seq__19911_20019 = G__20100;
chunk__19912_20020 = G__20101;
count__19913_20021 = G__20102;
i__19914_20022 = G__20103;
continue;
} else {
var vec__19936_20104 = cljs.core.first.call(null,seq__19911_20098__$1);
var id_20105 = cljs.core.nth.call(null,vec__19936_20104,(0),null);
var receipt_20106 = cljs.core.nth.call(null,vec__19936_20104,(1),null);
var seq__19939_20107 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"guests","guests",617113038).cljs$core$IFn$_invoke$arity$1(receipt_20106));
var chunk__19940_20108 = null;
var count__19941_20109 = (0);
var i__19942_20110 = (0);
while(true){
if((i__19942_20110 < count__19941_20109)){
var vec__19943_20111 = cljs.core._nth.call(null,chunk__19940_20108,i__19942_20110);
var id_20112__$1 = cljs.core.nth.call(null,vec__19943_20111,(0),null);
var guest_20113 = cljs.core.nth.call(null,vec__19943_20111,(1),null);
var seq__19946_20114 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"dishes","dishes",1259783877).cljs$core$IFn$_invoke$arity$1(guest_20113));
var chunk__19947_20115 = null;
var count__19948_20116 = (0);
var i__19949_20117 = (0);
while(true){
if((i__19949_20117 < count__19948_20116)){
var dish_from_receipt_20118 = cljs.core._nth.call(null,chunk__19947_20115,i__19949_20117);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(dish_from_menu_20017),new cljs.core.Keyword(null,"menu-item-id","menu-item-id",-1188488418).cljs$core$IFn$_invoke$arity$1(dish_from_receipt_20118))){
cljs.core.swap_BANG_.call(null,current_count_20018,cljs.core._PLUS_,new cljs.core.Keyword(null,"count","count",2139924085).cljs$core$IFn$_invoke$arity$1(dish_from_receipt_20118));
} else {
}

var G__20119 = seq__19946_20114;
var G__20120 = chunk__19947_20115;
var G__20121 = count__19948_20116;
var G__20122 = (i__19949_20117 + (1));
seq__19946_20114 = G__20119;
chunk__19947_20115 = G__20120;
count__19948_20116 = G__20121;
i__19949_20117 = G__20122;
continue;
} else {
var temp__4657__auto___20123__$1 = cljs.core.seq.call(null,seq__19946_20114);
if(temp__4657__auto___20123__$1){
var seq__19946_20124__$1 = temp__4657__auto___20123__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19946_20124__$1)){
var c__8484__auto___20125 = cljs.core.chunk_first.call(null,seq__19946_20124__$1);
var G__20126 = cljs.core.chunk_rest.call(null,seq__19946_20124__$1);
var G__20127 = c__8484__auto___20125;
var G__20128 = cljs.core.count.call(null,c__8484__auto___20125);
var G__20129 = (0);
seq__19946_20114 = G__20126;
chunk__19947_20115 = G__20127;
count__19948_20116 = G__20128;
i__19949_20117 = G__20129;
continue;
} else {
var dish_from_receipt_20130 = cljs.core.first.call(null,seq__19946_20124__$1);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(dish_from_menu_20017),new cljs.core.Keyword(null,"menu-item-id","menu-item-id",-1188488418).cljs$core$IFn$_invoke$arity$1(dish_from_receipt_20130))){
cljs.core.swap_BANG_.call(null,current_count_20018,cljs.core._PLUS_,new cljs.core.Keyword(null,"count","count",2139924085).cljs$core$IFn$_invoke$arity$1(dish_from_receipt_20130));
} else {
}

var G__20131 = cljs.core.next.call(null,seq__19946_20124__$1);
var G__20132 = null;
var G__20133 = (0);
var G__20134 = (0);
seq__19946_20114 = G__20131;
chunk__19947_20115 = G__20132;
count__19948_20116 = G__20133;
i__19949_20117 = G__20134;
continue;
}
} else {
}
}
break;
}

var G__20135 = seq__19939_20107;
var G__20136 = chunk__19940_20108;
var G__20137 = count__19941_20109;
var G__20138 = (i__19942_20110 + (1));
seq__19939_20107 = G__20135;
chunk__19940_20108 = G__20136;
count__19941_20109 = G__20137;
i__19942_20110 = G__20138;
continue;
} else {
var temp__4657__auto___20139__$1 = cljs.core.seq.call(null,seq__19939_20107);
if(temp__4657__auto___20139__$1){
var seq__19939_20140__$1 = temp__4657__auto___20139__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19939_20140__$1)){
var c__8484__auto___20141 = cljs.core.chunk_first.call(null,seq__19939_20140__$1);
var G__20142 = cljs.core.chunk_rest.call(null,seq__19939_20140__$1);
var G__20143 = c__8484__auto___20141;
var G__20144 = cljs.core.count.call(null,c__8484__auto___20141);
var G__20145 = (0);
seq__19939_20107 = G__20142;
chunk__19940_20108 = G__20143;
count__19941_20109 = G__20144;
i__19942_20110 = G__20145;
continue;
} else {
var vec__19950_20146 = cljs.core.first.call(null,seq__19939_20140__$1);
var id_20147__$1 = cljs.core.nth.call(null,vec__19950_20146,(0),null);
var guest_20148 = cljs.core.nth.call(null,vec__19950_20146,(1),null);
var seq__19953_20149 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"dishes","dishes",1259783877).cljs$core$IFn$_invoke$arity$1(guest_20148));
var chunk__19954_20150 = null;
var count__19955_20151 = (0);
var i__19956_20152 = (0);
while(true){
if((i__19956_20152 < count__19955_20151)){
var dish_from_receipt_20153 = cljs.core._nth.call(null,chunk__19954_20150,i__19956_20152);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(dish_from_menu_20017),new cljs.core.Keyword(null,"menu-item-id","menu-item-id",-1188488418).cljs$core$IFn$_invoke$arity$1(dish_from_receipt_20153))){
cljs.core.swap_BANG_.call(null,current_count_20018,cljs.core._PLUS_,new cljs.core.Keyword(null,"count","count",2139924085).cljs$core$IFn$_invoke$arity$1(dish_from_receipt_20153));
} else {
}

var G__20154 = seq__19953_20149;
var G__20155 = chunk__19954_20150;
var G__20156 = count__19955_20151;
var G__20157 = (i__19956_20152 + (1));
seq__19953_20149 = G__20154;
chunk__19954_20150 = G__20155;
count__19955_20151 = G__20156;
i__19956_20152 = G__20157;
continue;
} else {
var temp__4657__auto___20158__$2 = cljs.core.seq.call(null,seq__19953_20149);
if(temp__4657__auto___20158__$2){
var seq__19953_20159__$1 = temp__4657__auto___20158__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19953_20159__$1)){
var c__8484__auto___20160 = cljs.core.chunk_first.call(null,seq__19953_20159__$1);
var G__20161 = cljs.core.chunk_rest.call(null,seq__19953_20159__$1);
var G__20162 = c__8484__auto___20160;
var G__20163 = cljs.core.count.call(null,c__8484__auto___20160);
var G__20164 = (0);
seq__19953_20149 = G__20161;
chunk__19954_20150 = G__20162;
count__19955_20151 = G__20163;
i__19956_20152 = G__20164;
continue;
} else {
var dish_from_receipt_20165 = cljs.core.first.call(null,seq__19953_20159__$1);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(dish_from_menu_20017),new cljs.core.Keyword(null,"menu-item-id","menu-item-id",-1188488418).cljs$core$IFn$_invoke$arity$1(dish_from_receipt_20165))){
cljs.core.swap_BANG_.call(null,current_count_20018,cljs.core._PLUS_,new cljs.core.Keyword(null,"count","count",2139924085).cljs$core$IFn$_invoke$arity$1(dish_from_receipt_20165));
} else {
}

var G__20166 = cljs.core.next.call(null,seq__19953_20159__$1);
var G__20167 = null;
var G__20168 = (0);
var G__20169 = (0);
seq__19953_20149 = G__20166;
chunk__19954_20150 = G__20167;
count__19955_20151 = G__20168;
i__19956_20152 = G__20169;
continue;
}
} else {
}
}
break;
}

var G__20170 = cljs.core.next.call(null,seq__19939_20140__$1);
var G__20171 = null;
var G__20172 = (0);
var G__20173 = (0);
seq__19939_20107 = G__20170;
chunk__19940_20108 = G__20171;
count__19941_20109 = G__20172;
i__19942_20110 = G__20173;
continue;
}
} else {
}
}
break;
}

var G__20174 = cljs.core.next.call(null,seq__19911_20098__$1);
var G__20175 = null;
var G__20176 = (0);
var G__20177 = (0);
seq__19911_20019 = G__20174;
chunk__19912_20020 = G__20175;
count__19913_20021 = G__20176;
i__19914_20022 = G__20177;
continue;
}
} else {
}
}
break;
}

if(cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,current_count_20018),(0))){
cljs.core.swap_BANG_.call(null,sold_dishes_count,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(dish_from_menu_20017),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"short_name","short_name",1420585806).cljs$core$IFn$_invoke$arity$1(dish_from_menu_20017),new cljs.core.Keyword(null,"count","count",2139924085),cljs.core.deref.call(null,current_count_20018)], null));
} else {
}

cljs.core.reset_BANG_.call(null,current_count_20018,(0));

var G__20178 = seq__19907_20013;
var G__20179 = chunk__19908_20014;
var G__20180 = count__19909_20015;
var G__20181 = (i__19910_20016 + (1));
seq__19907_20013 = G__20178;
chunk__19908_20014 = G__20179;
count__19909_20015 = G__20180;
i__19910_20016 = G__20181;
continue;
} else {
var temp__4657__auto___20182 = cljs.core.seq.call(null,seq__19907_20013);
if(temp__4657__auto___20182){
var seq__19907_20183__$1 = temp__4657__auto___20182;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19907_20183__$1)){
var c__8484__auto___20184 = cljs.core.chunk_first.call(null,seq__19907_20183__$1);
var G__20185 = cljs.core.chunk_rest.call(null,seq__19907_20183__$1);
var G__20186 = c__8484__auto___20184;
var G__20187 = cljs.core.count.call(null,c__8484__auto___20184);
var G__20188 = (0);
seq__19907_20013 = G__20185;
chunk__19908_20014 = G__20186;
count__19909_20015 = G__20187;
i__19910_20016 = G__20188;
continue;
} else {
var dish_from_menu_20189 = cljs.core.first.call(null,seq__19907_20183__$1);
var current_count_20190 = cljs.core.atom.call(null,(0));
var seq__19957_20191 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"sale-receipts","sale-receipts",630620995).cljs$core$IFn$_invoke$arity$1(db));
var chunk__19958_20192 = null;
var count__19959_20193 = (0);
var i__19960_20194 = (0);
while(true){
if((i__19960_20194 < count__19959_20193)){
var vec__19961_20195 = cljs.core._nth.call(null,chunk__19958_20192,i__19960_20194);
var id_20196 = cljs.core.nth.call(null,vec__19961_20195,(0),null);
var receipt_20197 = cljs.core.nth.call(null,vec__19961_20195,(1),null);
var seq__19964_20198 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"guests","guests",617113038).cljs$core$IFn$_invoke$arity$1(receipt_20197));
var chunk__19965_20199 = null;
var count__19966_20200 = (0);
var i__19967_20201 = (0);
while(true){
if((i__19967_20201 < count__19966_20200)){
var vec__19968_20202 = cljs.core._nth.call(null,chunk__19965_20199,i__19967_20201);
var id_20203__$1 = cljs.core.nth.call(null,vec__19968_20202,(0),null);
var guest_20204 = cljs.core.nth.call(null,vec__19968_20202,(1),null);
var seq__19971_20205 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"dishes","dishes",1259783877).cljs$core$IFn$_invoke$arity$1(guest_20204));
var chunk__19972_20206 = null;
var count__19973_20207 = (0);
var i__19974_20208 = (0);
while(true){
if((i__19974_20208 < count__19973_20207)){
var dish_from_receipt_20209 = cljs.core._nth.call(null,chunk__19972_20206,i__19974_20208);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(dish_from_menu_20189),new cljs.core.Keyword(null,"menu-item-id","menu-item-id",-1188488418).cljs$core$IFn$_invoke$arity$1(dish_from_receipt_20209))){
cljs.core.swap_BANG_.call(null,current_count_20190,cljs.core._PLUS_,new cljs.core.Keyword(null,"count","count",2139924085).cljs$core$IFn$_invoke$arity$1(dish_from_receipt_20209));
} else {
}

var G__20210 = seq__19971_20205;
var G__20211 = chunk__19972_20206;
var G__20212 = count__19973_20207;
var G__20213 = (i__19974_20208 + (1));
seq__19971_20205 = G__20210;
chunk__19972_20206 = G__20211;
count__19973_20207 = G__20212;
i__19974_20208 = G__20213;
continue;
} else {
var temp__4657__auto___20214__$1 = cljs.core.seq.call(null,seq__19971_20205);
if(temp__4657__auto___20214__$1){
var seq__19971_20215__$1 = temp__4657__auto___20214__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19971_20215__$1)){
var c__8484__auto___20216 = cljs.core.chunk_first.call(null,seq__19971_20215__$1);
var G__20217 = cljs.core.chunk_rest.call(null,seq__19971_20215__$1);
var G__20218 = c__8484__auto___20216;
var G__20219 = cljs.core.count.call(null,c__8484__auto___20216);
var G__20220 = (0);
seq__19971_20205 = G__20217;
chunk__19972_20206 = G__20218;
count__19973_20207 = G__20219;
i__19974_20208 = G__20220;
continue;
} else {
var dish_from_receipt_20221 = cljs.core.first.call(null,seq__19971_20215__$1);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(dish_from_menu_20189),new cljs.core.Keyword(null,"menu-item-id","menu-item-id",-1188488418).cljs$core$IFn$_invoke$arity$1(dish_from_receipt_20221))){
cljs.core.swap_BANG_.call(null,current_count_20190,cljs.core._PLUS_,new cljs.core.Keyword(null,"count","count",2139924085).cljs$core$IFn$_invoke$arity$1(dish_from_receipt_20221));
} else {
}

var G__20222 = cljs.core.next.call(null,seq__19971_20215__$1);
var G__20223 = null;
var G__20224 = (0);
var G__20225 = (0);
seq__19971_20205 = G__20222;
chunk__19972_20206 = G__20223;
count__19973_20207 = G__20224;
i__19974_20208 = G__20225;
continue;
}
} else {
}
}
break;
}

var G__20226 = seq__19964_20198;
var G__20227 = chunk__19965_20199;
var G__20228 = count__19966_20200;
var G__20229 = (i__19967_20201 + (1));
seq__19964_20198 = G__20226;
chunk__19965_20199 = G__20227;
count__19966_20200 = G__20228;
i__19967_20201 = G__20229;
continue;
} else {
var temp__4657__auto___20230__$1 = cljs.core.seq.call(null,seq__19964_20198);
if(temp__4657__auto___20230__$1){
var seq__19964_20231__$1 = temp__4657__auto___20230__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19964_20231__$1)){
var c__8484__auto___20232 = cljs.core.chunk_first.call(null,seq__19964_20231__$1);
var G__20233 = cljs.core.chunk_rest.call(null,seq__19964_20231__$1);
var G__20234 = c__8484__auto___20232;
var G__20235 = cljs.core.count.call(null,c__8484__auto___20232);
var G__20236 = (0);
seq__19964_20198 = G__20233;
chunk__19965_20199 = G__20234;
count__19966_20200 = G__20235;
i__19967_20201 = G__20236;
continue;
} else {
var vec__19975_20237 = cljs.core.first.call(null,seq__19964_20231__$1);
var id_20238__$1 = cljs.core.nth.call(null,vec__19975_20237,(0),null);
var guest_20239 = cljs.core.nth.call(null,vec__19975_20237,(1),null);
var seq__19978_20240 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"dishes","dishes",1259783877).cljs$core$IFn$_invoke$arity$1(guest_20239));
var chunk__19979_20241 = null;
var count__19980_20242 = (0);
var i__19981_20243 = (0);
while(true){
if((i__19981_20243 < count__19980_20242)){
var dish_from_receipt_20244 = cljs.core._nth.call(null,chunk__19979_20241,i__19981_20243);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(dish_from_menu_20189),new cljs.core.Keyword(null,"menu-item-id","menu-item-id",-1188488418).cljs$core$IFn$_invoke$arity$1(dish_from_receipt_20244))){
cljs.core.swap_BANG_.call(null,current_count_20190,cljs.core._PLUS_,new cljs.core.Keyword(null,"count","count",2139924085).cljs$core$IFn$_invoke$arity$1(dish_from_receipt_20244));
} else {
}

var G__20245 = seq__19978_20240;
var G__20246 = chunk__19979_20241;
var G__20247 = count__19980_20242;
var G__20248 = (i__19981_20243 + (1));
seq__19978_20240 = G__20245;
chunk__19979_20241 = G__20246;
count__19980_20242 = G__20247;
i__19981_20243 = G__20248;
continue;
} else {
var temp__4657__auto___20249__$2 = cljs.core.seq.call(null,seq__19978_20240);
if(temp__4657__auto___20249__$2){
var seq__19978_20250__$1 = temp__4657__auto___20249__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19978_20250__$1)){
var c__8484__auto___20251 = cljs.core.chunk_first.call(null,seq__19978_20250__$1);
var G__20252 = cljs.core.chunk_rest.call(null,seq__19978_20250__$1);
var G__20253 = c__8484__auto___20251;
var G__20254 = cljs.core.count.call(null,c__8484__auto___20251);
var G__20255 = (0);
seq__19978_20240 = G__20252;
chunk__19979_20241 = G__20253;
count__19980_20242 = G__20254;
i__19981_20243 = G__20255;
continue;
} else {
var dish_from_receipt_20256 = cljs.core.first.call(null,seq__19978_20250__$1);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(dish_from_menu_20189),new cljs.core.Keyword(null,"menu-item-id","menu-item-id",-1188488418).cljs$core$IFn$_invoke$arity$1(dish_from_receipt_20256))){
cljs.core.swap_BANG_.call(null,current_count_20190,cljs.core._PLUS_,new cljs.core.Keyword(null,"count","count",2139924085).cljs$core$IFn$_invoke$arity$1(dish_from_receipt_20256));
} else {
}

var G__20257 = cljs.core.next.call(null,seq__19978_20250__$1);
var G__20258 = null;
var G__20259 = (0);
var G__20260 = (0);
seq__19978_20240 = G__20257;
chunk__19979_20241 = G__20258;
count__19980_20242 = G__20259;
i__19981_20243 = G__20260;
continue;
}
} else {
}
}
break;
}

var G__20261 = cljs.core.next.call(null,seq__19964_20231__$1);
var G__20262 = null;
var G__20263 = (0);
var G__20264 = (0);
seq__19964_20198 = G__20261;
chunk__19965_20199 = G__20262;
count__19966_20200 = G__20263;
i__19967_20201 = G__20264;
continue;
}
} else {
}
}
break;
}

var G__20265 = seq__19957_20191;
var G__20266 = chunk__19958_20192;
var G__20267 = count__19959_20193;
var G__20268 = (i__19960_20194 + (1));
seq__19957_20191 = G__20265;
chunk__19958_20192 = G__20266;
count__19959_20193 = G__20267;
i__19960_20194 = G__20268;
continue;
} else {
var temp__4657__auto___20269__$1 = cljs.core.seq.call(null,seq__19957_20191);
if(temp__4657__auto___20269__$1){
var seq__19957_20270__$1 = temp__4657__auto___20269__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19957_20270__$1)){
var c__8484__auto___20271 = cljs.core.chunk_first.call(null,seq__19957_20270__$1);
var G__20272 = cljs.core.chunk_rest.call(null,seq__19957_20270__$1);
var G__20273 = c__8484__auto___20271;
var G__20274 = cljs.core.count.call(null,c__8484__auto___20271);
var G__20275 = (0);
seq__19957_20191 = G__20272;
chunk__19958_20192 = G__20273;
count__19959_20193 = G__20274;
i__19960_20194 = G__20275;
continue;
} else {
var vec__19982_20276 = cljs.core.first.call(null,seq__19957_20270__$1);
var id_20277 = cljs.core.nth.call(null,vec__19982_20276,(0),null);
var receipt_20278 = cljs.core.nth.call(null,vec__19982_20276,(1),null);
var seq__19985_20279 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"guests","guests",617113038).cljs$core$IFn$_invoke$arity$1(receipt_20278));
var chunk__19986_20280 = null;
var count__19987_20281 = (0);
var i__19988_20282 = (0);
while(true){
if((i__19988_20282 < count__19987_20281)){
var vec__19989_20283 = cljs.core._nth.call(null,chunk__19986_20280,i__19988_20282);
var id_20284__$1 = cljs.core.nth.call(null,vec__19989_20283,(0),null);
var guest_20285 = cljs.core.nth.call(null,vec__19989_20283,(1),null);
var seq__19992_20286 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"dishes","dishes",1259783877).cljs$core$IFn$_invoke$arity$1(guest_20285));
var chunk__19993_20287 = null;
var count__19994_20288 = (0);
var i__19995_20289 = (0);
while(true){
if((i__19995_20289 < count__19994_20288)){
var dish_from_receipt_20290 = cljs.core._nth.call(null,chunk__19993_20287,i__19995_20289);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(dish_from_menu_20189),new cljs.core.Keyword(null,"menu-item-id","menu-item-id",-1188488418).cljs$core$IFn$_invoke$arity$1(dish_from_receipt_20290))){
cljs.core.swap_BANG_.call(null,current_count_20190,cljs.core._PLUS_,new cljs.core.Keyword(null,"count","count",2139924085).cljs$core$IFn$_invoke$arity$1(dish_from_receipt_20290));
} else {
}

var G__20291 = seq__19992_20286;
var G__20292 = chunk__19993_20287;
var G__20293 = count__19994_20288;
var G__20294 = (i__19995_20289 + (1));
seq__19992_20286 = G__20291;
chunk__19993_20287 = G__20292;
count__19994_20288 = G__20293;
i__19995_20289 = G__20294;
continue;
} else {
var temp__4657__auto___20295__$2 = cljs.core.seq.call(null,seq__19992_20286);
if(temp__4657__auto___20295__$2){
var seq__19992_20296__$1 = temp__4657__auto___20295__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19992_20296__$1)){
var c__8484__auto___20297 = cljs.core.chunk_first.call(null,seq__19992_20296__$1);
var G__20298 = cljs.core.chunk_rest.call(null,seq__19992_20296__$1);
var G__20299 = c__8484__auto___20297;
var G__20300 = cljs.core.count.call(null,c__8484__auto___20297);
var G__20301 = (0);
seq__19992_20286 = G__20298;
chunk__19993_20287 = G__20299;
count__19994_20288 = G__20300;
i__19995_20289 = G__20301;
continue;
} else {
var dish_from_receipt_20302 = cljs.core.first.call(null,seq__19992_20296__$1);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(dish_from_menu_20189),new cljs.core.Keyword(null,"menu-item-id","menu-item-id",-1188488418).cljs$core$IFn$_invoke$arity$1(dish_from_receipt_20302))){
cljs.core.swap_BANG_.call(null,current_count_20190,cljs.core._PLUS_,new cljs.core.Keyword(null,"count","count",2139924085).cljs$core$IFn$_invoke$arity$1(dish_from_receipt_20302));
} else {
}

var G__20303 = cljs.core.next.call(null,seq__19992_20296__$1);
var G__20304 = null;
var G__20305 = (0);
var G__20306 = (0);
seq__19992_20286 = G__20303;
chunk__19993_20287 = G__20304;
count__19994_20288 = G__20305;
i__19995_20289 = G__20306;
continue;
}
} else {
}
}
break;
}

var G__20307 = seq__19985_20279;
var G__20308 = chunk__19986_20280;
var G__20309 = count__19987_20281;
var G__20310 = (i__19988_20282 + (1));
seq__19985_20279 = G__20307;
chunk__19986_20280 = G__20308;
count__19987_20281 = G__20309;
i__19988_20282 = G__20310;
continue;
} else {
var temp__4657__auto___20311__$2 = cljs.core.seq.call(null,seq__19985_20279);
if(temp__4657__auto___20311__$2){
var seq__19985_20312__$1 = temp__4657__auto___20311__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19985_20312__$1)){
var c__8484__auto___20313 = cljs.core.chunk_first.call(null,seq__19985_20312__$1);
var G__20314 = cljs.core.chunk_rest.call(null,seq__19985_20312__$1);
var G__20315 = c__8484__auto___20313;
var G__20316 = cljs.core.count.call(null,c__8484__auto___20313);
var G__20317 = (0);
seq__19985_20279 = G__20314;
chunk__19986_20280 = G__20315;
count__19987_20281 = G__20316;
i__19988_20282 = G__20317;
continue;
} else {
var vec__19996_20318 = cljs.core.first.call(null,seq__19985_20312__$1);
var id_20319__$1 = cljs.core.nth.call(null,vec__19996_20318,(0),null);
var guest_20320 = cljs.core.nth.call(null,vec__19996_20318,(1),null);
var seq__19999_20321 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"dishes","dishes",1259783877).cljs$core$IFn$_invoke$arity$1(guest_20320));
var chunk__20000_20322 = null;
var count__20001_20323 = (0);
var i__20002_20324 = (0);
while(true){
if((i__20002_20324 < count__20001_20323)){
var dish_from_receipt_20325 = cljs.core._nth.call(null,chunk__20000_20322,i__20002_20324);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(dish_from_menu_20189),new cljs.core.Keyword(null,"menu-item-id","menu-item-id",-1188488418).cljs$core$IFn$_invoke$arity$1(dish_from_receipt_20325))){
cljs.core.swap_BANG_.call(null,current_count_20190,cljs.core._PLUS_,new cljs.core.Keyword(null,"count","count",2139924085).cljs$core$IFn$_invoke$arity$1(dish_from_receipt_20325));
} else {
}

var G__20326 = seq__19999_20321;
var G__20327 = chunk__20000_20322;
var G__20328 = count__20001_20323;
var G__20329 = (i__20002_20324 + (1));
seq__19999_20321 = G__20326;
chunk__20000_20322 = G__20327;
count__20001_20323 = G__20328;
i__20002_20324 = G__20329;
continue;
} else {
var temp__4657__auto___20330__$3 = cljs.core.seq.call(null,seq__19999_20321);
if(temp__4657__auto___20330__$3){
var seq__19999_20331__$1 = temp__4657__auto___20330__$3;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19999_20331__$1)){
var c__8484__auto___20332 = cljs.core.chunk_first.call(null,seq__19999_20331__$1);
var G__20333 = cljs.core.chunk_rest.call(null,seq__19999_20331__$1);
var G__20334 = c__8484__auto___20332;
var G__20335 = cljs.core.count.call(null,c__8484__auto___20332);
var G__20336 = (0);
seq__19999_20321 = G__20333;
chunk__20000_20322 = G__20334;
count__20001_20323 = G__20335;
i__20002_20324 = G__20336;
continue;
} else {
var dish_from_receipt_20337 = cljs.core.first.call(null,seq__19999_20331__$1);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(dish_from_menu_20189),new cljs.core.Keyword(null,"menu-item-id","menu-item-id",-1188488418).cljs$core$IFn$_invoke$arity$1(dish_from_receipt_20337))){
cljs.core.swap_BANG_.call(null,current_count_20190,cljs.core._PLUS_,new cljs.core.Keyword(null,"count","count",2139924085).cljs$core$IFn$_invoke$arity$1(dish_from_receipt_20337));
} else {
}

var G__20338 = cljs.core.next.call(null,seq__19999_20331__$1);
var G__20339 = null;
var G__20340 = (0);
var G__20341 = (0);
seq__19999_20321 = G__20338;
chunk__20000_20322 = G__20339;
count__20001_20323 = G__20340;
i__20002_20324 = G__20341;
continue;
}
} else {
}
}
break;
}

var G__20342 = cljs.core.next.call(null,seq__19985_20312__$1);
var G__20343 = null;
var G__20344 = (0);
var G__20345 = (0);
seq__19985_20279 = G__20342;
chunk__19986_20280 = G__20343;
count__19987_20281 = G__20344;
i__19988_20282 = G__20345;
continue;
}
} else {
}
}
break;
}

var G__20346 = cljs.core.next.call(null,seq__19957_20270__$1);
var G__20347 = null;
var G__20348 = (0);
var G__20349 = (0);
seq__19957_20191 = G__20346;
chunk__19958_20192 = G__20347;
count__19959_20193 = G__20348;
i__19960_20194 = G__20349;
continue;
}
} else {
}
}
break;
}

if(cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,current_count_20190),(0))){
cljs.core.swap_BANG_.call(null,sold_dishes_count,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(dish_from_menu_20189),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"short_name","short_name",1420585806).cljs$core$IFn$_invoke$arity$1(dish_from_menu_20189),new cljs.core.Keyword(null,"count","count",2139924085),cljs.core.deref.call(null,current_count_20190)], null));
} else {
}

cljs.core.reset_BANG_.call(null,current_count_20190,(0));

var G__20350 = cljs.core.next.call(null,seq__19907_20183__$1);
var G__20351 = null;
var G__20352 = (0);
var G__20353 = (0);
seq__19907_20013 = G__20350;
chunk__19908_20014 = G__20351;
count__19909_20015 = G__20352;
i__19910_20016 = G__20353;
continue;
}
} else {
}
}
break;
}

var seq__20003_20354 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"sale-receipts","sale-receipts",630620995).cljs$core$IFn$_invoke$arity$1(db));
var chunk__20004_20355 = null;
var count__20005_20356 = (0);
var i__20006_20357 = (0);
while(true){
if((i__20006_20357 < count__20005_20356)){
var vec__20007_20358 = cljs.core._nth.call(null,chunk__20004_20355,i__20006_20357);
var id_20359 = cljs.core.nth.call(null,vec__20007_20358,(0),null);
var receipt_20360 = cljs.core.nth.call(null,vec__20007_20358,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"paid?","paid?",1217824088).cljs$core$IFn$_invoke$arity$1(receipt_20360))){
cljs.core.swap_BANG_.call(null,common_sum,cljs.core._PLUS_,new cljs.core.Keyword(null,"sum_price","sum_price",1832391009).cljs$core$IFn$_invoke$arity$1(receipt_20360));

cljs.core.swap_BANG_.call(null,card_sum,cljs.core._PLUS_,new cljs.core.Keyword(null,"cash","cash",181122222).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"payment","payment",-1682035288).cljs$core$IFn$_invoke$arity$1(receipt_20360)));

cljs.core.swap_BANG_.call(null,cash_sum,cljs.core._PLUS_,new cljs.core.Keyword(null,"card","card",-1430355152).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"payment","payment",-1682035288).cljs$core$IFn$_invoke$arity$1(receipt_20360)));

cljs.core.swap_BANG_.call(null,paid_receipt_count,cljs.core._PLUS_,(1));
} else {
cljs.core.swap_BANG_.call(null,unpaid_receipt_count,cljs.core._PLUS_,(1));
}

var G__20361 = seq__20003_20354;
var G__20362 = chunk__20004_20355;
var G__20363 = count__20005_20356;
var G__20364 = (i__20006_20357 + (1));
seq__20003_20354 = G__20361;
chunk__20004_20355 = G__20362;
count__20005_20356 = G__20363;
i__20006_20357 = G__20364;
continue;
} else {
var temp__4657__auto___20365 = cljs.core.seq.call(null,seq__20003_20354);
if(temp__4657__auto___20365){
var seq__20003_20366__$1 = temp__4657__auto___20365;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20003_20366__$1)){
var c__8484__auto___20367 = cljs.core.chunk_first.call(null,seq__20003_20366__$1);
var G__20368 = cljs.core.chunk_rest.call(null,seq__20003_20366__$1);
var G__20369 = c__8484__auto___20367;
var G__20370 = cljs.core.count.call(null,c__8484__auto___20367);
var G__20371 = (0);
seq__20003_20354 = G__20368;
chunk__20004_20355 = G__20369;
count__20005_20356 = G__20370;
i__20006_20357 = G__20371;
continue;
} else {
var vec__20010_20372 = cljs.core.first.call(null,seq__20003_20366__$1);
var id_20373 = cljs.core.nth.call(null,vec__20010_20372,(0),null);
var receipt_20374 = cljs.core.nth.call(null,vec__20010_20372,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"paid?","paid?",1217824088).cljs$core$IFn$_invoke$arity$1(receipt_20374))){
cljs.core.swap_BANG_.call(null,common_sum,cljs.core._PLUS_,new cljs.core.Keyword(null,"sum_price","sum_price",1832391009).cljs$core$IFn$_invoke$arity$1(receipt_20374));

cljs.core.swap_BANG_.call(null,card_sum,cljs.core._PLUS_,new cljs.core.Keyword(null,"cash","cash",181122222).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"payment","payment",-1682035288).cljs$core$IFn$_invoke$arity$1(receipt_20374)));

cljs.core.swap_BANG_.call(null,cash_sum,cljs.core._PLUS_,new cljs.core.Keyword(null,"card","card",-1430355152).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"payment","payment",-1682035288).cljs$core$IFn$_invoke$arity$1(receipt_20374)));

cljs.core.swap_BANG_.call(null,paid_receipt_count,cljs.core._PLUS_,(1));
} else {
cljs.core.swap_BANG_.call(null,unpaid_receipt_count,cljs.core._PLUS_,(1));
}

var G__20375 = cljs.core.next.call(null,seq__20003_20366__$1);
var G__20376 = null;
var G__20377 = (0);
var G__20378 = (0);
seq__20003_20354 = G__20375;
chunk__20004_20355 = G__20376;
count__20005_20356 = G__20377;
i__20006_20357 = G__20378;
continue;
}
} else {
}
}
break;
}

return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"statistic","statistic",-788899134),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"sold-dishes-count","sold-dishes-count",2021194344),cljs.core.deref.call(null,sold_dishes_count),new cljs.core.Keyword(null,"common-sum","common-sum",1346388144),cljs.core.deref.call(null,common_sum),new cljs.core.Keyword(null,"card-sum","card-sum",-688128838),cljs.core.deref.call(null,card_sum),new cljs.core.Keyword(null,"cash-sum","cash-sum",1725028285),cljs.core.deref.call(null,cash_sum),new cljs.core.Keyword(null,"paid-receipt-count","paid-receipt-count",-322676111),cljs.core.deref.call(null,paid_receipt_count),new cljs.core.Keyword(null,"unpaid-receipt-count","unpaid-receipt-count",693935521),cljs.core.deref.call(null,unpaid_receipt_count)], null),new cljs.core.Keyword(null,"layout","layout",-2120940921),new cljs.core.Keyword(null,"statistic-view","statistic-view",-1911146287));
}));

//# sourceMappingURL=events.js.map
