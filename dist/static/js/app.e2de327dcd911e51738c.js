webpackJsonp([1],{"2cmD":function(e,t){},NHnr:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a("7+uW"),r={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var l=a("VU/8")({name:"App"},r,!1,function(e){a("2cmD")},null,null).exports,n=a("/ocq"),s={name:"HomePage",data:function(){return{loading:!1,filmler:[],popfilmler:[],filmsearch:""}},created:function(){var e=this;this.$http.get("https://api.themoviedb.org/3/movie/popular?api_key=0f17bafeb7d9fda0c1560d29b6259066").then(function(t){e.popfilmler=t.data.results,e.loading.false})},computed:{filmara:function(){var e=this;this.$http.get("https://api.themoviedb.org/3/search/movie?api_key=0f17bafeb7d9fda0c1560d29b6259066&language=en-US&query="+this.filmsearch+"&page=1&include_adult=false").then(function(t){e.filmler=t.data.results}),this.popfilmler=[]}}},o={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"homepage"},[e.loading?a("div",{staticClass:"loading"},[a("p",[e._v("Yükleniyor...")])]):e._e(),e._v(" "),a("div",{staticClass:"film-detay"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.filmsearch,expression:"filmsearch"}],attrs:{type:"text",placeholder:"Film aramak için birşeyler yazın."},domProps:{value:e.filmsearch},on:{keyup:function(t){e.filmara()},input:function(t){t.target.composing||(e.filmsearch=t.target.value)}}}),e._v(" "),a("button",{attrs:{type:"submit"},on:{click:function(t){e.filmara()}}},[e._v("ara")])]),e._v(" "),e.filmsearch?a("h1",[e._v('"'+e._s(e.filmsearch)+'" adlı filmi arıyorsunuz')]):e._e(),e._v(" "),a("div",{staticClass:"div film-listesi"},e._l(e.filmler,function(t){return""==!t.poster_path?a("div",{key:t.id,staticClass:"film"},[a("a",{attrs:{href:"https://www.themoviedb.org/movie/"+t.id,target:"_blank"}},[a("img",{attrs:{src:"https://image.tmdb.org/t/p/w600_and_h900_bestv2"+t.poster_path,alt:t.title}})]),e._v(" "),a("p",[a("b",[e._v("Film Adı:")]),e._v(" "+e._s(t.original_title))]),e._v(" "),a("p",[a("b",[e._v("Dili:")]),e._v(" "+e._s(t.original_language))]),e._v(" "),a("p",[a("b",[e._v("Puan:")]),e._v(" "+e._s(t.vote_average))])]):e._e()})),e._v(" "),e.filmsearch?e._e():a("h1",[e._v("Popüler Filmler")]),e._v(" "),a("div",{staticClass:"div film-listesi"},e._l(e.popfilmler,function(t){return""==!t.poster_path?a("div",{key:t.id,staticClass:"film"},[a("a",{attrs:{href:"https://www.themoviedb.org/movie/"+t.id,target:"_blank"}},[a("img",{attrs:{src:"https://image.tmdb.org/t/p/w600_and_h900_bestv2"+t.poster_path,alt:t.title}})]),e._v(" "),a("p",[a("b",[e._v("Film Adı:")]),e._v(" "+e._s(t.original_title))]),e._v(" "),a("p",[a("b",[e._v("Dili:")]),e._v(" "+e._s(t.original_language))]),e._v(" "),a("p",[a("b",[e._v("Puan:")]),e._v(" "+e._s(t.vote_average))])]):e._e()}))])},staticRenderFns:[]};var p=a("VU/8")(s,o,!1,function(e){a("nJW6")},"data-v-7b9ae8a0",null).exports;i.a.use(n.a);var _=new n.a({mode:"history",routes:[{path:"/",name:"HomePage",component:p}]}),v=a("mtWM"),m=a.n(v),c=a("Rf8U"),d=a.n(c);i.a.use(d.a,m.a),i.a.config.productionTip=!1,new i.a({el:"#app",router:_,components:{App:l},template:"<App/>"})},nJW6:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.e2de327dcd911e51738c.js.map