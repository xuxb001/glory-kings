<template>
  <div id="home">
    <router-link to="/demo">
      <img :src="enter" alt="" />
    </router-link>
  </div>
</template>

<script lang="ts" setup>
import url from '@/assets/images/logo.png'
import enter from '@/assets/images/find-earth/enter.gif'
</script>

<style scoped lang="scss">
#home{
  width: 100vw;
  height: 100vh;
  img{
    width: 100%;
    height: 100%;
  }
}
</style>
