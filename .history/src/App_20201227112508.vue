<template>
  <div class="demo__container">
    <input-mac-address v-model="macAddress" />
  </div>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      macAddress: ''
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
