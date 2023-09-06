<!-- <template>
  <div class="main">
    <el-container class="main-content">
      <el-aside width="200px">
        <p>Rowe-Vue3-Admin</p>
        <main-menu></main-menu>
      </el-aside>
      <el-container>
        <el-header>
          <main-header class="main-header"></main-header>
        </el-header>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import MainMenu from '@/components/main-menu/main-menu.vue'
import MainHeader from '@/components/main-header/main-header.vue'

// 处理main-header中折叠的变化
const isFold = ref(false)
function handleFoldChange(flag: boolean) {
  isFold.value = flag
}
</script>

<style lang="scss" scoped>
.main {
  height: 100%;
}

.main-content {
  height: 100%;

  .el-aside {
    overflow-x: hidden;
    overflow-y: auto;
    line-height: 200px;
    text-align: left;
    cursor: pointer;
    scrollbar-width: none; /* firefox */
    -ms-overflow-style: none; /* IE 10+ */

    transition: width 0.3s ease;
    p {
      color: black;
      height: 60px;
      line-height: 60px;
      text-align: center;
    }

    &::-webkit-scrollbar {
      display: none;
    }
  }

  .el-main {
    background-color: #f0f2f5;
  }
}
</style> -->
<template>
  <div class="main.vue">
    <h2>main.vue</h2>
  </div>
</template>

<script setup></script>

<style lang="less" scoped></style>
