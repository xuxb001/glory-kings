<!-- vue3.0中的写法-->
<template>
  <div>{{title}}
    <el-button @click="handleTit">点击</el-button>
  </div>
</template>
<script lang="ts" setup>
import {ref} from "vue"; // 使用哪个api 就要引入哪个
const title = ref('demo1')
const handleTit = () => {
  title.value = 'demo11111111111'
}
</script>
