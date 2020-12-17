<template>
  <div>
    <section class="section">
      <div class="container">
        <character-profile :character='character'></character-profile>
      </div>
    </section>
  </div>
</template>

<script>
import fetch from 'node-fetch'
import CharacterProfile from '../../../components/CharacterProfile'

export default {
  components: {
    CharacterProfile
  },
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