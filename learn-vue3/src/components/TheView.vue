<template>
  <main>
    <div class="container text-center py-4">
      <PostCreate v-on:create-post7="createPost1"></PostCreate>
      <div class="row gx-5 gy-2">
        <div class="col col-4">
          <AppCard title="제목1" contents="내용1"></AppCard>
        </div>
        <div class="col col-4">
          <AppCard :title="post.title" :contents="post.contents"></AppCard>
        </div>
        <div v-for="pp in posts" :key="pp.id" class="col col-4">
          <AppCard
            :title="pp.title"
            :contents="pp.contents"
            :type="pp.type"
            :is-like="pp.isLike"
            @toggle-like="pp.isLike = !pp.isLike"
          ></AppCard>
          <button @click="pp.isLike = !pp.isLike">부모 버튼</button>
          <!-- 부모 컴포넌트에서 props를 변경하면, 자식 컴포넌트의 해당하는 props 값도 바뀐다. -->
        </div>
      </div>
    </div>
  </main>
</template>

<!-- 자식컴포넌트에서 선언할때는 파스칼케이스로, 부모컴포넌트에서 사용할때는 케밥케이스로!! -->
<!-- props 중, 선언할때는 isLike, 사용할때는 is-like -->

<script>
import { reactive } from 'vue'
import AppCard from './AppCard.vue'
import PostCreate from './PostCreate.vue'

export default {
  components: {
    AppCard,
    PostCreate
  },
  setup() {
    const post = reactive({
      title: '제목2',
      contents: '내용2'
    })
    const posts = reactive([
      {
        id: 3,
        title: '제목3',
        contents: '내용3',
        isLike: true,
        type: 'notice'
      },
      {
        id: 4,
        title: '제목4',
        contents: '내용4',
        isLike: true,
        type: 'news'
      },
      {
        id: 5,
        title: '제목5',
        contents: '내용5',
        isLike: false,
        type: 'notice'
      },
      {
        id: 6,
        title: '제목6',
        contents: '내용6',
        isLike: false,
        type: 'news'
      }
    ])
    const createPost1 = (newTitle1) => {
      console.log('createPost2')
      console.log('New Title: ', newTitle1)
    }
    return { post, posts, createPost1 }
  }
}
</script>

<style lang="scss" scoped></style>
