import { ref } from 'vue'

const isDark = ref(false)

export function useTheme() {
  const toggleTheme = () => {
    isDark.value = !isDark.value
    document.documentElement.classList.toggle('dark')
    document.documentElement.setAttribute('theme', isDark.value ? 'dark' : 'light')
    localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
  }

  const initTheme = () => {
    const savedTheme = localStorage.getItem('theme') || 'light'
    if (savedTheme === 'dark') {
      isDark.value = true
      document.documentElement.classList.add('dark')
      document.documentElement.setAttribute('theme', 'dark')
    } else {
      document.documentElement.setAttribute('theme', 'light')
    }
  }

  return {
    isDark,
    toggleTheme,
    initTheme
  }
} 