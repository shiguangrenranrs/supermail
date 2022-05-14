<template>
  <!-- ref：绑定到子组件上$refs拿到组件组件对象 或 指定元素上$refs拿到标签 -->
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "Scroll",
  props: {
    probeType: {
      type: Number,
      default: 0,
    },
    pullUpLoad: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      scroll: null,
    };
  },
  mounted() {
    // Scroll对象，不要反复实例化
    if (this.scroll != null) {
      return;
    }
    // 避免命名冲突,使用ref
    this.scroll = new BScroll(this.$refs.wrapper, {
      click: true,
      // 控制非表单元素事件
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad,
      // observeDOM: true,// 也是一种解决方案
    });
    this.scroll.on("scroll", (position) => {
      this.$emit("scrolling", position);
    });
    if (this.pullUpLoad) {
      this.scroll.on("pullingUp", () => {
        console.log("Uping...");
        this.$emit("pullingUp");
      });
    }
  },
  methods: {
    scrollTo(x, y, time = 300) {
      this.scroll.scrollTo(x, y, time);
    },
    finishPullUp() {
      this.scroll && this.scroll.finishPullUp();
    },
    refresh() {
      this.scroll.refresh();
    },
  },
};
</script>

<style>
</style>