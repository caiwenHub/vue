import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      name: 'index',
      component: resolve => require(['@/pages/index.vue'],resolve)
    }
    // {
    //   path: '/admin',
    //   name: 'homepage',
    //   component: resolve => require(['@/components/homepage/index.vue'], resolve),
    //   redirect: '/admin/userManage',
    //   children: [{
    //           path: 'userRights',
    //           name: 'userRights',
    //           component: resolve => require(['@/components/user/userRights.vue'], resolve)
    //       }]
    //     }
  ]
})
