<template>
  <div class="flex">
    <div v-if="showSidebar">
      <div class="flex items-center m-r-1 p-1.5">
        <a-button @click="toggleSidebar">收起</a-button>
        <a-button>
          <Icon class="h-4 w-4" />
        </a-button>
        <a-button></a-button>
      </div>
      <div class="p-2 min-w-50 b-t">
        <a-tree :show-line="true" :show-icon="true" :tree-data="treeData" @select="onSelect">
          <template #icon="{ dataRef }">
            <Markdown class="h-4 w-4" v-if="!dataRef.key.includes('Dir')" />
          </template>
          <template #switcherIcon="{ defaultIcon }">
            <Dir :is="defaultIcon" class="h-4 w-4" />
          </template>
          <template #title="{ dataRef }">
            <span class="text-center">
              {{ dataRef.title.length > 10 ? dataRef.title.slice(0, 10) + '...' : dataRef.title }}
            </span>
          </template>
        </a-tree>
      </div>
    </div>
    <div class="flex-1 b-r-solid shadow-[0_0_10px_0_rgba(50,50,50,0.2)] h-100vh">
      <a-tabs v-model:activeKey="activeKey" type="editable-card" @edit="onEdit" hide-add class="p-l-1">
        <a-tab-pane v-for="pane in panes" :key="pane.key" :tab="pane.title" :closable="pane.closable" size="small">
        </a-tab-pane>
        <template #rightExtra>
          <a-button v-if="!showSidebar" @click="toggleSidebar" class="m-1 p-1.5">
            <Icon class="h-4 w-4" />
          </a-button>
        </template>
      </a-tabs>
      <Editor :id="activeKey" v-show="activeKey" />
      <div v-show="!activeKey">请选择一篇文章打开</div>
    </div>
  </div>
</template>
<script setup lang="ts">
import Editor from '@/components/Editor.vue'
import Icon from '@/assets/icons/library.svg'
import Markdown from '@/assets/icons/file_markdown.svg'
import Dir from '@/assets/icons/dir.svg'
import { ref, onMounted } from 'vue';
import type { TreeProps } from 'ant-design-vue';
// import { message } from 'ant-design-vue';

const showSidebar = ref<boolean>(true)
const activeKey = ref<string | null>('');
const treeData = ref<TreeProps['treeData']>([
  {
    title: '文件夹1',
    key: 'Dir-0',
    children: [
      {
        title: 'markdown1',
        key: '0',
      },
      {
        title: 'markdown2',
        key: '1',
      },
      {
        title: 'markdown3',
        key: '2',
      },
    ],
  },
  {
    title: '文件夹2',
    key: 'Dir-1',
    children: [
      {
        title: 'markdown4',
        key: '4',
      },
    ],
  },
]);

const onSelect: TreeProps['onSelect'] = (selectedKeys, info) => {
  console.log(selectedKeys[0], info)
  if (!info.node.children && info.selected && panes.value.find((item) => { return item.key === selectedKeys[0] as string }) === undefined) {
    panes.value.push({ title: info.node.title, content: '', key: selectedKeys[0] as string });
    activeKey.value = selectedKeys[0] as string
  }
};

const panes = ref<{ title: string; content: string; key: string; closable?: boolean }[]>([
]);

const toggleSidebar = () => {
  showSidebar.value = !showSidebar.value
}

const removeTab = (targetKey: string) => {
  panes.value = panes.value.filter(pane => pane.key !== targetKey);
  if (panes.value.length === 0) {
    activeKey.value = null
  }
};

const onEdit = (targetKey: string | MouseEvent) => {
  removeTab(targetKey as string);
};
onMounted(() => {

})
</script>
<style scoped lang="scss">
:deep(.ant-tree-switcher-line-icon) {
  display: none;
}

:deep(.ant-tree-switcher-noop) {
  display: none;
}
</style>
