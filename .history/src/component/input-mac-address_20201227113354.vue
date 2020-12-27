<template>
  <div class="mac-address__container">
    <ul class="mac-address__list">
      <li v-for="index in 5" :key="index" class="mac-address__inner">
        <input v-model="macList[index - 1]" type="text"
          @input="inputAction" @change="changeAction">
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
    inputAction () {},
    changeAction (event) {
      event.target.value = event.target.value.replace(/[^0-9a-zA-Z]/, '')
      console.log(event, '===')
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
