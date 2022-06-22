<template>
  <div class="find-earth">

  </div>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      visible: false
    }
  },
  methods: {
    toggleVisible () {
      this.visible = !this.visible
    }
  }
}
</script>

<style lang="scss" scoped>
.find-earth {
  height: 100vh;
  widows: 100vw;
  background-color: #000;
}
</style>
