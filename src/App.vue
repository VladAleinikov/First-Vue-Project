<template>
      <div class="app">
            <h1>Страница с постами</h1><br />
            <div class="app__btns">
                  <my-input v-model="searchQuery" placeholder="Поиск по заголовку" />
                  <my-select v-model="selectedSort" :options="sortOptions" />
                  <my-button @click="showDialog">Добавить пост</my-button>
            </div>
            <my-dialog v-model:show="dialogVisible">
                  <PostForm @create="createPost" />
            </my-dialog>
            <PostList v-if="!isPostLoading" :posts="sortedAndSearchedPosts" @remove="removePost" />
            <h3 v-else>Идет загрузка постов...</h3>
      </div>
</template>

<script>
import PostForm from './components/PostForm.vue'
import PostList from './components/PostList.vue'
import axios from 'axios'
export default {
      components: {
            PostForm, PostList
      },
      data() {
            return {
                  posts: [
                  ],
                  dialogVisible: false,
                  isPostLoading: false,
                  selectedSort: "",
                  searchQuery: "",
                  page: 1,
                  limit: 10,
                  totalPage: 0,
                  sortOptions: [
                        { value: "title", name: "По названию" },
                        { value: "body", name: "По описанию" }
                  ]
            }
      },
      methods: {
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
            async fetchPosts() {
                  try {
                        this.isPostLoading = true;
                        const responce = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                              params: {
                                    _page: this.page,
                                    limit: this.limit
                              }
                        });
                        this.totalPage = Math.ceil(responce.headers['x-total-count'] / this.limit)
                        this.posts = responce.data;

                  } catch (error) {
                        alert('Ошибка!')
                  }
                  finally {
                        this.isPostLoading = false;
                  }
            },

      },
      mounted() {
            this.fetchPosts();
      },
      computed: {
            sortedPosts() {
                  return [...this.posts].sort((post1, post2) => post1[this.selectedSort]?.localeCompare(post2[this.selectedSort]))
            },
            sortedAndSearchedPosts() {
                  return this.sortedPosts.filter(post => post.title.toLowerCase().includes(this.searchQuery.toLowerCase()));
            }
      }
}
</script>

<style>
* {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
}

.app {
      padding: 20px;
}

.app__btns {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 5px;
}
</style>
