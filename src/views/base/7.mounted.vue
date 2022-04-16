<template>
  <div class="mounted"></div>
</template>

<script setup>
  import { onMounted, onBeforeUnmount } from 'vue'

  onMounted(() => {
    console.log('onMounted')
  })

  onBeforeUnmount(() => {
    console.log('onBeforeUnmount')
  })
</script>