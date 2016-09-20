<template lang="jade">
div().law-references
  p References
  ul
    li.reference(v-for='ref in law.refs')
      a(href="/")
        p {{ ref }}

</template>

<script>
import store from 'src/store'

export default {
  store,
  vuex: {
    getters: {
    },
    actions: {
    }
  },
  props: ['law'],
}
</script>

<style>



.law-references {
  box-shadow: 0px 0px 5px black;
}

.law-references p {
  margin: 0px;
  padding: 0px;
}

.law-references ul {
  margin: 0px;
  padding: 1em;
}

.reference p {
  margin: 0px;
}

li.reference {
  list-style: none;
}

li.reference:nth-child(odd) {
  background-color: rgba(128,128,128,0.1);
}


</style>
