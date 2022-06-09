<template>
  <div id="king">
    <el-table :data="tableData" style="width: 100%">
      <el-table-column v-for="item in column"  :key='item.key' :prop="item.key" :label="item.value"/>
      <el-table-column label="操作" width="180">
          <template #default="scope">
            <el-button type="primary" plain text size="small" @click="dialogVisible = true">preview</el-button>
          </template>
      </el-table-column>
    </el-table>
    <myDialog v-model:dialogVisible="dialogVisible" @on-confirm="onConfirm"/>
  </div>
</template>

<script lang="ts" >
import myDialog from './modular/myDialog.vue'
import { defineComponent, toRefs, reactive,ref} from 'vue'
interface State {
    dialogVisible: boolean
}
export default defineComponent ({
  components: {
    myDialog
  },
  setup(){
    const column = reactive([
      {key: 'name', value: '姓名'},
      {key: 'location', value: '定位'},
      {key: 'skillNum', value: '技能个数'},
    ]);
    const tableData = reactive([
      {
        location: 'assassin',
        name: 'libai',
        skillNum: '3',
      },
      {
        location: 'warrior',
        name: 'lvbu',
        skillNum: '3',
      }
    ]);
    const state = reactive<State>({
        dialogVisible: false,
    })
    const onConfirm = (value: string) => {
        console.log('父组件打印:', value)
        state.dialogVisible = false
    }
    return {
      column,
      tableData,
      ...toRefs(state),
      onConfirm,
    }
  },
  methods: {
    preview() {
      console.log('preview')
    }
  }
})



</script>

<style scoped lang="scss"></style>
