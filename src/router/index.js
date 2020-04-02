import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  { // 项目默认地址
    path: '/',
    redirect: '/shouye'
  },
  { // 发布地址
    path: '/fabu',
    component: () => import('../views/module/fabu.vue')
  },
  { // 主页面地址
    path: '/home',
    component: () => import('../views/Home.vue'),
    children: [
      {
        path: '/shouye',
        component: () => import('../views/module/ShouYe.vue')
      }
    ]
  },
  { // 用户模块地址
    path: '/user',
    redirect: '/user/login',
    component: () => import('../views/User.vue'),
    children: [
      { // 登录
        path: '/user/login',
        component: () => import('../views/user/Login.vue')
      },
      { // 注册
        path: '/user/register',
        component: () => import('../views/user/Register.vue')
      },
      { // 重置密码
        path: '/user/forget',
        component: () => import('../views/user/Forget.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
