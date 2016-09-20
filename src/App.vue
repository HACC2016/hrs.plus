<template lang="jade">
.app
  router-view(transition='slide')
</template>

<script>
import store from 'src/store'
import { hrsActions } from 'src/store/actions'

function loadCatchlines() {
  let hrsdata = require('../data/hrscurrent.json')
  let catchlines = []
  for(let chapter in hrsdata) {
    let sections = hrsdata[chapter].sections
    for(let section in sections) {
      let citation = chapter + "-" + section
      let catchline = sections[section]
      catchlines.push({ citation, catchline })
    }
  }
  return catchlines
}


export default {
  store,
  vuex: {
    actions: {
      init: hrsActions.init
    }
  },
  created: function(a,b,c) {
    this.init(loadCatchlines())
    this.$broadcast('$InfiniteLoading:loaded')
  },
  replace: false
}
</script>

<style>

body {
  font-family:  "Lora", "Quattrocento", /*"Asar", "Crimson Text", "Asar",*/ "Scheherazade", "Suranna", "Suravaram", "Roboto", "Ubuntu Condensed", sans-serif;
  margin: 0;
  font-size: 16px;
  background-color: #F9F6F4;
}

h1 {
  font-size: 2.0rem;
}

h2 {
  font-size: 1.625rem;
}

h3 {
  font-size: 1.375rem;
}

p {
  font-size: 1.0rem;
  line-height: 1.25rem;
}

a {
  text-decoration: none;
  color: #322E33;
}

/* always present */
.slide-transition {
/*  transition: all .3s ease;*/
}
/* .expand-enter defines the starting state for entering */
/* .expand-leave defines the ending state for leaving */
.slide-enter, .slide-leave {
/*  height: 0;*/

}

</style>
