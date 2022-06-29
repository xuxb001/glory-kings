<template>
  <el-dialog title="提示" v-model="visible" width="30%" @close="onClose">
      <span>需要注意在 Dialog 打开前是这条内容和下面的内容都是不会被渲染的</span>
      <strong>额外的内容</strong>
      <template #footer>
          <span class="dialog-footer">
              <el-button size="mini" @click="onClose">取 消</el-button>
              <el-button size="mini" type="primary" @click="onConfirm">确 定</el-button>
          </span>
      </template>
  </el-dialog>
</template>
<script lang="ts" setup="props, context">
import { ref, toRefs, reactive, watch, defineProps, defineEmits } from 'vue'
  const visible = ref(false)
  const props = defineProps({
    dialogVisible:{
      type: Boolean,
      default:()=>false
    }
  })
  const refProps = toRefs(props)
  //监听一个值
  watch(refProps.dialogVisible, (curr, old) => {
    visible.value = curr
  })
  //监听多个值
  //watch([监听值1，监听值2,...],([值1-新值，值2-新值,...],[值1-旧值,值2-旧值,...])=>{})
  // watch(
  //   [flag, flag2],
  //   ([curr, curr2], [old, old2]) => {
  //     console.log('flag', curr, old) // flag false true
  //     console.log('flag2', curr2, old2) // flag2 false true
  //   }
  // )
  const emit = defineEmits(["on-confirm"])
  const onClose = () => {
      emit('update:dialogVisible', false)
  }
  const onConfirm = () => {
      emit('on-confirm', '子组件的值')
  }
</script>

