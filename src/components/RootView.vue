<template lang="jade">
.root
  app-header(title='Hawaii Revised Statutes +')
  filters
  chapter-sections-list
</template>

<script>
import Header from 'src/components/Header'
import Filters from 'src/components/Filters'
import ChapterSectionsList from 'src/components/ChapterSectionsList'


export default {
  ready: async function () {
  },

  computed: {
    /*citations () {
      console.log("citations=" + this.$store.state.results)
      return this.$store.state.results
    }*/

  },
  vuex: {
    getters: {
      citations: state => state.results,
    },
    actions: {
    }
  },
  components: {
   'app-header': Header,
    Filters,
    ChapterSectionsList
  }
}
</script>
