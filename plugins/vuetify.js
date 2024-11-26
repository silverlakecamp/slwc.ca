import Vue from "vue";
import Vuetify from "vuetify";

Vue.use(Vuetify, {
  theme: {
    primary: "#b1d235",
    secondary: "#b1d235",
    accent: "#b1d235",
    error: "#b1d235",
    info: "#b1d235",
    success: "#b1d235",
    warning: "#b1d235",
  },
});

Vue.mixin({
  data: function () {
    return {
      // this used to be used, but only ever updated if the site was rebuilt
      // so we removed it from page headings opting for more generic titles like "Events" instead of "2024 Events"
      // get currentYear() {
      //   let d = new Date()
      //   // if we're in december, flip the currentYear to the next year for golive
      //   if(d.getMonth() == 11) {
      //     return d.getFullYear() + 1;
      //   } else {
      //     return d.getFullYear();
      //   }
      // }
    };
  },
});
