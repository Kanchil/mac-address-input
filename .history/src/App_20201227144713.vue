<template>
  <div class="demo__container">
    <input-mac-address v-model="macAddress" @change="changeAction" />
  </div>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      macAddress: ''
    }
  },
  methods: {
    changeAction(value, isValid) {
      console.log('value, isValid: ', value, isValid);
    }
  }
}
</script>
<style lang="less">
.demo__container{
  width: 1000px;
  margin: 30px auto;
  box-sizing: border-box;
}
</style>
