import Router from 'vue-router'
import Vue from 'vue';
import HelloWorld from "@/components/HelloWorld";
import UpLoad from "@/components/Upload";

Vue.use(Router)

const routes = [
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
const router = new Router({
    // 这里配置的是路由和组件的映射关系, 是一个数组.
    routes
})

export default router