import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Books from '@/views/Books.vue'
import Words from '@/views/Words.vue'
import Profile from '@/views/Profile.vue'
import Signing from '@/views/Signing.vue'
import Signup from '@/views/Signup.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/books',
    name: 'books',
    component: Books
  },
  {
    path: '/words',
    name: 'words',
    component: Words
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile
  },
  {
    path: '/signing',
    name: 'signing',
    component: Signing
  },
  {
    path: '/signup',
    name: 'signup',
    component: Signup
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
