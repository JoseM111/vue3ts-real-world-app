import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import EventList from '@/views/EventList.vue'
import EventDetailsPage from '@/views/EventDetails.vue'
import About from '@/views/About.vue'

const routes: Array<RouteRecordRaw> = [
  { path: '/', name: 'EventListPage', component: EventList },
  { path: '/about', name: 'About', component: About },
  {
    path: '/event/:id',
    name: 'EventDetailsPage',
    props: true,
    component: EventDetailsPage
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
