import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/participation',
      component: () => import('@/views/ParticipationView.vue')
    },
    {
      path: '/papers',
      component: () => import('@/views/PapersView.vue')
    },
    {
      path: '/keynote/speakers',
      component: () => import('@/views/KeynoteSpeakersView.vue')
    },
    {
      path: '/committees',
      component: () => import('@/views/CommitteesView.vue')
    },
    {
      path: '/attending',
      component: () => import('@/views/AttendingView.vue')
    }
  ]
})

export default router
