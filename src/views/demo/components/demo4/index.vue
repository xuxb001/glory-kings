<!-- vue3.0中的写法-->
<template>
  <div class="demo4">
    <div class="layout1">
      <h3>01. 超级居中：place-items: center</h3>
      <div class="parent" >
        <div class="child" contenteditable>:)</div>
      </div>
    </div>
    <div class="layout2">
      <h3>02. 解构煎饼式布局：flex: {{'<grow> <shrink> <baseWidth>'}}</h3>
      <div class="parent">
        <div class="child">1</div>
        <div class="child">2</div>
        <div class="child">3</div>
      </div>
    </div>
    <h3>03. 侧边栏布局：grid-template-columns: minmax({{'<min>, <max>'}}) …)</h3>
    <div class="layout3">
      <div class="sidebar" contenteditable>
        Min: 150px
        <br/>
        Max: 25%
      </div>
      <p class="content" contenteditable>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis nulla architecto maxime modi nisi.
        Quas saepe dolorum, architecto quia fugit nulla! Natus, iure eveniet ex iusto tempora animi quibusdam porro?</p>
    </div>
    <div class="layout4">
      <h3>04. 煎饼堆栈布局：grid-template-rows: auto 1fr auto</h3>
      <header><h1>Header.com</h1></header>
      <main>mainmainmainmain</main>
      <footer>Footer Content — Header.com 2020</footer>
    </div>
    <div class="layout2">
      <h3>01. 超级居中：place-items: center</h3>
    </div>
    <div class="layout2">
      <h3>01. 超级居中：place-items: center</h3>
    </div>
    <div class="layout2">
      <h3>01. 超级居中：place-items: center</h3>
    </div>
    <div class="layout2">
      <h3>01. 超级居中：place-items: center</h3>
    </div>
    <div class="layout2">
      <h3>01. 超级居中：place-items: center</h3>
    </div>
    <div class="layout2">
      <h3>01. 超级居中：place-items: center</h3>
    </div>
  </div>
</template>
<script lang="ts" setup>


</script>
<style lang="scss" scoped>
.demo4 {
  .layout1{
    .parent {
      display: grid;
      place-items: center;

      background: lightblue;
      width: 500px;
      height: 500px;

      resize: both;
      overflow: auto;
    }

    .child {
      padding: 0.5rem;
      border-radius: 10px;
      border: 1px solid red;
      background: lightpink;
      font-size: 2rem;
      text-align: center;
    }
  }
  .layout2{
    .parent {
      display: flex;
      flex-wrap: wrap;
    }

    .child {
      //  flex: none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]
      //  If we don't want the items to stretch:
      flex: 0 1 300px;
      //  If we do want the items to stretch:
      flex: 1 1 300px;

      //   etc.
      border: 1px solid red;
      background: lightpink;
      font-size: 2rem;
      text-align: center;
    }
  }
  .layout3{
    display: grid;
    grid-template-columns: minmax(150px, 25%) 1fr;
    padding: 0;
    margin: 0;
    .sidebar {
      height: 100vh;

      //   etc.
      background: lightpink;
      font-size: 2rem;
      text-align: center;
    }

    .content {
      padding: 2rem;
    }
  }
  .layout4{
    display: grid;
    height: 100vh;
    grid-template-rows: auto 1fr auto;
    header {
      background: lightpink;
      padding: 2rem;
    }

    main {
      background: coral;
    }

    footer {
      background: wheat;
      padding: 2rem;
      text-align: center;
    }
  }
  .layout3{

  }
  .layout3{

  }
  .layout3{

  }
  .layout3{

  }
  .layout3{

  }
  .layout3{

  }
}
</style>
