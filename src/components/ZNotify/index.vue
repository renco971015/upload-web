<template>
  <v-snackbar
    v-model="snackbar"
    :multi-line="multiLine"
    :bottom="bottom"
    :top="top"
    :left="left"
    :right="right"
    :color="color"
  >
    {{ text }}

  </v-snackbar>
</template>

<script>
  export default {
    name: "ZNotify",
    data() {
      return {
        snackbar: false,
        text: '',
        color: '',
        timeout: 5000,
        top: true,
        bottom: false,
        left: false,
        right: false,
      }
    },
    props: {
      multiLine: {
        type: Boolean,
        required: false
      },

    },
    methods: {
      show(text, {timeout, color, location}) {
        Object.assign(this, this.$options.data())
        if (!text) {
          console.error("!text")
          return
        }
        this.text = text
        if (timeout) {
          this.timeout = timeout
        }
        if (color) {
          this.color = color
        }
        if (location && location.length === 2) {
          if (location.charAt(0) === '1') {
            this.top = true
          } else {
            this.top = false
            this.bottom = true
          }

          if (location.charAt(1) === '1') {
            this.left = true
          } else {
            this.right = true
          }
        }
        this.snackbar = true
      }
    }
  }
</script>

<style scoped>

</style>