import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Home from '../pages/Home.vue'
import About from '../pages/About.vue'
import Message from '../pages/Message.vue'
import News from '../pages/News.vue'
import Items from '../pages/newitems.vue'
import Msgitems from '../pages/msgitems.vue'



const router = new VueRouter({
    routes: [
        {
            path: '/home',
            component: Home,
            children: [
                {
                    path: 'news',
                    component: News,
                    children: [
                        {
                            name: 'xiangqing',
                            path: 'newitems/:id/:title/:content',
                            component: Items,
                        }
                    ]
                },
                {
                    path: 'Message',
                    component: Message,
                    children: [
                        {
                            name: 'xiangqing2',
                            path: 'msgitems/:id/:title/:content',
                            component: Msgitems,
                            // 相当与将传递的数据直接挂载在组件实例上了
                            // 可以直接使用props：[]接收
                            // 只适用于params传值方式
                            props: true,

                            // props都可以和params和query使用
                            // params只需要使用props：true就可以
                            // query需要在props中返回一个对象

                            // props: $route => $route.query
                            // 数据都在$route.qery上
                        }
                    ]
                },
            ]

        },
        {
            path: '/about',
            component: About,
        }
    ]
})
export default router