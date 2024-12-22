import { createApp } from 'vue';
// import './style.css';
import App from './App.vue';
import {createPinia} from 'pinia';
import router from './router';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';
import 'bytemd/dist/index.css';
import '@unocss/reset/tailwind-compat.css'
import 'github-markdown-css/github-markdown.css'



const pinia = createPinia()

createApp(App).use(pinia).use(router).use(Antd).mount('#app')
