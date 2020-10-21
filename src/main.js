import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import qs from 'qs'
import './plugins/element.js'
import '@/assets/css/main.css'

Vue.config.productionTip = false

Vue.prototype.$qs = qs

new Vue({
  router,
  Plugin,
  render: h => h(App)
}).$mount('#app')
