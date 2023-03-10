import Vue from 'vue'
import App from './App.vue'

import Vuetify from "vuetify";
import vuetify from './plugins/vuetify'

import router from './router/index'

import store from './store'

Vue.config.productionTip = false

Vue.use(Vuetify);

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
