import Vue from 'vue'
import App from './App.vue'
import MacAddressInput from '../component'
Vue.config.productionTip = false
Vue.use(MacAddressInput)
new Vue({
  render: h => h(App)
}).$mount('#app')
