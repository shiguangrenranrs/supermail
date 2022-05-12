import { debounce } from "./utils";
export const itemListenerMixin = {
  data(){
    return {
      DELAY: 600,
      // itemImageLoad: null,
    }
  },
  mounted(){
    const refresh = debounce(this.$refs.scroll.refresh, this.DELAY);
    this.itemImageLoad = () => {
      refresh();
      // 至少一张图片请求完成，ajax数据一定已经到位，开始允许懒加载请求
      if (this.allowPullLoad === false) {
        this.allowPullLoad = true;
      }
    };
    this.$bus.$on("itemImageLoad", this.itemImageLoad);
  }
}