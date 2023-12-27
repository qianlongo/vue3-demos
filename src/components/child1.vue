<template>
  <div class="child1" @click="onClickName">{{ name }}</div>
</template>

<script setup>
const props = defineProps({
  name: {
    type: String,
    default: 'fatfish'
  }
})

const emit = defineEmits(['onClickName'])
const onClickName = () => {
  emit('onClickName', props.name)
}
</script>