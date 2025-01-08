<template>
  <div class="flex">
    <div v-show="showSidebar">
      <div class="flex items-center m-r-2 ">
        <a-button class="btn-common" @click="toggleSidebar">收起</a-button>
        <a-button class="btn-common" @click="openFileManager">
          文件管理器
        </a-button>
        <a-button class="btn-common">设置</a-button>
      </div>
      <div class="p-2 min-w-50 b-t">
        <a-tree :show-line="true" :show-icon="true" :tree-data="treeData" @select="onSelect" ref="treeRef">
          <template #icon="{ dataRef }">
            <Markdown class="icon-common" v-if="!dataRef.key.includes('Dir')" />
          </template>
          <template #switcherIcon="{ defaultIcon }">
            <Dir :is="defaultIcon" class="icon-common" />
          </template>
          <template #title="{ dataRef }">
            <span class="text-center ">
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
        <template #leftExtra>
          <a-button v-if="!showSidebar" @click="toggleSidebar" class="m-1">
            <Icon class="icon-common" />
          </a-button>
        </template>
        <template #rightExtra>
          <div class="flex items-center justify-center">
            <a-switch v-if="activeKey" v-model:checked="ispublic" checked-children="公开" un-checked-children="私密" />
            <a-popover title="点击下载二维码">
              <a-button v-if="ispublic" class="m-1">
                分享
              </a-button>
              <template #content>
                <div class="flex flex-col items-center justify-center">
                  <a-qrcode :value="QRCode" @click="downloadChange" ref="qrcodeCanvasRef" class="m-b-1" />
                  <a-input v-model:value="QRCode" placeholder="-" :maxlength="60" />
                </div>
              </template>
            </a-popover>
            <a-button v-if="activeKey" class="m-1">
              自动保存成功，更新时间：2024-10-09
            </a-button>
          </div>
        </template>
      </a-tabs>
      <Editor :id="activeKey" v-show="activeKey" />
      <div v-show="!activeKey">请选择一篇文章打开</div>
    </div>
    <a-modal v-model:open="fileManagerShow" width="1024px">
      <FileManager />
    </a-modal>
  </div>
</template>
<script setup lang="ts">
import Editor from '@/components/Editor.vue'
import FileManager from '@/components/FileManager/index.vue'
import Icon from '@/assets/icons/library.svg'
import Markdown from '@/assets/icons/file_markdown.svg'
import Dir from '@/assets/icons/dir.svg'
import { ref, onMounted, watch } from 'vue'
import { useNoteStore } from '@/store/note/index'
import type { TreeProps } from 'ant-design-vue'
import { message } from 'ant-design-vue'

const QRCode = ref('https://www.antdv.com/');
const ispublic = ref<boolean>(false)
const showSidebar = ref<boolean>(true)
const noteStore = useNoteStore()
const treeData = ref<TreeProps['treeData']>(noteStore.noteTree);
const activeKey = ref<string>('');
const fileManagerShow = ref<boolean>(false)
const treeRef = ref();

const onSelect: TreeProps['onSelect'] = (selectedKeys, info) => {
  console.log(selectedKeys[0], info)
  if (!info.node.children && info.selected && panes.value.find((item) => { return item.key === selectedKeys[0] as string }) === undefined) {
    activeKey.value = selectedKeys[0] as string
    panes.value.push({ title: info.node.title, content: '', key: selectedKeys[0] as string });
    QRCode.value = `https://www.taixd.cn/view/${selectedKeys[0]}`
    document.title = info.node.title
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
    document.title = 'taixd'
    activeKey.value = ''
  }
};

const onEdit = (targetKey: string | MouseEvent) => {
  removeTab(targetKey as string);
};

const qrcodeCanvasRef = ref();
const downloadChange = async () => {
  const url = await qrcodeCanvasRef.value.toDataURL();
  const a = document.createElement('a');
  a.download = 'QRCode.png';
  a.href = url;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
};
const openFileManager = () => {
  fileManagerShow.value = true
}
watch(() => noteStore.markdownId, (newVal) => {
  activeKey.value = newVal
  const isSelect = panes.value.find((item) => {
    return item.key === newVal
  })
  if (!isSelect) {
    noteStore.noteTree.filter((item) => {
      if (item.children) {
        item.children.filter((child) => {
          if (child.key === newVal) {
            document.title = child.title
            panes.value.push({ title: child.title, content: '', key: child.key });
            QRCode.value = `https://www.taixd.cn/view/${child.key}`
            activeKey.value = child.key
          }
        })
      }
    })
    fileManagerShow.value = false
    noteStore.markdownId = ''
  }else{
    message.error('文章已打开')
  }
})


</script>

<style scoped lang="scss">
:deep(.ant-tree-switcher-line-icon) {
  display: none;
}

:deep(.ant-tree-switcher-noop) {
  display: none;
}

.btn-common {
  @apply m-l-1 m-t-1 m-b-1;
}
</style>
