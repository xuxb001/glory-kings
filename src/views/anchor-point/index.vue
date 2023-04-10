<template>
  <div>
    <!--左侧菜单区导航区域 -->
    <ul class="menu"
      id="menu">
      <li v-for="(menuItem, menukey) in menuList"
        :key="menukey"
        :class="{ active: active === menukey }"
        @click="scrollTo(menukey)">
        {{ menuItem.name }}
      </li>
    </ul>
    <!-- 右侧内容区域 -->
    <div class="content"
      @wheel="aa">
      <div>content-0</div>
      <div>content-1</div>
      <div>content-2</div>
      <div>content-3</div>
      <div>content-4</div>
      <div>content-5</div>
      <div>content-6</div>
      <div>content-7</div>
      <div>content-8</div>
      <div>content-9</div>
      <div>content-10</div>
      <div>content-11</div>
      <div>content-12</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      active: 0, // 当前激活的导航索引
      menuList: [
        { name: '菜单0' },
        { name: '菜单1' },
        { name: '菜单2' },
        { name: '菜单3' },
        { name: '菜单4' },
        { name: '菜单5' },
        { name: '菜单6' },
        { name: '菜单7' },
        { name: '菜单8' },
        { name: '菜单9' },
        { name: '菜单10' },
        { name: '菜单11' },
        { name: '菜单12' },
      ],
      flag: true
    }
  },
  mounted () {
    // 监听滚动事件
    window.addEventListener('scroll', this.onScroll, true)
  },
  destroy () {
    // 必须移除监听器，不然当该vue组件被销毁了，监听器还在就会出错
    window.removeEventListener('scroll', this.onScroll, true)
  },

  methods: {
    aa (e) {
      // console.log('e.originalEvent.wheelDelta', e.originalEvent)
      // // console.log('1111',)
      // setTimeout(() => {
      //   this.scrollTo(this.active++)
      // }, 500)
      // // if (this.flag === true) this.scrollTo(this.active += 1)
      // if (this.flag === false) {//说明已经运行过了
      //   // window.removeEventListener('scroll', this.onScroll, true)
      //   return false//或者 removeListener移除
      // }
      // //操作完之后最后
      // this.flag = false
    },
    // 滚动监听器
    onScroll (e) {
      console.log('e.originalEvent.wheelDelta', e)
      var delta = (e.originalEvent.wheelDelta && (e.originalEvent.wheelDelta > 0 ? 1 : -1)) // firefox
      window.removeEventListener('scroll', this.onScroll, true)
      if (delta > 0) {
        // 向上滚
        num -= 1;
        if (num < 0) {
          num = 0;
        }
        //要执行的方法
        console.log('111',)
      } else if (delta < 0) {
        // 向下滚
        num += 1;
        if (num > 4) {
          num = 0;
        }
        //要执行的方法
        console.log('222',)
      }
      //使用setTimeout方法产生一个延时效果，是的每次滑动鼠标滑轮，只执行一次事件方法
      setTimeout(this.onScroll, 500);

      // // 获取所有锚点元素
      // const navContents = document.querySelectorAll('.content div')
      // // 所有锚点元素的 offsetTop
      // const offsetTopArr = []
      // navContents.forEach(item => {
      //   offsetTopArr.push(item.offsetTop)
      // })
      // // 获取当前文档流的 scrollTop
      // const scrollTop = document.documentElement.scrollTop + 40 || document.body.scrollTop + 40
      // // 定义当前点亮的导航下标
      // let navIndex = 0
      // let count = 0
      // let menu = document.getElementById('menu');
      // for (let n = 0; n < offsetTopArr.length; n++) {
      //   // 如果 scrollTop 大于等于第 n 个元素的 offsetTop 则说明 n-1 的内容已经完全不可见
      //   // 那么此时导航索引就应该是 n 了
      //   if (scrollTop >= offsetTopArr[n]) {
      //     navIndex = n
      //     if (navIndex >= 8) count++
      //   }
      // }
      // //当前active菜单赋值
      // this.active = navIndex
      // // 滚动到一定位置 将菜单整体向上移  确保能看的到更多的菜单
      // if (navIndex >= 8) {
      //   menu.style.top = - 100 * count + 'px'
      // } else {
      //   menu.style.top = 0 + 'px'
      // }
    },
    // 跳转到指定索引的元素
    scrollTo (index) {
      // 获取目标的 offsetTop
      // css选择器是从 1 开始计数，我们是从 0 开始，所以要 +1
      const targetOffsetTop = document.querySelector(`.content div:nth-child(${index + 1})`).offsetTop
      // 获取当前 offsetTop
      let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
      // 定义一次跳 50 个像素，数字越大跳得越快，但是会有掉帧得感觉，步子迈大了会扯到蛋
      const STEP = 70
      // 判断是往下滑还是往上滑
      if (scrollTop > targetOffsetTop) {
        // 往上滑
        smoothUp()
      } else {
        // 往下滑
        smoothDown()
      }
      // 定义往下滑函数
      function smoothDown () {
        // 如果当前 scrollTop 小于 targetOffsetTop 说明视口还没滑到指定位置
        if (scrollTop < targetOffsetTop) {
          // 如果和目标相差距离大于等于 STEP 就跳 STEP
          // 否则直接跳到目标点，目标是为了防止跳过了。
          if (targetOffsetTop - scrollTop >= STEP) {
            scrollTop += STEP
          } else {
            scrollTop = targetOffsetTop
          }
          document.body.scrollTop = scrollTop
          document.documentElement.scrollTop = scrollTop
          // 关于 requestAnimationFrame 可以自己查一下，在这种场景下，相比 setInterval 性价比更高
          requestAnimationFrame(smoothDown)
        }
      }
      // 定义往上滑函数
      function smoothUp () {
        if (scrollTop > targetOffsetTop) {
          if (scrollTop - targetOffsetTop >= STEP) {
            scrollTop -= STEP
          } else {
            scrollTop = targetOffsetTop
          }
          document.body.scrollTop = scrollTop
          document.documentElement.scrollTop = scrollTop
          requestAnimationFrame(smoothUp)
        }
      }
    }
  }
}
</script>

<style scoped>
/* 内容区的样式 */
.content {
    background-color: white;
    border-radius: 4px;
    margin: 10px 10px 0 150px;
}
.content div {
    height: 960px;
    line-height: 960px;
    width: 100%;
    text-align: center;
    font-size: 100px;
    padding: 20px;
    background: #ffffff;
    box-shadow: 0 3px 10px 0 rgba(219, 219, 219, 0.5);
    border-radius: 6px;
}
.content div:not(:last-child) {
    margin-bottom: 2px;
}

/* 导航栏的样式 */
.menu {
    position: fixed;
    top: 0;
    left: 0px;
    background-color: #efefef;
    width: 140px;
}
.menu li {
    text-align: center;
    padding: 20px;
    font-size: 24px;
    cursor: pointer;
    line-height: 50px;
    height: 50px;
    font-weight: 600;
    color: #727475;
    list-style: none;
}
.menu li:not(:last-child) {
    border-bottom: 1px solid #e0e0e0;
}
.menu li:hover {
    -webkit-box-shadow: 1px 1px 2px 1px rgba(0, 0, 0, 0.2);
    box-shadow: 1px 1px 2px 1px rgba(0, 0, 0, 0.2);
}
/* 当导航被点亮后改变颜色 */
.menu .active {
    color: #847ec3;
    background-color: #e2e2e2;
}
</style>
