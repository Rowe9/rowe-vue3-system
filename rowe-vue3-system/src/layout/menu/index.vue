<template>
  <template class="main-menu" v-for="item in menuList" :key="item.path">
    <el-menu-item :index="item.path">
      <el-icon>
        <component :is="item.meta.icon"></component>
      </el-icon>
      <template #title>
        <span>{{ item.meta.title }}</span>
      </template>
    </el-menu-item>
  </template>
</template>

<script setup lang="ts">
defineProps(['menuList'])
</script>

<style lang="scss" scoped>
.main-menu {
  width: 100vw;
  height: calc(100vh - 60px);
}
</style>
