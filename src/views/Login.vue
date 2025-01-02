<template>
  <div class="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-400 to-purple-500">
    <div class="flex w-[900px]">
      <!-- 左侧 Logo 区域 -->
      <div class="flex-1 flex flex-col items-center justify-center p-8">
        <h1 class="text-8xl font-bold bg-gradient-to-br from-white via-blue-100 to-purple-100 bg-clip-text text-transparent drop-shadow-lg">
          Markdown
        </h1>
        <p class="mt-4 text-xl text-white/90 font-light tracking-wide">
          在线 Markdown 编辑器
        </p>
      </div>

      <!-- 右侧表单区域 -->
      <div class="w-[400px] p-8 bg-white/90 backdrop-blur rounded-lg shadow-xl">
        <div class="text-center mb-8">
          <div class="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm">
            <h2 class="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Taixd
            </h2>
          </div>
          <p class="text-gray-600 mt-4">{{ mode === 'login' ? '使用账号密码登录' : '填写信息以注册账号' }}</p>
        </div>
        
        <a-form
          :model="formState"
          @finish="handleSubmit"
          class="space-y-4"
        >
          <a-form-item
            name="username"
            :rules="[{ required: true, message: '请输入账号' }]"
          >
            <a-input
              v-model:value="formState.username"
              size="large"
              placeholder="请输入账号"
            >
              <template #prefix>
                <UserOutlined />
              </template>
            </a-input>
          </a-form-item>
          
          <a-form-item
            name="password"
            :rules="[{ required: true, message: '请输入密码' }]"
          >
            <a-input-password
              v-model:value="formState.password"
              size="large"
              placeholder="请输入密码"
            >
              <template #prefix>
                <LockOutlined />
              </template>
            </a-input-password>
          </a-form-item>
          
          <a-form-item
            v-if="mode === 'register'"
            name="confirmPassword"
            :rules="[{ required: true, message: '请确认密码' }]"
          >
            <a-input-password
              v-model:value="formState.confirmPassword"
              size="large"
              placeholder="请确认密码"
            >
              <template #prefix>
                <LockOutlined />
              </template>
            </a-input-password>
          </a-form-item>
          
          <a-form-item
            name="captcha"
            :rules="[{ required: true, message: '请输入验证码' }]"
          >
            <div class="flex gap-4">
              <a-input
                v-model:value="formState.captcha"
                size="large"
                placeholder="请输入验证码"
              >
                <template #prefix>
                  <SafetyCertificateOutlined />
                </template>
              </a-input>
              <div 
                class="w-32 h-10 border rounded cursor-pointer overflow-hidden flex items-center justify-center"
                @click="getCaptcha"
              >
                <a-spin :spinning="captchaLoading">
                  <img 
                    v-if="captchaImg"
                    :src="captchaImg"
                    alt="验证码"
                    class="w-full h-full object-cover"
                  />
                  <div v-else class="text-gray-400">点击获取</div>
                </a-spin>
              </div>
            </div>
          </a-form-item>
          
          <a-form-item>
            <a-button
              type="primary"
              html-type="submit"
              size="large"
              :loading="loading"
              class="w-full"
            >
              {{ mode === 'login' ? '登录' : '注册' }}
            </a-button>
          </a-form-item>
        </a-form>
        
        <div class="text-center">
          <a-button type="link" @click="toggleMode">
            {{ mode === 'login' ? '没有账号？立即注册' : '已有账号？立即登录' }}
          </a-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { message } from 'ant-design-vue'
import { useTheme } from '../composables/useTheme'

// 定义表单状态接口
interface FormState {
  username: string
  password: string
  confirmPassword?: string
  captcha: string
}

const router = useRouter()

// 表单模式：login/register
const mode = ref<'login' | 'register'>('login')

// 表单数据
const formState = reactive<FormState>({
  username: '',
  password: '',
  confirmPassword: '',
  captcha: ''
})

// 加载状态
const loading = ref(false)

// 验证码相关
const captchaImg = ref('')
const captchaLoading = ref(false)

const { isDark, toggleTheme, initTheme } = useTheme()

// 获取验证码
const getCaptcha = async () => {
  try {
    captchaLoading.value = true
    // 这里替换成实际的验证码获取接口
    // const res = await getCaptchaApi()
    // captchaImg.value = res.data
    
    // 模拟获取验证码
    await new Promise(resolve => setTimeout(resolve, 500))
    captchaImg.value = 'data:image/png;base64,xxx' // 替换成实际的验证码图片
  } catch (error) {
    message.error('获取验证码失败')
  } finally {
    captchaLoading.value = false
  }
}

// 切换登录/注册模式
const toggleMode = () => {
  mode.value = mode.value === 'login' ? 'register' : 'login'
  formState.username = ''
  formState.password = ''
  formState.confirmPassword = ''
  formState.captcha = ''
  getCaptcha()
}

// 表单提交
const handleSubmit = async () => {
  try {
    loading.value = true
    if (mode.value === 'login') {
      // 实现登录逻辑
      // const res = await login(formState)
      await new Promise(resolve => setTimeout(resolve, 1000))
      message.success('登录成功')
      router.push('/edit')
    } else {
      // 实现注册逻辑
      if (formState.password !== formState.confirmPassword) {
        message.error('两次输入的密码不一致')
        return
      }
      // const res = await register(formState)
      await new Promise(resolve => setTimeout(resolve, 1000))
      message.success('注册成功')
      mode.value = 'login'
    }
  } catch (error) {
    message.error(mode.value === 'login' ? '登录失败' : '注册失败')
  } finally {
    loading.value = false
    getCaptcha() // 刷新验证码
  }
}

// 初始化获取验证码
getCaptcha()

// 初始化主题
initTheme()
</script>

<style scoped>
:deep(.ant-input-affix-wrapper) {
  @apply bg-white/80;
}

:deep(.ant-btn-primary) {
  @apply bg-blue-500 hover:bg-blue-600;
}

.bg-gradient-to-r {
  @apply animate-gradient;
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.animate-gradient {
  animation: gradient 15s ease infinite;
  background-size: 200% 200%;
}

/* 优化悬浮效果 */
h1 {
  transition: all 0.3s ease;
}

h1:hover {
  transform: scale(1.02);
  text-shadow: 0 0 30px rgba(255, 255, 255, 0.2);
}

/* 为右侧 logo 添加悬浮效果 */
.text-center h2 {
  transition: all 0.3s ease;
}

.text-center h2:hover {
  transform: scale(1.05);
}

/* 修改右侧 logo 的悬浮效果 */
.text-center .inline-flex {
  transition: all 0.3s ease;
  position: relative;
}

.text-center .inline-flex::after {
  content: '';
  position: absolute;
  inset: -2px;
  border-radius: 9999px;
  background: linear-gradient(to right, #3b82f6, #8b5cf6);
  opacity: 0.2;
  z-index: -1;
  transition: opacity 0.3s ease;
}

.text-center .inline-flex:hover::after {
  opacity: 0.3;
}

.text-center .inline-flex:hover {
  transform: scale(1.05);
}
</style>
