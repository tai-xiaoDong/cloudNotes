<template>
  <a-card :title="props.noteInfo.title" style="width: 100%">
    <template #extra><a-button @click="openEdit">编辑</a-button></template>
    <p>{{props.noteInfo.content}}</p>
  </a-card>
</template>
<script setup lang="ts">
import { useNoteStore }  from '@/store/note/index'
const noteStore = useNoteStore()
const props = defineProps<{
    noteInfo: {
        title: string
        content: string
        id: string
    }
}>()
const emit = defineEmits()
const openEdit = () => {
    console.log('编辑')
    noteStore.markdownId = ''
    noteStore.markdownId = props.noteInfo.id 
}
</script>