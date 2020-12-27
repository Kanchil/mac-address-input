<template>
  <div class="mac-address__container">
    <ul class="mac-address__list">
      <li v-for="index in 5" :key="index" class="mac-address__inner">
        <input ref="input" v-model="macList[index - 1]" type="text"
          @input="inputAction($event, index)" @paste="pasteAction"
          @keydown.delete="keydownAction($event, index)">
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
      console.log('event: ', event)
      if (!this.macList[index - 1]) {
        this.$refs.input[index - 1].blur()
        this.$refs.input[Math.max(index - 2, 0)].focus()
      }
      // this.$set(this.macList, index - 1, event.target.value.replace(/[^0-9a-zA-Z]/g, '').toUpperCase().slice(0, 2))
      // if ((event.target.value || '').length >= 2 && index < 5) {
      //   this.$refs.input[index - 1].blur()
      //   this.$refs.input[index].focus()
      // }
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
      this.$set(this.macList, index - 1, event.target.value.replace(/[^0-9a-zA-Z]/g, '').toUpperCase().slice(0, 2))
      if ((event.target.value || '').length >= 2 && index < 5) {
        this.$refs.input[index - 1].blur()
        this.$refs.input[index].focus()
      }
      // event.target.value = event.target.value.replace(/[^0-9a-zA-Z]/, '')
      // console.log(event, '===')
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
