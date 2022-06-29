<template>
  <div class="queen">
    <el-row :gutter="10">
        <div class="grid-content bg-purple tips" v-for="item in tips" :key="item">{{item}}</div>
    </el-row>
    <br>
    <el-row :gutter="10">
      <div class="grid-content bg-purple-light content" v-for="item in 20" :key="item">
        <div>标题{{item}}</div>
        <div>Synthetix is a system designed to let users hold and trade synthetic assets whose value can be tied to real-world assets.</div>
      </div>
    </el-row>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
const tips = reactive(['all apps', 'dif', 'klosd','script','grid','height','false','light','bmdc'])
</script>
<style lang="scss" scoped>
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
  }
  .tips{
    padding: 5px 20px;
    margin: 10px 10px;
  }
  .content{
    margin: 10px 10px;
    width: 20%;
  }
  @media screen and(max-width: 860px) {
    .tips{
      width: 25%;
    }
    .content{
      width: 45%;
    }
  }
  @media screen and(max-width: 710px) {
    .tips{
      width: 40%;
    }
    .content{
      width: 90%;
    }
  }
  @media screen and(max-width: 590px) {
    .tips{
      width: 90%;
    }
    .content{
      width: 90%;
    }
  }
</style>
