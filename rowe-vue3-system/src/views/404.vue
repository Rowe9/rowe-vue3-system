<template>
  <div class="404">
    <h2>404</h2>
    <svg-icon name="word" color="blue" width="100px" height="100px"></svg-icon>
    <el-button type="success" @click="open2">anniu</el-button>
  </div>
</template>

<script setup lang="ts">
import SvgIcon from '@/components/svgIcon/index.vue'

const open2 = () => {
  ElMessage({
    message: 'Congrats, this is a success message.',
    type: 'success'
  })
}
</script>
