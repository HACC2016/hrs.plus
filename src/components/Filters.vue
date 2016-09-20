<template lang="jade">
.filters
  p Search HRS&nbsp;
    span.dropdown
      select(v-model='classValue', @change='classChange')
        option(value='{{ constants.CLASS_CHAPTER_SECTION }}') chapter and section titles
        option(value='{{ constants.CLASS_CHAPTER }}') chapter titles
        option(value='{{ constants.CLASS_SECTIONS }}' ) section titles
    |  for
  p
    search
</template>

<script>
import Search from 'src/components/Search'
import store from 'src/store'
import { setClass, setDistance } from 'src/store/actions'
import { CLASS_CHAPTER, CLASS_CHAPTER_SECTION, CLASS_SECTION } from 'src/store/constants'

export default {
  data () {
    return {
      classValue: CLASS_CHAPTER_SECTION,
      constants: { CLASS_CHAPTER, CLASS_CHAPTER_SECTION, CLASS_SECTION }
    }
  },
  computed: {
    hasCoordinates: () => !!store.state.coordinates
  },
  methods: {
    classChange () {
      //console.log(this.classValue)
    },
  },
  components: { Search },
  vuex: {
    actions: {
      //setOpen,
      //setDistance
    }
  }
}
</script>

<style>
.filters {
  padding: 10px 20px 0;

  & p {
    margin: 0;
    line-height: 2.0rem;
  }
}

.dropdown {
  padding-bottom: 3px;
  border-bottom: 1px solid #2979FF;

  & select {
    display: inline-block;
    font-family: inherit;
    font-weight: bold;
    background-color: transparent; /*rgba(0,0,0,0.1);*/
    border: none;
    font-size: inherit;
    border-radius: 0;
    -webkit-appearance: none;
  }
}
</style>
