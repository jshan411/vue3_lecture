<template>
  <div>
    <form @submit.prevent>
      <input v-model.lazy="title" type="text" placeholder="Title" />
      <textarea v-model.lazy="contents" placeholder="Contents"></textarea>
      <hr />
      <button @click="save(title, contents)">저장</button>
    </form>
  </div>
</template>

<script>
import { ref, watchEffect } from 'vue'

export default {
  setup() {
    const title = ref('')
    const contents = ref('')

    const save = (title, contents) => {
      console.log(`저장되었습니다. title: ${title}, contents: ${contents}`)
    }
    // watchEffect는 watch와 다르게 최초에 즉시 실행된다.
    // watch와 watchEffect의 중요한 차이점은, 관련된 반응형 데이터를 추적하는 방식이다.
    // *watch는 감시하고자 하는 데이터를 구체적으로 지정해야한다.
    // *반면, warchEffect는 함수 안에서 사용되는 모든 변수를 감시한다.
    watchEffect(() => {
      console.log('watchEffect')
      save(title.value, contents.value)
    })
    return { title, contents, save }
  }
}
</script>

<style lang="scss" scoped></style>
