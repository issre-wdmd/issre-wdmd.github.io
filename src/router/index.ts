import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { useRootStore } from '@/stores/root'

const routes = [
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

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior: () => ({ left: 0, top: 0 })
})

router.beforeEach(() => {
  const root = useRootStore()
  root.setLoading(true)
})

router.afterEach(() => {
  const root = useRootStore()
  root.setLoading(false)
})

export default router
