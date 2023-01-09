import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
          light: {
            primary: "#007bff", 
            secondary: "#6f42c1", 
            accent: "#dc3545", 
          },
        },
    },
});
