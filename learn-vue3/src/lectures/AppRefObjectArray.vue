<template>
  <div>
    <p>{{ count }}</p>
    <p>{{ state }}</p>
    <p>{{ state.count }}</p>
  </div>
</template>

<script>
import { reactive, ref } from 'vue'

export default {
  setup() {
    // ref -> Object
    const count = ref(0)
    const state = reactive({
      // 아래의 count랑 직전에 선언한 count랑 같은 대상
      count
    })
    count.value++
    // console.log(count.value);
    // 객체 안의 객체의 콜하는 경우, .value 쓸 필요 없다.
    // console.log('state.count: ', state.count);

    // ref -> Array
    const message = ref('Hello')
    const arr = reactive([message])
    console.log('arr[0]: ', arr[0])
    console.log('arr[0]: ', arr[0].value)

    return {
      count,
      state
    }
  }
}
</script>

<style lang="scss" scoped></style>
