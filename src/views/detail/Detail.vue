<template>
  <div id="detail">
    <detail-nav-bar></detail-nav-bar>
    <detail-swiper :top-images="topImages"></detail-swiper>
    <detail-base-info :goods="goods"/>
    <detail-shop-info :shop="shop"/>
  </div>
</template>

<script>
// Deatil子组件
import DetailNavBar from "./childComps/DetailNavBar";
import DetailSwiper from "./childComps/DetailSwiper";
import DetailBaseInfo from './childComps/DetailBaseInfo';
import DetailShopInfo from './childComps/DetailShopInfo';
// 网络请求，数据结构类
import { getDetail, Goods,Shop} from "network/detail";
export default {
  name: "Detail",
  data() {
    return {
      iid: null,
      topImages: [],
      // 数据在父组件，做好分离、整合；子组件开箱即用
      goods: {},
      shop:{},
    };
  },
  created() {
    // 属性名，取决于路由配置
    this.iid = this.$route.params.iid;
    // 网络请求
    getDetail(this.iid).then((res) => {
      const result = res.result;
      console.log(res.result);
      this.topImages = result.itemInfo.topImages;
      this.goods = new Goods(
        result.itemInfo,
        result.columns,
        result.shopInfo.services
      );
      this.shop = new Shop(result.shopInfo);
    });
  },
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo
  },
};
</script>

<style scoped>
#detail{
  background-color: #f4f4f4;
}
</style>