import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/HomeView.vue'
import About from '@/views/AboutView.vue'
import Contact from '@/views/ContactView.vue'
import Courses from '@/views/CoursesView.vue'
import Sign_in from '@/views/Sign_inView.vue'
import Sign_up from '@/views/Sign_upView.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/about',
    name: 'about',
    component: About,
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact,
  },
  {
    path: '/courses',
    name: 'courses',
    component: Courses,
  },
  {
    path: '/sign_in',
    name: 'sign_in',
    component: Sign_in,
  },
  {
    path: '/sign_up',
    name: 'sign_up',
    component: Sign_up,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
