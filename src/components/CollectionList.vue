<template>
  <div class="collection">
    <h2 class="collection__title">{{ title }}</h2>
    <div
      v-for="item in collection.items"
      :key="item.resourceURI"
      class="collection__item"
    >
      <a href="#" class="collection__link">{{item.name}}</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CollectionComics',
  props: {
    collection: {
      type: Object
    },
    title: {
      type: String
    }
  }
}
</script>

<style scoped>

</style>
