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
                        <a-breadcrumb-item v-if="breadcrumb.lib">{{ breadcrumb.lib }}</a-breadcrumb-item>
                        <a-breadcrumb-item v-if="breadcrumb.dir">{{ breadcrumb.dir }}</a-breadcrumb-item>
                        <a-breadcrumb-item v-if="breadcrumb.note">{{ breadcrumb.note }}</a-breadcrumb-item>
                    </a-breadcrumb>
                </div>
                <div class="b-1 p-4 m-t-4 flex " >
                   <div>
                     <Dir class="h-10 w-10" />
                   </div>
                   <div>文件夹名称</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref, h } from 'vue'
import { useNoteStore } from '@/store/note/index'
import Dir from '@/assets/icons/dir.svg'

const noteStore = useNoteStore()
const breadcrumb = {
    lib: '库',
    dir: '文件夹',
    note: '笔记',
}
const searchValue = ref('')
const searchKeyWorld = () => {
    console.log(searchValue.value)
}

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
        icon: () => h(MailOutlined),
        label: 'Navigation One',
        title: 'Navigation One',
    },
    {
        key: '2',
        icon: () => h(CalendarOutlined),
        label: 'Navigation Two',
        title: 'Navigation Two',
    },
    {
        key: 'sub1',
        icon: () => h(AppstoreOutlined),
        label: 'Navigation Three',
        title: 'Navigation Three',
    },
    {
        key: 'sub2',
        icon: () => h(SettingOutlined),
        label: 'Navigation Four',
        title: 'Navigation Four',
    },
]);
const handleClick: MenuProps['onClick'] = menuInfo => {
    console.log('click ', menuInfo);
};
</script>
