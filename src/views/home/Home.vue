<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <tab-control
      :titles="['流行', '新款', '精选']"
      class="tab-control"
      @tabClick="tabClick"
      ref="tabControl1"
      v-show="isFixed"
    />
    <scroll
      class="content"
      ref="scroll"
      :probe-type="3"
      :pull-up-load="true"
      @scrolling="contentScroll($event)"
      @pullingUp="loadMore()"
    >
      <!-- @contentScroll 就是不能写“()” 如果非要写，要传递$event -->
      <home-swiper
        :banners="banners"
        @swiperImageLoaded="swiperImageLoaded()"
      ></home-swiper>
      <recommend-view :recommends="recommend"></recommend-view>
      <feature-view />
      <tab-control
        :titles="['流行', '新款', '精选']"
        @tabClick="tabClick"
        ref="tabControl2"
      />
      <goods-list :goods="showGoods" />
    </scroll>
    <back-top @click.native="backTop()" v-show="isShowBackTop" />
    <!-- .native监听组件根元素的原生事件 -->
  </div>
</template>

<script>
// Home子组件
import HomeSwiper from "./childComps/HomeSwiper.vue";
import RecommendView from "./childComps/RecommendView.vue";
import FeatureView from "./childComps/FeatureView.vue";
// 通用组件或业务组件
import NavBar from "components/common/navbar/NavBar";
import TabControl from "components/content/tabControl/TabControl.vue";
import GoodsList from "components/content/goods/GoodsList";
import Scroll from "components/common/scroll/Scroll";
import BackTop from "components/content/backTop/BackTop.vue";
// 网络请求
import { getHomeMultidata, getHomeGoods } from "network/home";
// 工具函数
import { debounce } from "common/utils";
import { itemListenerMixin} from 'common/mixin';
export default {
  name: "Home",
  data() {
    return {
      banners: [],
      dKeyword: [],
      keywords: [],
      recommend: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentType: "pop",
      isShowBackTop: false,
      isFixed: false,
      tabOffsetTop: 0,
      allowPullLoad: false,
    };
  },
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatureView,
    TabControl,
    GoodsList,
    Scroll,
    Scroll,
    BackTop,
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    },
  },
  created() {
    // 1.请求多个数据
    this.getHomeMultidata();
    // 2.请求goods数据
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  mounted() {
    // 3.监听图片加载完成
    // mixin混入
  },
  deactivated() {
    this.$bus.$off("itemImageLoad", this.itemImageLoad);
  },
  mixins:[itemListenerMixin],
  methods: {
    /**
     * 网络请求
     */
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        this.banners = res.data.banner.list;
        this.recommend = res.data.recommend.list;
        // this.dKeyword = res.data.dKeyword.list;
        // this.keywords = res.data.keywords.list;
      });
    },
    getHomeGoods(type, isUp = false) {
      if (isUp && !this.allowPullLoad) {
        this.$refs.scroll.finishPullUp();
        return;
      }
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page)
        .then((res) => {
          this.goods[type].list.push(...res.data.list);
          this.goods[type].page++;
          // 是否已请求完所有数据!

          // 请求到数据 再 完成
          // 略微延时一点吧? 当上一次请求完成，再允许请求下一次
          if (isUp) {
            setTimeout(() => {
              this.$refs.scroll.finishPullUp();
              console.log(
                "upFinished",
                this.goods[this.currentType].list.length
              );
            }, this.DELAY + 50);
          }
        })
        .catch((err) => {
          console.error("请求数据失败:", err);
          // 给个 toast!
        });
      // console.log("被锁住", this.sync, isUp);
      /* 当且仅当：this.sync=false,isUp=true
       * 即刚进入页面，首批数据还未请求完成，又追加懒加载请求时
       * 为避免请求相同的一批数据，需要阻止此次懒加载请求
       * 稍后finishPullUp，释放允许后续的懒加载请求
       * ... 还有一种办法是，在载入页面首次请求的一段时间内，不允许懒加载请求
       */
    },
    /**
     * 事件监听
     */
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
      this.$refs.tabControl1.currentIndex = index;
      this.$refs.tabControl2.currentIndex = index;
    },
    backTop() {
      this.$refs.scroll.scrollTo(0, 0);
    },
    contentScroll(position) {
      // console.log(position);
      // 判断backTop是否显示
      this.isShowBackTop = -position.y > 1000;
      // tabcontrol是否吸顶
      this.isFixed = -position.y > this.offsetTop;
    },
    loadMore() {
      this.getHomeGoods(this.currentType, true);
    },
    swiperImageLoaded() {
      console.log(this.$refs.tabControl2.$el.offsetTop);
      this.offsetTop = this.$refs.tabControl2.$el.offsetTop;
    },
  },
};
</script>

<style scoped>
#home {
  height: 100vh;
  overflow: hidden;
}
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
}
.tab-control {
  position: relative;
  z-index: 3;
}
.content {
  height: calc(100% - 93px);
  overflow: hidden;
  position: absolute;
  top: 44px;
  left: 0;
  right: 0;
}
</style>