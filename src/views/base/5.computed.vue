<template>
  <div class="computed">
    {{ sum }}
  </div>
</template>

<script setup>
import { computed, $ref } from 'vue'

const a = $ref(0)
const b = $ref(1)
const sum = computed(() => {
  return a + b + 10
})

setInterval(() => {
  a++
  b++
  console.log(sum.value)
}, 1000)
</script>