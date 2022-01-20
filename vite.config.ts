import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import importElementPlus from 'vite-plugin-element-plus'
// 如果编辑器提示 path 模块找不到，则可以安装一下 @types/node -> npm i @types/node -D
import { resolve } from 'path'

export default defineConfig({
  plugins: [vue(), importElementPlus({})],
  base: './', // 类似publicPath，'./'避免打包访问后空白页面，要加上，不然线上也访问不了
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src') // 设置 `@` 指向 `src` 目录
    }
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets', // 指定静态资源存放路径
    sourcemap: false, // 是否构建source map 文件
    terserOptions: {
      // 生产环境移除console
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    }
  },
  server: {
    open: true, // 是否自动在浏览器打开
    cors: true, // 允许跨域
    port: 3003 // 端口号
    // https: false, // 是否开启 https
    // host: '0.0.0.0',
    // proxy: {
    //   '/api': 'http://localhost:3003'
    // }
  },
  css: {
    // 配置 CSS modules 的行为。选项将被传递给 postcss-modules。
    modules: {},
    // PostCSS 配置（格式同 postcss.config.js）
    // postcss-load-config 的插件配置
    postcss: {},
    // 指定传递给 CSS 预处理器的选项
    preprocessorOptions: {
      scss: {
        javascriptEnabled: true
        // additionalData: '@import "@/assets/styles/index.scss";'
      }
    }
  },
  // 引入第三方的配置
  optimizeDeps: {
    include: []
  }
})
