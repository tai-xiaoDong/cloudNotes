<template>
  <div class="flex">
    <div>
      <div class="flex items-center m-r-1 p-1">
        <a-button>展开</a-button>
        <a-button>
          <Icon class="h-4 w-4" />
        </a-button>
        <a-button></a-button>
      </div>
      <div class="p-2 min-w-50 b-t">
        <a-tree :show-line="showLine" :show-icon="showIcon" :default-expanded-keys="['0-0-0']" :tree-data="treeData"
          @select="onSelect">
          <template #icon="{ dataRef }">
            <markdown v-if="!dataRef.children" class="h-4 w-4"/>
            <dir v-else class="h-4 w-4"/>
          </template>
          <template #title="{ dataRef }">
            <template v-if="dataRef.key === '0-0-0-1'">
              <div>multiple line title</div>
            </template>
            <template v-else>{{ dataRef.title }}</template>
          </template>
          <template #switcherIcon="{ dataRef, defaultIcon }">
            <dir v-if="dataRef.key === '0-0-2'" class="h-4 w-4" />
            <component :is="defaultIcon" v-else />
          </template>
        </a-tree>
      </div>
    </div>
    <div class="flex-1 b-r-solid shadow-[0_0_10px_0_rgba(50,50,50,0.2)]">
      <a-tabs v-model:activeKey="activeKey" type="editable-card" @edit="onEdit" class="p-l-1">
        <a-tab-pane v-for="pane in panes" :key="pane.key" :tab="pane.title" :closable="pane.closable" size="small">
        </a-tab-pane>
      </a-tabs>
      <Editor />
    </div>
  </div>
</template>
<script setup lang="ts">
import Editor from '@/components/Editor.vue'
import Icon from '@/assets/icons/library.svg'
import markdown from '@/assets/icons/file_markdown.svg'
import dir from '@/assets/icons/dir.svg'
import { ref } from 'vue';
import type { TreeProps } from 'ant-design-vue';


const showLine = ref<boolean>(true);
const showIcon = ref<boolean>(true);
const treeData = ref<TreeProps['treeData']>([
  {
    title: 'parent 1',
    key: '0-0',
    children: [
      {
        title: 'parent 1-0',
        key: '0-0-0',
        children: [
          { title: 'leaf', key: '0-0-0-0' },
          {
            key: '0-0-0-1',
          },
          { title: 'leaf', key: '0-0-0-2' },
        ],
      },
      {
        title: 'parent 1-1',
        key: '0-0-1',
        children: [{ title: 'leaf', key: '0-0-1-0' }],
      },
      {
        title: 'parent 1-2',
        key: '0-0-2',
        children: [
          { title: 'leaf 1', key: '0-0-2-0' },
          {
            title: 'leaf 2',
            key: '0-0-2-1',
          },
        ],
      },
    ],
  },
  {
    title: 'parent 2',
    key: '0-1',
    children: [
      {
        title: 'parent 2-0',
        key: '0-1-0',
        children: [
          { title: 'leaf', key: '0-1-0-0' },
          { title: 'leaf', key: '0-1-0-1' },
        ],
      },
    ],
  },
]);
const onSelect: TreeProps['onSelect'] = (selectedKeys, info) => {
  console.log('selected', selectedKeys, info);
};

const panes = ref<{ title: string; content: string; key: string; closable?: boolean }[]>([
  { title: 'Tab 1', content: 'Content of Tab 1', key: '1' },
  { title: 'Tab 2', content: 'Content of Tab 2', key: '2' },
  { title: 'Tab 3', content: 'Content of Tab 3', key: '3', closable: false },
]);

const activeKey = ref(panes.value[0].key);

const newTabIndex = ref(0);

const add = () => {
  activeKey.value = `newTab${++newTabIndex.value}`;
  panes.value.push({ title: 'New Tab', content: 'Content of new Tab', key: activeKey.value });
};

const remove = (targetKey: string) => {
  let lastIndex = 0;
  panes.value.forEach((pane, i) => {
    if (pane.key === targetKey) {
      lastIndex = i - 1;
    }
  });
  panes.value = panes.value.filter(pane => pane.key !== targetKey);
  if (panes.value.length && activeKey.value === targetKey) {
    if (lastIndex >= 0) {
      activeKey.value = panes.value[lastIndex].key;
    } else {
      activeKey.value = panes.value[0].key;
    }
  }
};

const onEdit = (targetKey: string | MouseEvent, action: string) => {
  if (action === 'add') {
    add();
  } else {
    remove(targetKey as string);
  }
};
</script>
