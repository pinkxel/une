var WPUltimatePostGrid;(WPUltimatePostGrid=void 0===WPUltimatePostGrid?{}:WPUltimatePostGrid)["wp-ultimate-post-grid/dist/admin"]=(self.webpackChunkWPUltimatePostGrid_name_=self.webpackChunkWPUltimatePostGrid_name_||[]).push([[710],{97430:function(t,e,n){"use strict";n.r(e);n(87191);var r,o=n(84690),i={elems:{},initPost:function(t){this.elems={container:t,imageButton:t.querySelector("#wpupg_add_custom_image"),imageRemoveButton:!1,imageUrl:t.querySelector("#wpupg_custom_image"),imageId:t.querySelector("#wpupg_custom_image_id"),imagePreview:!1},this.addEventListeners()},initTerm:function(t){this.elems={container:t,imageButton:t.querySelector("#wpupg_add_custom_image"),imageRemoveButton:t.querySelector("#wpupg_remove_custom_image"),imageUrl:t.querySelector("#wpupg_custom_image_url"),imageId:t.querySelector("#wpupg_custom_image"),imagePreview:t.querySelector("#wpupg_custom_image_img")},this.addEventListeners()},addEventListeners:function(){var t=this;this.elems.imageButton.addEventListener("click",(function(e){if(e.preventDefault(),"function"==typeof wp.media){var n=wp.media({title:(0,o.B)("Insert Media"),button:{text:(0,o.B)("Set Custom Image")},multiple:!1});n.on("select",(function(){var e=n.state().get("selection").first().toJSON();t.elems.imageUrl.value=e.url,t.elems.imageId.value=e.id,t.elems.imagePreview&&(t.elems.imagePreview.src=e.url),t.elems.imageRemoveButton&&(t.elems.imageButton.style.display="none",t.elems.imageRemoveButton.style.display="block")})).open()}})),this.elems.imageRemoveButton&&this.elems.imageRemoveButton.addEventListener("click",(function(e){t.elems.imageId.value="",t.elems.imageRemoveButton.style.display="none",t.elems.imageButton.style.display="block",t.elems.imagePreview&&(t.elems.imagePreview.src="")})),this.elems.imageUrl.addEventListener("keyup",(function(){t.elems.imageId.value=""})),this.elems.imageUrl.addEventListener("change",(function(){t.elems.imageId.value=""}))}};r=function(){var t=document.querySelector("#wpupg_meta_box_post");t&&i.initPost(t);var e=document.querySelector("#wpupg_meta_box_term");e&&i.initTerm(e)},"loading"!=document.readyState?r():document.addEventListener("DOMContentLoaded",r)},84690:function(t,e,n){"use strict";function r(t){return wpupg_admin.translations.hasOwnProperty(t)?wpupg_admin.translations[t]:t}n.d(e,{B:function(){return r}})},83875:function(t,e,n){var r=n(52786);t.exports=function(t){if(!r(t))throw TypeError(String(t)+" is not an object");return t}},37190:function(t,e,n){var r=n(29580),o=n(35108),i=n(32565),u=function(t){return function(e,n,u){var c,a=r(e),f=o(a.length),s=i(u,f);if(t&&n!=n){for(;f>s;)if((c=a[s++])!=c)return!0}else for(;f>s;s++)if((t||s in a)&&a[s]===n)return t||s||0;return!t&&-1}};t.exports={includes:u(!0),indexOf:u(!1)}},79159:function(t){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},73870:function(t,e,n){var r=n(40454),o=n(31561),i=n(66012),u=n(86385);t.exports=function(t,e){for(var n=o(e),c=u.f,a=i.f,f=0;f<n.length;f++){var s=n[f];r(t,s)||c(t,s,a(e,s))}}},45899:function(t,e,n){var r=n(7493),o=n(86385),i=n(69199);t.exports=r?function(t,e,n){return o.f(t,e,i(1,n))}:function(t,e,n){return t[e]=n,t}},69199:function(t){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},7493:function(t,e,n){var r=n(79044);t.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},92750:function(t,e,n){var r=n(98363),o=n(52786),i=r.document,u=o(i)&&o(i.createElement);t.exports=function(t){return u?i.createElement(t):{}}},48869:function(t){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},19882:function(t,e,n){var r=n(98363),o=n(66012).f,i=n(45899),u=n(35974),c=n(51621),a=n(73870),f=n(86291);t.exports=function(t,e){var n,s,l,p,m,v=t.target,g=t.global,d=t.stat;if(n=g?r:d?r[v]||c(v,{}):(r[v]||{}).prototype)for(s in e){if(p=e[s],l=t.noTargetGet?(m=o(n,s))&&m.value:n[s],!f(g?s:v+(d?".":"#")+s,t.forced)&&void 0!==l){if(typeof p==typeof l)continue;a(p,l)}(t.sham||l&&l.sham)&&i(p,"sham",!0),u(n,s,p,t)}}},79044:function(t){t.exports=function(t){try{return!!t()}catch(e){return!0}}},22773:function(t,e,n){var r=n(67290),o=n(98363),i=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,e){return arguments.length<2?i(r[t])||i(o[t]):r[t]&&r[t][e]||o[t]&&o[t][e]}},98363:function(t,e,n){var r=function(t){return t&&t.Math==Math&&t};t.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n.g&&n.g)||Function("return this")()},40454:function(t){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},47505:function(t){t.exports={}},67548:function(t,e,n){var r=n(7493),o=n(79044),i=n(92750);t.exports=!r&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},78609:function(t,e,n){var r=n(79044),o=n(79159),i="".split;t.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},56429:function(t,e,n){var r=n(49415),o=Function.toString;"function"!=typeof r.inspectSource&&(r.inspectSource=function(t){return o.call(t)}),t.exports=r.inspectSource},20821:function(t,e,n){var r,o,i,u=n(36830),c=n(98363),a=n(52786),f=n(45899),s=n(40454),l=n(50466),p=n(47505),m=c.WeakMap;if(u){var v=new m,g=v.get,d=v.has,y=v.set;r=function(t,e){return y.call(v,t,e),e},o=function(t){return g.call(v,t)||{}},i=function(t){return d.call(v,t)}}else{var h=l("state");p[h]=!0,r=function(t,e){return f(t,h,e),e},o=function(t){return s(t,h)?t[h]:{}},i=function(t){return s(t,h)}}t.exports={set:r,get:o,has:i,enforce:function(t){return i(t)?o(t):r(t,{})},getterFor:function(t){return function(e){var n;if(!a(e)||(n=o(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return n}}}},86291:function(t,e,n){var r=n(79044),o=/#|\.prototype\./,i=function(t,e){var n=c[u(t)];return n==f||n!=a&&("function"==typeof e?r(e):!!e)},u=i.normalize=function(t){return String(t).replace(o,".").toLowerCase()},c=i.data={},a=i.NATIVE="N",f=i.POLYFILL="P";t.exports=i},52786:function(t){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},21178:function(t){t.exports=!1},36830:function(t,e,n){var r=n(98363),o=n(56429),i=r.WeakMap;t.exports="function"==typeof i&&/native code/.test(o(i))},86385:function(t,e,n){var r=n(7493),o=n(67548),i=n(83875),u=n(21893),c=Object.defineProperty;e.f=r?c:function(t,e,n){if(i(t),e=u(e,!0),i(n),o)try{return c(t,e,n)}catch(r){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},66012:function(t,e,n){var r=n(7493),o=n(81513),i=n(69199),u=n(29580),c=n(21893),a=n(40454),f=n(67548),s=Object.getOwnPropertyDescriptor;e.f=r?s:function(t,e){if(t=u(t),e=c(e,!0),f)try{return s(t,e)}catch(n){}if(a(t,e))return i(!o.f.call(t,e),t[e])}},87994:function(t,e,n){var r=n(18794),o=n(48869).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},89612:function(t,e){e.f=Object.getOwnPropertySymbols},18794:function(t,e,n){var r=n(40454),o=n(29580),i=n(37190).indexOf,u=n(47505);t.exports=function(t,e){var n,c=o(t),a=0,f=[];for(n in c)!r(u,n)&&r(c,n)&&f.push(n);for(;e.length>a;)r(c,n=e[a++])&&(~i(f,n)||f.push(n));return f}},81513:function(t,e){"use strict";var n={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,o=r&&!n.call({1:2},1);e.f=o?function(t){var e=r(this,t);return!!e&&e.enumerable}:n},31561:function(t,e,n){var r=n(22773),o=n(87994),i=n(89612),u=n(83875);t.exports=r("Reflect","ownKeys")||function(t){var e=o.f(u(t)),n=i.f;return n?e.concat(n(t)):e}},67290:function(t,e,n){var r=n(98363);t.exports=r},35974:function(t,e,n){var r=n(98363),o=n(45899),i=n(40454),u=n(51621),c=n(56429),a=n(20821),f=a.get,s=a.enforce,l=String(String).split("String");(t.exports=function(t,e,n,c){var a=!!c&&!!c.unsafe,f=!!c&&!!c.enumerable,p=!!c&&!!c.noTargetGet;"function"==typeof n&&("string"!=typeof e||i(n,"name")||o(n,"name",e),s(n).source=l.join("string"==typeof e?e:"")),t!==r?(a?!p&&t[e]&&(f=!0):delete t[e],f?t[e]=n:o(t,e,n)):f?t[e]=n:u(e,n)})(Function.prototype,"toString",(function(){return"function"==typeof this&&f(this).source||c(this)}))},96411:function(t){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},51621:function(t,e,n){var r=n(98363),o=n(45899);t.exports=function(t,e){try{o(r,t,e)}catch(n){r[t]=e}return e}},50466:function(t,e,n){var r=n(53580),o=n(34524),i=r("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},49415:function(t,e,n){var r=n(98363),o=n(51621),i="__core-js_shared__",u=r[i]||o(i,{});t.exports=u},53580:function(t,e,n){var r=n(21178),o=n(49415);(t.exports=function(t,e){return o[t]||(o[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.6.5",mode:r?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})},32565:function(t,e,n){var r=n(98330),o=Math.max,i=Math.min;t.exports=function(t,e){var n=r(t);return n<0?o(n+e,0):i(n,e)}},29580:function(t,e,n){var r=n(78609),o=n(96411);t.exports=function(t){return r(o(t))}},98330:function(t){var e=Math.ceil,n=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?n:e)(t)}},35108:function(t,e,n){var r=n(98330),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},21893:function(t,e,n){var r=n(52786);t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},34524:function(t){var e=0,n=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++e+n).toString(36)}},87191:function(t,e,n){"use strict";n(19882)({target:"URL",proto:!0,enumerable:!0},{toJSON:function(){return URL.prototype.toString.call(this)}})}},0,[[97430,244]]]);