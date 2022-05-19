import { debounce } from "./utils";
import BackTop from 'components/content/backTop/BackTop';
export const itemListenerMixin = {
  data() {
    return {
      DELAY: 100,
      itemImageLoad: null,
    }
  },
  activated() {
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

export const backTopMixin = {
  data() {
    return {
      isShowBackTop: false,
    }
  },
  components: {
    BackTop
  },
  methods: {
    backTop() {
      this.$refs.scroll.scrollTo(0, 0);
    },
    listenBackTop(position) {
      this.isShowBackTop = -position.y > 1000;
    }
  }
  // 只能混入，vue API 如：生命周期函数、methods、data、等
  // 不能对 方法进行混入
}