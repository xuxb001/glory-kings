import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins: [vue()],
  base: './', // 类似publicPath，'./'避免打包访问后空白页面，要加上，不然线上也访问不了
  resolve: {
    alias: {
      // 如果报错__dirname找不到，需要安装node,执行npm install @types/node --save-dev
      '@': path.resolve(__dirname, 'src'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@images': path.resolve(__dirname, 'src/assets/images'),
      '@views': path.resolve(__dirname, 'src/views'),
      '@store': path.resolve(__dirname, 'src/store')
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
    open: true // 是否自动在浏览器打开
    // https: false, // 是否开启 https
    // port: 3000, // 端口号
    // host: '0.0.0.0',
    // proxy: {
    //   '/api': {
    //     target: '', // 后台接口
    //     changeOrigin: true,
    //     secure: false, // 如果是https接口，需要配置这个参数
    //     // ws: true, //websocket支持
    //     rewrite: (path) => path.replace(/^\/api/, '')
    //   }
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
        additionalData: '@import "@/assets/scss/global.scss";'
      }
    }
  },
  // 引入第三方的配置
  optimizeDeps: {
    include: []
  }
})
