<template>
  <div class="goods-item" @click.prevent="itemClick()">
    <a :href="goodsItem.link">
      <img v-lazy="showImage" alt="" @load="imageLoad"/>
    </a>
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
  methods:{
    imageLoad(){
      // 监听图片加载完成，使用事件总线bus发送
      this.$bus.$emit("itemImageLoad");
    },
    itemClick(){
      this.$router.push('/detail/'+this.goodsItem.iid);// 动态路由方式

      /*this.$router.push({
        path:"/detail",
        query:'...'
      })*/
    }
  },
  computed:{
    showImage(){
      return this.goodsItem.image || this.goodsItem.show.img;
    }
  }
};
</script>

<style>
.goods-item {
  /* break-inside: avoid; */
  width: 44%;
  /* position: absolute; */
  /* float: left; */
  text-align: center;
  /* padding: 3%; */
  padding: 3% 0;
}
.goods-item img{
  width: 100%;
  border-radius: 5px;
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
</style>