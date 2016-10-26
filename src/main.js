// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './pages/App'
import store from './vuex/store'

import RoutesConfig from './config/RoutesConfig'
import HttpConfig from './config/HttpConfig'
import HttpInterceptor from './config/HttpInterceptor'
Vue.use(VueResource)
Vue.use(VueRouter)

// http init, set http root ,and add http interceptor
HttpConfig()

const router = new VueRouter({routes: RoutesConfig})

Vue.mixin({
  computed: {
    api () {
      return this.$store.state.api
    }
  },
  methods: {
    toast (content = '', title = '消息提醒', timeout, type = '') {
      timeout = timeout || parseInt(content.length / 4 * 1000) || parseInt(title.length / 4 * 1000)
      this.$store.commit('toast', {content, title, timeout, type})
    },
    closeToast (id) {
      this.$store.commit('closeToast', id)
    },
    $post (url, body, options) {
      return this.$http.post(url, body, options)
    },
    $get (url, options) {
      return this.$http.get(url, options)
    }
  }
})

/* eslint-disable no-new */
const app = new Vue({
  el: '#app',
  router,
  render: h => h(App),
  store: store
})

HttpInterceptor(app, router)
