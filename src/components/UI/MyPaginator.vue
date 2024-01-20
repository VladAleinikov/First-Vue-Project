<template>
      <div class="paginator">
            <div class="paginator__page" :class="{'active': page == pageNumber }" v-for="pageNumber in totalPages" @click="setPage"
                  :data-page="pageNumber" :key="pageNumber">
                  {{ pageNumber }}
            </div>
      </div>
</template>

<script>
export default {
      name: "my-paginator",
      props: {
            page: {
                  type: Number,
                  required: true
            },
            totalPages: {
                  type: Number,
                  required: true
            },
      },
      methods: {
            setPage(e) {
                  this.$emit("update:page", parseInt(e.target.dataset.page));
            }
      }
}
</script>

<style scoped>
.paginator {
      display: flex;
      flex-direction: row;
      gap: 10px;
      margin-top: 20px;
}

.paginator__page {
      cursor: pointer;
      padding: 5px;
      width: 40px;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid teal;
      transition: .5s;
}

.paginator__page:hover,
.paginator__page.active {
      background: teal;
      color: white;
}
</style>