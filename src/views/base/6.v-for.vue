<template>
<ul class="v-for">
  <li
    v-for="(it, i) in objectFor"
    :key="i"
  >
    {{ it }}
  </li>
</ul>
</template>
<script setup>
import { $ref } from 'vue'

const objectFor = $ref([
  'fatfish'
])

objectFor.push('fatfish2')

objectFor = [ '1' ]
</script>