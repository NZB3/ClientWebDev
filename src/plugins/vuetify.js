import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
          light: {
            primary: colors.indigo.lighten1, 
            secondary: colors.indigo.darken2, 
            accent: "#dc3545", 
          },
        },
    },
});
