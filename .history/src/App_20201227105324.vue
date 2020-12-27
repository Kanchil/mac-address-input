<template>
  <div class="mac-address_container">
    <ul>
      <li v-for="index in 5" :key="index">
        <input type="text">
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {}
  },
}
</script>
