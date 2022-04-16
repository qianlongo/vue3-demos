<template>
  <div class="reactive2">
    {{ obj.nested.count }}
    {{ obj.arr }}
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

  console.log(proxyRaw === raw)
  console.log(proxyRaw === reactive(proxyRaw))
</script>