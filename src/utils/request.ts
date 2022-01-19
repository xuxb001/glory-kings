import axios, { AxiosRequestConfig } from 'axios'
import { ElMessage, ElLoading } from 'element-plus'
import { errorCodeType } from '@/utils/error-code-type'

// 创建axios实例
const defaultConfig: AxiosRequestConfig = {
  timeout: 30000,
  baseURL: import.meta.env.VITE_APP_BASE_API,
  headers: { 'Content-Type': 'application/json;charset=utf-8' }
}
const service = axios.create(defaultConfig)

let loading: any
// 正在请求的数量
let requestCount: number = 0
// 显示loading
const showLoading = () => {
  if (requestCount === 0 && !loading) {
    loading = ElLoading.service({
      text: '拼命加载中，请稍后...',
      background: 'rgba(0, 0, 0, 0.7)',
      spinner: 'el-icon-loading'
    })
  }
  requestCount += 1
}
// 隐藏loading
const hideLoading = () => {
  requestCount -= 1
  if (requestCount === 0) {
    loading.close()
  }
}

// 请求拦截器
service.interceptors.request.use(
  (config: any) => {
    showLoading()
    // 每次发送请求之前判断是否存在token，如果存在，则统一在http请求的header都加上token，不用每次请求都手动添加了
    const token = window.localStorage.getItem('token')
    if (token) config.headers.Authorization = token
    // 若请求方式为post，则将data参数转为JSON字符串
    if (config.method === 'POST') {
      config.data = JSON.stringify(config.data)
    }
    return config
  },
  (error) => {
    // console.log(error)
    Promise.reject(error)
  }
)

// 响应拦截器
service.interceptors.response.use(
  (res: any) => {
    hideLoading()
    // 未设置状态码则默认成功状态
    const code = res.data.code || 200
    // 获取错误信息
    const msg = errorCodeType(code) || res.data.msg || errorCodeType('default')
    if (code === 200) {
      return Promise.resolve(res.data)
    }
    ElMessage.error(msg)
    return Promise.reject(res.data)
  },
  (error) => {
    // console.log(`err${error}`)
    hideLoading()
    let { message } = error
    if (message === 'Network Error') {
      message = '后端接口连接异常'
    } else if (message.includes('timeout')) {
      message = '系统接口请求超时'
    } else if (message.includes('Request failed with status code')) {
      message = `系统接口${message.substr(message.length - 3)}异常`
    }
    ElMessage.error({
      message,
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
