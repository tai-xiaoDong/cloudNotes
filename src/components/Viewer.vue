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
import { Editor, Viewer } from '@bytemd/vue-next'
// import zh from 'bytemd/locales/zh_Hans.json';

const value = ref(`dfgfdfgdfhdgfdg`)
const plugins = [gfm(),highlight()]

// const handleChange = (val: string) => {
//   value.value = val
//   console.log(value.value,'dd')
// }

</script>

<template>
  <div class="editbox" >
    <!-- <Editor :value="value" :plugins="plugins" @change="handleChange"  :locale="zh"/> -->
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
