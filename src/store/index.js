import Vue from 'vue'
import Vuex from 'vuex'

import coursesModule from './modules/courses/courses'
import imagesModule from  './modules/images'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    coureses:coursesModule,
    images:imagesModule
  }
})

export default store;