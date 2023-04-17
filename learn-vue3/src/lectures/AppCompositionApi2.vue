<template>
  <div>
    <h2>반응형 메시지</h2>
    <p>{{ reactiveMessage }}</p>
    <button v-on:click="addReactiveMesssage">Add Message</button>
    <h2>일반 메시지</h2>
    <p>{{ normalMessage }}</p>
    <button v-on:click="addNormalMesssage">Add Message</button>
  </div>
</template>
<!-- compisition api의 종류: setup -->
<!-- setup: view에 동적으로 변하기 위한 상수를 정의하거나, user의 행동(interaction)을 표현하기 위한 함수를 정의하는 api. 다만, setup은 component가 생성되기 전에 실행되기 때문에 this를 호출할 수 없다. -->
<!-- ref: 포인터라고 생각하면 됨. -->
<!-- provide/inject: 데이터를 부모(특히 root)로 부터 자식으로 props 해주기 번거로운 경우, 자식에서 inject하면 2단계 이상의 부모도 바로 provide로 사용할 수 있음. -->
<!-- LifeCycleHooks: 이벤트 트리거링. -->
<script>
import { isRef, onBeforeMount, onMounted, ref } from 'vue'

export default {
  setup() {
    console.log('setup()')
    const reactiveMessage = ref('Hello Reactive Message')
    const addReactiveMesssage = () => {
      reactiveMessage.value = reactiveMessage.value + '!'
    }
    console.log('isRef(reactiveMessage): ', isRef(reactiveMessage))

    let normalMessage = 'Hello Normal Message'
    const addNormalMesssage = () => {
      normalMessage = normalMessage + '!'
    }
    console.log('isRef(normalMessage): ', isRef(normalMessage))
    // 변수 선언의 종류: var, let, const
    // var: 재선언 가능, 업데이트 가능
    // let: 재선언 불가능, 업데이트 가능
    // const: 재선언 불가능, 업데이트 불가능. 단, const를 object로 선언하는경우, 해당 const의 속성은 수정 가능.
    onMounted(() => {
      console.log('onMounted')
    })
    onBeforeMount(() => {
      console.log('onBeforeMount')
    })

    return {
      reactiveMessage,
      normalMessage,
      addReactiveMesssage,
      addNormalMesssage
    }
  }
}
</script>

<style lang="scss" scoped></style>
