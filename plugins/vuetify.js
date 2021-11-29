import Vue from 'vue';
import Vuetify from 'vuetify';

Vue.use(Vuetify, {
  theme: {
    primary: '#b1d235',
    secondary: '#b1d235',
    accent: '#b1d235',
    error: '#b1d235',
    info: '#b1d235',
    success: '#b1d235',
    warning: '#b1d235',
  },
});

Vue.mixin({
  data: function() {
    return {
      get currentYear() {
        let d = new Date()
        // if we're in december, flip the currentYear to the next year for golive
        if(d.getMonth() == 11) {
          return d.getFullYear() + 1;
        } else {
          return d.getFullYear();
        }
      }
    }
  }
});
