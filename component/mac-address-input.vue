<template>
  <div class="mac-address__container">
    <ul class="mac-address__list">
      <li v-for="index in 6" :key="index" :class="['mac-address__inner', { 'is-error': !isValid }]">
        <input ref="input" v-model="macList[index - 1]" type="text"
          @paste="pasteAction($event, index)" @keydown="keydownAction($event, index)"
          @input="inputAction($event, index)">
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'MacAddressInput',
  props: {
    value: String
  },
  data () {
    return {
      macList: ['', '', '', '', '', ''],
      isValid: true
    }
  },
  watch: {
    value: function (newValue) {
      this.macList = this.macToArray(newValue)
      this.isValid = this.validateMac(this.macList)
      this.$emit('change', this.macList, this.isValid)
    }
  },
  created () {
    this.macList = this.macToArray(this.value)
  },
  methods: {
    keydownAction (event, index) {
      switch (event.keyCode) {
        case 8:
          if (index <= 1) return
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
          if (index >= 6) return
          if (Number(event.target.selectionStart) === (this.macList[index - 1] || '').length) {
            this.$refs.input[index - 1].blur()
            this.$refs.input[Math.max(index)].focus()
          }
          break
      }
    },
    pasteAction (event) {
      event.preventDefault()
      const str = event.clipboardData.getData('text').replace(/[^0-9a-fA-F]/g, '').toUpperCase() || ''
      const list = []
      let strTemp = ''
      for (let i = 0; i <= Math.min(str.length, 12); i++) {
        if (i > 0 && i % 2 === 0) {
          list.push(strTemp)
          strTemp = ''
        }
        strTemp += str.slice(i, i + 1)
      }
      this.macList = list
      this.$emit('input', this.arrayToMac(this.macList))
    },
    inputAction (event, index) {
      this.$set(this.macList, index - 1, (this.macList[index - 1] || '').replace(/[^0-9a-fA-F]/g, '').toUpperCase().slice(0, 2))
      if ((this.macList[index - 1] || '').length >= 2 && index < 6) {
        this.$refs.input[index - 1].blur()
        this.$refs.input[index].focus()
      }
      this.$emit('input', this.arrayToMac(this.macList))
    },
    macToArray (mac) {
      return mac ? mac.split(':') : ['', '', '', '', '', '']
    },
    arrayToMac (array) {
      if (array.every(ele => !ele)) {
        return ''
      }
      return array.join(':')
    },
    validateMac (mac) {
      if (Array.isArray(mac)) {
        mac = this.arrayToMac(mac)
      }
      const reg = /[0-9a-fA-F]{2}(:[0-9a-fA-F]{2}){5}/
      return reg.test(mac)
    }
  }
}
</script>
