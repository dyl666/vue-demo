import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

// 刷新浏览器更换wx值
const wx1 = store.state.wx1 // 初始值1
const wx2 = store.state.wx2 // 初始值2
const wxStorage = window.sessionStorage.getItem('wx')
if (wxStorage === wx1) {
  window.sessionStorage.setItem('wx', wx2)
  store.commit('wxUpdate', wx2)
} else {
  window.sessionStorage.setItem('wx', wx1)
  store.commit('wxUpdate', wx1)
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
