## 效果预览

[DEMO地址](http://mac-input.mai516.com/)

## 安装

```bash

npm install -S mac-address-input

# or

yarn add mac-address-input

```

## 在项目中引入

在`main.js`入口文件引入并注册

```javascript

import Vue from 'vue'
import MacAddressInput from 'mac-address-input'

Vue.use(MacAddressInput)

```

### 在页面中使用

```javascript

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

```