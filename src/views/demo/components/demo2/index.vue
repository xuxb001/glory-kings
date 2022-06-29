<!-- vue3.0 <script setup lang='ts'>这种的写法 -->
<template>
  <div>
    {{msg}}
  </div>
</template>
<script setup lang='ts'>
import {
  reactive,
  ref,
  toRefs,
  onBeforeMount,
  onMounted
} from 'vue';
// 不需要return,直接在里面写代码就行了，接收参数用 defineProps,传递方法用 defineEmits
const props = defineProps({
  msg:{
    type:String,
    default:()=>'默认值'
  }
})
const emit=defineEmits(["on-change"])    //方法名
const handleClick = () => {
  emit("on-change","子组件方法被调用")
}
</script>
