<template>
  <div class="demo__container">
    请输入电脑MAC地址：<br />
    <div class="input__container">
      <mac-address-input v-model="macAddress" @change="changeAction" />
      <span v-if="!isValid" class="error-message">mac地址格式不正确</span>
    </div>
    <button @click="outputHandle" class="btn btn-primary mt40">输出MAC地址</button>
  </div>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      macAddress: '',
      isValid: true
    }
  },
  methods: {
    changeAction (value, isValid) {
      this.isValid = isValid
    },
    outputHandle () {
      if (!this.macAddress || !this.isValid) {
        alert('请输入合法的电脑MAC地址')
      } else {
        console.log('输入的电脑MAC地址为：', this.macAddress)
        alert(`输入的电脑MAC地址为：${this.macAddress}`)
      }
    }
  }
}
</script>
<style lang="less">
::selection{
  color: blue;
}
.mt40{
  margin-top: 40px;
}
.btn{
  outline: none;
  border: 1px solid blue;
  color: #333;
  padding: 10px 15px;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.1s linear;
}
.btn-primary{
  background-color: blue;
  color: #ffffff;
  &:hover{
    opacity: 0.8;
  }
}
.demo__container{
  width: 1000px;
  margin: 30px auto;
  box-sizing: border-box;
  text-align: center;
  .input__container{
    margin-top: 20px;
    text-align: left;
  }
  .error-message{
    color: red;
    font-size: 14px;
    margin-top: 10px;
    line-height: 18px;
  }
}
</style>
