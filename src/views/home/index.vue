<template>
  <div id="home">
    <router-link to="/king">
      <img :src="url" alt="" />
    </router-link>
  </div>
</template>

<script lang="ts" setup>
import url from '@/assets/images/logo.png'
</script>

<style scoped lang="scss"></style>
