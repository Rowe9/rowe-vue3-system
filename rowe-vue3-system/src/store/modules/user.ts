import { defineStore } from 'pinia'
import { reqLogin } from '@/api/user/index.ts'
import type { dataType, loginResponseData } from '@/api/user/type.ts'
import type { UserState } from './type/type'
import { SET_TOKEN, GET_TOKEN } from '@/utils/token'
import { constantRoute } from '@/router/route.ts'

const useUserStore = defineStore('user', {
  state: (): UserState => {
    return {
      token: GET_TOKEN(),
      menuRoutes: constantRoute
    }
  },
  actions: {
    async userLogin(data: dataType) {
      const result: loginResponseData = await reqLogin(data)
      if (result.code == 200) {
        this.token = result.data.token as string
        SET_TOKEN(result.data.token as string)
        return 'OK'
      } else {
        return Promise.reject(new Error(result.data.message))
      }
    }
  }
})

export default useUserStore
