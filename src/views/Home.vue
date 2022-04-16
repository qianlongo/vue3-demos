<template>
  <div class="home">
    <h2>{{ helloVue3 }}</h2>
    <ul>
      <li v-for="(route, i) in routes" :key="i" @click="goView(route)">
        {{ route.path }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
const helloVue3 = 'hello vue3'

const { routes } = router.options

const goView = (route) => {
  const { name } = route
  router.push({
    name
  })
}
</script>
