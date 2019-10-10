import Vue from 'vue'
import Router from 'vue-router'
import index from "./views/index"
import classList from "./views/classList"
import detail from "./views/detail"
import login from "./views/login"
import register from "./views/register"
import cart from "./views/cart"
import test from "./components/product/productClassItem"

Vue.use(Router)

export default new Router({
  routes:[
    {path: '/',component:index},
    {path: '/index',component:index},
    {path: '/test',component:test},
    {path: '/classlist/:main_id/:activeName',component:classList,props:true},
    {path: '/detail/:pid',component:detail,props:true},
    {path: '/login',component:login},
    {path: '/register',component:register},
    {path: '/cart',component:cart}
  ]
})
