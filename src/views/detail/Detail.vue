<template>
  <div id="detail">
    <detail-nav-bar
      class="detail-nav-bar"
      @titleClick="titleClick($event)"
      ref="nav"
    />
    <scroll
      class="content"
      ref="scroll"
      :probe-type="3"
      @scrolling="contentScroll($event)"
    >
      <detail-swiper :top-images="topImages"></detail-swiper>
      <detail-base-info :goods="goods" />
      <detail-shop-info :shop="shop" />
      <detail-goods-info :detail-info="detailInfo" @imageLoad="imageLoad()" />
      <detail-param-info :param-info="goodsParam" ref="param" />
      <!-- 属性名：使用 xx-yy 的形式 -->
      <detail-comment-info :comment-info="commentInfo" ref="comment" />
      <goods-list :goods="recommends" ref="recommend" />
    </scroll>
    <detail-bottom-bar />
    <back-top @click.native="backTop()" v-show="isShowBackTop" />
  </div>
</template>

<script>
// Deatil子组件
import DetailNavBar from "./childComps/DetailNavBar";
import DetailSwiper from "./childComps/DetailSwiper";
import DetailBaseInfo from "./childComps/DetailBaseInfo";
import DetailShopInfo from "./childComps/DetailShopInfo";
import DetailGoodsInfo from "./childComps/DetailGoodsInfo";
import DetailParamInfo from "./childComps/DetailParamsInfo";
import DetailCommentInfo from "./childComps/DetailCommentInfo";
import DetailBottomBar from "./childComps/DeatilBottomBar";

import GoodsList from "components/content/goods/GoodsList";

import Scroll from "components/common/scroll/Scroll";

import { itemListenerMixin, backTopMixin } from "common/mixin";
// 网络请求，数据结构类
import {
  getDetail,
  getRecommends,
  Goods,
  Shop,
  GoodsParam,
} from "network/detail";
import { debounce } from "common/utils";
export default {
  name: "Detail",
  data() {
    return {
      iid: null,
      topImages: [],
      // 数据在父组件，做好分离、整合；子组件开箱即用
      goods: {},
      shop: {},
      detailInfo: {},
      goodsParam: {},
      commentInfo: {},
      recommends: [],
      themeTopYs: [0],
      currentIndex: 0,
    };
  },
  created() {
    // 属性名，取决于路由配置
    this.iid = this.$route.params.iid;
    // 网络请求
    getDetail(this.iid).then((res) => {
      const result = res.result;

      // 1.轮播图
      this.topImages = result.itemInfo.topImages;
      // 2.商品信息
      this.goods = new Goods(
        result.itemInfo,
        result.columns,
        result.shopInfo.services
      );
      // 3.店铺信息
      this.shop = new Shop(result.shopInfo);
      // 4.详情信息
      this.detailInfo = result.detailInfo;
      // 5.参数信息
      this.goodsParam = new GoodsParam(
        result.itemParams.info,
        result.itemParams.rule
      );
      if (result.rate.cRate > 0) {
        this.commentInfo = result.rate.list[0];
      }
    });

    getRecommends().then((res) => {
      this.recommends = res.data.list;
    });
    // this.$nextTick(() => {
    // 图片高度还未计算在内
    // });
    this.getThemeTopY = debounce(() => {
      this.themeTopYs = [];
      this.themeTopYs.push(0);
      this.themeTopYs.push(this.$refs.param.$el.offsetTop - 44);
      this.themeTopYs.push(this.$refs.comment.$el.offsetTop - 44);
      this.themeTopYs.push(this.$refs.recommend.$el.offsetTop - 44);
      this.themeTopYs.push(Number.MAX_VALUE);
      console.log(this.themeTopYs);
    }, 100);
  },
  mounted() {},
  destroyed() {
    this.$bus.$off("itemImageLoad", this.itemImageLoad);
  },
  mixins: [itemListenerMixin, backTopMixin],
  methods: {
    imageLoad() {
      this.$refs.scroll.refresh();
      this.getThemeTopY();
    },
    titleClick(index) {
      console.log(index);
      this.$refs.scroll.scrollTo(0, -this.themeTopYs[index], 300);
    },
    contentScroll(position) {
      const length = this.themeTopYs.length;
      const positionY = -position.y;
      for (let i = 0; i < length - 1; i++) {
        if (this.currentIndex === i) {
          continue;
        }
        if (
          positionY >= this.themeTopYs[i] &&
          positionY < this.themeTopYs[i + 1]
        ) {
          this.currentIndex = i;
          this.$refs.nav.currentTitle = this.currentIndex;
        }
        /* if (
         *   (i < length - 1 &&
         *     -position.y >= this.themeTopYs[i] &&
         *     -position.y < this.themeTopYs[i + 1]) ||
         *   (i == length - 1 && -position.y >= this.themeTopYs[i])
         * ) {
         *   console.log(i);
         * }
         */
        this.listenBackTop(position);
      }
    },
  },
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    DetailBottomBar,
    Scroll,
    GoodsList,
  },
};
</script>

<style scoped>
#detail {
  background-color: #f4f4f4;
  position: relative;
  z-index: 12;
  overflow: hidden;
  height: 100vh;
}
.detail-nav-bar {
  background-color: #fff;
  position: relative;
  z-index: 12;
}
.content {
  height: calc(100% - 44px - 49px);
}
</style>