webpackJsonp([3],{Nl7k:function(r,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});e("y+mr");var n=e("3JdW"),o=e.n(n),a=e("lbHh"),i=e.n(a),u=e("dIB2"),f=e.n(u),s={components:{Button:o.a},created:function(){var r=i.a.get("o"),t=f()(5,"L");t.addData(r),t.make();var e="data:image/gif;base64,"+t.createImgBase64(5,10);this.qrcode=e},data:function(){return{qrcode:""}}},c={render:function(){var r=this,t=r.$createElement,e=r._self._c||t;return e("section",{staticClass:"dev"},[e("div",{staticClass:"title"},[r._v("🐞 错误反馈")]),r._v(" "),e("div",{staticClass:"content"},[r._m(0),r._v(" "),e("p",[r._v("1. 晚上12点后, 教务系统维护, 成绩和课表是刷不出来的, 早睡早起, 明天早上再刷哈~")]),r._v(" "),e("p",[r._v("2. 哪有图书有时候会因为访问不到学校图书馆而查不了图书, 可以等一阵子再搜~")]),r._v(" "),e("p",[r._v("3. 等我想到了再告诉你~")]),e("br"),r._v(" "),r._m(1),r._v(" "),r._m(2),r._v(" "),e("p",[r._v("错误反馈需要包括以下内容:")]),r._v(" "),r._m(3),r._v(" "),r._m(4),r._v(" "),e("img",{staticClass:"qrcode",attrs:{src:r.qrcode}}),e("br"),r._v(" "),r._m(5),r._v(" "),e("img",{staticClass:"qrcode",attrs:{src:"/static/qrcode.jpg"}}),e("br")])])},staticRenderFns:[function(){var r=this.$createElement,t=this._self._c||r;return t("p",[t("span",{staticClass:"u"},[this._v("常见问题:")])])},function(){var r=this.$createElement,t=this._self._c||r;return t("p",[t("span",{staticClass:"u"},[this._v("如何反馈:")])])},function(){var r=this.$createElement,t=this._self._c||r;return t("p",[this._v("如果发现哪有不能正常使用, 可以直接截图"),t("span",{staticClass:"u"},[this._v("微博私信")]),this._v("我, 也可以在"),t("span",{staticClass:"u"},[this._v("后台留言")]),this._v("反馈.")])},function(){var r=this.$createElement,t=this._self._c||r;return t("p",[this._v("1. "),t("span",{staticClass:"u"},[this._v("下方二维码")])])},function(){var r=this.$createElement,t=this._self._c||r;return t("p",[this._v("2. "),t("span",{staticClass:"u"},[this._v("错误文字描述")]),this._v("(最好附带错误截图)")])},function(){var r=this.$createElement,t=this._self._c||r;return t("p",[t("span",{staticClass:"u"},[this._v("新浪微博:")])])}]};var g=e("VU/8")(s,c,!1,function(r){e("oO5g")},"data-v-d7f35370",null);t.default=g.exports},dIB2:function(r,t){var e=function(){var r=function(r,t){var e=r,n=f[t],o=null,a=0,i=null,u=new Array,s={},c=function(r,t){o=function(r){for(var t=new Array(r),e=0;e<r;e+=1){t[e]=new Array(r);for(var n=0;n<r;n+=1)t[e][n]=null}return t}(a=4*e+17),g(0,0),g(a-7,0),g(0,a-7),l(),h(),w(r,t),e>=7&&v(r),null==i&&(i=p(e,n,u)),d(i,t)},g=function(r,t){for(var e=-1;e<=7;e+=1)if(!(r+e<=-1||a<=r+e))for(var n=-1;n<=7;n+=1)t+n<=-1||a<=t+n||(o[r+e][t+n]=0<=e&&e<=6&&(0==n||6==n)||0<=n&&n<=6&&(0==e||6==e)||2<=e&&e<=4&&2<=n&&n<=4)},h=function(){for(var r=8;r<a-8;r+=1)null==o[r][6]&&(o[r][6]=r%2==0);for(var t=8;t<a-8;t+=1)null==o[6][t]&&(o[6][t]=t%2==0)},l=function(){for(var r=y.getPatternPosition(e),t=0;t<r.length;t+=1)for(var n=0;n<r.length;n+=1){var a=r[t],i=r[n];if(null==o[a][i])for(var u=-2;u<=2;u+=1)for(var f=-2;f<=2;f+=1)o[a+u][i+f]=-2==u||2==u||-2==f||2==f||0==u&&0==f}},v=function(r){for(var t=y.getBCHTypeNumber(e),n=0;n<18;n+=1){var i=!r&&1==(t>>n&1);o[Math.floor(n/3)][n%3+a-8-3]=i}for(n=0;n<18;n+=1){i=!r&&1==(t>>n&1);o[n%3+a-8-3][Math.floor(n/3)]=i}},w=function(r,t){for(var e=n<<3|t,i=y.getBCHTypeInfo(e),u=0;u<15;u+=1){var f=!r&&1==(i>>u&1);u<6?o[u][8]=f:u<8?o[u+1][8]=f:o[a-15+u][8]=f}for(u=0;u<15;u+=1){f=!r&&1==(i>>u&1);u<8?o[8][a-u-1]=f:u<9?o[8][15-u-1+1]=f:o[8][15-u-1]=f}o[a-8][8]=!r},d=function(r,t){for(var e=-1,n=a-1,i=7,u=0,f=y.getMaskFunction(t),s=a-1;s>0;s-=2)for(6==s&&(s-=1);;){for(var c=0;c<2;c+=1)if(null==o[n][s-c]){var g=!1;u<r.length&&(g=1==(r[u]>>>i&1)),f(n,s-c)&&(g=!g),o[n][s-c]=g,-1==(i-=1)&&(u+=1,i=7)}if((n+=e)<0||a<=n){n-=e,e=-e;break}}},p=function(r,t,e){for(var n=m.getRSBlocks(r,t),o=_(),a=0;a<e.length;a+=1){var i=e[a];o.put(i.getMode(),4),o.put(i.getLength(),y.getLengthInBits(i.getMode(),r)),i.write(o)}var u=0;for(a=0;a<n.length;a+=1)u+=n[a].dataCount;if(o.getLengthInBits()>8*u)throw new Error("code length overflow. ("+o.getLengthInBits()+">"+8*u+")");for(o.getLengthInBits()+4<=8*u&&o.put(0,4);o.getLengthInBits()%8!=0;)o.putBit(!1);for(;!(o.getLengthInBits()>=8*u||(o.put(236,8),o.getLengthInBits()>=8*u));)o.put(17,8);return function(r,t){for(var e=0,n=0,o=0,a=new Array(t.length),i=new Array(t.length),u=0;u<t.length;u+=1){var f=t[u].dataCount,s=t[u].totalCount-f;n=Math.max(n,f),o=Math.max(o,s),a[u]=new Array(f);for(var c=0;c<a[u].length;c+=1)a[u][c]=255&r.getBuffer()[c+e];e+=f;var g=y.getErrorCorrectPolynomial(s),h=B(a[u],g.getLength()-1).mod(g);for(i[u]=new Array(g.getLength()-1),c=0;c<i[u].length;c+=1){var l=c+h.getLength()-i[u].length;i[u][c]=l>=0?h.getAt(l):0}}var v=0;for(c=0;c<t.length;c+=1)v+=t[c].totalCount;var w=new Array(v),d=0;for(c=0;c<n;c+=1)for(u=0;u<t.length;u+=1)c<a[u].length&&(w[d]=a[u][c],d+=1);for(c=0;c<o;c+=1)for(u=0;u<t.length;u+=1)c<i[u].length&&(w[d]=i[u][c],d+=1);return w}(o,n)};return s.addData=function(r){var t=C(r);u.push(t),i=null},s.isDark=function(r,t){if(r<0||a<=r||t<0||a<=t)throw new Error(r+","+t);return o[r][t]},s.getModuleCount=function(){return a},s.make=function(){c(!1,function(){for(var r=0,t=0,e=0;e<8;e+=1){c(!0,e);var n=y.getLostPoint(s);(0==e||r>n)&&(r=n,t=e)}return t}())},s.createTableTag=function(r,t){r=r||2;var e="";e+='<table style="',e+=" border-width: 0px; border-style: none;",e+=" border-collapse: collapse;",e+=" padding: 0px; margin: "+(t=void 0===t?4*r:t)+"px;",e+='">',e+="<tbody>";for(var n=0;n<s.getModuleCount();n+=1){e+="<tr>";for(var o=0;o<s.getModuleCount();o+=1)e+='<td style="',e+=" border-width: 0px; border-style: none;",e+=" border-collapse: collapse;",e+=" padding: 0px; margin: 0px;",e+=" width: "+r+"px;",e+=" height: "+r+"px;",e+=" background-color: ",e+=s.isDark(n,o)?"#000000":"#ffffff",e+=";",e+='"/>';e+="</tr>"}return e+="</tbody>",e+="</table>"},s.createImgTag=function(r,t){r=r||2,t=void 0===t?4*r:t;var e=s.getModuleCount()*r+2*t,n=t,o=e-t;return D(e,e,function(t,e){if(n<=t&&t<o&&n<=e&&e<o){var a=Math.floor((t-n)/r),i=Math.floor((e-n)/r);return s.isDark(i,a)?0:1}return 1})},s.createImgBase64=function(r,t){r=r||2,t=void 0===t?4*r:t;var e=s.getModuleCount()*r+2*t,n=t,o=e-t;return M(e,e,function(t,e){if(n<=t&&t<o&&n<=e&&e<o){var a=Math.floor((t-n)/r),i=Math.floor((e-n)/r);return s.isDark(i,a)?0:1}return 1})},s};r.stringToBytes=function(r){for(var t=new Array,e=0;e<r.length;e+=1){var n=r.charCodeAt(e);t.push(255&n)}return t},r.createStringToBytes=function(r,t){var e=function(){for(var e=b(r),n=function(){var r=e.read();if(-1==r)throw new Error;return r},o=0,a={};;){var i=e.read();if(-1==i)break;var u=n(),f=n()<<8|n();a[String.fromCharCode(i<<8|u)]=f,o+=1}if(o!=t)throw new Error(o+" != "+t);return a}(),n="?".charCodeAt(0);return function(r){for(var t=new Array,o=0;o<r.length;o+=1){var a=r.charCodeAt(o);if(a<128)t.push(a);else{var i=e[r.charAt(o)];"number"==typeof i?(255&i)==i?t.push(i):(t.push(i>>>8),t.push(255&i)):t.push(n)}}return t}};var t,e,n,o=1,a=2,i=4,u=8,f={L:1,M:0,Q:3,H:2},s=0,c=1,g=2,h=3,l=4,v=5,w=6,d=7,y=(t=[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],n=function(r){for(var t=0;0!=r;)t+=1,r>>>=1;return t},(e={}).getBCHTypeInfo=function(r){for(var t=r<<10;n(t)-n(1335)>=0;)t^=1335<<n(t)-n(1335);return 21522^(r<<10|t)},e.getBCHTypeNumber=function(r){for(var t=r<<12;n(t)-n(7973)>=0;)t^=7973<<n(t)-n(7973);return r<<12|t},e.getPatternPosition=function(r){return t[r-1]},e.getMaskFunction=function(r){switch(r){case s:return function(r,t){return(r+t)%2==0};case c:return function(r,t){return r%2==0};case g:return function(r,t){return t%3==0};case h:return function(r,t){return(r+t)%3==0};case l:return function(r,t){return(Math.floor(r/2)+Math.floor(t/3))%2==0};case v:return function(r,t){return r*t%2+r*t%3==0};case w:return function(r,t){return(r*t%2+r*t%3)%2==0};case d:return function(r,t){return(r*t%3+(r+t)%2)%2==0};default:throw new Error("bad maskPattern:"+r)}},e.getErrorCorrectPolynomial=function(r){for(var t=B([1],0),e=0;e<r;e+=1)t=t.multiply(B([1,p.gexp(e)],0));return t},e.getLengthInBits=function(r,t){if(1<=t&&t<10)switch(r){case o:return 10;case a:return 9;case i:case u:return 8;default:throw new Error("mode:"+r)}else if(t<27)switch(r){case o:return 12;case a:return 11;case i:return 16;case u:return 10;default:throw new Error("mode:"+r)}else{if(!(t<41))throw new Error("type:"+t);switch(r){case o:return 14;case a:return 13;case i:return 16;case u:return 12;default:throw new Error("mode:"+r)}}},e.getLostPoint=function(r){for(var t=r.getModuleCount(),e=0,n=0;n<t;n+=1)for(var o=0;o<t;o+=1){for(var a=0,i=r.isDark(n,o),u=-1;u<=1;u+=1)if(!(n+u<0||t<=n+u))for(var f=-1;f<=1;f+=1)o+f<0||t<=o+f||0==u&&0==f||i==r.isDark(n+u,o+f)&&(a+=1);a>5&&(e+=3+a-5)}for(n=0;n<t-1;n+=1)for(o=0;o<t-1;o+=1){var s=0;r.isDark(n,o)&&(s+=1),r.isDark(n+1,o)&&(s+=1),r.isDark(n,o+1)&&(s+=1),r.isDark(n+1,o+1)&&(s+=1),0!=s&&4!=s||(e+=3)}for(n=0;n<t;n+=1)for(o=0;o<t-6;o+=1)r.isDark(n,o)&&!r.isDark(n,o+1)&&r.isDark(n,o+2)&&r.isDark(n,o+3)&&r.isDark(n,o+4)&&!r.isDark(n,o+5)&&r.isDark(n,o+6)&&(e+=40);for(o=0;o<t;o+=1)for(n=0;n<t-6;n+=1)r.isDark(n,o)&&!r.isDark(n+1,o)&&r.isDark(n+2,o)&&r.isDark(n+3,o)&&r.isDark(n+4,o)&&!r.isDark(n+5,o)&&r.isDark(n+6,o)&&(e+=40);var c=0;for(o=0;o<t;o+=1)for(n=0;n<t;n+=1)r.isDark(n,o)&&(c+=1);return e+=Math.abs(100*c/t/t-50)/5*10},e),p=function(){for(var r=new Array(256),t=new Array(256),e=0;e<8;e+=1)r[e]=1<<e;for(e=8;e<256;e+=1)r[e]=r[e-4]^r[e-5]^r[e-6]^r[e-8];for(e=0;e<255;e+=1)t[r[e]]=e;var n={glog:function(r){if(r<1)throw new Error("glog("+r+")");return t[r]},gexp:function(t){for(;t<0;)t+=255;for(;t>=256;)t-=255;return r[t]}};return n}();function B(r,t){if(void 0===r.length)throw new Error(r.length+"/"+t);var e=function(){for(var e=0;e<r.length&&0==r[e];)e+=1;for(var n=new Array(r.length-e+t),o=0;o<r.length-e;o+=1)n[o]=r[o+e];return n}(),n={getAt:function(r){return e[r]},getLength:function(){return e.length},multiply:function(r){for(var t=new Array(n.getLength()+r.getLength()-1),e=0;e<n.getLength();e+=1)for(var o=0;o<r.getLength();o+=1)t[e+o]^=p.gexp(p.glog(n.getAt(e))+p.glog(r.getAt(o)));return B(t,0)},mod:function(r){if(n.getLength()-r.getLength()<0)return n;for(var t=p.glog(n.getAt(0))-p.glog(r.getAt(0)),e=new Array(n.getLength()),o=0;o<n.getLength();o+=1)e[o]=n.getAt(o);for(o=0;o<r.getLength();o+=1)e[o]^=p.gexp(p.glog(r.getAt(o))+t);return B(e,0).mod(r)}};return n}var m=function(){var r=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16]],t=function(r,t){var e={};return e.totalCount=r,e.dataCount=t,e},e={};return e.getRSBlocks=function(e,n){var o=function(t,e){switch(e){case f.L:return r[4*(t-1)+0];case f.M:return r[4*(t-1)+1];case f.Q:return r[4*(t-1)+2];case f.H:return r[4*(t-1)+3];default:return}}(e,n);if(void 0===o)throw new Error("bad rs block @ typeNumber:"+e+"/errorCorrectLevel:"+n);for(var a=o.length/3,i=new Array,u=0;u<a;u+=1)for(var s=o[3*u+0],c=o[3*u+1],g=o[3*u+2],h=0;h<s;h+=1)i.push(t(c,g));return i},e}(),_=function(){var r=new Array,t=0,e={getBuffer:function(){return r},getAt:function(t){var e=Math.floor(t/8);return 1==(r[e]>>>7-t%8&1)},put:function(r,t){for(var n=0;n<t;n+=1)e.putBit(1==(r>>>t-n-1&1))},getLengthInBits:function(){return t},putBit:function(e){var n=Math.floor(t/8);r.length<=n&&r.push(0),e&&(r[n]|=128>>>t%8),t+=1}};return e},C=function(t){var e=i,n=r.stringToBytes(t),o={getMode:function(){return e},getLength:function(r){return n.length},write:function(r){for(var t=0;t<n.length;t+=1)r.put(n[t],8)}};return o},k=function(){var r=new Array,t={writeByte:function(t){r.push(255&t)},writeShort:function(r){t.writeByte(r),t.writeByte(r>>>8)},writeBytes:function(r,e,n){e=e||0,n=n||r.length;for(var o=0;o<n;o+=1)t.writeByte(r[o+e])},writeString:function(r){for(var e=0;e<r.length;e+=1)t.writeByte(r.charCodeAt(e))},toByteArray:function(){return r},toString:function(){var t="";t+="[";for(var e=0;e<r.length;e+=1)e>0&&(t+=","),t+=r[e];return t+="]"}};return t},A=function(){var r=0,t=0,e=0,n="",o={},a=function(r){n+=String.fromCharCode(i(63&r))},i=function(r){if(r<0);else{if(r<26)return 65+r;if(r<52)return r-26+97;if(r<62)return r-52+48;if(62==r)return 43;if(63==r)return 47}throw new Error("n:"+r)};return o.writeByte=function(n){for(r=r<<8|255&n,t+=8,e+=1;t>=6;)a(r>>>t-6),t-=6},o.flush=function(){if(t>0&&(a(r<<6-t),r=0,t=0),e%3!=0)for(var o=3-e%3,i=0;i<o;i+=1)n+="="},o.toString=function(){return n},o},b=function(r){var t=r,e=0,n=0,o=0,a={read:function(){for(;o<8;){if(e>=t.length){if(0==o)return-1;throw new Error("unexpected end of file./"+o)}var r=t.charAt(e);if(e+=1,"="==r)return o=0,-1;r.match(/^\s$/)||(n=n<<6|i(r.charCodeAt(0)),o+=6)}var a=n>>>o-8&255;return o-=8,a}},i=function(r){if(65<=r&&r<=90)return r-65;if(97<=r&&r<=122)return r-97+26;if(48<=r&&r<=57)return r-48+52;if(43==r)return 62;if(47==r)return 63;throw new Error("c:"+r)};return a},L=function(r,t){var e=r,n=t,o=new Array(r*t),a={setPixel:function(r,t,n){o[t*e+r]=n},write:function(r){r.writeString("GIF87a"),r.writeShort(e),r.writeShort(n),r.writeByte(128),r.writeByte(0),r.writeByte(0),r.writeByte(0),r.writeByte(0),r.writeByte(0),r.writeByte(255),r.writeByte(255),r.writeByte(255),r.writeString(","),r.writeShort(0),r.writeShort(0),r.writeShort(e),r.writeShort(n),r.writeByte(0);var t=i(2);r.writeByte(2);for(var o=0;t.length-o>255;)r.writeByte(255),r.writeBytes(t,o,255),o+=255;r.writeByte(t.length-o),r.writeBytes(t,o,t.length-o),r.writeByte(0),r.writeString(";")}},i=function(r){for(var t=1<<r,e=1+(1<<r),n=r+1,a=u(),i=0;i<t;i+=1)a.add(String.fromCharCode(i));a.add(String.fromCharCode(t)),a.add(String.fromCharCode(e));var f,s,c,g=k(),h=(f=g,s=0,c=0,{write:function(r,t){if(r>>>t!=0)throw new Error("length over");for(;s+t>=8;)f.writeByte(255&(r<<s|c)),t-=8-s,r>>>=8-s,c=0,s=0;c|=r<<s,s+=t},flush:function(){s>0&&f.writeByte(c)}});h.write(t,n);var l=0,v=String.fromCharCode(o[l]);for(l+=1;l<o.length;){var w=String.fromCharCode(o[l]);l+=1,a.contains(v+w)?v+=w:(h.write(a.indexOf(v),n),a.size()<4095&&(a.size()==1<<n&&(n+=1),a.add(v+w)),v=w)}return h.write(a.indexOf(v),n),h.write(e,n),h.flush(),g.toByteArray()},u=function(){var r={},t=0,e={add:function(n){if(e.contains(n))throw new Error("dup key:"+n);r[n]=t,t+=1},size:function(){return t},indexOf:function(t){return r[t]},contains:function(t){return void 0!==r[t]}};return e};return a},D=function(r,t,e,n){for(var o=L(r,t),a=0;a<t;a+=1)for(var i=0;i<r;i+=1)o.setPixel(i,a,e(i,a));var u=k();o.write(u);for(var f=A(),s=u.toByteArray(),c=0;c<s.length;c+=1)f.writeByte(s[c]);f.flush();var g="";return g+="<img",g+=' src="',g+="data:image/gif;base64,",g+=f,g+='"',g+=' width="',g+=r,g+='"',g+=' height="',g+=t,g+='"',n&&(g+=' alt="',g+=n,g+='"'),g+="/>"},M=function(r,t,e){for(var n=L(r,t),o=0;o<t;o+=1)for(var a=0;a<r;a+=1)n.setPixel(a,o,e(a,o));var i=k();n.write(i);for(var u=A(),f=i.toByteArray(),s=0;s<f.length;s+=1)u.writeByte(f[s]);return u.flush(),u.toString()};return r}();r.exports=e},oO5g:function(r,t){}});