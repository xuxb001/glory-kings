<!-- vue3.0中的写法-->
<template>
  <div>{{title}}
    <el-button @click="handleTit">点击</el-button>
  </div>
</template>
<script lang="ts" setup>
import {
  reactive,
  ref,
  toRefs,
} from "vue"; // 使用哪个api 就要引入哪个
const title = ref('demo1')
const handleTit = () => {
  title.value = 'demo11111111111'
}
//  store的使用
// import { useStore } from 'vuex'
// const store = useStore()
// console.log(store.state.xxx)

// router的使用
// import { useRouter } from 'vue-router'
// const router= useRouter ()
// console.log(router.currentRoute.value)

// computed的使用
// import { computed } from 'vue'
// const name= computed (() => {
//   return 'xxx'
// })
</script>
