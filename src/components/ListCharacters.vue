<template>
  <div>
    <ul>
      <li v-for='character in characters' :key='character.id'>
        {{ character.name }}
      </li>
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