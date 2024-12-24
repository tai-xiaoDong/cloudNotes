import Login from '@/views/Login.vue'
import Edit from '@/views/Edit.vue'
import Home from '@/views/Home.vue'

export const routes = [
  { path: '/', component: Home },
  { path: '/login', component: Login },
  { path: '/edit', component: Edit },
]