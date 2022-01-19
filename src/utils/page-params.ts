// 全局统一分页参数类型声明
interface Model {
  type?: string
}

declare interface PageParams {
  pageNum: number
  pageSize: number
  type?: Model // 可选参数
  readonly sort?: string // 只读可选参数
}
export default PageParams
