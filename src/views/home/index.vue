<template>
    <div id="home">
        <login />
        <!-- <router-link to="/demo">
      <img :src="xingkong" alt="" />
    </router-link> -->
    </div>
</template>

<script lang="ts" setup>
import url from '@/assets/images/logo.png'
import xingkong from '@/assets/images/find-earth/xingkong.jpeg'
import login from './login.vue'
</script>

<style scoped lang="scss">
#home {
    width: 100vw;
    height: 100vh;
    img {
        width: 100%;
        height: 100%;
    }
}
</style>
