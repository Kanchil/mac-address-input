import MacAddressInput from './mac-address-input.vue'
import './style.less'
InputMacAddress.install = (Vue) => {
  Vue.component(InputMacAddress.name, InputMacAddress)
}
export default InputMacAddress
