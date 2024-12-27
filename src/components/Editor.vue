<script setup lang="ts">
import { ref , watch} from 'vue'
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
import zh from 'bytemd/locales/zh_Hans.json';

const content = ref('')
const plugins = [gfm(),highlight()]
const props = defineProps<{
  id: string
}>()
const handleChange = (val: string) => {
  content.value = val
  console.log(content.value,'dd')
}
watch(()=>props.id,(newVal)=>{
  if(newVal){
    console.log(newVal, typeof props.id, 'Id 变了，重新获取note内容')
  }
}, { immediate: true })
</script>

<template>
    <Editor :value="content" :plugins="plugins" @change="handleChange"  :locale="zh"  />
</template>

<style scoped lang="scss">
:deep(.bytemd) {
  height: calc(100vh - 45px);
  border:none;
}
:deep(pre){
  background-color:rgb(58, 57, 57) ;
}
// :deep(.CodeMirror-line){
//   background-color: white;
// } 
</style>
