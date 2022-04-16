<template>
  <div class="ref">
    {{ count }}
    {{ objectRef.count }}
    {{ objectRef2.name }}
  </div>
  <div>
    {{ objectRef3.foo + 1 }}
    {{ foo + 1 }}
  </div>
</template>
<script setup>
// ref可以解决reactive的局限性，可以为任意的数据任性提供响应式
import { ref } from 'vue'

const count = ref(0)

count.value++

const objectRef = ref({
  count: 0
})
// 这会是响应式的替换
objectRef.value = {
  count: 2
}

objectRef.value.count++

// 如果对象本身是ref定义的响应式结构，结构后将不会失去向应用

const objectRef2 = {
  name: ref('fatfish')
}
const { name } = objectRef2

// objectRef2.name.value = 'fatfish2'
name.value = 'fatfish3'

// 顶层对象才会在模板中结构
const objectRef3 = { foo: ref(1) }
const { foo } = objectRef3
</script>