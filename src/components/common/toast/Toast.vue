<template>
  <div class="toast" v-show="isShow">{{message}}</div>
</template>

<script>
  export default {
    name: "Toast",
    data() {
      return {
        isShow: false,
        message: ''
      }
    },
    methods: {
      show(message = '默认Toast', duration = 2000) {
        this.isShow = true
        this.message = message
        setTimeout(() => {
          this.isShow = false
          this.message = ''
        },duration)

      }
    }
  }
</script>

<style scoped>
  .toast {
    position: fixed;
    left: 50%;
    top: 50%;
    z-index: 999;

    transform: translate(-50% , -50%);
    padding: 8px 10px;
    border-radius: 20px;

    color: #fff;
    background-color: rgba(0,0,0,.7);
  }
</style>