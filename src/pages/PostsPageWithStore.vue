<template>
      <h1>Страница с постами</h1><br />
      <div class="app__btns">
            <my-input v-focus :model-value="searchQuery" @update:model-value="setSearchQuery" placeholder="Поиск по заголовку" />
            <my-select :model-value="selectedSort" @update:model-value="setSelectedSort" :options="sortOptions" />
            <my-button @click="showDialog">Добавить пост</my-button>
      </div>
      <my-dialog :model-value:show="dialogVisible">
            <PostForm @create="createPost" />
      </my-dialog>
      <PostList v-if="!isPostLoading" :posts="sortedAndSearchedPosts" @remove="removePost" />
      <h3 v-else>Идет загрузка постов...</h3>
      <div v-intersection="loadMorePosts" class="observer"></div>
</template>

<script>
import PostForm from '../components/PostForm.vue'
import PostList from '../components/PostList.vue'
import { mapActions, mapMutations, mapGetters, mapState } from 'vuex'

export default {
      components: {
            PostForm, PostList
      },
      data() {
            return {
                  dialogVisible: false,
            }
      },
      methods: {
            ...mapMutations({
                  setPage: 'posts/setPage',
                  setSearchQuery: 'posts/setSearchQuery',
                  setSelectedSort: 'posts/setSelectedSort'
            }),
            ...mapActions({
                  loadMorePosts: 'posts/loadMorePosts',
                  fetchPosts: 'posts/fetchPosts'
            }),
            createPost(post) {
                  this.posts.push(post);
                  this.dialogVisible = false;
            },
            removePost(post) {
                  this.posts = this.posts.filter(thisPost => post.id !== thisPost.id)
            },
            showDialog() {
                  this.dialogVisible = true;
            },


      },
      mounted() {
            this.fetchPosts();

      },
      computed: {
            ...mapState({
                  posts: state => state.posts.posts,
                  isPostLoading: state => state.posts.isPostLoading,
                  selectedSort: state => state.posts.selectedSort,
                  searchQuery: state => state.posts.searchQuery,
                  page: state => state.posts.page,
                  limit: state => state.posts.limit,
                  totalPages: state => state.posts.totalPages,
                  sortOptions: state => state.posts.sortOptions
            }),
            ...mapGetters({
                  sortedPosts: 'posts/sortedPosts',
                  sortedAndSearchedPosts: 'posts/sortedAndSearchedPosts'
            }),
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
