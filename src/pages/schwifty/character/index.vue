<template>
  <div>
    <section class="section">
      <div class="container">
        <h1 class="title">Rick and Morty Characters</h1>
        <list-characters></list-characters>
      </div>
    </section>
  </div>
</template>

<script>
import ListCharacters from '../../../components/ListCharacters.vue'

export default {
  components: {
    ListCharacters
  }
}
</script>