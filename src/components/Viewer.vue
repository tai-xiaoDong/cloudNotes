<script setup lang="ts">
import { ref } from 'vue'
import gfm from '@bytemd/plugin-gfm'
import highlight from '@bytemd/plugin-highlight';
// import 'highlight.js/styles/monokai-sublime.css'
// import 'highlight.js/styles/github-dark.css'
// import 'highlight.js/styles/github.css'
// import 'highlight.js/styles/monokai.css'
import 'highlight.js/styles/monokai-sublime.css'
// import hljs from 'highlight.js';
import 'github-markdown-css/github-markdown.css'
import { Viewer } from '@bytemd/vue-next'
// import zh from 'bytemd/locales/zh_Hans.json';

const value = ref(`这是一篇markdown文章`)
const plugins = [gfm(),highlight()]

// const handleChange = (val: string) => {
//   value.value = val
//   console.log(value.value,'dd')
// }

// 定义事件
const emit = defineEmits<{
  (e: 'title-change', title: string): void
  (e: 'time-change', time: string): void
}>()

// 在适当的地方触发事件
// emit('title-change', newTitle)
// emit('time-change', updateTime)

</script>

<template>
  <div class="editbox" >
    <Viewer :value="value" :plugins="plugins" />
  </div>

  
</template>

<style scoped lang="scss">
:deep(.bytemd) {
  height: calc(100vh - 20px);
}
:deep(pre){
  background-color:rgb(58, 57, 57) ;
}
// :deep(.CodeMirror-line){
//   background-color: white;
// } 
</style>
