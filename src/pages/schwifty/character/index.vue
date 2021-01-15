<template>
  <div>
    <section class="section">
      <div class="container">
        <h1 class="title">Rick and Morty Characters</h1>
        <p>Total Number of Characters: {{count}}</p>
        <list-characters :page="page"></list-characters>
        <!-- pagination here -->
        <button v-for='page in pages' :key='page' @click="goToPage(page)">{{page}}</button>
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
      totalPages: 0,
      pages: []
    }
  },
  async fetch() {
    const { info } = await fetch('https://rickandmortyapi.com/api/character').then(res => res.json())
    this.count = info.count
    this.totalPages = info.pages
    this.pages = Array.from(Array(this.totalPages)).map((e,i)=>i+1)
  },
  methods: {
    goToPage: function (page) {
      this.page = page
    }
  }
}
</script>