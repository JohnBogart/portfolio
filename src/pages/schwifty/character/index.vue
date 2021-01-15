<template>
  <div>
    <section class="section">
      <div class="container">
        <h1 class="title">Rick and Morty Characters</h1>
        <p>Total Number of Characters: {{count}}</p>
        <list-characters :page="page"></list-characters>
        <!-- pagination here -->
        <button @click="goToPage">19</button>
      </div>
    </section>
  </div>
</template>

<script>
import fetch from 'node-fetch'
import ListCharacters from '../../../components/ListCharacters.vue'

export default {
  components: {
    ListCharacters
  },
  data () {
    return {
      count: 0,
      page: 0,
      totalPages: 0
    }
  },
  async fetch() {
    const { info } = await fetch('https://rickandmortyapi.com/api/character').then(res => res.json())
    this.count = info.count
    this.totalPages = info.pages
  },
  methods: {
    goToPage: function () {
      this.page = 19
    }
  }
}
</script>