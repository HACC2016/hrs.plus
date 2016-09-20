<template lang="jade">
div(v-if='law')
  app-header(:title='lawTitle', back='/')
  law-headers(:law='law')
  div.law-body
    p(v-for='text in law.text' track-by='$index') {{ text }}

    law-references(:law='law')

    a.external-link(href="{{ law.url }}", target="_blank") View {{ lawTitle }} on www.capitol.hawaii.gov

</template>

<script>
import store from 'src/store'
import { hrsActions } from 'src/store/actions'
import Header from 'src/components/Header'
import LawReferences from 'src/components/LawReferences'
import LawHeaders from 'src/components/LawHeaders'


export default {
  store,
  vuex: {
    getters: {
    },
    actions: {
      setLaw: hrsActions.setLaw
    }
  },

  components: {
    'app-header': Header,
    LawReferences,
    LawHeaders,
  },

  beforeCompile: async function() {
    const url = "/json" + this.$route.path + ".json"
    let opts = {}//{ mode: 'no-cors' }
    //console.log("Route: "+this.$route.path)
    console.log("url="+url)
    fetch(url, opts)
      .then(r => r.json())
      .then(data => {
          console.log(data)
          this.setLaw(data)
        })
      .catch(function(e) {
        console.log("Fetch failed:" + e)
      })


  },
  computed: {
    law() {
      return store.state.law
    },
    lawTitle: (foo, bar) => {
      const law = store.state.law
      const title = "HRS §" + law.chapter + "-" + law.section
      return title
    },
    catchline: () => {
      const law = store.state.law
      return "§" + law.chapter + "-" + law.section + " " + law.section_text
    }

  },
  route: {
    data ({ to, next }) {
      console.log("Route to="+to)
      next()
    },
    canReuse: false
  }
}
</script>

<style>


.law {
  width: 100%;
}

.law-body {
  padding-left: 1em;
  padding-right: 1em;

}


.external-link {
  text-decoration:underline;
  color: #2323EE;

}


</style>
