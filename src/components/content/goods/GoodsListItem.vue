<template>
  <div class="goods-item">
    <img :src="goodsItem.show.img" alt="" />
    <div>
      <p>{{ goodsItem.title }}</p>
      <span class="price">{{ goodsItem.price }}</span>
      <span class="collect">
        ☆
        <!-- 小星星不显示呀 -->
        {{ goodsItem.cfav }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsListItem",
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style>
.goods-item {
  width: 50%;
  padding: 20px;
  text-align: center;
}
.goods-item p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 14px;
}
.goods-item .price {
  color: var(--color-high-text);
  margin-right: 10px;
}
.goods-item .collect::before {
  content: "";
  position: absolute;
  left: -15px;
  top: -1px;
  width: 14px;
  height: 14px;
  background: url(~assets/img/common/collect.svg) 0 0/14px 14px;
}
.goods-item img {
  width: 100%;
  border-radius: 5px;
}
</style>