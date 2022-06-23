<template>
  <div class="kingdom">
    <!-- <el-menu :default-active="defaultActive" class="el-menu-vertical-demo">
        <el-menu-item v-for="(item, index) in menuList" :key="index" :index="item.code">
          <i class="el-icon-setting"></i>
          <span>
            <router-link :to="item.path">{{item.king}}</router-link>
          </span>
        </el-menu-item>
    </el-menu> -->
    <div class="btn-menu">
      <span v-for="(item, index) in menuList" :key="index">
        <el-button @click="toRoute(item.path)">{{item.name}}</el-button>
      </span>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  components:{

  },
  watch:{
  },
  data(){
    return{
      menuList:[
      {
        path:'kingdom/king',
        name:'king',
        code:'1'
      },
      {
        path:'kingdom/queen',
        name:'queen',
        code:'2'
      }],
      defaultActive:'1'
    }
  },
  methods:{
    toRoute(val){
      this.$router.push({ path: val })
    }
  }
}
</script>
<style lang="scss" scoped>
.kingdom{
  .btn-menu{
    padding: 20px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    span{
      margin: 0 10px;
    };
  }
}
</style>
