import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: { // 全局参数
    wx: '',
    wx1: '111',
    wx2: '222'
  },
  mutations: { // set方法
    wxUpdate (state, wxNew) {
      this.state.wx = wxNew
      console.log('wxNew', wxNew)
    }
  },
  actions: {
  },
  modules: {
  }
})
