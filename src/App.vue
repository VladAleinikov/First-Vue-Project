<template>
      <div class="app">
            <h1>Страница с постами</h1><br />
            <div class="app__btn">
                  <my-select v-model="selectedSort"  :options="sortOptions"/>
                  <my-button @click="showDialog">Добавить пост</my-button>
            </div>
            <my-dialog v-model:show="dialogVisible">
                  <PostForm @create="createPost" />
            </my-dialog>
            <PostList v-if="!isPostLoading" :posts="posts" @remove="removePost" />
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
                        const responce = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10');
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
      watch: {
            selectedSort(newValue) {
                  this.posts.sort((post1, post2) => post1[newValue]?.localeCompare(post2[newValue]))
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
}
</style>
