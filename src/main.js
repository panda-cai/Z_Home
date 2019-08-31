import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import mintUI from 'mint-ui'
import zjHeader from "./components/index/header"
Vue.config.productionTip = false
import "mint-ui/lib/style.css";
Vue.use(mintUI);

Vue.component("zj-header", zjHeader);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
