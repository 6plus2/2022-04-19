import Vue from 'vue'

import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import './plugins/firebase'
import store from '@/store/index.js' //store 전역변수를 import 해온다
import Trend from 'vuetrend'


Vue.config.productionTip = false

Vue.use(Trend)

new Vue({
  store,
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
 


  