<template>
  <div class="mac-address__container">
    <ul>
      <li v-for="index in 5" :key="index">
        <input v-model="macList[index - 1]" type="text">
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      macList: ['', '', '', '', '']
    }
  },
  methods: {}
}
</script>
