<template>
  <div class="demo__container">
    <div class="input__container">
      <input-mac-address v-model="macAddress" @change="changeAction" />
      <span v-if="isValid" class="error-message"></span>
    </div>
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
