<template>
  <div>
    <button v-on:click="increment1">Click {{ state.count }}</button>
    <button v-on:click="increment2">Deep Click {{ state.deep.count }}</button>
  </div>
</template>

<script>
import { reactive } from 'vue'

export default {
  setup() {
    const state = reactive({
      count: 0,
      deep: {
        count: 0
      }
    })
    const increment1 = () => {
      state.count++
    }
    const increment2 = () => {
      state.count++
      state.deep.count++
    }
    return {
      state,
      increment1,
      increment2
    }
  }
}
</script>

<style lang="scss" scoped></style>
