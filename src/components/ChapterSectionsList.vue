<template lang="jade">
div
  ul.results
    li(v-for='row in results' track-by="citation")
      div(tabindex="{{ $index + 1}}")
        result-row(:location='row')
    infinite-loading.footer(:on-infinite="onInfinite", spinner="spiral", distance="1000")
      span(slot="no-more")
        i no more results
  //div.loading(v-if='loading')
</template>

<script>
import ResultRow from 'src/components/ResultRow'
import InfiniteLoading from 'vue-infinite-loading'
import { hrsActions } from 'src/store/actions'
//import Vue from 'vue'

async function ready () {
  this.loaded()
}


export default {
  /*props: [
    'citations'
  ],*/
  ready,
  components: {
    InfiniteLoading,
    ResultRow
  },
  vuex: {
    getters: {
//      results: state => state.results,
      loading: state => state.loading
    },
    actions: {
      appendVisibleResults: hrsActions.appendVisibleResults,
      setLoading: hrsActions.setLoading
    }
  },

  computed: {
     results: function() {
       const all = this.$store.state.allLaws
       const query = this.$store.state.query
       function filter(cit) {
         for(var i in query) {
           const q = new RegExp(query[i], "i")
           if (cit.citation.search(q) + cit.catchline.search(q) === -2) {
              return false
            }
         }
         return true
       }

       let res = all.filter(filter)
       if (res.length > 100) res = res.slice(0,100)
       return res //filtered //this.$store.state.results
     }
  },


  methods: {
    loaded() {
      this.$broadcast('$InfiniteLoading:loaded')
      //this.setLoading(false)
    },
    onInfinite() {
      const pos = this.$store.state.results.length
      let newstuff = this.$store.state.allLaws.slice(pos, pos+50)

      setTimeout(() => {
        this.appendVisibleResults(newstuff)
        this.loaded()
      }, 0)
      //this.setLoading(true)
    }
  }
}
</script>

<style>
.results {
  list-style: none;
  margin: 0;
  padding: 0;
}

.results li:nth-child(odd) {
    background-color: rgba(128, 128, 128, 0.03);
  }

.results li {
  border-bottom: 1px solid rgba(128, 128, 128, 0.15);

  &:first-child {
    padding-top: 0;
  }

}

.loading {
  position: fixed;
  background-color:red;
  width:100%;
  bottom:0px;
  height:30px;

}



.footer {
  position: fixed;
  width:100%;
  bottom:0px;
  background-color: white
}
</style>
