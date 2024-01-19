<template>
      <div class="posts" v-if="posts.length > 0">
            <h3>Список постов</h3>
            <PostItem class="post" v-for="post in posts" :post="post" :key="post.id" @remove="$emit('remove', post)"/>
      </div>
      <h2 v-else>Постов нет</h2>
</template>

<script>
import PostItem from './PostItem.vue';

export default {
    props: {
        posts: {
            type: Array,
            required: true
        }
    },
    components: { PostItem }
}
</script>

<style scoped>
.posts{
    margin-top: 15px;
}
</style>