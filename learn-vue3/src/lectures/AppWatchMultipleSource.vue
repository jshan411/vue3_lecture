<template>
  <div>
    <p>x: {{ x }}</p>
    <p>y: {{ y }}</p>
    <hr />
    <p>object: {{ obj }}</p>
    <hr />
    <p>{{ person }}</p>
  </div>
</template>

<script>
import { reactive, ref, watch } from 'vue'

export default {
  setup() {
    const x = ref(0)
    const y = ref(0)

    const obj = reactive({
      count: 0
    })

    // watch(
    //   // sum이라는 글자는 중요한 것이 아니다. watch 함수가 살펴보고 있는 것은 '() => 여기' 여기에 해당하는 값이 바뀌는지를 보고있다. 따라서, 특정 시점에 y.value를 작게 만들더라도 max(x, y)는 변함이 없으므로 console.log에 아무것도 찍히지 않는다. x.value 또는 y.value가 변하는 것이 중요한 것이 아니다.
    //   () => Math.max(x.value, y.value),
    //   (sum, oldValue) => {
    //     console.log('sum: ', sum)
    //     console.log('oldValue: ', oldValue)
    //   }
    // )
    // watch는 (newValue, oldValue)를 출력함, i.e., 순서 중요!
    // 아래 경우, watch는 x y 각각이 아닌 array [x, y]를 살펴보고 있기 때문에, 둘 중 하나의 값만 바뀌더라도 console.log에 찍힌다.
    // watch([x, y], ([newX, newY]) => {
    //   console.log(newX, newY)
    // })
    // obj는 반응형이지만, obj.count는 반응형이 아니다 -> watch의 대상이 아니다.
    console.log(typeof obj.count)

    // watch(obj.count, (newValue, oldValue) => {
    //   console.log('newValue: ', newValue)
    //   console.log('oldValue: ', oldValue)
    // })
    // watch(
    //   () => obj.count,
    //   (newValue, oldValue) => {
    //     console.log('newValue: ', newValue)
    //     console.log('oldValue: ', oldValue)
    //   }
    // )
    // obj라는 객체 자체는 그대로인 것으로 이해해서, obj.count가 바뀌면 newValue와 oldValue 모두 바뀐 같은 값을 가지게된다.
    // watch(obj, (newValue, oldValue) => {
    //   console.log('newValue: ', newValue)
    //   console.log('oldValue: ', oldValue)
    // })

    const person = reactive({
      name: '홍길동',
      age: 30,
      hobby: '운동',
      obj: {
        count: 0
      }
    })

    // watch(person, (newValue) => {
    //   console.log('newValue: ', newValue)
    // })

    // 위와 같은 이유로, person.obj.count가 변경되는 것을 아래 코드는 감지하지 못한다.
    // console.log(typeof person.obj)
    // watch(
    //   () => person.obj,
    //   (newValue) => {
    //     console.log('newValue: ', newValue)
    //   }
    // )
    console.log(typeof person.obj.count)
    watch(
      () => person.obj.count,
      (newValue) => {
        console.log('newValue: ', newValue)
      }
    )
    return { x, y, obj, person }
  }
}
</script>

<style lang="scss" scoped></style>
