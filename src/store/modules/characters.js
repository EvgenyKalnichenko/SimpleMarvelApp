import axios from 'axios'
export default {
  namespaced: true,
  state: {
    characters: []
  },
  getters: {
    characters: s => s.characters
  },
  mutations: {
    SET_CHARACTERS (state, data) {
      state.characters = data
    }
  },
  actions: {
    async fetchCharacters (context) {
      await axios.get(`https://gateway.marvel.com:443/v1/public/characters?limit=10&apikey=${process.env.VUE_APP_KEY_API}`).then(response => {
        console.log(response)
        const characters = response.data.data.results
        console.log(characters)
        context.commit('SET_CHARACTERS', characters)
      }).catch(e => {
        console.log(e)
      })
    },
    async fetchCharactersById (context, { id }) {
      console.log(id)
      const result = await axios.get(`https://gateway.marvel.com:443/v1/public/characters/${id}?apikey=${process.env.VUE_APP_KEY_API}`).then(response => {
        return response
      }).catch(e => {
        console.log(e)
        return e
      })
      return result
    },
    // https://gateway.marvel.com:443/v1/public/characters?limit=10&offset=10&apikey=ae02b96ce1dce1b712b66fac95471aaf
    async fetchCharactersMore (context) {
      const currentQuantity = context.state.characters.length
      await axios.get(`https://gateway.marvel.com:443/v1/public/characters?limit=10&offset=${currentQuantity}&apikey=${process.env.VUE_APP_KEY_API}`).then(response => {
        const s = JSON.stringify(context.state.characters)
        const characters = [
          ...JSON.parse(s),
          ...response.data.data.results
        ]
        console.log(characters)
        context.commit('SET_CHARACTERS', characters)
      }).catch(e => {
        console.log(e)
      })
    }
  },
  modules: {}
}
