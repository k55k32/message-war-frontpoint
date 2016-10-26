import Vue from 'vue'
import Vuex from 'vuex'
import Api from './Api'
Vue.use(Vuex)

const state = {
  toastQueen: [],
  loginUser: null,
  token: null,
  api: Api
}

const mutations = {
  toast (state, toast) {
    toast.id = toast.id || 'toast_id_' + new Date().getTime()
    setTimeout(() => {
      store.commit('closeToast', toast.id)
    }, toast.timeout)
    state.toastQueen.push(toast)
  },
  closeToast (state, id) {
    state.toastQueen.forEach((t, index) => {
      if (t.id === id) {
        state.toastQueen.splice(index, 1)
        return false
      }
    })
  }
}

const store = new Vuex.Store({
  state,
  mutations
})

export default store
