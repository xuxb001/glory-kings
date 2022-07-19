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

    <div class="layout5">
      <h3>05. 经典圣杯布局：grid-template: auto 1fr auto / auto 1fr auto</h3>
      <header><h1 contenteditable>Header.com</h1></header>
      <div class="left-sidebar" contenteditable>Left Sidebar</div>
      <main contenteditable></main>
      <div class="right-sidebar" contenteditable>Right Sidebar</div>
      <footer contenteditable>Footer Content — Header.com 2020</footer>
    </div>

    <h3>06. 12 跨网格：grid-template-columns: repeat(12, 1fr)</h3>
    <div class="layout6">
      <div class="span-12">Span 12</div>
      <div class="span-6">Span 6</div>
      <div class="span-4">Span 4</div>
      <div class="span-2">Span 2</div>
    </div>

    <h3>{{"07. RAM (Repeat, Auto, MinMax): grid-template-columns(auto-fit, minmax(<base>, 1fr))"}}</h3>
    <div class="layout7">
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
    </div>

    <h3>08. 排列布局：justify-content: space-between</h3>
    <div class="layout8">
      <div class="card">
        <h1>Title - Card 1</h1>
        <p>Medium length description. Let's add a few more words here.</p>
        <div class="visual"></div>
      </div>
      <div class="card">
        <h1>Title - Card 2</h1>
        <p>Long Description. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed est error repellat veritatis.</p>
        <div class="visual"></div>
      </div>
      <div class="card">
        <h1>Title - Card 3</h1>
        <p>Short Description.</p>
        <div class="visual"></div>
      </div>
    </div>

    <h3>{{"09. 保持我的风格：clamp(<min>, <actual>, <max>)"}}</h3>
    <div class="layout9">
      <div class="card">
      <h1>Title Here</h1>
      <div class="visual"></div>
      <p>Descriptive Text. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed est error repellat veritatis.</p>
      <br/>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum eveniet beatae veritatis saepe corporis voluptates illo placeat maxime sapiente. Sit facere cumque quidem ad quo, dolores pariatur repudiandae ullam animi?</p>
    </div>
    </div>

    <h3>{{"10.保持宽高比：aspect-ratio: <width> / <height>"}}</h3>
    <div class="layout10">
      <div class="card">
        <h1>Title Here</h1>
        <div class="visual"></div>
        <p>Descriptive Text. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed est error repellat veritatis.</p>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>


</script>
<style lang="scss" scoped>
.demo4 {
  .layout1{
    height: 100vh;
    .parent {
      display: grid;
      place-items: center;
      background: lightblue;
      width: 500px;
      height: 500px;
      resize: both;
      overflow: auto;
      .child {
        padding: 0.5rem;
        border-radius: 10px;
        border: 1px solid red;
        background: lightpink;
        font-size: 2rem;
        text-align: center;
      }
    }
  }

  .layout2{
    height: 100vh;
    .parent {
      display: flex;
      flex-wrap: wrap;
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
      background: wheat;
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

  .layout5{
    display: grid;
    height: 100vh;
    grid-template: auto 1fr auto / auto 1fr auto;
    // etc
    header {
      background: lightpink;
      padding: 2rem;
      grid-column: 1 / 4;
    }
    .left-sidebar {
      background: lightblue;
      grid-column: 1 / 2;
    }
    main {
      background: coral;
      grid-column: 2 / 3;
    }
    .right-sidebar {
      background: yellow;
      grid-column: 3 / 4;
    }
    footer {
      background: wheat;
      padding: 2rem;
      text-align: center;
      grid-column: 1 / 4;
    }
    .left-sidebar,
    .right-sidebar {
      padding: 1rem;
    }
  }

  .layout6{
    display: grid;
    height: 100vh;
    grid-template-columns: repeat(12, 1fr);
    // etc
    div {
      display: grid;
      place-items: center;
    }
    .span-12 {
      background: lightpink;
      grid-column: 1 / 13;
    }
    .span-6 {
      background: lightblue;
      grid-column: 1 / 7;
    }
    .span-4 {
      background: coral;
      grid-column: 4 / 9;
    }
    .span-2 {
      background: yellow;
      grid-column: 3 / 5;
    }
  }

  .layout7{
    display: grid;
    height: 100vh;
    grid-gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    div {
      display: grid;
      place-items: center;
      background: lightpink;
    }
  }

  .layout8{
    // height: 100vh;
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: repeat(3, 1fr);
    .visual {
      height: 100px;
      width: 100%;
      background: wheat;
      margin: 0.5rem 0;
    }
    .card {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      background: lightpink;
      padding: 1rem;
    }
    h1 {
      font-size: 1.5rem;
    }
  }

  .layout9{
    display: grid;
    place-items: center;
    height: 100vh;
    .visual {
      height: 100px;
      width: 100%;
      background: wheat;
      margin: 0.5rem 0;
    }
    .card {
      width: clamp(45ch, 50%, 75ch);
      display: flex;
      flex-direction: column;
      background: lightpink;
      padding: 1rem;
    }
    h1 {
      font-size: 1.5rem;
    }
  }

  .layout10{
    display: grid;
    place-items: center;
    height: 100vh;
    .visual {
      aspect-ratio: 16/9;
      background: wheat;
      margin: 0.5rem 0;
    }
    .card {
      width: 80%;
      display: flex;
      flex-direction: column;
      background: lightpink;
      padding: 1rem;
    }
    body {
      font-family: system-ui, sans-serif;
    }
    h1 {
      font-size: 1.5rem;
    }
  }
}
</style>
