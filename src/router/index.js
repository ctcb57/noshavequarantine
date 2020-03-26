import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Blog from '../views/Blog.vue'
import Gallery from '../views/Gallery.vue'
import Donate from '../views/Donate.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/blog',
    name: 'blog',
    component: Blog
  },
  {
    path: '/gallery',
    name: 'gallery',
    component: Gallery
  },
  {
    path: '/donate',
    name: 'donate',
    component: Donate
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
