<script setup lang="ts">
import { theme } from 'ant-design-vue';
const antTheme = {
  token: {
    colorPrimary: '#00b96b',
  },
  algorithm: theme.compactAlgorithm,
}
</script>

<template>
  <a-config-provider :theme="antTheme">
    <div>
      <router-view />
    </div>
  </a-config-provider>

</template>

<style scoped lang="scss"></style>
