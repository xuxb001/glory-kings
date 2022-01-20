<script lang="ts" setup>
import Head from './modular/head/index.vue'

// 定义数组对象方法一
// const urlArr: Array<{
//   code: string
//   name: string
// }> = [
//   { name: '1', code: url1 },
//   { name: '2', code: url2 },
//   { name: '3', code: url3 },
//   { name: '5', code: url5 },
//   { name: '6', code: url6 },
//   { name: '11', code: url11 }
// ]
// 定义数组对象方法二
// type TestType = {
//   name: string
//   code: string
// }
// const urlArr: TestType[] = [
//   { name: '1', code: url1 },
//   { name: '2', code: url2 },
//   { name: '3', code: url3 },
//   { name: '5', code: url5 },
//   { name: '6', code: url6 },
//   { name: '11', code: url11 }
// ]

// function getHome() {
//   getHomeData()
//     .then((res) => {
//       console.log('res', res)
//     })
//     .catch((err) => {
//       console.log('err', err)
//     })
// }
// getHome()
</script>
<template>
  <div id="king">
    <Head />
  </div>
</template>
<style scoped lang="scss"></style>
