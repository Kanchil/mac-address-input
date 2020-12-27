<template>
  <div class="mac-address__container">
    <ul class="mac-address__list">
      <li v-for="index in 5" :key="index" class="mac-address__inner">
        <input ref="input" v-model="macList[index - 1]" type="text"
          @paste="pasteAction($event, index)" @keydown="keydownAction($event, index)"
          @input="inputAction($event, index)">
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'InputMacAddress',
  props: {
    value: String
  },
  data () {
    return {
      macList: ['', '', '', '', '']
    }
  },
  watch: {
    value: function (newValue) {
      this.macList = this.macToArray(newValue)
    }
  },
  created () {
    this.macList = this.macToArray(this.value)
  },
  methods: {
    keydownAction (event, index) {
      switch (event.keyCode) {
        case 8:
          if (!this.macList[index - 1]) {
            this.$refs.input[index - 1].blur()
            this.$refs.input[Math.max(index - 2, 0)].focus()
          } else if (Number(event.target.selectionStart) === 0) {
            this.$set(this.macList, index - 1, (this.macList[index - 1] || '').slice(0, -1))
            event.preventDefault()
          }
          break
        case 37:
          if (Number(event.target.selectionStart) === 0) {
            this.$refs.input[index - 1].blur()
            this.$refs.input[Math.max(index - 2, 0)].focus()
          }
          break
        case 39:
          if (Number(event.target.selectionStart) === (this.macList[index - 1] || '').length) {
            this.$refs.input[index - 1].blur()
            this.$refs.input[Math.max(index)].focus()
          }
          break
      }
    },
    pasteAction (event) {
      const str = event.clipboardData.getData('text').replace(/[^0-9a-zA-Z]/g, '').toUpperCase() || ''
      const list = []
      let strTemp = ''
      for (let i = 0; i < Math.min(str.length, 10); i++) {
        if (i > 0 && i % 2 === 0) {
          list.push(strTemp)
          strTemp = ''
        }
        strTemp += str.slice(i, i + 1)
      }
      this.macList = list
      const focusIndex = Math.min(list.length, 4)
      this.$refs.input[focusIndex].focus()
    },
    inputAction (event, index) {
      this.$set(this.macList, index - 1, (this.macList[index - 1] || '').replace(/[^0-9a-zA-Z]/g, '').toUpperCase().slice(0, 2))
      if ((this.macList[index - 1] || '').length >= 2 && index < 5) {
        this.$refs.input[index - 1].blur()
        this.$refs.input[index].focus()
      }
    },
    macToArray (mac) {
      return mac ? mac.split(':') : ['', '', '', '', '']
    },
    arrayToMac (array) {
      return array.join(':')
    },
    validateMac(mac) {
      const reg = /^[A-F0-9]{2}(:[A-F0-9]{2}){5}$/
      return reg.test(mac)
    }
  }
}
</script>
<style lang="less">

</style>
