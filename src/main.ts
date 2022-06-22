import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import App from './App.vue'
import router from './router'
import { key, store } from './store'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/display.css'
import './assets/styles/index.scss'
import styleImport from './utils/style-import'
import 'animate.css/animate.min.css'

const app = createApp(App)

styleImport(app).use(router).use(store, key).use(ElementPlus).mount('#app')
