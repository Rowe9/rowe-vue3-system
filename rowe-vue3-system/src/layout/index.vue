<template>
  <div class="main">
    <el-container class="main-content">
      <el-aside width="200px">
        <p>Rowe-Vue3-Admin</p>
        <el-scrollbar>
          <el-menu :default-active="$route.path">
            <Menu :menuList="userStore.menuRoutes"></Menu>
          </el-menu>
        </el-scrollbar>
      </el-aside>
      <el-container>
        <el-header>
          <Header class="main-header"></Header>
        </el-header>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Menu from '@/layout/menu/index.vue'
import Header from '@/layout/header/index.vue'
import useUserStore from '@/store/modules/user.ts'
const userStore = useUserStore()
import { useRoute } from 'vue-router'
const $route = useRoute()

// 处理main-header中折叠的变化
const isFold = ref(false)
function handleFoldChange(flag: boolean) {
  isFold.value = flag
}

console.log(JSON.parse(JSON.stringify(userStore.menuRoutes)), 'menuList')
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
</style>
