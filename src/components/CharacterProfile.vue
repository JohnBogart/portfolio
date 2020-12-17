<template>
  <div>
    <h1 class="title">{{ name }}</h1>
    <img :src="imgSrc"><img>
  </div>
</template>

<script>
export default {
  props: {
    character: Object
  },
  computed: {
    name () {
      return this.character.name
    },
    imgSrc () {
      return this.character.image
    }
  }
}
</script>

<style scoped>
img {
  border-radius: 50%;
}
</style>