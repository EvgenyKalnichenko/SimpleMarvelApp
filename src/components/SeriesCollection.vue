<template>
  <div class="series">
    <h2 class="series__collection">Comics</h2>
    <div
      v-for="item in collection.items"
      :key="item.resourceURI"
      class="comics__item"
    >
      <a href="#">{{item.name}}</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SeriesCollection',
  props: {
    collection: {
      type: Object
    }
  }
}
</script>

<style scoped>

</style>
