<template>
  <div class="reactive2">
    {{ obj.nested.count }}
    {{ obj.arr }}
  </div>
</template>

<script setup>
  import { reactive } from 'vue'

  const obj = reactive({
    nested: {
      count: 0
    },
    arr: [ 'foo', 'bar' ]
  })
  // 深度响应式
  obj.nested.count++
  obj.arr.push('fatfish')
</script>