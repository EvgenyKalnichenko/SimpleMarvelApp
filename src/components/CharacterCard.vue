<template>
  <router-link :to="`/character/${id}`" class="character-card">
    <div class="character-card__image">
      <img :src="`${thumbnail.path}.${thumbnail.extension}`" alt="">
    </div>
    <div class="character-card__container">
      <div class="character-card__title">{{name}}</div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'CharacterCard',
  props: {
    name: {
      type: String
    },
    thumbnail: {
      type: Object
    },
    id: {
      type: [String, Number]
    }
  }
}
</script>

<style scoped>

</style>
