<template>
    <div>
        <div class="m-b-2">文件管理器</div>
        <div>
            <a-input v-model:value="searchValue" placeholder="请输入关键字检索" @search="searchKeyWorld" />
        </div>
        <div class="flex m-2">
            <div>
                <a-menu v-model:openKeys="openKeys" v-model:selectedKeys="selectedKeys" style="width: 256px"
                    mode="vertical" :items="items" @click="handleClick" />
            </div>
            <div class="p-4">
                <div class="m-t-1">
                    <a-breadcrumb>
                        <a-breadcrumb-item v-if="breadcrumb.lib" @click="setBreadcrumb('lib')">
                            {{ breadcrumb.lib }}
                        </a-breadcrumb-item>
                        <a-breadcrumb-item v-if="breadcrumb.dir" @click="setBreadcrumb('dir')">
                            {{ breadcrumb.dir }}
                        </a-breadcrumb-item>
                        <a-breadcrumb-item v-if="breadcrumb.note">{{ breadcrumb.note }}</a-breadcrumb-item>
                    </a-breadcrumb>
                </div>
                <div class="flex"
                    v-if="breadcrumb.lib && !breadcrumb.dir">
                    <DirManager :dirList="dirList" @openDir="openDir"/>
                </div>
                <div class="flex" v-if="breadcrumb.dir && !breadcrumb.note">
                    <NoteManager :noteList="noteList" @openNote="openNote"/>
                </div>
                <div class="flex" v-if="noteInfo">
                    <NoteInfo :noteInfo="noteInfo"/>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref, h } from 'vue'
import { useNoteStore } from '@/store/note/index'
import Markdown from '@/assets/icons/file_markdown.svg'
import DirManager from './DirManager.vue'
import NoteManager from './NoteManager.vue'
import NoteInfo from './noteInfo.vue'

const noteStore = useNoteStore()
const breadcrumb = ref<{
    [key: string]: string | boolean | undefined
}>(
    {
        lib: '',
        dir: '',
        note: '',
    }
)
const searchValue = ref('')
const searchKeyWorld = () => {
    console.log(searchValue.value)
}
const dirList = ref([
    {
        title: '文件夹1',
        key: 'dir1',
        id: '1',
    },
    {
        title: '文件夹2',
        key: 'dir2',
        id: '2',
    },
    {
        title: '文件夹3',
        key: 'dir3',
        id: '3',
    },
])
const noteList = ref([
    {
        title: '笔记1',
        key: 'note1',
        id: '1',
    },
    {
        title: '笔记2',
        key: 'note2',
        id: '2',
    },
    {
        title: '笔记3',
        key: 'note3',
        id: '3',
    },
])
const noteInfo = ref<{}|undefined>(undefined)
import {
    MailOutlined,
    CalendarOutlined,
    AppstoreOutlined,
    SettingOutlined,
} from '@ant-design/icons-vue';
import type { MenuProps } from 'ant-design-vue';

const selectedKeys = ref([]);
const openKeys = ref([]);
const items = ref([
    {
        key: '1',
        icon: () => h(Markdown, {
            class: 'icon-common'
        }),
        label: '库1',
        title: '库1',
    },
    {
        key: '2',
        icon: () => h(CalendarOutlined),
        label: '库2',
        title: '库2',
    },
    {
        key: 'sub1',
        icon: () => h(AppstoreOutlined),
        label: '库3',
        title: '库3',
    },
    {
        key: 'sub2',
        icon: () => h(SettingOutlined),
        label: '库4',
        title: '库4',
    },
]);
const handleClick: MenuProps['onClick'] = menuInfo => {
    console.log('click ', menuInfo.item.title);
    breadcrumb.value.dir = ''
    breadcrumb.value.note = ''
    noteInfo.value = undefined
    breadcrumb.value.lib = menuInfo.item.title
};
const setBreadcrumb = (type : string) => {
    noteInfo.value = undefined

    if(type === 'lib'){
        breadcrumb.value.dir = ''
        breadcrumb.value.note = ''

    }else{
        breadcrumb.value.note = ''
    }
}
const openDir = (id:string |number) =>{
    const nowDir = dirList.value.find((item) => {
        return item.id === id
    })
    breadcrumb.value.dir = nowDir?.title
}
const openNote = (id :string | number)=>{
    const nowNote = noteList.value.find((item) => {
        return item.id === id
    })
    breadcrumb.value.note = nowNote?.title
    noteInfo.value = {
        id:'0',
        title: nowNote?.title,
        content: '这是笔记1的内容',
    }
}
</script>
