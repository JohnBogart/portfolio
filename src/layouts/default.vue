<template>
  <div>
    <nav-bar></nav-bar>
    <main>
      <nuxt></nuxt>
    </main>
  </div>
</template>

<script>
import NavBar from '../components/navBar.vue'

export default {
  components: {
    NavBar
  }
}
</script>

<style lang="scss" scoped>
  main {
    background-color: white;
    overflow-y: auto;
    min-height: 100vh;
  }
</style>
