_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[14],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(o.default.useContext(a.AmpStateContext))};var r,o=(r=n("q1tI"))&&r.__esModule?r:{default:r},a=n("lwAK");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,a=e.hasQuery,i=void 0!==a&&a;return n||o&&i}},"48fX":function(e,t,n){var r=n("qhzo");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},"5fIB":function(e,t,n){var r=n("7eYB");e.exports=function(e){if(Array.isArray(e))return r(e)}},"8Kt/":function(e,t,n){"use strict";n("oI91");t.__esModule=!0,t.defaultHead=l,t.default=void 0;var r,o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=c();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=r?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(n,o,a):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),a=(r=n("Xuae"))&&r.__esModule?r:{default:r},i=n("lwAK"),u=n("FYa8"),s=n("/0+H");function c(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return c=function(){return e},e}function l(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function d(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var f=["name","httpEquiv","charSet","itemProp"];function p(e,t){return e.reduce((function(e,t){var n=o.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(d,[]).reverse().concat(l(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(o){var a=!0;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){var i=o.key.slice(o.key.indexOf("$")+1);e.has(i)?a=!1:e.add(i)}switch(o.type){case"title":case"base":t.has(o.type)?a=!1:t.add(o.type);break;case"meta":for(var u=0,s=f.length;u<s;u++){var c=f[u];if(o.props.hasOwnProperty(c))if("charSet"===c)n.has(c)?a=!1:n.add(c);else{var l=o.props[c],d=r[c]||new Set;d.has(l)?a=!1:(d.add(l),r[c]=d)}}}return a}}()).reverse().map((function(e,t){var n=e.key||t;return o.default.cloneElement(e,{key:n})}))}function h(e){var t=e.children,n=(0,o.useContext)(i.AmpStateContext),r=(0,o.useContext)(u.HeadManagerContext);return o.default.createElement(a.default,{reduceComponentsToState:p,headManager:r,inAmpMode:(0,s.isInAmpMode)(n)},t)}h.rewind=function(){};var m=h;t.default=m},AGzW:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/portfolio",function(){return n("eAkX")}])},FYa8:function(e,t,n){"use strict";var r;t.__esModule=!0,t.HeadManagerContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.HeadManagerContext=o},T0f4:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},Xuae:function(e,t,n){"use strict";var r=n("mPvQ"),o=n("/GRZ"),a=n("i2R6"),i=(n("qXWd"),n("48fX")),u=n("tCBg"),s=n("T0f4");function c(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=s(e);if(t){var o=s(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return u(this,n)}}t.__esModule=!0,t.default=void 0;var l=n("q1tI"),d=function(e){i(n,e);var t=c(n);function n(e){var a;return o(this,n),(a=t.call(this,e))._hasHeadManager=void 0,a.emitChange=function(){a._hasHeadManager&&a.props.headManager.updateHead(a.props.reduceComponentsToState(r(a.props.headManager.mountedInstances),a.props))},a._hasHeadManager=a.props.headManager&&a.props.headManager.mountedInstances,a}return a(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(l.Component);t.default=d},croa:function(e,t,n){var r={"./hello-world.md":"gjVB"};function o(e){var t=a(e);return n(t)}function a(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}o.keys=function(){return Object.keys(r)},o.resolve=a,e.exports=o,o.id="croa"},eAkX:function(e,t,n){"use strict";n.r(t);var r=n("o0o1"),o=n.n(r),a=n("HaE+"),i=n("q1tI"),u=n.n(i),s=n("hb5E"),c=n.n(s),l=n("YFqc"),d=n.n(l),f=(n("8Kt/"),n("lhkX")),p=n("5Yp1"),h=u.a.createElement;function m(e){var t=e.portfolio;return h(u.a.Fragment,null,h(p.a,{portfolio:!0},h(f.Row,null,t.map((function(e){var t=e.document,n=e.slug,r=t.data,o=r.title,a=r.date;return h(f.Col,{md:6,key:n},h("div",{className:"writing-row",key:o},h(f.Row,null,h(f.Col,{md:12},h("div",{className:"writing-date"},function(e){return new Date(e).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})}(a))),h(f.Col,{md:12},h(d.a,{href:"/portfolio/[slug]",as:"/portfolio/".concat(n)},h("a",null,function(e){var t=new Date(e).getTime();return(new Date).getTime()-t<1728e5}(a)&&h("div",{className:"pulse"}),h("span",{className:"writing-title"},o)))))))})))))}m.getInitialProps=function(){var e=Object(a.a)(o.a.mark((function e(t){var r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=function(e){var t=e.keys(),n=t.map(e);return t.map((function(e,t){var r=e.replace(/^.*[\\\/]/,"").split(".").slice(0,-1).join("."),o=n[t];return{document:c()(o.default),slug:r}})).slice().sort((function(e,t){return new Date(t.document.data.date)-new Date(e.document.data.date)}))}(n("croa")),e.abrupt("return",{portfolio:r});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),t.default=m},gjVB:function(e,t,n){"use strict";n.r(t),t.default='---\ntitle: "This is a project!!"\ndate: "2020-10-15"\nog:\n  description: "Welcome to my new blog space!"\n  image: "../images/avatar.jpg"\nauthor:\n  twitter: "tabby__katz"\n  name: "Tabitha O\'Melay"\n---\n\n_I have long wanted to publish my writing from the terminal, and now I can!_\n\n<br>\n---\n\n# Inspiration\n\n<p>If you, like me, are new to programming with an interest in front-end\ndevelopment, I cannot recommend the twitter dev community strongly enough. I\nstarted my first round of <a href ="https://www.100daysofcode.com">#100DaysOfCode</a> and found my people. It\nis through this community that I fell in love with Javascript, for better or\nworse. It\'s rare to find a group online that lifts up more than it knocks down,\n\tbut this is one.\n\n---\n\n# Holberton Portfolio Project #\n\n<p>I\'m finishing my Foundations year at Holberton School. This means I am\nbuilding my capstone project, which I proposed as a portfolio/personal website\n(this one). I wanted to make something solid that I could build on for the next\nyear. I started this project in plain HTML/CSS/js, but quickly realized that if\nI want to build the stretch features I should use React & Next from the start. I have broken this thing more often than not, but that is how I learn best.</p>\n<p>As I write this, I have two pages left to build: /portfolio & /resume. While\nI originally envisioned my portfolio as a CSS-heavy page, I\'ve decided to keep\nit simple and list projects as I have these blog entries. This is the first\nmajor project I have completed on my own (without Holberton guidance) and I\nfeel power-drunk and frightened at the same time.</p>\n\n---\n\n# What will I write about?\n\n<p>I\'ve written blogs since they first came about, mostly about day-to-day\nlife, parenting, and homeschooling (when my kids were young).Today I write\ntechnical blogs for school and pleasure, extoll the virtues of good books or websites, and share the joys & trials of my life as a single mother of 5, fulltime student, and tech newb. </p>\n\n<p>I hope you\'ll enjoy reading here, and if you\'d like to respond or discuss you\ncan find me on [Twitter](https://twitter.com/tabby__katz)</p>\n'},kG2m:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=o},mPvQ:function(e,t,n){var r=n("5fIB"),o=n("rlHP"),a=n("KckH"),i=n("kG2m");e.exports=function(e){return r(e)||o(e)||a(e)||i()}},oI91:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},qXWd:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},rlHP:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},tCBg:function(e,t,n){var r=n("C+bE"),o=n("qXWd");e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?o(e):t}}},[["AGzW",0,2,6,1,3,4,5]]]);