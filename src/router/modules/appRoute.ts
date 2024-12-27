import Login from '@/views/Login.vue'
import Edit from '@/views/Edit.vue'
import Home from '@/views/Home.vue'
import ViewPage from '@/views/ViewPage.vue'

export const routes = [
  { path: '/', component: Home },
  { path: '/login', component: Login },
  { path: '/edit', component: Edit },
  {path: '/view/:id', component: ViewPage },
]