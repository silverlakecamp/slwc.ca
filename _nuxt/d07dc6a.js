(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{212:function(t,e,n){"use strict";var r=n(27),component=Object(r.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-list",{staticClass:"elevation-5"},[n("v-subheader",[t._v("Contact")]),t._v(" "),n("v-divider",{attrs:{inset:""}}),t._v(" "),n("v-list-tile",[n("v-list-tile-action",[n("v-icon",{attrs:{color:"gray"}},[t._v("phone")])],1),t._v(" "),n("v-list-tile-content",[n("v-list-tile-title",[t._v("1-877-511-2267")])],1)],1),t._v(" "),n("v-list-tile",[n("v-list-tile-action",[n("v-icon",{attrs:{color:"gray"}},[t._v("email")])],1),t._v(" "),n("v-list-tile-content",[n("v-list-tile-title",[t._v("office@slwc.ca")])],1)],1)],1)}),[],!1,null,null,null);e.a=component.exports},231:function(t,e,n){var map={"./1.jpg":232,"./2.jpg":233,"./3.jpg":234,"./4.jpg":235,"./5.jpg":236,"./6.jpg":237};function r(t){var e=o(t);return n(e)}function o(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}r.keys=function(){return Object.keys(map)},r.resolve=o,t.exports=r,r.id=231},232:function(t,e,n){t.exports=n.p+"img/1.168b894.jpg"},233:function(t,e,n){t.exports=n.p+"img/2.cf2f152.jpg"},234:function(t,e,n){t.exports=n.p+"img/3.3c36108.jpg"},235:function(t,e,n){t.exports=n.p+"img/4.3da32d7.jpg"},236:function(t,e,n){t.exports=n.p+"img/5.530e6c8.jpg"},237:function(t,e,n){t.exports=n.p+"img/6.7b755ec.jpg"},251:function(t,e,n){"use strict";n.r(e);n(20),n(10),n(29),n(28);var r={components:{CampContactCard:n(212).a},data:function(){return{giving:this.$store.state.giving.giving,payments:this.$store.state.giving.payments,carousel_items:Array.from(Array(6).keys()).map((function(i){return{src:n(231)("./".concat(i+1,".jpg"))}}))}}},o=n(27),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-carousel",{attrs:{height:"500px","hide-delimiters":""}},t._l(t.carousel_items,(function(t,i){return n("v-carousel-item",{key:i,attrs:{src:t.src}})})),1),t._v(" "),n("v-container",[n("h1",[t._v("Donate")])]),t._v(" "),n("v-container",[n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{attrs:{md8:""}},[n("v-container",{attrs:{"grid-list-xl":""}},[n("v-layout",{attrs:{column:"",wrap:""}},t._l(t.giving,(function(e,i){return n("v-flex",{key:i},[n("v-card",[n("v-card-title",{attrs:{"primary-title":""}},[n("h3",{staticClass:"headline mb-0"},[n("span",{domProps:{textContent:t._s(e.title)}})])]),t._v(" "),n("v-card-text",[n("p",{domProps:{innerHTML:t._s(e.description)}}),t._v(" "),e.external_site?n("p",[t._v("\n                      Find out more at "),n("a",{attrs:{href:e.external_site},domProps:{textContent:t._s(e.external_site_name)}})]):t._e()]),t._v(" "),n("v-card-actions",[e.external_payment_url?n("v-btn",{attrs:{flat:"",color:"green",href:e.external_payment_url,target:"_new"}},[t._v("\n                      Donate to "),n("span",{domProps:{textContent:t._s(e.title)}})]):t._e(),t._v(" "),e.form_url?n("v-btn",{attrs:{flat:"",color:"green",href:e.form_url,target:"_new"}},[t._v("\n                      Download Auto Debit Form\n                    ")]):t._e(),t._v(" "),e.static_url?n("v-btn",{attrs:{flat:"",color:"green",href:e.static_url,target:"_new"}},[t._v("\n                      Learn More about Donating Securities\n                    ")]):t._e()],1)],1)],1)})),1)],1),t._v(" "),n("br")],1),t._v(" "),n("v-flex",{attrs:{md3:"","offset-lg1":""}},[n("CampContactCard"),t._v(" "),n("br"),t._v(" "),n("v-list",{staticClass:"elevation-5"},[n("v-subheader",[t._v("Documents")]),t._v(" "),n("v-divider",{attrs:{inset:""}}),t._v(" "),n("v-list-tile",[n("v-list-tile-action",[n("v-icon",{attrs:{color:"gray"}},[t._v("picture_as_pdf")])],1),t._v(" "),n("v-list-tile-content",[n("v-list-tile-title",[n("a",{attrs:{href:"/files/auto-debit-donation-form.pdf"}},[t._v("Auto Debit Donation Form")])])],1)],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);