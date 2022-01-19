<template>
  <div id="home">
    <el-carousel :interval="4000" type="card" height="400px">
      <el-carousel-item v-for="item in urlArr" :key="item.code">
        <img :src="item.code" alt="" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script lang="ts" setup>
// import { ref, reactive } from 'vue'
// import { getHomeData } from '@/api/home'
import url1 from '@/assets/images/carousel/1.jpg'
import url2 from '@/assets/images/carousel/2.jpg'
import url3 from '@/assets/images/carousel/3.jpg'
import url5 from '@/assets/images/carousel/5.jpg'
import url6 from '@/assets/images/carousel/6.jpg'
import url11 from '@/assets/images/carousel/11.jpg'
// 定义数组对象方法一
const urlArr: Array<{
  code: string
  name: string
}> = [
  { name: '1', code: url1 },
  { name: '2', code: url2 },
  { name: '3', code: url3 },
  { name: '5', code: url5 },
  { name: '6', code: url6 },
  { name: '11', code: url11 }
]
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

<style scoped lang="scss">
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 400px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
#home {
  :deep(.el-carousel__container) {
    background: rgba(0, 0, 0, 0.7);
  }
}
</style>
