<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav-bar" @titleClick="titleClick($event)"/>
    <scroll class="content" ref="scroll">
      <detail-swiper :top-images="topImages"></detail-swiper>
      <detail-base-info :goods="goods" />
      <detail-shop-info :shop="shop" />
      <detail-goods-info :detail-info="detailInfo" @imageLoad="imageLoad()" />
      <detail-param-info :param-info="goodsParam" />
      <!-- 属性名：使用 xx-yy 的形式 -->
      <detail-comment-info :comment-info="commentInfo" />
      <goods-list :goods="recommends" />
    </scroll>
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

import GoodsList from "components/content/goods/GoodsList";

import Scroll from "components/common/scroll/Scroll";

import { itemListenerMixin } from "common/mixin";
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
      themeTopYs:[0],
    };
  },
  created() {
    // 属性名，取决于路由配置
    this.iid = this.$route.params.iid;
    // 网络请求
    getDetail(this.iid).then((res) => {
      const result = res.result;
      console.log(res.result);

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
      console.log(res);
      this.recommends = res.data.list;
    });
  },
  mounted() {},
  destroyed() {
    this.$bus.$off("itemImageLoad", this.itemImageLoad);
  },
  mixins: [itemListenerMixin],
  methods: {
    imageLoad() {
      this.$refs.scroll.refresh();
    },
    itemImageLoad() {
      refresh();
    },
    titleClick(index){
      console.log(index);
      // this.$refs.scroll.scrollTo(0,,100)
    }
  },
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
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
  height: calc(100% - 44px);
}
</style>