webpackJsonp([1],{"/Uby":function(t,e,a){"use strict";function n(t){a("O1vE")}var s=a("cZxk"),i=a("ecAZ"),r=a("VU/8"),c=n,u=r(s.a,i.a,!1,c,"data-v-3aa4bede",null);e.a=u.exports},0:function(t,e){},"0PPX":function(t,e,a){"use strict";var n=a("olkN");e.a={name:"resultCard",props:["result"],methods:{loadVideo:function(t){n.a.dispatch("loadVideo",t.target.dataset.id)}}}},"4ZN9":function(t,e,a){"use strict";function n(t){a("yIZF")}var s=a("nWmR"),i=a("F6P1"),r=a("VU/8"),c=n,u=r(s.a,i.a,!1,c,"data-v-3b9fc3c1",null);e.a=u.exports},BOcp:function(t,e,a){"use strict";var n=a("U0o5"),s=a("v7Tl"),i=a("VU/8"),r=i(n.a,s.a,!1,null,null,null);e.a=r.exports},EWfp:function(t,e,a){"use strict";var n=a("EZYi"),s=a("ftwZ"),i=a("VU/8"),r=i(n.a,s.a,!1,null,null,null);e.a=r.exports},EZYi:function(t,e,a){"use strict";var n=a("olkN"),s=a("/Uby"),i=a("4ZN9"),r=a("Jv72");e.a={name:"app",components:{SearchBar:s.a,SearchResults:i.a,VideoPlayer:r.a},store:n.a}},F6P1:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"show",rawName:"v-show",value:!t.currentVideo.show,expression:"!currentVideo.show"}],staticClass:"search-results"},[a("ul",t._l(t.searchResults,function(t,e){return a("li",{key:e},[a("result-card",{attrs:{result:t}})],1)}))])},s=[],i={render:n,staticRenderFns:s};e.a=i},"GK+O":function(t,e,a){"use strict";function n(t,e){return l("https://min-theatre-api.herokuapp.com/search?q="+e,{method:"GET"}).then(function(t){if(200===t.status)return t.json();throw t}).then(function(e){return null!==e&&(t.commit("updateSearchResults",e),!0)}).catch(function(t){return console.log(t),!1})}function s(t,e){t.searchResults=e.map(function(t){return{etag:t.etag,id:t.id.videoId,title:t.snippet.title,description:t.snippet.description,channelName:t.snippet.channelTitle,thumbnails:{small:{url:t.snippet.thumbnails.default.url},medium:{url:t.snippet.thumbnails.medium.url},large:{url:t.snippet.thumbnails.high.url}},duration:null,views:null,likes:null,dislikes:null}}),t.currentVideo.show=!1}function i(t,e){var a="ids=".concat(e);return l("https://min-theatre-api.herokuapp.com/search/extra",{method:"POST",body:a,headers:{"content-type":"application/x-www-form-urlencoded"}}).then(function(t){if(200===t.status)return t.json()}).then(function(e){return t.commit("addExtraInfo",e),e})}function r(t,e){t.searchResults=t.searchResults.map(function(t,a){var n=e[a];return o()({},t,{duration:c(n.contentDetails.duration),views:n.statistics.viewCount,likes:n.statistics.likeCount,dislikes:n.statistics.dislikeCount})})}function c(t){var e=/([0-9]+)DT/.exec(t);e=e?e[1]+"d ":"";var a=/([0-9]+)H/.exec(t);a=a?a[1]+"h ":"";var n=/([0-9]+)M/.exec(t);n=n?n[1]+"m ":"";var s=/([0-9]+)S/.exec(t);return s=s?s[1]+"s":"","".concat(e,a,n,s)}e.c=n,e.d=s,e.b=i,e.a=r;var u=a("woOf"),o=a.n(u);a("hKoQ").polyfill();var l=a("j9g7")},Jv72:function(t,e,a){"use strict";function n(t){a("PlQf")}var s=a("Mbx7"),i=a("w0Jo"),r=a("VU/8"),c=n,u=r(s.a,i.a,!1,c,null,null);e.a=u.exports},Mbx7:function(t,e,a){"use strict";var n=a("olkN"),s=a("NYxO");e.a={name:"VideoPlayer",computed:Object(s.b)(["currentVideo"]),watch:{currentVideo:{handler:function(){this.currentVideo.show||null===this.currentVideo.id||n.a.dispatch("destroyVideo")},deep:!0}}}},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("7+uW"),s=a("BOcp"),i=a("YaEn");n.a.config.productionTip=!1,new n.a({el:"#vue-root",router:i.a,template:"<Root/>",components:{Root:s.a}})},O1vE:function(t,e){},PlQf:function(t,e){},U0o5:function(t,e,a){"use strict";e.a={name:"root"}},"U1T+":function(t,e){},Y2wa:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"result-header"},[a("p",{attrs:{"data-id":t.result.id},on:{click:t.loadVideo}},[t._v(t._s(t.result.title))]),t._v(" "),a("p",[t._v("by "+t._s(t.result.channelName))]),t._v(" "),a("img",{attrs:{src:t.result.thumbnails.medium.url,alt:t.result.title,"data-id":t.result.id},on:{click:t.loadVideo}})]),t._v(" "),a("div",{staticClass:"result-stats"},[a("div",{staticClass:"likes"},[a("i",{staticClass:"fa fa-thumbs-up",attrs:{"aria-hidden":"true"}}),t._v(" "),a("span",[t._v(t._s(t.result.likes))])]),t._v(" "),a("div",{staticClass:"dislikes"},[a("i",{staticClass:"fa fa-thumbs-down",attrs:{"aria-hidden":"true"}}),t._v(" "),a("span",[t._v(t._s(t.result.dislikes))])]),t._v(" "),a("div",{staticClass:"duration"},[a("i",{staticClass:"fa fa-clock-o",attrs:{"aria-hidden":"true"}}),t._v(" "),a("span",[t._v(t._s(t.result.duration))])])])])},s=[],i={render:n,staticRenderFns:s};e.a=i},YaEn:function(t,e,a){"use strict";var n=a("7+uW"),s=a("/ocq"),i=a("EWfp");n.a.use(s.a),e.a=new s.a({routes:[{path:"/",name:"App",component:i.a}],mode:"history"})},bpPY:function(t,e,a){"use strict";function n(t){a("U1T+")}var s=a("0PPX"),i=a("Y2wa"),r=a("VU/8"),c=n,u=r(s.a,i.a,!1,c,"data-v-75c4a7ca",null);e.a=u.exports},cZxk:function(t,e,a){"use strict";var n=a("olkN"),s=a("NYxO");e.a={name:"SearchBar",computed:Object(s.b)(["searchResults"]),methods:{fetchSearchResults:function(t){var e=this;t.preventDefault();var a=document.getElementById("search-input").value;n.a.dispatch("fetchSearchResults",a).then(function(t){if(t){var a="";e.searchResults.forEach(function(t){a+=t.id+","}),a=a.trim(),a=a.slice(0,a.length-1),n.a.dispatch("fetchResultInfo",a)}}),document.getElementById("search-input").blur()}}}},ecAZ:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement;return(t._self._c||e)("form",{attrs:{action:""},on:{submit:t.fetchSearchResults}},[t._m(0),t._v(" "),t._m(1)])},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"search"},[a("label",{attrs:{for:"search-input"}},[t._v("Search Youtube Videos")]),t._v(" "),a("input",{attrs:{type:"text",id:"search-input",formaction:"submit",placeholder:"Cat videos, dank memes, Vue tutorials..."}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"button-container"},[a("button",{attrs:{type:"submit"}},[t._v("Search")])])}],i={render:n,staticRenderFns:s};e.a=i},ftwZ:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",[a("search-bar"),t._v(" "),a("search-results"),t._v(" "),a("video-player")],1)},s=[],i={render:n,staticRenderFns:s};e.a=i},lytK:function(t,e,a){"use strict";function n(t,e){var a=void 0;switch(e){case"small":a=0;break;case"medium":a=1;break;case"large":a=2;break;default:a=-1}t.commit("updateThumbnailSize",a)}function s(t,e){t.thumbnailSize=e}e.a=n,e.b=s},nWmR:function(t,e,a){"use strict";var n=a("olkN"),s=a("NYxO"),i=a("bpPY");e.a={name:"results",components:{ResultCard:i.a},computed:Object(s.b)(["searchResults","currentVideo","thumbnailSize"]),mounted:function(){function t(t){var e=void 0;e=t.matches?"small":window.outerWidth<992?"medium":"large",n.a.dispatch("changeThumbnailSize",e)}var e=window.matchMedia("(max-width: 768px)");t(e),e.onchange=t}}},olkN:function(t,e,a){"use strict";var n=a("NYxO"),s=a("7+uW"),i=a("GK+O"),r=a("pFr1"),c=a("lytK");s.a.use(n.a);var u=new n.a.Store({state:{searchResults:[],currentVideo:{show:!1,id:null},thumbnailSize:0},mutations:{updateSearchResults:i.d,addExtraInfo:i.a,showNewVideo:r.d,clearVideo:r.a,updateThumbnailSize:c.b},actions:{fetchSearchResults:i.c,fetchResultInfo:i.b,loadVideo:r.c,destroyVideo:r.b,changeThumbnailSize:c.a}});e.a=u},pFr1:function(t,e,a){"use strict";function n(t,e){c=new YT.Player("player",{videoId:e,events:{onReady:function(a){a.target.playVideo(),t.commit("showNewVideo",e)},onStateChange:function(t){}}})}function s(t){c.destroy(),t.commit("clearVideo")}function i(t,e){t.currentVideo={show:!0,id:e}}function r(t){t.currentVideo={show:!1,id:null}}e.c=n,e.b=s,e.d=i,e.a=r;var c=void 0},v7Tl:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("main",{attrs:{id:"vue-root"}},[a("router-view")],1)},s=[],i={render:n,staticRenderFns:s};e.a=i},w0Jo:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{attrs:{id:"player"}})},s=[],i={render:n,staticRenderFns:s};e.a=i},yIZF:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.27d9979cdc870c9eb799.js.map