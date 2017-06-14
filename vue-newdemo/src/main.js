import Vue from 'vue'
import App from './App.vue'
import store from './store/index'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import router from './router/index'
import VueResource from 'vue-resource'
Vue.use(VueRouter)
Vue.use(Vuex)
Vue.use(VueResource)
new Vue({
  el: '#app',
    store,
    router,
  render: h => h(App)
})
