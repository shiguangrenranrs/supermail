<template>
  <div class="shop-info" v-if="Object.keys(shop).length !== 0">
    <div class="shop-top">
      <img class="logo" :src="shop.logo" alt="" />
      <span>{{ shop.name }}</span>
    </div>
    <div class="shop-middle">
      <div class="left">
        <div class="info-sells">
          <!-- 计算属性传参使用闭包方式 -->
          <div class="sells-count">{{ sellCountFilter(shop.sells) }}</div>
          <div>总销量</div>
        </div>
        <div class="info-goodsCount">
          <div class="goods-count">{{ shop.goodsCount }}</div>
          <div>全部宝贝</div>
        </div>
      </div>
      <div class="right">
        <div
          class="info-score-item"
          v-for="item in shop.score"
          :key="item.name"
        >
          <span> {{ item.name }}</span>
          <span :class="{ gt: item.isBetter, lt: !item.isBetter }">{{
            item.score
          }}</span>
          <span class="better" :class="{ 'gt-bgc': item.isBetter, 'lt-bgc': !item.isBetter }">{{
            item.isBetter ? "高" : "低"
          }}</span>
        </div>
      </div>
    </div>
    <div class="shop-bottom">
      <div class="title">进店逛逛</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    shop: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  computed: {
    sellCountFilter() {
      return (sell) => {
        if (sell < 10000) {
          return sell;
        } else {
          return (sell / 10000).toFixed(1) + "万";
        }
      };
    },
  },
};
</script>

<style scoped>
.shop-info {
  background-color: #fff;
  margin: 5% 0;
  padding: 5% 0;
}
.shop-middle {
  display: flex;
  padding-top: 20px;
}
.shop-middle > div {
  width: 50%;
  text-align: center;
}
.shop-middle .left {
  display: flex;
  justify-content: space-around;
  border-right: 1px solid #ddd;
  align-items: center;
}
.shop-middle .left .sells-count {
  margin-bottom: 5px;
  font-size: 18px;
  font-weight: bold;
}
.shop-middle .left .goods-count {
  margin-bottom: 5px;
  font-size: 18px;
  font-weight: bold;
}
.shop-middle .right {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding:0 15px;
  line-height: 1.5;
}
.shop-top {
  display: flex;
  align-items: center;
  padding: 0 10%;
}
.shop-top img.logo {
  width: 80px;
  border-radius: 50%;
  flex: 1;
  border: 1px solid #ccc;
}
.shop-top span {
  flex: 2;
  padding-left: 10%;
}
.info-score-item{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.shop-middle .right .gt {
  color: #f13e3a;
}
.shop-middle .right .lt {
  color: #5ea732;
}
.shop-middle .right .gt-bgc {
  background-color: #f13e3a;
}
.shop-middle .right .lt-bgc {
  background-color: #5ea732;
}
.shop-middle .right .better{
  display: block;
  width: 18px;
  height: 18px;
  line-height: 18px;
  font-size: 14px;
  color: #fff;
  border-radius: 2px;
}
.shop-bottom {
  padding: 15px 0;
  text-align: center;
}
.shop-bottom .title{
  display: inline-block;
  background-color: #eee;
  border-radius: 15px;
  width: 60%;
  height: 30px;
  line-height: 30px;
}
</style>