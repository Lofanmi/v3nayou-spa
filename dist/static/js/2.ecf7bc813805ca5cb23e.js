webpackJsonp([2],{I2Tb:function(t,s,n){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=n("Xxa5"),c=n.n(i),e=n("exGp"),a=n.n(e),o=(n("0dUj"),n("IqSH")),r=n.n(o),l=(n("swY8"),n("gAYL")),d=n.n(l),u=n("mtWM"),m=n.n(u),v=n("L/hj"),_={props:{mainlyIcons:Array,othersIcons:Array},methods:{onClick:function(t){Object(v.c)(this,"图标",t.name,t.link)}}},f={render:function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("section",{staticClass:"icon-widget"},[n("section",{staticClass:"icons main-icons"},t._l(t.mainlyIcons,function(s){return n("div",{key:s.name,staticClass:"icon",attrs:{"data-link":s.link},on:{click:function(n){t.onClick(s)}}},[n("img",{attrs:{src:s.icon}}),t._v(" "),n("div",{staticClass:"name"},[t._v(t._s(s.name))])])})),t._v(" "),n("section",{staticClass:"icons others-icons"},[t._l(t.othersIcons,function(s){return[n("div",{key:s.name,staticClass:"icon",attrs:{"data-link":s.link},on:{click:function(n){t.onClick(s)}}},[n("img",{attrs:{src:s.icon}})]),t._v(" "),n("div",{key:s.id,staticClass:"icon",attrs:{"data-link":s.link},on:{click:function(n){t.onClick(s)}}},[n("div",{staticClass:"name"},[t._v(t._s(s.name))])])]})],2)])},staticRenderFns:[]};var h=n("VU/8")(_,f,!1,function(t){n("oGXN")},"data-v-56bf8e8b",null).exports,k={props:{articles:Array},computed:{list:function(){return this.articles}},methods:{onClick:function(t){Object(v.c)(this,"文章",t.title,t.link)}}},p={render:function(){var t=this,s=t.$createElement,n=t._self._c||s;return t.list.length>0?n("section",{staticClass:"hot-articles border-bottom"},[t._m(0),t._v(" "),n("div",{staticClass:"items"},t._l(t.list,function(s){return n("div",{key:s.id,staticClass:"hot-article border-bottom",on:{click:function(n){t.onClick(s)}}},[n("img",{attrs:{src:s.cover,alt:s.title}}),t._v(" "),n("div",{staticClass:"detail"},[n("div",{staticClass:"title dotdotdot"},[t._v(t._s(s.title))]),t._v(" "),n("div",{staticClass:"abstract dotdotdot"},[t._v(t._s(s.abstract))]),t._v(" "),n("div",{staticClass:"date"},[t._v(t._s(s.date))])])])}))]):t._e()},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"icon-bar border-bottom"},[s("img",{attrs:{src:n("dHLU")}}),this._v("热门文章\n  ")])}]};var C=n("VU/8")(k,p,!1,function(t){n("Wzgz")},"data-v-d6a5e5a2",null).exports,b={components:{IconWidget:h,Swipe:d.a,SwipeItem:r.a,HotArticle:C},created:function(){var t=this;return a()(c.a.mark(function s(){var n,i;return c.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,m()("/start");case 2:n=s.sent,"[empty]"===(i=n.data.data).school&&t.$router.push({name:"empty"}),t.$emit("data",{school:i.school,links:i.links}),t.mainlyIcons=i.mainly_icons,t.othersIcons=i.others_icons,t.articles=i.articles,t.ads=i.ads;case 10:case"end":return s.stop()}},s,t)}))()},data:function(){return{mainlyIcons:[],othersIcons:[],ads:[],articles:[]}},methods:{onClick:function(t){Object(v.c)(this,"广告",t.name,t.link)}}},y={render:function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("section",[n("icon-widget",{attrs:{"mainly-icons":t.mainlyIcons,"others-icons":t.othersIcons}}),t._v(" "),n("mt-swipe",{staticClass:"border-top border-bottom",attrs:{auto:3e3,"show-indicators":!1}},t._l(t.ads,function(s){return n("mt-swipe-item",{key:s.id,staticClass:"swipe-ad"},[n("img",{attrs:{src:s.img},on:{click:function(n){t.onClick(s)}}})])})),t._v(" "),n("hot-article",{attrs:{articles:t.articles}})],1)},staticRenderFns:[]};var g=n("VU/8")(b,y,!1,function(t){n("xl6r")},"data-v-43ccb6d6",null);s.default=g.exports},Wzgz:function(t,s){},dHLU:function(t,s,n){t.exports=n.p+"static/img/icon_hot.46841b7.png"},oGXN:function(t,s){},xl6r:function(t,s){}});