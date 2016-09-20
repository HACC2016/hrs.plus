/* global __DEBUG__:false, fetch: true */
import 'babel-polyfill'

require('intersection-observer')

import Vue from 'vue'

import App from 'src/App'
import router from 'src/router'

Vue.config.debug = __DEBUG__

if (typeof fetch === 'undefined') {
  // Not needed right now, but may be useful later.
  require.ensure([], (require) => {
    require('imports?self=>window!whatwg-fetch')
    router.start(App, 'body')
  })
} else {
  router.start(App, 'body')
}
