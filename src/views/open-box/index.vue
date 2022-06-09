<template>
<div class="open-box">
  <el-row :gutter="10" class="open-box-row">
      <el-col :xs="3" :sm="3" :md="3" :lg="3" :xl="3">
        <div class="btn-left">
            <img @click="prev" class="prev" src="https://d27bgaincl4qlr.cloudfront.net/images/species/slide-left.svg">
        </div>
      </el-col>
      <el-col :xs="18" :sm="18" :md="18" :lg="18" :xl="18">
        <div class="open-box-content">
          <el-row
          v-for="(item, index) in list" :key="item.name"
          :class="['blind-box', active === index ? 'active' : 'not-active','animate__animated' ,'animate__backInRight']">
            <el-col :span="24" class='text box-name'>{{ item.name }}</el-col>
            <el-col :span="24">
              <el-image :src="item.img">
                <template #placeholder>
                  <div class="image-slot">Loading<span class="dot">...</span></div>
                </template>
              </el-image>
            </el-col>
            <el-col :span="24">
              <span class='text box-btn'>open box</span>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="24" class='text blind-tips-text'>Stay tuned for the blind box opening</el-col>
          </el-row>
        </div>
      </el-col>
      <el-col :xs="3" :sm="3" :md="3" :lg="3" :xl="3">
        <div class="btn-right">
            <img @click="next" class="next" src="https://d27bgaincl4qlr.cloudfront.net/images/species/slide-right.svg">
        </div>
      </el-col>
    </el-row>
</div>
</template>
<script>
import { ref, reactive } from 'vue'
import ton02 from './img/ton02.png'
export default {
  setup(){
    const img02 = ref(ton02)
    const active = ref(0)
    const list = reactive([
      { name:'#1004', img: img02, status: false},
      { name:'#1006-11', img: img02, status: true},
      { name:'#1008-99', img: img02, status: false}
    ])
    const next = () => {

    }
    const prev = () => {

    }
    return{
      img02,
      active,
      list
    }
  }
}
</script>
<style scoped lang="scss">
.open-box{
    background-image: url('./img/bg.png');
    background-repeat: repeat;
    background-size: 100% 100%;
    height: 100vh;
    // padding-top: 100px;
  .open-box-row{
    display: flex;
    justify-content: center;
    align-items: center;
    .open-box-content{
      display: flex;
      flex-direction: column;
      align-items: center;
      .blind-box{
        display: flex;
        flex-direction: column;
        align-items: center;
        .el-col{
          display: block;
          width: 100%;
        }
        &.active{
          display: block;
        }
        &.not-active{
          display: none;
        }
      }
    }
    .box-name{
      font-family: 'Roboto';
      font-style: italic;
      font-weight: 700;
      font-size: 24px;
      line-height: 28px;
    }
    .box-btn{
      background-image: url('./img/button-bg1.svg');
      background-repeat: repeat;
      background-size: 100% 100%;
      font-family: 'Roboto';
      font-style: italic;
      font-weight: 700;
      font-size: 22px;
      line-height: 45px;
      display: inline-block;
      width:171px;
      height: 49px;
      margin-top: 26px;
    }
    .blind-tips-text{
      font-family: 'Roboto';
      font-style: italic;
      font-weight: 700;
      font-size: 20px;
      line-height: 23px;
      text-align: center;
      margin-top: 47px;
    }
    .next, .prev {
      width: 50px;
      height: 90px;
      cursor: pointer;
    }
  }
  .text{
    color: #fff;
  }
}
</style>
