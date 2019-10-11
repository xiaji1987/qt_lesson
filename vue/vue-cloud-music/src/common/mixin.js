import { mapGetters, mapMutations, mapActions} from 'vuex'
export const searchMixin = {
  data () {
    return {
      query: '',
      refreshDelay: 120
    }
  },
  computed: {
    
  },
  methods: {
    saveSearch (song) {
      // console.log(song)
      this.selectPlaySong(song)
    },
    ...mapActions(['selectPlaySong'])
  }
}

export const playerMixin = {
  computed: {
    ...mapGetters(['currentSong'])
  },
}
