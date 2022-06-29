<template>
  <div class="find-earth">

  </div>
</template>

<script lang="ts" setup>
  import { ref} from "vue"
  const visible = ref(false)
  const toggleVisible= () =>{
    visible.value = !visible.value
  }
</script>

<style lang="scss" scoped>
.find-earth {
  height: 100vh;
  widows: 100vw;
  background-color: #000;
}
</style>
