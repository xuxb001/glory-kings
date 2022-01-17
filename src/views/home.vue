<template>
  <div id="home">
    <el-carousel :interval="4000" type="card" height="400px">
      <el-carousel-item v-for="item in urlArr" :key="item.code">
        <img :src="item.code" alt="" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import url1 from '@/assets/carousel/1.jpg'
import url2 from '@/assets/carousel/2.jpg'
import url3 from '@/assets/carousel/3.jpg'
import url5 from '@/assets/carousel/5.jpg'
import url6 from '@/assets/carousel/6.jpg'
import url11 from '@/assets/carousel/11.jpg'

// declare function require(img: string): string // 声明

export default defineComponent({
  name: 'HomeItem',
  setup() {
    return {
      urlArr: [
        { name: '1', code: url1 },
        { name: '2', code: url2 },
        { name: '3', code: url3 },
        { name: '5', code: url5 },
        { name: '6', code: url6 },
        { name: '11', code: url11 }
      ]
    }
  },
  mounted() {}
})
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
