import Vue from 'vue'

export default () => {
  Vue.http.options.root = 'http://localhost:8981'
  Vue.http.options.emulateJSON = true
}
