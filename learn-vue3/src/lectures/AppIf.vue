<template>
  <div>
    <h2 v-if="visible">Hello Vue3!</h2>
    <h2 v-else>false 입니다.</h2>
    <button v-on:click="visible = !visible">toggle</button>
    <hr />
    <button v-on:click="type = 'A'">A</button>
    <button v-on:click="type = 'B'">B</button>
    <button v-on:click="type = 'C'">C</button>
    <button v-on:click="type = 'D'">D</button>

    <h2 v-if="type === 'A'">A입니다.</h2>
    <h2 v-else-if="type === 'B'">B입니다.</h2>
    <h2 v-else-if="type === 'C'">C입니다.</h2>
    <h2 v-else>A, B, C가 아닙니다.</h2>
    <hr />
    <template v-if="visible">
      <h1>Title</h1>
      <p>Paragraph 1</p>
      <p>Paragraph 2</p>
    </template>
    <hr />
    <!-- v-if는 visible === false인 경우에 아예 렌더링을 안하지만, v-show는 ok 값에 상관없이 렌더링 하고 나서 ok 값에 따라 보여줄지 말지 결정한다. -->
    <!-- v-if: 상태 변환 시 자원 소모 -> 자주 변경되지 않는 경우에 이득 -->
    <!-- v-show: 초기 컴토넌트 생성 시 자원 소모 -> 자주 변경되는 경우에 이득 -->
    <!-- 추가로, v-if와 v-for는 같이 사용하는 것이 권장되지 않는다. -->
    <h1 v-show="ok">Title 입니다.</h1>
    <button v-on:click="ok = !ok">show toggle</button>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const visible = ref(false)
    const type = ref('A')
    const ok = ref(true)
    return { visible, type, ok }
  }
}
</script>

<style lang="scss" scoped></style>
