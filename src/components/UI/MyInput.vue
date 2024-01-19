<template>
      <input :value="modelValue" @input="updateInput" class="input" type="text" >
</template>

<script>
export default {
      props: {
            modelValue: {
                  type: [String, Number],
                  required: true
            }
      },
      methods: {
            updateInput(e) {
                  this.$emit('update:modelValue', e.target.value);
            }
      },
            name:"my-input"
}
</script>

<style scoped>
.input {
      width: 100%;
      border: 1px solid teal;
      padding: 10px 15px;
      margin-top: 15px;
}
</style>