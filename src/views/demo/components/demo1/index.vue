<!-- vue3.0中的写法-->
<template>
  <div>{{title}}
    <el-button @click="handleTit">点击</el-button>
    <div v-for="(item,index) in newList" :key="index">{{item.nodeId}}:{{item.nodeName}}</div>
  </div>
</template>
<script lang="ts" setup>
import {reactive, ref} from "vue"; // 使用哪个api 就要引入哪个
const title = ref('demo1')
const list = reactive(['1', '2', '3'])
const handleTit = () => {
  title.value = 'demo11111111111'
  localStorage.setItem('aa', JSON.stringify(list))
}
const nodeConfig = reactive({
        error: false,
        type: 0,
        nodeName: '发起人',
        nodeId: 'approvalID',
        userAll: '1', // 发起人(所有人,指定成员,岗位,角色)
        userlist: ['张三', '李四', '王五'], // 成员
        childNode: {
          nodeName: '审批人',
          // error: true, // 默认值
          type: 1, // 类型
          nodeId: 'approvalID', // 模板id
          examineMode: '1', // 审批人(多人审批采用的审批方式：依次审批：1、会签：2、或签：3)
          approvalMethod: '1', // 审批人(类型:指定成员：1、岗位：2、角色：3、部门主管：4、发起人自选：5)
          approvalIsEmpty: '1', // 部门主管(审批人为空时)
          addMembers: ['张三', '李四', '王五'], // 审批人(添加成员)
          station: ['王五', '李四', '张三'],
          sponsors: '直接主管', // 部门主管(发起人的)
          approvedByProxy: true, // 部门主管(找不到主管时,由上级主管代审)
          selectionRange: '1', // 发起人自选(选择范围)
          specifiedRange: '1', // 发起人自选(是否指定范围)
          childNode: { // 抄送人
            nodeName: '抄送人',
            error: false, // 默认值
            type: 2, // k模板类型
            addMembers: ['张三', '李四', '王五'], // 抄送人(添加成员)
            nodeId: 'copyID', // 抄送人模板id
            childNode: {
              nodeName: '路由', // 名称
              error: true, // 默认值
              type: 4, // 类型
              nodeId: 'conditionID', // id
              // priorityLevel: '2', // 优先级
              conditionNodes: [{
                nodeName: '条件1', // 名称
                error: true, // 默认值
                type: 3, // 条件类型
                priorityLevel: '1', // 优先级
                conditionList: [], // 条件内容
                conditionRadio: 2, // 选项(1自动条件 2手动选择 3排他分支)
                childNode: null
              }, {
                nodeName: '条件2', // 名称
                error: true, // 默认值
                type: 3, // 条件类型
                priorityLevel: '2', // 优先级
                conditionList: [], // 条件内容
                childNode: null,
                conditionRadio: 2// 选项(1自动条件 2手动选择 3排他分支)
              }
              ],
              childNode: null
            }
          }
        }
      })
let newList = ref([])
const formatter = (list) => {
  for(let key in list){
    if (typeof list.childNode !== null) {
      formatter(list.childNode)
    }
    newList.value.push(list)
    break
  }
}
formatter(nodeConfig)
console.log('newList',newList.value.map(item => {
  delete(item.childNode)
  return item
}))

</script>
