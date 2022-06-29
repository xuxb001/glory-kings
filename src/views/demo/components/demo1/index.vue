<!-- vue3.0中defineComponent 的写法-->
<template>
  <div>{{title}}
    <el-button @click="handleTit">点击</el-button>
  </div>
</template>
<script lang="ts" setup>
import {
  defineComponent,
  reactive,
  ref,
  toRefs,
} from "vue"; // 使用哪个api 就要引入哪个
const title = ref('demo1')
const handleTit = () => {
  title.value = 'demo11111111111'
}
</script>
