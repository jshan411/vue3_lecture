<template>
  <div>
    <h2>보간법</h2>
    <p>{{ counter }}</p>
    <!-- 숫자를 1 증가시키는 함수를 따로 만들고, return해서 tag에 @click으로 추가해도 되고, 간단한 기능의 경우 아래처럼 tag에 바로 추가해도 된다. -->
    <button v-on:click="counter = counter + 1">Click!</button>
    <p>{{ message }}</p>
    <!-- v-once: 데이터가 변경되어도 갱신(반응)되지 않는 일회성 보간 -->
    <p v-once>{{ message }}</p>
    <button v-on:click="message = message + '!'">Click!</button>
    <hr />
    <h2>HTML</h2>
    <p>{{ rawHtml }}</p>
    <!-- v-html 사용은 자제하자. -->
    <p v-html="rawHtml"></p>
    <hr />
    <h2>속성 바인딩</h2>
    <div :title="dynamicTitle">마우스를 올려보세요</div>
    <input type="text" value="홍길동" :disabled="isInputDisabled" />
    <input v-bind="attrs" />
    <h2>JavaScript</h2>
    {{ message.split('').reverse().join('') }}<br />
    {{ isInputDisabled ? '예' : '아니오' }}
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const counter = ref(0)
    const message = ref('안녕하세요!')
    const rawHtml = ref('<strong>안녕하세요</strong>')

    const trueFalse1 = ref(true)
    const trueFalse2 = ref(false)
    const dynamicTitle = ref('안녕하세요!@@@@@!!!')
    const isInputDisabled = ref(trueFalse1)
    const attrs = ref({
      type: 'text',
      value: '12345678',
      disabled: trueFalse2
    })

    return {
      counter,
      message,
      rawHtml,
      dynamicTitle,
      isInputDisabled,
      attrs
    }
  }
}
</script>

<style lang="scss" scoped></style>
