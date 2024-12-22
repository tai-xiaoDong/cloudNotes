import Login from '@/views/Login.vue'
import Edit from '@/views/Edit.vue'
import HomeView from '@/views/HomeView.vue'

export const routes = [
  { path: '/', component: HomeView },
  { path: '/login', component: Login },
  { path: '/edit', component: Edit },
]