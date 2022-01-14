<script lang="ts">
import { defineComponent } from 'vue'

import Main from '@/components/Main.vue'

export default defineComponent({
  name: 'App',
  components: {
    Main
  },
  setup() {
    return {
      aa: '电脑是我的'
    }
  }
})
</script>

<template>
  <div id="app">
    {{ aa }}
    <Main />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
