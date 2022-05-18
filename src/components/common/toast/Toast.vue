<template>
  <transition name="toast">
    <div class="toast" v-if="isShow" :class="{ show: !isShow }">
      <div class="message">{{ message }}</div>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      message: "",
      isShow: false,
    };
  },
  methods: {
    show(message, ms = 300) {
      // ms = ms || 2000;
      this.message = message;
      this.isShow = true;

      setTimeout(() => {
        this.isShow = false;
        this.message = "";
      }, ms);
    },
  },
};
</script>

<style scoped>
.toast {
  position: fixed;
  top: 50%;
  left: 50%;
  color: #fff;
  border-radius: 5px;
  padding: 4px 10px;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.65);
  z-index: 99;
}
.toast-leave-active {
  transition: opacity 1s;
}
.toast-leave-to{
  opacity: 0;
}
</style>