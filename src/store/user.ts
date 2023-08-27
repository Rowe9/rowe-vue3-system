import { defineStore } from 'pinia'
import { ref } from 'vue'
import { login } from '~/api/user'  
import { UserInfo } from '~/types/index' 

// 此处采用组合式API写法
// Pinia 同样支持选项式API写法
export const useUserStore = defineStore(
  'user',
  () => {
    let username = ref('')

    async function userLogin(param: UserInfo) {
      const result = await login({ username: param.username, password: param.password })
      if (result) {
        username.value = param.username
      }
      return result
    }
    return { username, userLogin }
  }
)

