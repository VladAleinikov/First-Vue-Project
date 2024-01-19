<template>
      <div class="post">
            <article>
                  <p><b>Название:</b> {{ post.title }}</p>
                  <p><b>Описание:</b> {{ post.body }}</p>
            </article>
            <div class="post__btns">
                  <my-button @click="$emit('remove', post)">Удалить</my-button>
            </div>
      </div>
</template>

<script>

export default {
    props: {
        post: {
            type: Object,
            required: true
        }
    },
}
</script>

<style scoped>
.post {
      padding: 15px;
      border: 2px solid teal;
      margin-top: 15px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: start;
}
.post__btns{
      display: flex;
      flex-direction: row;
      gap: 10px;
}
</style>