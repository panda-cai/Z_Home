import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import mintUI from 'mint-ui'
import axios from 'axios'//配置axios
import zjHeader from "./components/index/header"
import cartIcon from "./components/cartIcon";
Vue.config.productionTip = false
import "mint-ui/lib/style.css";
//设置axios的默认请求路径
axios.defaults.baseURL="http://127.0.0.1:3001";
// 注册
Vue.use(mintUI);
Vue.prototype.axios=axios;
// 注册
axios.defaults.withCredentials=true;
//保存sassion信息

Vue.component("zj-header", zjHeader);
Vue.component("cart-icon", cartIcon);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
