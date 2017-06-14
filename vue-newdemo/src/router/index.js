/**
 * Created by tangkaiqiang1 on 2017/6/14.
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import index from '../views/index.vue'
import goods from '../views/goods.vue'
import shopcart from '../views/shopcart.vue'
import user from '../views/user.vue'
import news from '../views/news.vue'
import trend from '../views/trend.vue'
import focus from '../views/focus.vue'
import tech from '../views/tech.vue'
const router = new VueRouter({
    routes:[
        {
            path:'/index',component:index,
            children:[
                {path:'news',component:news},
                {path:'trend',component:trend},
                {path:'focus',component:focus},
                {path:'tech',component:tech},
            ]
        },
        {
            path:'/goods',component:goods
        },
        {
            path:'/shopcart',component:shopcart
        },
        {
            path:'/user',component:user
        },
        {
            path:'*',redirect:'/index'
        }
    ]
});

export default router