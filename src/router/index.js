import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Blog from '../views/Blog.vue'
import Gallery from '../views/Gallery.vue'
import UploadImage from '../views/UploadImage.vue'
import Donate from '../views/Donate.vue'
import CreatePost from '../views/CreatePost.vue'
import March24 from '../views/posts/March24.vue'
import March25 from '../views/posts/March25.vue'
import March26 from '../views/posts/March26.vue'
import March28 from '../views/posts/March28.vue'
import March29 from '../views/posts/March29.vue'

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
    path: '/blog/create-post',
    name: 'create-post',
    component: CreatePost
  },
  {
    path: '/blog/1',
    name: 'march24',
    component: March24
  },
  {
    path: '/blog/2',
    name: 'march25',
    component: March25
  },
  {
    path: '/blog/3',
    name: 'march26',
    component: March26
  },
  {
    path: '/blog/4',
    name: 'march28',
    component: March28
  },
  {
    path: '/blog/5',
    name: 'march29',
    component: March29
  },
  {
    path: '/gallery',
    name: 'gallery',
    component: Gallery
  },
  {
    path: '/gallery/upload-image',
    name: 'upload-image',
    component: UploadImage
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
