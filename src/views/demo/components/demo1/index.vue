<!-- vue3.0中defineComponent 的写法-->
<template>
  <div>{{title}}</div>
</template>
<script lang="ts">
import {
  defineComponent,
  reactive,
  ref,
  toRefs,
} from "vue"; // 使用哪个api 就要引入哪个
export default defineComponent({
  name: "demo1",
  props: {
    //接收调用组件传回的参数
    title: { type: String, default: "3333" }
  },
  setup(props, context) {
    console.log(props);
    // reactive 和 ref 都是用来定义响应式数据的 reactive更推荐去定义复杂的数据类型 ref 更推荐定义基本类型
    // ref 和 reactive 本质我们可以简单地理解为ref是对reactive的二次包装， ref定义的数据访问的时候要多一个.value console.log(pageSize.value)
    // 使用ref定义基本数据类型，ref也可以定义数组和对象
    const state = reactive({
      foo: 1,
      bar: 2
    });
    const pageSize = ref(100);
    // 将响应式对象转换为普通对象，其中结果对象的每个 property 都是指向原始对象相应 property 的 ref
    const stateAsRefs = toRefs(state);
    /*
    stateAsRefs 的类型:
    {
      foo: Ref<number>,
      bar: Ref<number>
    }
    */
    // ref 和原始 property 已经“链接”起来了
    state.foo++
    console.log(stateAsRefs.foo.value) // 2

    stateAsRefs.foo.value++
    console.log(state.foo) // 3

    //传递方法给父组件
    const handleSizeChange = (val: number) => {
      pageSize.value=val // 改变一个属性的值 需要 .value
      context.emit("handleSizeChange", val); // 组件传递方法是用setup语法糖里面的第二个参数.emit("方法名"，传递的值)
    };


    // 可以在不失去响应性的情况下解构
    const { foo, bar } = useFeatureX()

    return { // 所有在setup()里面的方法和值，要return 出来
      ...stateAsRefs,
      handleSizeChange,
      pageSize,

      foo,
      bar
    };
  }
});
// 当从组合式函数返回响应式对象时，toRefs 非常有用，这样消费组件就可以在不丢失响应性的情况下对返回的对象进行解构/展开：
function useFeatureX() {
  const state = reactive({
    foo: 1,
    bar: 2
  })

  // 操作 state 的逻辑

  // 返回时转换为ref
  return toRefs(state)
}
//toRefs 只会为源对象中包含的 property 生成 ref。如果要为特定的 property 创建 ref，则应当使用 toRef
</script>
