import { defineConfig } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

import vue from '@vitejs/plugin-vue'

// import path from 'path'

export default defineConfig({
  // ...
  plugins: [
    // ...
    AutoImport({
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      resolvers: [ElementPlusResolver()]
    }),
    [vue()]
  ]
  // resolve: {
  //   alias: {
  //     '~/': `${path.resolve(__dirname, 'src')}/`,
  //     assets: `${path.resolve(__dirname, 'src/assets')}/`,
  //     'vue-i18n': 'vue-i18n/dist/vue-i18n.cjs.js'
  //   }
  // },
})
