import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DefaultLayout from '../components/DefaultLayout.vue'
import AuthLayout from '../components/AuthLayout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path: '/',
      name: 'home',
      component: HomeView
    },
    {path: '/posts',
      name: 'posts',
      component: ()=>import('../views/PostView.vue')
    },
    {path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },    
    {path: '/users',
      name: 'users',
      component: () => import('../views/UserView.vue')
    },   
    {path: '/test',
    name: 'tests',
    component: ()=>import('../views/TablesView.vue')
  },
    {path:'/auth',
      redirect:'/login',
      name:'Auth',
      component:AuthLayout,
      meta:{isGuest:false},
      children:[
        { path: '/login',
          name: 'Login',
          component: ()=> import('../views/Login.vue')
        },
        { path: '/register',
          name: 'Register',
          component: ()=> import('../views/Register.vue')
        },
      ]
    },
    {path:'/guest',
      redirect:'/about',
      name:'Guest',
      component:DefaultLayout,
      meta:{isGuest:true},
      children:[
        { path: '/about',
          name: 'About',
          component: ()=> import('../views/AboutView.vue')
        },        
      ]
    },
  ]
})

export default router
