<template>
  <div class="deep">
    <deepItem
      :node="rootNode"
    />
  </div>
</template>

<script>
import deepItem from '../../components/deepItem.vue'

export default {
  name: 'deep',
  components: {
    deepItem,
  },
  data () {
    return {
      rootNode: {
        id: 1,
        name: "Root",
        children: [
          {
            id: 2,
            name: "Child 1",
            children: [
              {
                id: 3,
                name: "Child 1.1",
                children: [],
              },
            ],
          },
          {
            id: 4,
            name: "Child 2",
            children: [],
          },
        ],
      },
    };
  }
}
</script>

<style>

</style>