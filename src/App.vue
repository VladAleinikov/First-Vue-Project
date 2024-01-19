<template>
      <div class="app">
            <h1>Страница с постами</h1><br/>
            <my-button @click="showDialog">Добавить пост</my-button>
            <my-dialog v-model:show="dialogVisible">
                  <PostForm @create="createPost"/>
            </my-dialog>
            <PostList :posts="posts" @remove="removePost"/>
      </div>
</template>

<script>
import PostForm from './components/PostForm.vue'
import PostList from './components/PostList.vue'
export default {
      components: {
            PostForm, PostList
      },
      data() {
            return {
                  posts: [
                        { id: 0, title: "Пост о JavaScript", description: "JavaScript это универсальный язык" },
                        { id: 1, title: "Пост о React", description: "React это библиотека JS" },
                        { id: 2, title: "Пост о Vue", description: "Vue это JS фрэймворк" }
                  ],
                  dialogVisible: false
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
</style>
