import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
// 引入VueRouter
import VueRouter from 'vue-router'
// 引入路由器
import router from './router/index'


Vue.use(VueAxios, axios)
Vue.use(VueRouter)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')
