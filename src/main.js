import { createApp, watch, reactive } from 'vue'
import App from './App.vue'
import router from './router'

const state1 = reactive({
  name: '前端胖头鱼',
  age: 100,
  children: {
    name: '胖小鱼',
    age: 10
  }
})

// watch(() => state1.age, () => {
//   console.log('state1的age发生变化了', state1.age)
// })

// state1.age = 200

// setTimeout(() => {
//   state1.age = 300
// }, 500)

watch(state1, () => {
  console.log('state1发生变化了', state1)
})

state1.age = 200

setTimeout(() => {
  state1.children.age = 100
}, 500)

createApp(App).use(router).mount('#app')
