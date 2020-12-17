<template>
  <div>
    <ul v-for='character in characters' :key='character.id'>
      <nuxt-link :to="`/schwifty/character/${character.id}`">
        <li>{{ character.name }}</li>
      </nuxt-link>
    </ul>
  </div>
</template>

<script>
import fetch from 'node-fetch'

export default {
  data() {
    return {
      characters: []
    }
  },
  async fetch() {
    const { results } = await fetch('https://rickandmortyapi.com/api/character').then(res => res.json())
    this.characters = results.slice(0, 5)
  }
}
</script>