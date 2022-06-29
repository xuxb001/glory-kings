<template>
  <div id="king">
    <el-table :data="tableData" style="width: 100%">
      <el-table-column v-for="item in column"  :key='item.key' :prop="item.key" :label="item.value"/>
      <el-table-column label="操作" width="180">
          <template #default="scope">
            <el-button type="primary" plain text size="small" @click="handlePreview">preview</el-button>
          </template>
      </el-table-column>
    </el-table>
    <myDialog v-model:dialogVisible="dialogVisible" @on-confirm="onConfirm"/>
  </div>
</template>

<script lang="ts" setup>
import myDialog from './modular/myDialog.vue'
import { defineComponent, toRefs, reactive,ref} from 'vue'
    const dialogVisible = ref(false)
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
    const onConfirm = (value: string) => {
      console.log('父组件打印:', value)
      dialogVisible.value = false
    }
    const handlePreview = () => {
      dialogVisible.value = true
    }
</script>

<style scoped lang="scss"></style>
