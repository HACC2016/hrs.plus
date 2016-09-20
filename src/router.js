import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const config = {
  history: true
}

let router = new VueRouter(config)

router.map({
  '/': {
    component: (resolve) => require(['./components/RootView.vue'], resolve),
    name: 'root'
  },
  '/:citation': {
    component: (resolve) => require(['./components/LawView.vue'], resolve),
    name: 'citation'
  }
})

export default router
