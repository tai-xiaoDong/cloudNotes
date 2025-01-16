<template>
  <div class="flex flex-wrap">
    <div v-if="tagShow.vue" class="flex-col-center">
      <div><Vue class="icon-common"/></div>
      <div>vue</div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref, defineProps } from 'vue'
const modules = import.meta.glob('@/assets/stackIcon/*.svg');
// 获取 Vue.svg 的模块
const Vue = modules['@/assets/stackIcon/Vue.svg'];
const props = defineProps<{
  stackList: string[]
}>()
//  import Vue from '@/assets/stackIcon/Vue.svg'

// const React = ()=>import('@/assets/stackIcon/React.svg')
// const TypeScript = ()=>import('@/assets/stackIcon/TypeScript.svg')
// const Scss = ()=>import('@/assets/stackIcon/Scss.svg')
// const Docker = ()=>import('@/assets/stackIcon/Docker.svg')
// const Node = ()=>import('@/assets/stackIcon/Node.svg')
// const Vite = ()=>import('@/assets/stackIcon/Vite.svg')
// const Webpack = ()=>import('@/assets/stackIcon/Webpack.svg')
// const VueRouter = ()=>import('@/assets/stackIcon/VueRouter.svg')
// const Vuex = ()=>import('@/assets/stackIcon/Vuex.svg')
// const Pinia = ()=>import('@/assets/stackIcon/Pinia.svg')

console.log(props.stackList)
const tagShow = ref({
  vue:true,
  react:false,
  typeScript:false,
  scss:false,
  docker:false,
  node:false,
  vite:false,
  webpack:false,
  vueRouter:false,
  vueX:false,
  pinia:false,
})
</script>
