<template>
  <div class="container">
    <h1 class="title-h1">Marvel characters</h1>
    <section class="section-characters">
      <character-card
        v-for="item in this.characters"
        :key="item.id"
        :id="item.id"
        :name="item.name"
        :thumbnail="item.thumbnail"
      />
    </section>
    <div class="section-more">
      <a href="#" class="btn" @click.prevent="this.fetchCharactersMore">Показать еще</a>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapActions, mapGetters } from 'vuex'
import CharacterCard from '@/components/CharacterCard'

export default {
  name: 'HomeView',
  components: {
    CharacterCard
  },
  methods: {
    ...mapActions('characters', ['fetchCharacters']),
    ...mapActions('characters', ['fetchCharactersMore'])
  },
  mounted () {
    if (!this.characters.length) {
      this.fetchCharacters()
    }
  },
  computed: {
    ...mapGetters('characters', ['characters'])
  }
}
</script>

<style lang="scss">
.section-more {
  display: flex;
  justify-content: center;
  padding: 40px 0;
}
</style>
