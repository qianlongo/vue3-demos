<template>
  <div class="ref2">
    {{ count }}    
  </div>
</template>
<script setup>
// $ref可以减少.value的操作
import { $ref } from 'vue'
const count = $ref(1)


setInterval(() => {
  count++
}, 1000)
</script>