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
  name: 'list-characters',
  props: {
    page: Number
  },
  data() {
    return {
      characters: []
    }
  },
  mounted: async function () {
    this.characters = await this.getCharacters() 
  },
  methods: {
    getCharacters: async function () {
      const { results } = await fetch(`https://rickandmortyapi.com/api/character/?page=${this.page}`).then(res => res.json())
      return results
    }
  },
  watch: {
    'page': async function () {
      this.characters = await this.getCharacters()
    }
  }
}
</script>