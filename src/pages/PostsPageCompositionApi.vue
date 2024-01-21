<template>
      <h1>Страница с постами</h1><br />
      <div class="app__btns">
            <my-input v-focus v-model="searchQuery" placeholder="Поиск по заголовку" />
            <my-select v-model="selectedSort" :options="sortOptions" />
            <my-button >Добавить пост</my-button>
      </div>
      <my-dialog v-model:show="dialogVisible">
            <PostForm  />
      </my-dialog>
      <PostList v-if="!isPostLoading" :posts="sortedAndSearchedPosts" />
      <h3 v-else>Идет загрузка постов...</h3>
</template>

<script>
import PostForm from '../components/PostForm.vue'
import PostList from '../components/PostList.vue'
import axios from 'axios'
import { usePosts } from '../components/hooks/usePosts'
import { useSortedPosts } from '../components/hooks/useSortedPosts'
import { useSortedndSearchedPosts } from '../components/hooks/useSortedndSearchedPosts'
export default {
      components: {
            PostForm, PostList
      },
      data() {
            return {
                  dialogVisible: false,
                  sortOptions: [
                        { value: "title", name: "По названию" },
                        { value: "body", name: "По описанию" }
                  ]
            }
      },
      setup(props) {
            const { posts, totalPages, isPostLoading } = usePosts(10);
            const { selectedSort, sortedPosts } = useSortedPosts(posts);
            const { searchQuery, sortedAndSearchedPosts } = useSortedndSearchedPosts(sortedPosts);

            return { posts, totalPages, isPostLoading, sortedPosts, selectedSort, searchQuery, sortedAndSearchedPosts }
      }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');


.app__btns {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 5px;
}

.observer {
      height: 30px;
}
</style>
