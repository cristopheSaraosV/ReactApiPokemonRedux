(this["webpackJsonppokemon-redux"]=this["webpackJsonppokemon-redux"]||[]).push([[0],{23:function(e,t,a){e.exports=a(53)},28:function(e,t,a){},53:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(8),o=a.n(c),l=(a(28),a(2)),s=a(3),u=a.n(s),i=a(6),m=a(4),p=a(7),E=a.n(p),O={count:0,next:null,previous:null,results:[]};var f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"https://pokeapi.co/api/v2/pokemon/1/";return function(){var t=Object(i.a)(u.a.mark((function t(a){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,E.a.get(e);case 3:n=t.sent,a({type:"DETALLE_POKEMONES_EXITO",payload:{nombre:n.data.name,ancho:n.data.weight,alto:n.data.height,foto:n.data.sprites.front_default}}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},d=function(){var e=Object(l.b)(),t=Object(l.c)((function(e){return e.pokemones.detallePoke}));return r.a.useEffect((function(){e(f())}),[e]),t?r.a.createElement("div",{className:"container card"},r.a.createElement("h3",{className:"mt-3"},"Detalle pokemon"),r.a.createElement("div",{className:"card-body"},r.a.createElement("img",{src:t.foto,className:"img-fluid",alt:""}),r.a.createElement("div",{className:"card-title"},r.a.createElement("h4",{className:"text-uppercase"}," ",t.nombre)),r.a.createElement("p",{className:"card-text text-uppercase"},r.a.createElement("strong",null,"Ancho:")," ",t.ancho," ",r.a.createElement("br",null),r.a.createElement("strong",null,"Alto:"),t.alto))):null},b=function(){var e=Object(l.b)(),t=Object(l.c)((function(e){return e.pokemones.results})),a=Object(l.c)((function(e){return e.pokemones.next})),n=Object(l.c)((function(e){return e.pokemones.previous}));return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6 col-sm-12 mb-3"},r.a.createElement("h3",{className:"text-uppercase"},"lista de pokemones"),r.a.createElement("div",{className:"btn-group-lg",role:"group","aria-label":"Basic example"},0===t.length&&r.a.createElement("button",{className:"btn btn-primary mt-3",onClick:function(){e(function(){var e=Object(i.a)(u.a.mark((function e(t){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!localStorage.getItem("offset=0")){e.next=4;break}return console.log("del local"),t({type:"OBTENER_POKEMONES_EXITO",payload:JSON.parse(localStorage.getItem("offset=0"))}),e.abrupt("return");case 4:return e.prev=4,e.next=7,E.a.get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=20");case 7:a=e.sent,t({type:"OBTENER_POKEMONES_EXITO",payload:a.data}),localStorage.setItem("offset=0",JSON.stringify(a.data)),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(4),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[4,12]])})));return function(t){return e.apply(this,arguments)}}())}},"Mostrar pokemones"),n&&r.a.createElement("button",{className:"btn btn-danger mt-3 mx-2",onClick:function(){e(function(){var e=Object(i.a)(u.a.mark((function e(t,a){var n,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=a().pokemones.previous,!localStorage.getItem(n)){e.next=4;break}return t({type:"SIGUENTE_POKEMONES_EXITO",payload:JSON.parse(localStorage.getItem(n))}),e.abrupt("return");case 4:return e.prev=4,e.next=7,E.a.get(n);case 7:r=e.sent,t({type:"ANTERIOR_POKEMONES_EXITO",payload:r.data}),localStorage.setItem(n,JSON.stringify(r.data)),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(4),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[4,12]])})));return function(t,a){return e.apply(this,arguments)}}())}},"Anterior"),a&&r.a.createElement("button",{className:"btn btn-primary mt-3 mx-2",onClick:function(){e(function(){var e=Object(i.a)(u.a.mark((function e(t,a){var n,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=a().pokemones.next,!localStorage.getItem(n)){e.next=4;break}return t({type:"SIGUENTE_POKEMONES_EXITO",payload:JSON.parse(localStorage.getItem(n))}),e.abrupt("return");case 4:return e.prev=4,e.next=7,E.a.get(n);case 7:r=e.sent,t({type:"SIGUENTE_POKEMONES_EXITO",payload:r.data}),localStorage.setItem(n,JSON.stringify(r.data)),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(4),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[4,12]])})));return function(t,a){return e.apply(this,arguments)}}())}},"Siguiente")),r.a.createElement("ul",{className:"list-group list-group-flush"},t.map((function(t){return r.a.createElement("li",{key:t.name,className:"list-group-item text-uppercase text-left"},t.name,r.a.createElement("button",{className:"btn btn-secondary float-right",onClick:function(){e(f(t.url))}},"Detalle"))})))),r.a.createElement("div",{className:"col-sm-12 col-md-6"},r.a.createElement(d,null))))},N=a(5),g=a(22),v=Object(N.c)({pokemones:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"OBTENER_POKEMONES_EXITO":case"SIGUENTE_POKEMONES_EXITO":case"ANTERIOR_POKEMONES_EXITO":return Object(m.a)(Object(m.a)({},e),t.payload);case"DETALLE_POKEMONES_EXITO":return Object(m.a)(Object(m.a)({},e),{},{detallePoke:t.payload});default:return e}}}),k=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||N.d;var S=function(){var e=Object(N.e)(v,k(Object(N.a)(g.a)));return r.a.createElement(l.a,{store:e},r.a.createElement("div",{className:"text-center mt-5"},r.a.createElement(b,null)))};o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(S,null)),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.e3f83975.chunk.js.map