<template>
  <div class="card">
    <!-- <img src="..." class="card-img-top" alt="..." /> -->
    <!-- type: news, notice -->
    <div class="card-body">
      <p>{{ $props }}</p>
      <span class="badge bg-secondary">{{ typeName }}</span>
      <h5 class="card-title red mt-2">{{ title }}</h5>
      <p class="card-text" :class="$style.greenText">
        {{ contents }}
      </p>
      <a href="#" class="btn" :class="isLikeClass" @click="toggleLike">자식 버튼</a>
      <!-- 자식 컴포넌트에서 변경한다고 해서, 부모 컴포넌트 변경은 안된다. 즉, props는 단방향 바인딩이다. -->
      <!-- [Vue warn] Set operation on key "isLike" failed: target is readonly. -->
      <!-- 자식 컴포넌트에서의 변경이 부모 컴포넌트에 반영되게 하려면, emit을 사용하면 된다. -->
      <a href="https://aoroa.ai" class="btn btn-primary">Go AOROA</a>
    </div>
  </div>
</template>

<script>
import { useCssModule } from 'vue'
import { computed } from '@vue/reactivity'

export default {
  props: {
    type: {
      type: String,
      default: 'news',
      validator: (value) => {
        return ['news', 'notice'].includes(value)
      }
    },
    title: {
      type: String,
      required: true
    },
    contents: {
      type: String,
      required: true
    },
    isLike: {
      type: Boolean,
      default: false
    }
  },
  emits: ['toggleLike'],
  setup(props, context) {
    const $newStyle = useCssModule()
    const typeName = computed(() => (props.type === 'news' ? '뉴스' : '공지사항'))
    const isLikeClass = computed(() => (props.isLike ? 'btn btn-danger' : 'btn btn-outline-danger'))
    const toggleLike = () => {
      // props.isLike = !props.isLike
      // 이렇게하면, 자식 컴포넌트에서만 변경이 반영되고 부모 컴포넌트로 전달은 안된다.
      context.emit('toggleLike')
    }
    return { typeName, isLikeClass, toggleLike }
  }
}
</script>

<style lang="scss" scoped></style>
<style scoped>
.red {
  color: red !important;
}
</style>

<style lang="scss" module>
.greenText {
  color: green !important;
}
</style>
