// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import axios from 'axios'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
import VueTouch from 'vue-touch'
Vue.use(VueTouch,{name: 'v-touch'})

axios.defaults.baseURL = 'http://localhost:3000/'   //加前缀
axios.defaults.withCredentials = true   //允许跨域
global.axios = axios    //全局化

Vue.config.productionTip = false

Vue.use(Mint);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
