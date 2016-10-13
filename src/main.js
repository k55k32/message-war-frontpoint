// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App'
import store from './vuex/store'

Vue.use(VueResource)
Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    component: r => require(['src/pages/login/Login.vue'], r),
    children: [
      {
        path: 'login',
        name: 'login',
        component: r => require(['src/pages/login/LoginForm.vue'], r)
      },
      {
        path: 'register',
        name: 'register',
        component: r => require(['src/pages/login/RegisterForm.vue'], r)
      }
    ]
  }
]

const router = new VueRouter({routes})

Vue.mixin({
  methods: {
    toast (content, title = '消息提醒', timeout, type = '') {
      timeout = timeout || parseInt(content.length / 4 * 1000)
      this.$store.commit('toast', {content, title, timeout, type})
    },
    closeToast (id) {
      this.$store.commit('closeToast', id)
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

console.log(app)
