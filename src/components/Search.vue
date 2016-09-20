<template lang="jade">
span.search
  input#hrsquery(type='text', @input="setQuery | debounce 250", @focus='clearInput', @blur='resetInput', placeholder="phrase")
  span.bar
</template>

<script>
import { hrsActions } from 'src/store/actions'
import MapsLoader from 'src/services/google_maps'

// Hold previous value in the input
let previousValue

export default {
  methods: {
    clearInput (event) {
      previousValue = event.target.value
      event.target.value = ''
    },
    resetInput (event) {
      event.target.value = previousValue
    },

  },
  ready () {
  },
  vuex: {
    getters: {
      query: (state) => state.query
    },
    actions: {
      setQuery: (store, e) => {
        hrsActions.setQuery(store, e.target.value)
      }
    }
  }
}
</script>

<style>
.search {
  position: relative;
  /*margin: 25px 10px 25px;*/

  & input {
    font-size: 1.0rem;
    padding-bottom: 5px;
    display: inline-block;
    -webkit-appearance: none;
    -moz-appearance: none;
    -webkit-border-radius: 0;
    width: 100%;
    border: none;
    border-bottom: 1px solid #757575;
    text-overflow: ellipsis;
    font-family: inherit;

    &:focus {
      outline: 0;
    }

    &:focus ~ label {
      top: -20px;
      color: #2979FF;
    }

    &:focus ~ .bar:before, &:focus ~ .bar:after {
      width: 50%;
    }
  }
}

.bar {
  position: relative;
  display: block;
  width: calc(100%);

  &:before, &:after {
    content: '';
    height: 3px;
    width: 0;
    bottom: 1px;
    position: absolute;
    background: #2979FF;
    transition: 0.75s cubic-bezier(0.785, 0.135, 0.15, 0.86) all;
  }

  &:before {
    left: calc(50%);
  }

  &:after {
    right: calc(50%);
  }
}
</style>
