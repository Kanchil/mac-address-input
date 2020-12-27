<template>
  <div class="mac-address__container">
    <ul class="mac-address__list">
      <li v-for="index in 5" :key="index" class="mac-address__inner">
        <input ref="input" v-model="macList[index - 1]" type="text"
          @input="inputAction($event, index)" @keyup="keyupAction($event, index)" @keydown="keydownAction($event, index)">
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
    keyupAction (event, index) {
      console.log(event, 'keyup')
      console.log(this.macList, 'up')
      event.target.value = event.target.value.replace(/[^0-9a-zA-Z]/, '').toUpperCase().slice(0, 2)
      // this.$nextTick(() => {
      //   if ((event.target.value || '').length >= 2 && index < 5) {
      //     this.$refs.input[index - 1].blur()
      //     this.$refs.input[index].focus()
      //   }
      // })
    },
    keydownAction (event, index) {
      console.log(event, 'keydown')
      console.log(this.macList, 'down')
      this.macList[index - 1] = this.macList[index - 1].replace(/[^0-9a-zA-Z]/, '').toUpperCase().slice(0, 2)
      // event.target.value = event.target.value.replace(/[^0-9a-zA-Z]/, '').toUpperCase().slice(0, 2)
      // this.$nextTick(() => {
      //   if ((event.target.value || '').length >= 2 && index < 5) {
      //     this.$refs.input[index - 1].blur()
      //     this.$refs.input[index].focus()
      //   }
      // })
    },
    inputAction (event) {
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
