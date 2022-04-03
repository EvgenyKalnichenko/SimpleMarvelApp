<template>
  <div class="container">
    <section v-if="!loading" class="character-detail">
      <div class="character-detail__row">
        <div class="character-detail__image">
          <img :src="`${thumbnail.path}.${thumbnail.extension}`" alt="">
        </div>
        <div class="character-detail__container">
          <div class="character-detail__top">
            <h1 class="character-detail__title">{{ name }}</h1>
            <div class="character-detail__date">Modified: {{ formattedDate }}</div>
          </div>
          <div class="character-detail__description">
            {{ description }}
          </div>
          <div class="character-detail__history">
            <collection-list
              title="Comics"
              :collection="comics"
            />
            <collection-list
              title="Stories"
              :collection="stories"
            />
            <collection-list
              title="Series"
              :collection="series"
            />
          </div>
        </div>
      </div>
    </section>
    <loader-app v-else />
    <not-found-app v-if="error" />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import moment from 'moment'
import CollectionList from '@/components/CollectionList'
import NotFoundApp from '@/components/NotFoundApp'
import LoaderApp from '@/components/LoaderApp'
export default {
  name: 'CharacterView',
  components: {
    CollectionList,
    NotFoundApp,
    LoaderApp
  },
  data () {
    return {
      loading: true,
      name: null,
      description: null,
      thumbnail: null,
      comics: null,
      stories: null,
      series: null,
      error: false
    }
  },
  methods: {
    ...mapActions('characters', ['fetchCharactersById'])
  },
  async mounted () {
    const options = {
      id: this.$route.params.CharacterView
    }
    const result = await this.fetchCharactersById(options)
    if (result.status === 200) {
      const res = result.data.data.results[0]
      this.name = res.name
      this.description = res.description
      this.formattedDate = moment(res.modified).fromNow()
      this.thumbnail = res.thumbnail
      this.comics = res.comics
      this.stories = res.stories
      this.series = res.series
      this.loading = false
    } else {
      this.error = true
      this.loading = false
    }
  }
}
</script>

<style scoped>

</style>
