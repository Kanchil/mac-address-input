<template>
  <div class="mac-address__container">
    <ul class="mac-address__list">
      <li v-for="index in 5" :key="index" class="mac-address__inner">
        <input v-model="macList[index - 1]" type="text">
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>
