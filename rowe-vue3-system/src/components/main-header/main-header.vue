<template>
  <div class="main-header">
    <div class="menu-icon">
      <el-icon size="28px">
        <component :is="isFold ? 'Expand' : 'Fold'" />
      </el-icon>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isFold = ref(false)
</script>

<style lang="less" scoped></style>
