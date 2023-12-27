<template>
  <div class="deep-item">
    {{ node.name }}
    <template v-if="node.children && !!node.children.length">
    </template>
    <DeepItem 
      v-for="(item, i) in node.children"
      :key="i"
      :node="item"
    />
  </div>
</template>

<script>
export default {
  name: 'DeepItem',
  props: {
    node: {
      type: Object,
    }
  }
}
</script>

<style>
.deep-item{
  padding-left: 30px;
  width: 100px;
}
</style>