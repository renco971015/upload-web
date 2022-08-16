import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import Router from 'vue-router'
import HelloWorld from "@/components/HelloWorld";
import UpLoad from "@/components/Upload";
import router from "@/router";
import personal from './plugins/personal'

Vue.use(personal)
Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App),
  router
}).$mount('#app')


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '登录',
      component: HelloWorld
    },
    {
      path: '/upload',
      name: '首页',
      component: UpLoad
    }
  ]
})