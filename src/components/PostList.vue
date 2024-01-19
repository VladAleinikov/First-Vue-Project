<template>
      <div class="posts" v-if="posts.length > 0">
            <h3>Список постов</h3>
            <TransitionGroup name="post-list">
                <PostItem class="post" v-for="post in posts" :post="post" :key="post.id" @remove="$emit('remove', post)"/>
            </TransitionGroup>
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
.post-list-enter-active,
.post-list-leave-active {
  transition: all 0.5s ease;
}
.post-list-enter-from,
.post-list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
.post-list-move{
    transition: transform .5s ease;
}
</style>