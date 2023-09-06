<template>
  <div class="login-wrap">
    <div class="login-left"></div>
    <div class="flex flex-col login-main">
      <div class="p-12 py-20 transition-all rounded hover:shadow-lg hover:bg-indigo-50">
        <h1 class="text-2xl">Welcome back</h1>
        <p class="text-sm text-gray-400">Enter the information you entered while registering</p>
        <el-form
          class="mt-8"
          :model="param"
          :rules="rules"
          ref="loginForm"
          label-position="top"
          size="large"
        >
          <el-form-item prop="username" label="用户名">
            <el-input v-model="param.username" placeholder="username" :prefix-icon="User">
            </el-input>
          </el-form-item>
          <el-form-item prop="password" label="密码">
            <el-input
              type="password"
              placeholder="password"
              v-model="param.password"
              :prefix-icon="Lock"
              @keyup.enter="submitForm()"
            >
            </el-input>
          </el-form-item>
          <div class="flex justify-between mb-4">
            <el-checkbox>记住我</el-checkbox>
            <el-link>忘记密码？</el-link>
          </div>
          <div>
            <el-button class="w-full" type="primary" @click="submitForm()">登录</el-button>
          </div>
          <div class="mt-4 text-sm text-gray-300">Tips : 用户名和密码任意</div>

          <!-- <div class="relative mt-4 text-center">
          <span class="relative z-10 px-2 text-sm text-gray-500 bg-white">or</span>
          <div class="absolute z-0 w-full border-b top-3"></div>
        </div> -->
        </el-form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
import type { loginForm, loginResponseData } from '@/api/user/type'
import { Lock, User } from '@element-plus/icons-vue'
import { useUserStore } from '@/store/modules/user.ts'
import { useRouter } from 'vue-router'
import { getTime } from '@/utils/time'

const loginForm = ref()
let router = useRouter()
let useStore = useUserStore()

const param = reactive({
  username: 'admin',
  password: '12345'
})

// 校验规则
const rules: FormRules = {
  username: [
    {
      required: true,
      message: '请输入用户名',
      trigger: 'blur'
    }
  ],
  password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
}

// 点击登录按钮
const submitForm = async () => {
  await loginForm.value.validate()
  try {
    console.log(param, '账号密码')
    await useStore.userLogin(param)
    router.push('/')
    ElNotification({
      message: '登录成功',
      type: 'success',
      title: `HI,${getTime()}`
    })
  } catch (error) {
    ElNotification({
      message: (error as Error).message,
      type: 'error'
    })
  }
}

</script>

<style lang="scss" scoped>
.login-wrap {
  position: relative;
  width: 100vw;
  height: 100vh;
}
.login-left {
  position: absolute;
  width: 50%;
  height: 100vh;
  background-image: url(@/assets/images/login.png);
  background-size: contain;
  background-position: 60% center;
  background-repeat: no-repeat;
}
.login-main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: calc(50% + 100px);
  width: 460px;

  height: 100%;
}
</style>
