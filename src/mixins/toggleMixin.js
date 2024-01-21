export default {
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
      },
      mounted() {

      },
}