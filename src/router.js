import Vue from 'vue'
import Router from 'vue-router'
import index from "./views/index"
import classList from "./views/classList"
import test from "./components/product/productClassItem"

Vue.use(Router)

export default new Router({
  routes:[
    {path: '/',component:index},
    {path: '/index',component:index},
    {path: '/test',component:test},
    {path: '/classlist',component:classList},
  ]
})
