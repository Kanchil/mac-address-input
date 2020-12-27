import InputMacAddress from './input-mac-address.vue'
import './style.less'
export default {
  install(Vue) {
    Vue.Component(Component.name, InputMacAddress)
  }
}
