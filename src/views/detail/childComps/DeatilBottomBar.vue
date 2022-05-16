<template>
  <div class="bottom-bar">
    <div class="bar-item bar-left">
      <div class="item1">
        <div class="icon"></div>
        <span>客服</span>
      </div>
      <div class="item2">
        <div class="icon"></div>
        <span>店铺</span>
      </div>
      <div class="item3" :class="{ collected: isCollected }" @click="collect()">
        <div class="icon"></div>
        <span>收藏</span>
      </div>
    </div>
    <div class="bar-item bar-right">
      <div class="cart" @click="addToCart()">加入购物车</div>
      <div class="buy">购买</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isCollected: false,
    };
  },
  methods: {
    collect() {
      this.isCollected = !this.isCollected;
    },
    addToCart(){
      this.$emit("addCart");
    }
  },
};
</script>

<style scoped>
.bottom-bar {
  width: 100%;
  height: 49px;
  background-color: #fff;
  position: relative;
  display: flex;
  text-align: center;
}
.bottom-bar .bar-item {
  flex: 1;
}
.bottom-bar .bar-left {
  display: flex;
  justify-content: space-around;
}
.bottom-bar .bar-left > div {
  flex: 1;
}
.bottom-bar .bar-left .icon {
  width: 22px;
  height: 22px;
  margin: 5px auto 3px;
  background-image: url(assets/img/detail/detail_bottom.png);
  background-repeat: no-repeat;
  background-size: 100%;
}
.bottom-bar .bar-left .item1 .icon {
  background-position-y: -52px;
}

.bottom-bar .bar-left .item2 .icon {
  background-position-y: -98px;
}
.collected .icon{
  background-position-y: -27px;
}
.bottom-bar .bar-left > div span {
  font-size: 14px;
}
.bottom-bar .bar-right {
  display: flex;
  line-height: 49px;
  font-weight: bold;
  font-size: 14px;
}
.bottom-bar .bar-right>div{
  flex: 1;
}
.bottom-bar .bar-right .cart {
  flex: 1;
  background-color: #ffe817;
}
.bottom-bar .bar-right .buy {
  flex: 1;
  background-color: var(--color-tint);
}
</style>