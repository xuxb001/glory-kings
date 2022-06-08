<template>
  <!-- <div>{{ collectionName }}: {{ readersNumber }} {{ book.title }}</div> -->
  <!-- <div>{{user.name}}</div> -->
  <div>22</div>
</template>

<script lang="ts">
// import { reactive, toRefs } from "vue"
// import { h, ref } from 'vue'
import { ref, reactive, toRefs, computed } from 'vue'
// import { onBeforeMount, onMounted, toRef } from "vue"
export default {
  props: {
    collectionName: String
  },
  setup(props, { attrs, slots, emit, expose }) {
    const num = ref(0);
    const double = computed({
      get: () => num.value * 2,
      set: (val) => (num.value = val / 2),
    });

    num.value++;
    // 2
    console.log(double.value);

    double.value = 8
    // 4
    console.log(num.value);
    //===============================
    // const obj = ref({
    //   name: "qwe",
    //   age: 1,
    // });
    // setTimeout(() => {
    //   obj.value.name = "asd";
    // }, 1000);

    // const list = ref([1, 2, 3, 4, 6]);
    // setTimeout(() => {
    //   list.value.push(7);
    // }, 2000);

    // setTimeout(() => {
    //   console.log(obj.value.name, list.value)
    // },2500)

    // let book = reactive({
    //   name: 'Learn Vue',
    //   year: 2020,
    //   title: 'Chapter one'
    // })
    // let {
    //   name,
    // } = toRefs(book)

    // name.value = 'new Learn'
    // // Learn Vue
    // console.log(book.name);
    //================================================================
    // const num = ref(0);
    // const str = ref("");
    // const male = ref(true);

    // num.value++;
    // console.log(num.value);

    // str.value = "new val";
    // console.log(str.value);

    // male.value = false;
    // console.log(male.value);

    //================================================================
    // console.log(props.title,'title')
    // const title = toRef(props, 'title')
    // console.log(title.value)

    // onBeforeMount(() => {
    //   // beforeMount代码执行
    // });
    // onMounted(() => {
    //   // mounted代码执行
    //   console.log('onMounted')
    // });

    //======================================
    // // Attribute (非响应式对象，等同于 $attrs)
    // console.log(attrs)

    // // 插槽 (非响应式对象，等同于 $slots)
    // console.log(slots)

    // // 触发事件 (方法，等同于 $emit)
    // console.log(emit)

    // // 暴露公共 property (函数)
    // console.log(expose)


    //================================
    // const readersNumber = ref(0)
    // const book = reactive({ title: 'Vue 3 Guide' })

    //   // 暴露给 template
    //   return {
    //     readersNumber,
    //     book
    //   }

    //===============================
    // const count = ref(0)
    // const increment = () => ++count.value

    // expose({
    //   increment
    // })

    // return () => h('div', count.value)

    //===============================
    // const user = reactive({
    //   name: 'Vue2',
    //   age: 18,
    // })
    // user.name = 'Vue3'
    // return {
    //   user
    // }

  },
}
</script>
