<template lang="jade">
a(v-link="{name: 'citation', params: { citation: location.citation }}")
  p.result
    span.citation {{{ cite }}}&nbsp;&nbsp;
    span.catchline {{{ catch }}}

</template>

<script>

function highlightByRegExp(txt, regex) {
  const opentag = '<span class="highlight">'
  const closetag = '</span>'
  const parts = txt
    .split(regex)
    .map((txt, i) => i%2 ? opentag + txt + closetag : txt)
  return parts.join("")
}

export default {
  computed: {
    cite: function() {
      const txt = "§" + this.location.citation
      return highlightByRegExp(txt, this.$store.state.qregex)
    },
    catch: function() {
      return highlightByRegExp(this.location.catchline, this.$store.state.qregex)
    }
}
,

  methods: {
  },
  props: [ 'location']
}
</script>

<style>
.citation {
  /*padding: 5px 5px 5px 5px;*/
  /*font-family: Serif;*/
  font-weight: bold;
  /*width: 8em;
  float: left;*/

  & a {
    display: inline-block;
    width: 100%;
  }

  & h3 {
    margin: 0;
    cursor: pointer;
  }

  & p {
    margin: 5px 0;
  }
}

.result {
  clear: left;
  overflow: auto;
  margin: 0px;
  padding: 5px;
}

.highlight {
  /*background-color: rgba(255,255,0,0.55);*/
  text-shadow: 0px 0px 5px yellow, 0 0 8px yellow, 0px 0px 2px black;
  font-size: 24;
}

.catchline {
  /*padding: 5px;*/
}
</style>
