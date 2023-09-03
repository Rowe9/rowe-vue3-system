import { createApp } from 'vue'
import App from './App.vue'
import 'normalize.css'
import '@/assets/css/index.scss'
import router from './router'
import pinia from '@/store/index.ts'
import * as Icons from '@element-plus/icons-vue'
import 'virtual:svg-icons-register'
import globalComponents from '@/components/index.ts'
import 'element-plus/theme-chalk/dark/css-vars.css'
import ElementPlus from 'element-plus'

const app = createApp(App)
app.use(router)
app.use(pinia)
app.use(globalComponents)
app.use(ElementPlus)
app.mount('#app')

// 全局引入elementIcon
Object.keys(Icons).forEach((key) => {
  app.component(key, Icons[key as keyof typeof Icons])
})
