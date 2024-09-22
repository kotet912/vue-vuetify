import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Books from '@/components/Books.vue'
import Words from '@/components/Words.vue'
import Profile from '@/components/Profile.vue'
import Signing from '@/components/Signing.vue'
import Signup from '@/components/Signup.vue'

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
