<template>
  <div>
    <section class="section">
      <div class="container">
        <h1 class="title">{{ character.name }}</h1>
      </div>
    </section>
  </div>
</template>

<script>
import fetch from 'node-fetch'

export default {
  data() {
    return {
      character: {}
    }
  },
  async fetch() {
    const id = this.$route.params.id
    this.character = await fetch(`https://rickandmortyapi.com/api/character/${id}`).then(res => res.json())
  }
}
</script>