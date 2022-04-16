<template>
  <div class="watch">{{ count }}</div>
</template>

<script setup>
import { ref, $ref, watch } from 'vue'
// 貌似这样写 watch会监听不到
let count = $ref(1)
let count2 = ref(1)

watch(count2, async(newVal, val) => {
  console.log(newVal, val)
})

setInterval(() => {
  count++
  count2.value++
}, 1000)
</script>