<!-- vue3.0 父子组件之间的传值 子组件-->
<template>
  <el-button @click="toFather">to father</el-button>
  <h1>{{ msg }}</h1>
  <h1>{{ props.msg }}</h1>
</template>
<script setup lang="ts">
import { ref } from 'vue'

const props =  defineProps({
  msg:{
    type: String,
    default:''
  }
})
// console.log(props.msg,'msg')

const emits = defineEmits('toChild')

const toFather = () => {
  emits('toChild', 'I am from child')
}
</script>
