<template>
  <div class="props1">
    <child1 name="fatfish2" @onClickName="onClickName" />
    <child1 @onClickName="onClickName" />
  </div>
</template>

<script setup>
import child1 from '../../components/child1.vue'

const onClickName = (name) => {
  console.log(name, '---')
}
</script>