import axios, { AxiosInstance, AxiosError } from 'axios'
import { ElLoading } from 'element-plus'
import { ElMessage } from 'element-plus'

let loading: any
const startLoading = () => {
  interface type {
    lock: boolean
    text: string
    background: string
  }
  const options: type = {
    lock: true,
    text: '加载中......',
    background: 'rgba(0,0,0,0.7)'
  }
  loading = ElLoading.service(options)
}

const endLoading = () => {
  loading.close()
}

let request: AxiosInstance = axios.create({
  timeout: 5000,
  baseURL: import.meta.env.VITE_APP_BASE_API
})

// 请求拦截
request.interceptors.request.use(
  (config) => {
    // 开始loading
    startLoading()
    return config
  },
  (error: AxiosError) => {
    console.log(error)
    return Promise.reject()
  }
)

request.interceptors.response.use(
  (response) => {
    endLoading()
    return response.data
  },
  (error) => {
    endLoading()
    console.log(error)
    let message = ''
    let status = error.response.status
    switch (status) {
      case 401:
        message = 'token已过期'
        break
      case 403:
        message = '无权限访问'
        break
      case 404:
        message = '请求地址错误'
        break
      case 500:
        message = '服务器出现问题'
        break
      default:
        message = '网络出现问题'
        break
    }
    // 提示错误信息
    ElMessage({
      type: 'error',
      message
    })
    return Promise.reject()
  }
)

export default request
