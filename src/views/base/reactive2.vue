<template>
  <div class="reactive2">
    {{ obj.nested.count }}
    {{ obj.arr }}
    {{ state.name }}
    {{ state.gender }}
  </div>
  <div class="reactive3">
    {{ state2.count }}
  </div>
</template>

<script setup>
  import { reactive } from 'vue'
  // 深层响应式
  const obj = reactive({
    nested: {
      count: 0
    },
    arr: [ 'foo', 'bar' ]
  })
  // 深度响应式
  obj.nested.count++
  obj.arr.push('fatfish')

  const raw = { name: 'fatfish' }
  const proxyRaw = reactive(raw)
  // 响应式对象和原始对象不相等，因为proxyRaw是经过Proxy代理的对象
  console.log(proxyRaw === raw)
  // reactive函数传入的如果是一个已经代理过的对象会返回原来的值
  console.log(proxyRaw === reactive(proxyRaw))

  // reactive的局限性
  // 1. 只适合对象类型的数据，不适合原始类型
  // 2. 不可随意的替换一个响应式对象, 貌似好像可以呀，但是不建议？

  let state = reactive({
    name: 'fatfish'
  })

  state = reactive({
    name: 'fatfish2'
  })

  // 结构将失去响应式
  const state2 = reactive({
    count: 0
  })

  state2.count++
</script>