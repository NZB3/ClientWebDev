import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/HomeView.vue'
import About from '@/views/AboutView.vue'
import Course from '@/views/CourseView.vue'
import Sign_in from '@/views/Sign_inView.vue'
import Sign_up from '@/views/Sign_upView.vue'
import AccauntView from "@/views/AccauntView.vue";

Vue.use(VueRouter)

const routes = [
  { name: 'home',     path: '/', component: Home },
  { name: 'about',    path: '/about', component: About, },
  { name: 'course',  path: '@/courses/:courseId', component: Course },
  { name: 'sign_in',  path: '/sign_in', component: Sign_in, },
  { name: 'sign_up',  path: '/sign_up',  component: Sign_up, },
  { name: 'accaunt',     path: '/accaunt', component: AccauntView }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
