<template>
  <div>
    <button @click='newQuote'>Get New Quote</button>
    <p>{{ quote }}</p>
    <img src="../assets/RONSWANSON.png" />
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
          .then(body => this.quote = body[0])
      } catch (err) {
        throw new Error(err)
      }
    }
  }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
