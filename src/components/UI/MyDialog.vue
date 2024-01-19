<template>
      <div class="dialog" v-if="show" @click.stop="closeDialog">
            <div @click.stop class="dialog__content">
                  <slot></slot>
            </div>
      </div>
</template>

<script>
export default {
      name: "my-dialog",
      props: {
            show: {
                  type: Boolean,
                  default: false
            }
      },
      methods: {
            closeDialog(e) {
                  this.$emit("update:show", false);
            }
      }
}
</script>

<style scoped>
.dialog {
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, .5);
      position: fixed;
      display: flex;
      justify-content: center;
      align-items: center;
}

.dialog__content {
      width: 500px;
      height: 250px;
      border-radius: 30px;
      padding: 40px;
      background: #fff;
}
</style>