<template>
  <div>
    <p>{{ message }}</p>
    <p>{{ reverseMessage }}</p>
  </div>
</template>

<script>
import { ref, watch } from 'vue'
import AppOptionApi from './lectures/AppOptionApi.vue'

export default {
  setup() {
    const message = ref('Hello Vue3')
    const reverseMessage = ref('')

    // watch(
    //   message,
    //   (newValue) => {
    //     // 주의!! reverseMessage는 반응형이므로 값에 접근하려면 .value 해야된다!!!!!!!!!!!!!!!!!!!!!!!!!
    //     reverseMessage.value = newValue.split('').reverse().join('')
    //     console.log('reverse: ', reverseMessage)
    //   },
    //   { immediate: true }
    // )

    // const reverseFunction = (newValue) => {
    //   console.log('즉시실행함!!!')
    //   reverseMessage.value = newValue.split('').reverse().join('')
    // }

    // watch(message, reverseFunction)
    // reverseFunction(message.value)이 없으면, 최초 실행 시 message 상태에서 변경이 없으므로 reverseMessage는 '' 상태이다.
    // 아래 reverseFunction(message.value)을 써주는 것은, 위의 immediate:true와 같은 기능이다.
    // 주의!! message는 반응형이므로 값에 접근하려면 .value 해야된다!!!!!!!!!!!!!!!!!!!!!!!!!
    // reverseFunction(message.value)

    const reverseFunction = () => {
      console.log('즉시실행함!!!')
      reverseMessage.value = message.value.split('').reverse().join('')
    }

    watch(message, reverseFunction)
    reverseFunction()

    // 어떻게 사용할 것인가?
    // 대부분의 경우, computed와 watch 모두 적용 가능한 경우에 computed를 사용하는 것이 적합하다.
    // (1) computed:
    // vue 인스턴스의 상태(ref, reactive 등)의 종속 관계를 자동으로 세팅하고자 할 때는 computed로 구현하는 것이 좋다. 위 예시처럼, 변수들 사이에 종속관계가 존재하는 경우, watch를 사용하면 코드가 복잡해졌을 때 오류 발생 가능성이 높다.
    // (2) watch:
    // watch의 경우, vue 인스턴스의 상태 변경 시점에 특정 액션(call AppOptionApi, push route 등)을 발생시키고자 할 때 적합하다.

    return { message, reverseMessage }
  }
}
</script>

<style lang="scss" scoped></style>
