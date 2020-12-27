import MacAddressInput from './mac-address-input.vue'
import './style.less'
MacAddressInput.install = (Vue) => {
  Vue.component(MacAddressInput.name, MacAddressInput)
}
export default MacAddressInput
