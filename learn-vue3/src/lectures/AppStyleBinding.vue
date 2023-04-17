<template>
  <div :style="styleObject">
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit atque hic culpa vel unde,
    adipisci alias autem totam non quod dolorum quam expedita ex nostrum rerum ut nesciunt quas
    exercitationem!
  </div>
  <button v-on:click="fontSize = fontSize - 1">size down</button>
  <button v-on:click="fontSize = fontSize + 1">size up</button>
  font size: {{ fontSize }}
</template>

<script>
import { ref, reactive, computed } from 'vue'

export default {
  setup() {
    const fontSize = ref(15)
    // const styleObject = reactive({
    //   color: 'red',
    //   fontSize: '20px'
    // })
    const styleObject = computed(() => {
      return {
        color: 'red',
        fontSize: fontSize.value + 'px'
      }
    })
    return { fontSize, styleObject }
  }
}
</script>

<style lang="scss" scoped></style>
