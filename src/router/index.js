import Vue from 'vue'
import Router from 'vue-router'
import main1 from '../pages/main1'
import main2 from '../pages/main2'
import main3 from '../pages/main3'
import page1 from '../pages/children/page1'
import page2 from '../pages/children/page2'
import page3 from '../pages/children/page3'
import page4 from '../pages/children/page4'
import goods from '../pages/Goods'
import search from '../pages/Search'
import note from '../pages/Note'
import cart from '../pages/Cart'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  // mode: 'history',    //该模式下没有 # 前缀
  routes: [
    {
      path: '/',
      component: main2
    },
    {
      path: '/main1',
      name: 'main1',
      component: main1
    },
    {
      path: '/main2',
      name: 'main2',
      component: main2,
      children: [
        {
          path: '/',
          component: page1
        },
        {
          path: 'page1',
          name: 'page1',
          component: page1
        },
        {
          path:'page2',
          name: 'page2',
          component: page2
        },
        {
          path:'page3',
          name: 'page3',
          component: page3
        },
        {
          path:'page4',
          name: 'page4',
          component: page4
        }
      ]
    },
    {
      path: '/main3',
      name: 'main3',
      component: main3
    },
    {
      path: '/goods',
      name: 'goods',
      component: goods
    },
    {
      path: '/search',
      name: 'search',
      component: search
    },
    {
      path: '/note',
      name: 'note',
      component: note
    },
    {
      path: '/cart',
      name: 'cart',
      component: cart
    }
  ]
})
