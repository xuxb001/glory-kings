<script lang="ts" setup>
import { reactive } from 'vue'

const mouseObj = reactive({
  display: 'none'
})
function mouseHover(type: string) {
  if (type === 'mouseover') mouseObj.display = 'block'
  else mouseObj.display = 'none'
}
mouseHover()
</script>
<template>
  <div class="head">
    <ul class="ost_inner ost_lsn">
      <li class="ost_logo ost_h40 ost_fl ost_bg">
        <a
          href="//game.qq.com/?ADTAG=IED.InnerCop.gameWeb.topNav"
          target="_blank"
          class="ost_blnk ost_hdn"
          title="腾讯游戏logo"
        ></a>
      </li>
      <li
        ref="ostAd"
        class="ost_ad ost_h40 ost_fl"
        @mouseover="mouseHover('mouseover')"
        @mouseleave="mouseHover('mouseleave')"
      >
        <img
          class="ost_nb"
          src="https://tiem-cdn.qq.com/o2/images/aca62bceaecc26dfc022ab8b171ae7f0.jpg"
          alt
          style="display: block"
        />
      </li>
      <li class="ost_total ost_ml10 ost_fr">
        <h3 class="ost_czsh ost_h40">
          <a
            href="https://game.qq.com/web201910/jiazhang.html?ADTAG=gamepcbanner"
            target="_blank"
            >成长守护平台</a
          >
        </h3>
        <h3 class="ost_title ost_h40">
          <a
            href="https://game.qq.com/web201910/jiazhang.html?ADTAG=gamepcbanner"
            target="_blank"
            >腾讯游戏排行榜</a
          >
        </h3>
      </li>
    </ul>
    <div
      class="ost_big"
      id="ostBig"
      :style="mouseObj"
      @mouseover="mouseHover('mouseover')"
      @mouseleave="mouseHover('mouseleave')"
    >
      <a
        href="http://ac.o2.qq.com/o2pc/click?loc_id=119_0d8e2b9df01ce2966bb5d8dd52e865e1&mtr_id=348540&show_id=9.138.243.252_1642592356787_138155684"
        target="_blank"
      >
        <img
          class="ost_nb"
          src="https://tiem-cdn.qq.com/o2/images/9268ec2115e042b966330ec0ad4fb14f.jpg"
          alt
          width="970"
          height="185"
        />
      </a>
    </div>
  </div>
</template>
<style scoped lang="scss">
.head {
  .ost_inner {
    width: 980px;
    padding: 0 5px;
    margin: 0 auto;
    position: relative;
    line-height: 41px;
    .ost_logo {
      width: 150px;
      background: url(https://game.gtimg.cn/images/js/title/logo.png) top center
        no-repeat;
      position: relative;
      z-index: 10001;
    }
    .ost_fl {
      float: left;
    }
    .ost_fr {
      float: right;
    }
    .ost_ml10 {
      margin-left: 10px;
    }
    .ost_total {
      width: 300px;
      text-align: right;
      a {
        text-decoration: none;
      }
    }
  }
  .ost_h40 {
    height: 41px;
  }
  .ost_czsh:after {
    content: '';
    background: url(https://game.gtimg.cn/images/js/title/title_sprite.png);
    background-position: -30px 0;
    width: 30px;
    height: 30px;
    top: 5px;
    left: 5px;
    position: absolute;
  }
  .ost_czsh,
  .ost_title {
    font-size: 14px;
    font-weight: 400;
    margin: 0;
    margin-right: 0px;
    line-height: 41px;
    cursor: pointer;
    display: inline-block;
    vertical-align: top;
  }
  .ost_czsh {
    width: 88px;
    position: relative;
    padding-left: 30px;
    margin-right: 20px;
  }
  .ost_title {
    position: relative;
    padding-right: 25px;
  }
  .ost_blnk {
    display: block;
    height: 100%;
  }
  .ost_hdn {
    text-indent: -500px;
  }
  .ost_big {
    width: 970px;
    height: 185px;
    padding: 0 3px 3px;
    border-bottom: 1px solid #eee;
    background: #fff;
    position: absolute;
    top: 0;
    left: 50%;
    margin: 0 0 0 -488px;
    // display: none;
  }
}
</style>
