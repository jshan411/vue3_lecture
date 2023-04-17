<template>
  <div>
    <input v-model="title1" type="text" class="form-control" />

    <button class="btn btn-primary" @click="createPost4">button</button>
    <!-- 자식 컴포넌트에서 이벤트를 발생시키기 위해서는 컴포넌트 인스턴스에 내장 method인 emit을 사용하면 된다. -->
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup(props, context) {
    const title1 = ref('')
    const createPost4 = () => {
      context.emit('createPost7', title1.value)
    }
    return { title1, createPost4 }
  }
}
</script>

<style lang="scss" scoped></style>
