import Vue from 'vue'
import App from './App.vue'
import InputMacAddress from '../component'
Vue.config.productionTip = false
Vue.use(InputMacAddress)
new Vue({
  render: h => h(App)
}).$mount('#app')
