<template>
  <div class="min-h-screen bg-background text-text-primary">
    <!-- 顶部导航栏 -->
    <header class="fixed top-0 left-0 right-0 h-14 bg-surface bg-op-80 backdrop-blur border-b border-border z-10">
      <div class="max-w-4xl mx-auto h-full px-4 flex items-center justify-between">
        <div class="flex items-center gap-4">
          <h1 class="text-lg font-medium text-gray-900 dark:text-gray-100">
            {{ title }}
          </h1>
          <span class="text-sm text-gray-500 dark:text-gray-400">
            {{ formatDate(updateTime) }}
          </span>
        </div>
        <div class="flex items-center gap-2">
          <a-button type="text" @click="toggleTheme">
            <template #icon>
              <BulbOutlined v-if="isDark" />
              <BulbFilled v-else />
            </template>
          </a-button>
          <a-button type="text" @click="handleShare">
            <template #icon>
              <ShareAltOutlined />
            </template>
          </a-button>
        </div>
      </div>
    </header>

    <!-- 主要内容区 -->
    <main class="max-w-4xl mx-auto px-4 pt-20 pb-12">
      <article class="prose prose-lg dark:prose-invert mx-auto">
        <Viewer :id="id" @title-change="handleTitleChange" @time-change="handleTimeChange" />
      </article>
    </main>

    <!-- 分享对话框 -->
    <a-modal
      v-model:visible="shareVisible"
      title="分享文章"
      :footer="null"
      width="360px"
    >
      <div class="flex flex-col gap-4">
        <div class="flex flex-col items-center">
          <a-qrcode :value="shareUrl" :size="200" @click="downloadQRCode" class="cursor-pointer" />
          <span class="text-sm text-gray-500 mt-2">点击二维码下载</span>
        </div>
        <a-input-group compact>
          <a-input
            v-model:value="shareUrl"
            readonly
            class="!w-[calc(100%-32px)]"
          />
          <a-button type="primary" @click="copyUrl">
            <template #icon><CopyOutlined /></template>
          </a-button>
        </a-input-group>
      </div>
    </a-modal>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { message } from 'ant-design-vue'
import Viewer from '@/components/Viewer.vue'
import {
  BulbOutlined,
  BulbFilled,
  ShareAltOutlined,
  CopyOutlined
} from '@ant-design/icons-vue'
import { useTheme } from '../composables/useTheme'

const route = useRoute()
const id = computed(() => route.params.id as string)
const title = ref('')
const updateTime = ref('')
const { isDark, toggleTheme, initTheme } = useTheme()

// 处理标题变化
const handleTitleChange = (newTitle: string) => {
  title.value = newTitle
  document.title = newTitle
}

// 处理更新时间变化
const handleTimeChange = (time: string) => {
  updateTime.value = time
}

// 格式化日期
const formatDate = (date: string) => {
  if (!date) return ''
  return new Date(date).toLocaleDateString('zh-CN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

// 分享功能
const shareVisible = ref(false)
const shareUrl = computed(() => `${window.location.origin}/view/${id.value}`)

const handleShare = () => {
  shareVisible.value = true
}

const copyUrl = async () => {
  try {
    await navigator.clipboard.writeText(shareUrl.value)
    message.success('链接已复制')
  } catch (err) {
    message.error('复制失败')
  }
}

const downloadQRCode = () => {
  const canvas = document.querySelector('.ant-qrcode canvas') as HTMLCanvasElement
  if (!canvas) return
  
  const link = document.createElement('a')
  link.download = `${title.value || 'qrcode'}.png`
  link.href = canvas.toDataURL('image/png')
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

// 初始化主题
initTheme()
</script>

<style>
/* 使用主题变量 */
.prose {
  --un-prose-body: var(--theme-colors-text-primary);
  --un-prose-headings: var(--theme-colors-text-primary);
  --un-prose-links: var(--theme-colors-primary);
  --un-prose-bold: var(--theme-colors-text-primary);
  --un-prose-counters: var(--theme-colors-text-secondary);
  --un-prose-bullets: var(--theme-colors-text-secondary);
  --un-prose-hr: var(--theme-colors-border);
  --un-prose-quotes: var(--theme-colors-text-primary);
  --un-prose-quote-borders: var(--theme-colors-border);
  --un-prose-captions: var(--theme-colors-text-secondary);
  --un-prose-code: var(--theme-colors-text-primary);
  --un-prose-pre-code: var(--theme-colors-text-primary);
  --un-prose-pre-bg: var(--theme-colors-surface);
  --un-prose-th-borders: var(--theme-colors-border);
  --un-prose-td-borders: var(--theme-colors-border);
}

.prose img {
  @apply rounded-xl;
}

.prose a {
  @apply text-blue-600 dark:text-blue-400;
}
</style>
