<!-- vue3.0 父子组件之间的传值 父组件-->
<template>
  <div>
    <el-button @click="toChild">to child</el-button>
    <Child :msg="data.msg" @toChild="getChildMsg"/>
    {{data.formChild}}
  </div>
</template>


<script setup lang='ts'>
import Child from "./components/demo3Child.vue"
import {reactive} from "vue"

const data = reactive({
  msg:'I am from father',
  formChild:''
})
const getChildMsg = (value: string) => {
  // console.log('value', value)
  data.formChild = value
}
const toChild = () => {
  data.msg = 'change from father msg'
}
</script>
