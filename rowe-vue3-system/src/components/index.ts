// 引入项目中全部的全局组件
import SvgIcon from './svgIcon/index.vue'

// 全局对象
const allGlobalComponent: Record<string, any> = { SvgIcon }

export default {
  install(app: any) {
    Object.keys(allGlobalComponent).forEach((key) => {
      app.component(key, allGlobalComponent[key])
    })
  }
}
