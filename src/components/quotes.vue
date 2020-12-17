<template>
  <div>
    <button @click='newQuote'>Get New Quote</button>
    <div class='tile is-ancestor'>
      <div class='tile'>
        <img src="../assets/RONSWANSON.png" />
      </div>
      <div class='tile quote'>
        <p>{{ quote }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import fetch from 'node-fetch'
export default {
  name: 'Quote',
  data: function () {
    return {
      quote: ''
    }
  },
  methods: {
    newQuote: function () {
      try {
        fetch('http://ron-swanson-quotes.herokuapp.com/v2/quotes')
          .then(res => res.json())
          .then(body => this.quote = `"${body[0]}"`)
      } catch (err) {
        throw new Error(err)
      }
    }
  }
}
</script>

<style scoped>
  .quote {
    font-family: 'Textile', 'Courier New', Courier, monospace;
  }
</style>
