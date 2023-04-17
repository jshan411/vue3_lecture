<template>
  <div>
    <div v-memo="[views, likes]">
      <!-- v-memo에 views랑 likes만 할당되어 있으므로, subscribers는 views 또는 likes가 변경될 때만 업데이트된다. -->
      <!-- v-memo 또한 v-once처럼 최적화시 고려 가능. 예로는, v-for에서 list의 길이가 길 때 -->
      <p>subscribers: {{ subscribers }}</p>
      <p>views: {{ views }}</p>
      <p>likes: {{ likes }}</p>
    </div>
    <button @click="subscribers++">Subs++</button>
    <button @click="views++">Views++</button>
    <button @click="likes++">Likes++</button>
    <div>
      <p>subscribers: {{ subscribers }}</p>
      <p>views: {{ views }}</p>
      <p>likes: {{ likes }}</p>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const subscribers = ref(4000)
    const views = ref(400)
    const likes = ref(20)
    return { subscribers, views, likes }
  }
}
</script>

<style lang="scss" scoped></style>
