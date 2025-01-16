<template>
  <div class="p-1">
    标题栏
    <!-- 文件管理器，设置，导出 ， 登录 ，注册 -->
  </div>
  <div class="flex-row-center w-[100%]">
    <div class="flex-[2] border-1 ">
      <div>头像</div>
      <div>名称</div>
      <div>个性签名</div>
      <div>tag </div>
    </div>
    <div class=" border-1 flex-[3] bg-#f7f7f7 ">
      <!-- <div class="option">
        <div>置顶文章</div>
        <div></div>
      </div> -->
      <div class="option">
        <div>项目</div>
        <div class="flex flex-wrap">
          <div class="w-[35%] m-b-2 m-t-2">
            <div class="font-size-6">项目标题</div>
            <div class="font-size-4">项目简介</div>
            <a href="https://www.baidu.com">https://www.baidu.com</a>
            <div>技术栈</div>
          </div>

          <div class="w-[35%]">
            <div>项目标题</div>
            <div>项目简介</div>
            <div>项目预览地址</div>
            <div><TechnologyStack :stack-list="['Vue']"/></div>
          </div>
        </div>
      </div>
      <div class="option">
        <div>热力图</div>
        <div>项目内容</div>
      </div>
      <div class="option">
        <div>时间轴</div>
        <div>项目内容</div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import TechnologyStack from '@/components/Home/TechnologyStack.vue';
</script>
<style lang="scss" scoped>
.option{
  width:100%;
  border:1px solid gray;
  padding: 10px;
}
</style>