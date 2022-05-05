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
  updated() {
    if (this.scroll === null) {
      // 避免命名冲突,使用ref
      this.scroll = new BScroll(this.$refs.wrapper, {
        click: true,
        // 控制非表单元素事件
        probeType: this.probeType,
        pullUpLoad: this.pullUpLoad,
      });
      this.scroll.on("scroll", (position) => {
        this.$emit("scrolling", position);
      });
      this.scroll.on("pullingUp", () => {
        this.$emit("pullingUp");
      });
    } else {
      this.scroll.refresh();
    }
  },
  methods: {
    scrollTo(x, y, time = 300) {
      this.scroll.scrollTo(x, y, time);
      console.log("backTop");
    },
    finishPullUp(){
      this.scroll.finishPullUp();
    }
  },
};
</script>

<style>
</style>