(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{323:function(t,e,n){"use strict";var l=n(46),component=Object(l.a)({},(function(){var t=this,e=t._self._c;return e("v-list",{staticClass:"elevation-5"},[e("v-subheader",[t._v("Contact")]),t._v(" "),e("v-divider",{attrs:{inset:""}}),t._v(" "),e("v-list-tile",[e("v-list-tile-action",[e("v-icon",{attrs:{color:"gray"}},[t._v("phone")])],1),t._v(" "),e("v-list-tile-content",[e("v-list-tile-title",[t._v("1-877-511-2267")])],1)],1),t._v(" "),e("v-list-tile",[e("v-list-tile-action",[e("v-icon",{attrs:{color:"gray"}},[t._v("email")])],1),t._v(" "),e("v-list-tile-content",[e("v-list-tile-title",[t._v("office@slwc.ca")])],1)],1)],1)}),[],!1,null,null,null);e.a=component.exports},364:function(t,e,n){"use strict";n.r(e);n(37),n(63);var l={components:{CampContactCard:n(323).a},data:function(){return{payments:this.$store.state.payments.payments}}},r=n(46),component=Object(r.a)(l,(function(){var t=this,e=t._self._c;return e("div",[e("v-container",[e("h1",[t._v("Payments")])]),t._v(" "),e("v-container",[e("v-layout",{attrs:{row:"",wrap:""}},[e("v-flex",{attrs:{md8:""}},[e("v-container",{attrs:{"grid-list-xl":""}},[e("v-layout",{attrs:{column:"",wrap:""}},t._l(t.payments,(function(n,i){return e("v-flex",{key:i},[e("v-card",[e("v-card-title",{attrs:{"primary-title":""}},[e("h3",{staticClass:"headline mb-0"},[e("span",{domProps:{textContent:t._s(n.title)}})])]),t._v(" "),e("v-card-text",[e("p",{domProps:{innerHTML:t._s(n.description)}})]),t._v(" "),e("v-card-actions",[e("form",{attrs:{action:"https://www.paypal.com/cgi-bin/webscr",method:"post",target:"_top"}},[e("input",{attrs:{type:"hidden",name:"cmd",value:"_s-xclick"}}),t._v(" "),e("input",{attrs:{type:"hidden",name:"hosted_button_id"},domProps:{value:n.paypal_form_id}}),t._v(" "),e("v-btn",{attrs:{type:"submit",flat:"",color:"green"}},[t._v("Make a Payment")])],1)])],1)],1)})),1)],1)],1),t._v(" "),e("v-flex",{attrs:{md3:"","offset-lg1":""}},[e("CampContactCard"),t._v(" "),e("br"),t._v(" "),e("v-list",{staticClass:"elevation-5"},[e("v-subheader",[t._v("Documents")]),t._v(" "),e("v-divider",{attrs:{inset:""}}),t._v(" "),e("v-list-tile",[e("v-list-tile-action",[e("v-icon",{attrs:{color:"gray"}},[t._v("picture_as_pdf")])],1),t._v(" "),e("v-list-tile-content",[e("v-list-tile-title",[e("a",{attrs:{href:"/files/auto-debit-donation-form.pdf"}},[t._v("Auto Debit Donation Form")])])],1)],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);