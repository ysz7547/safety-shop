import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import axios from 'axios'
import Vuex from 'vuex'
import store from './store/store'
Vue.use(VueAwesomeSwiper)
Vue.use(Vuex)
Vue.prototype.$http=axios

new Vue({
  el: '#app',
  router,
  store:store,
  render: h => h(App)
})
