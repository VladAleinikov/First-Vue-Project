<template>
      <div class="app">
            <h1>Страница с постами</h1><br />
            <my-button @click="showDialog">Добавить пост</my-button>
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
                  isPostLoading: false
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
                  finally{
                        this.isPostLoading = false;
                  }
            }
      },
      mounted() {
            this.fetchPosts();
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
</style>
