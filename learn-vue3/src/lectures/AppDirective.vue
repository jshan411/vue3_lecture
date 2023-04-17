<template>
  <div>
    <p>{{ msg }}</p>
    <p v-text="msg"></p>
    <p v-html="htmlStr"></p>
    <p v-text="htmlStr"></p>
    <p v-pre>{{ msg 안녕하세요 }}</p>
    <!-- v-once는 최초에만 렌더링을 한다 -> 최적화시 고려할 대상. msg는 지금 ref이므로 변경 가능한데, v-once로 선언된 부분은 msg가 바뀌더라도 그대로 있는다. -->
    <p v-once>{{ msg }} !!!!</p>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const msg = ref('안녕하세요')
    const htmlStr = ref('<strong>안녕!!!</strong>')

    return { msg, htmlStr }
  }
}
</script>

<style lang="scss" scoped></style>
