declare module '*.vue' {
  // 方案一
  import { DefineComponent } from 'vue'

  const component: DefineComponent<{}, {}, any>
  export default component
  // 方案二
  // import Vue from 'env'

  // export default Vue
}
declare module "@types/three"
// interface ImportMetaEnv {
//   // 请求地址
//   readonly VITE_APP_BASE_API: string
// }

// interface ImportMeta {
//   readonly env: ImportMetaEnv
// }

// 11
// declare module '*.vue' {
//   import { App, defineComponent } from 'vue'
//   const component: ReturnType<typeof defineComponent> & {
//     install(app: App): void
//   }
//   export default component
// }
