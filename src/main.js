import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import mintUI from 'mint-ui'
import axios from 'axios'//配置axios
import zjHeader from "./components/index/header"
import backHeader from "./components/backHeader"
import cartIcon from "./components/cartIcon";//全局组件购物车icon
import Vant from "vant";
import "vant/lib/index.css";

Vue.use(Vant);

Vue.config.productionTip = false
import "mint-ui/lib/style.css";
//设置axios的默认请求路径
axios.defaults.baseURL="http://127.0.0.1:5050";
// 注册
Vue.use(mintUI);
Vue.prototype.axios=axios;
// 注册
axios.defaults.withCredentials=true;
//保存sassion信息

Vue.component("zj-header", zjHeader);
Vue.component("cart-icon", cartIcon);
Vue.component("backHeader",backHeader);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
