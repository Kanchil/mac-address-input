<template>
  <div class="mac-address__container">
    <ul class="mac-address__list">
      <li v-for="index in 5" :key="index" class="mac-address__inner">
        <input ref="input" v-model="macList[index - 1]" type="text"
          @keydown="keydownAction($event, index)">
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
      for (let i = 0; i < Math.max(str.length, 10); i = i + 2) {
        list.push(str.slice(i, i + 2))
      }
      this.macList = list
      const focusIndex = Math.min(list.length, 5)
      this.$refs.input[focusIndex].focus()
    },
    inputAction (event, index) {
      console.log('event: ', event);
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
    }
  }
}
</script>
<style lang="less">

</style>
