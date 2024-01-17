<template>
  <div>
    <div>Likes = {{ likes }}</div>
      <button @click="likes++">+</button>
  </div>
</template>

<script>

export default {
      data(){
            return{
                  likes: 0
            }
      }
}
</script>

<style scoped></style>
