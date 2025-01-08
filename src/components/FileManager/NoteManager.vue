<template>
    <div v-for="(item,key) in props.noteList" :key="key" class="b-1 m-t-4  border-#f3f3f3  border-rd-2 m-l-4">
        <div class="flex-col-center flex-1" @contextmenu="(e) => { right(e, 'type', 'id') }" @click="selectNote(item.id)">
            <div>
                <Markdown class="h-10 w-10" />
            </div>
            <div>{{item.title}}</div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import Markdown from '@/assets/icons/file_markdown.svg'

const props = defineProps<{
    noteList: Array<{
        title: string
        key: string
        id: string
    }>
}>()
const emit = defineEmits()
const selectNote = (id: string) => {
    console.log(id,'dirid')
    emit('openNote', id)
}
const right = (e: MouseEvent, type: string, id: string | number) => {
    e.preventDefault()
    console.log(e, type, id, '右击了')
}
</script>