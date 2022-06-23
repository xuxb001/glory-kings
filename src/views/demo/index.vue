<template>
  <div class="demo">
    <el-menu
      :collapse="isCollapse"
      active-text-color="#ffd04b"
      background-color="#545c64"
      class="el-menu-vertical-demo"
      default-active="2"
      text-color="#fff"
      @open="handleOpen"
      @close="handleClose"
    >
      <el-sub-menu index="1">
        <template #title>
          <el-icon><location /></el-icon>
          <span>Navigator One</span>
        </template>
        <el-menu-item-group>
          <template #title><span>Group One</span></template>
          <el-menu-item index="1-1" @click="toRouter('demo/demo1')">
            demo1
          </el-menu-item>
          <el-menu-item index="1-2" @click="toRouter('demo/demo2')">
            demo2
          </el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="Group Two">
          <el-menu-item index="1-3">item three</el-menu-item>
        </el-menu-item-group>
        <el-sub-menu index="1-4">
          <template #title><span>item four</span></template>
          <el-menu-item index="1-4-1">item one</el-menu-item>
        </el-sub-menu>
      </el-sub-menu>
      <el-menu-item index="2">
        <el-icon><icon-menu /></el-icon>
        <template #title>Navigator Two</template>
      </el-menu-item>
      <el-menu-item index="3">
        <el-icon><document /></el-icon>
        <template #title>Navigator Three</template>
      </el-menu-item>
      <el-menu-item index="4">
        <el-icon><setting /></el-icon>
        <template #title>Navigator Four</template>
      </el-menu-item>
    </el-menu>
    <!-- <transition :name="isCollapse ? 'el-fade-in-linear':'el-fade-in'">
      <el-button :class="isCollapse ? 'collapse-right':'collapse-left' "  :icon="isCollapse ? DArrowRight : DArrowLeft" @click="isExpand"></el-button>
    </transition> -->
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { DArrowLeft, DArrowRight } from '@element-plus/icons-vue'
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'
import { useRouter } from "vue-router";
const router = useRouter();
const isCollapse = ref(false)
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const isExpand = () => {
  isCollapse.value = !isCollapse.value
}
const toRouter = (val: string) => {
    router.push({path: val})
}
</script>

<style lang="scss" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  height: 100vh;
}
.demo{
  display: flex;
  justify-content: flex-start;
  .el-menu--collapse {
      width: 64px;
      height: 100vh;
  }
  .collapse-left{
    position: absolute;
    left: 200px;
  }
  .collapse-right{
    position: absolute;
    left: 64px;
  }
  .content{
    padding: 32px 20px 0 10px;
  }
}
</style>
