import { createWebHashHistory, createRouter } from 'vue-router'
import { routes as appRoutes } from './modules/appRoute.ts'

const routes = [
  ...appRoutes,
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
