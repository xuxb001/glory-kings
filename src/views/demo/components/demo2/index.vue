<!-- vue3.0 <script setup lang='ts'>这种的写法 -->
<template>
  <div class="demo2">
    <h3>vue3支持三种写法</h3>
    <ul>
      <li>1,Option Api （与vue2写法相同）</li>
      <li>2,Composition API （setup()函数写法）</li>
      <li>{{aa}}</li>
    </ul>
    <p>{{bb}}</p>
    <h3>ref, reactive, toRef, toRefs 的区别</h3>
    <ul>
      <li>1,ref 可以把基本数据类型数据，转成响应式对象</li>
      <li>2,ref 返回的对象，重新赋值成对象也是响应式的</li>
    </ul>
    <h4>ref</h4>
    <p>用于为数据添加响应式的状态，它的本质就是将基本数据或对象通过 new Proxy 创建成为一个响应式的对象，所以通过它创建的基本数据 其实是个对象 它的值就放在了该对象的value属性中</p>
    <span>请看：refrefref =========================</span>
    <p>所有通过ref创建的数据 需要通过xxx.value取它的值
    通过ref创建一个响应式对象 其实它的内部还是通过reactive对该对象进行处理 所以声明响应式对象 推荐使用ref统一声明</p>

    <h4>reactive</h4>
    <p>reactive主要为对象添加响应式对象，接收一个对象作为参数，可以用于为表单等数据做统一响应式处理</p>
      <ul>
        <li>1,取值时不需要加.value</li>
        <li>2,reactive 返回的对象，重新赋值丢失响应式</li>
        <li>3,reactive 返回的对象不可以解构</li>
      </ul>
    <span>请看：reactive =========================</span>

    <h4>toRefs</h4>
    <p>
      toRefs 用于将响应式对象转换为结果对象，其中结果对象的每个属性都是指向原始对象相应属性的ref。
      常用于es6的解构赋值操作。
      主要解决 对一个响应式对象直接解构时解构后的数据将不再有响应式
    </p>
    <span>请看：toRefs =========================</span>

    <h4>toRef</h4>
    <p>
      toRef 用于为源响应式对象上的属性新建一个ref，从而保持对其源对象属性的响应式连接。
      接收两个参数：源响应式对象和属性名，返回一个ref数据。
      例如使用父组件传递的props数据时，要引用props的某个属性且要保持响应式连接时就很有用。
    </p>
    <span>请看：toRef =========================</span>

    <h4>总结</h4>
    <p>
      通过带有ref相关的方法处理后的数据 都需要通过.value获取
      推荐使用 ref 与 toRefs 方式处理数据
    </p>
  </div>
</template>
<script setup lang='ts'>
import {ref,reactive, toRefs,toRef} from 'vue'
const aa = ref('3,<script setup> （Composition API 的语法糖）')
const bb = ref("这里主要讲下<script setup>的一些写法，因为这种写法比较简洁，推荐使用这种写法")
// refrefref =========================
//可以理解为这样
// const a = 1
// a = 1
const a = ref(1)
//a = {
//value:1
//}
console.log(a.value) // 1

// reactive =========================
const forms = reactive({
  name:'aa',
  age:20
})
console.log(forms.name) // aa
// const {name,age} = forms //通过解构 此时name,age会丢失响应 要想让它具有响应式 需要通过toRefs处理
const {name,age} = toRefs(forms) //此时name,age具有响应

// toRefs =========================
const props = defineProps({
  msg:{
    type:String,
    default:''
  },
  info:{
    type:String,
    default:''
  }
})
const {msg,info} = toRefs(props) //msg,与info就具有响应式了 指针指向props下面对应的属性值
msg.value
info.value

// toRef =========================
// const props = defineProps({
//   msg:{
//     type:String,
//     default:'aa'
//   },
//   info:{
//     type:String,
//     default:''
//   }
// })
// const msg = toRef(props,'msg')
// msg.value //aa

</script>
<style lang="scss" scoped>
.demo2{

}
</style>
