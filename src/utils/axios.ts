import Axios from 'axios'
import { ElLoading, ElMessage } from 'element-plus'

const baseURL = 'https://api.github.com'

// 创建axios的一个实例
const axios = Axios.create({
  baseURL,
  timeout: 20000, // 请求超时 20s
  headers: {
    'Content-Type': 'application/json;charset=UTF-8;'
  }
})
let loading: any
// 正在请求的数量
let requestCount: number = 0
// 显示loading
const showLoading = () => {
  if (requestCount === 0 && !loading) {
    loading = ElLoading.service({
      text: 'Loading  ',
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
// 前置拦截器（发起请求之前的拦截）
axios.interceptors.request.use(
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
    return Promise.reject(error)
  }
)

// 响应拦截器（获取到响应时的拦截）
axios.interceptors.response.use(
  (response) => {
    hideLoading()
    /**
     * 根据你的项目实际情况来对 response 和 error 做处理
     * 这里对 response 和 error 不做任何处理，直接返回
     */
    return response
  },
  (error) => {
    if (error.response && error.response.data) {
      const code = error.response.status
      let msg = error.response.data.message
      switch (code) {
        case 400:
          msg = '请求错误'
          break
        case 401:
          msg = '请求错误'
          break
        case 404:
          msg = '请求地址出错'
          break
        case 408:
          msg = '请求超时'
          break
        case 500:
          msg = '服务器内部错误!'
          break
        case 501:
          msg = '服务未实现!'
          break
        case 502:
          msg = '网关错误!'
          break
        case 503:
          msg = '服务不可用!'
          break
        case 504:
          msg = '网关超时!'
          break
        case 505:
          msg = 'HTTP版本不受支持'
          break
        default:
          msg = '请求失败'
      }
      ElMessage.error(msg)
      return Promise.reject(error)
      // ElMessage.error(`Code: ${code}, Message: ${msg}`)
      // console.error(`[Axios Error]`, error.response)
    }
    ElMessage.error(`${error}`)

    return Promise.reject(error)
  }
)

export default axios
