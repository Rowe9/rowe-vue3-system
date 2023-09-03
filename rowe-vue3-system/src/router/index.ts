import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import { constantRoute } from './route'
const modules = import.meta.glob('./modules/**/*.ts', { eager: true })

let routeModuleList: RouteRecordRaw[] = []

// 获取模块路由
Object.values(modules).forEach((key: any) => {
  const mod = key.default || []
  const modList = Array.isArray(mod) ? [...mod] : [mod]
  routeModuleList.push(...modList)
})

const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRoute,
  // 滚动行为
  scrollBehavior() {
    return {
      left: 0,
      top: 0
    }
  }
})

export default router
