<template>
    <div v-for="(item,key) in props.dirList" :key="key" class="b-1 m-t-4  border-#f3f3f3  border-rd-2 m-l-4">
        <div class="flex-col-center flex-1" @contextmenu="(e) => { right(e, 'type', 'id') }" @click="selectDir(item.id)">
            <div>
                <Dir class="h-10 w-10" />
            </div>
            <div>{{item.title}}</div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import Dir from '@/assets/icons/dir.svg'


const props = defineProps<{
    dirList: Array<{
        title: string
        key: string
        id: string
    }>
}>()
const emit = defineEmits()
const selectDir = (id: string) => {
    console.log(id,'dirid')
    emit('openDir', id)
}
const right = (e: MouseEvent, type: string, id: string | number) => {
    e.preventDefault()
    console.log(e, type, id, '右击了')
}
</script>