<template>
  <div class="cart-list-item">
    <div class="check">
      <check-button @checkBtnClick="checkBtnClick()" :value="product.checked"/>
    </div>
    <div class="image">
      <figure :style="figureBackGround"></figure>
    </div>
    <div class="info">
      <div class="title">{{ product.title }}</div>
      <div class="desc">{{ product.desc }}</div>
      <div class="bottom">
        <div class="price">￥{{ product.price }}</div>
        <div class="count">×{{ product.count }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import CheckButton from './CheckButton'
export default {
  props: {
    product: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data(){
    return {
    }
  },
  computed: {
    figureBackGround() {
      return `background-image: url(${this.product.image});`;
    },
  },
  methods:{
    checkBtnClick(){
      this.product.checked = !this.product.checked;
    }
  },
  components:{
    CheckButton
  }
};
</script>

<style scoped>
.cart-list-item {
  display: flex;
  width: 100%;
  flex-wrap: nowrap;
  align-items: center;
  padding: 5px;
  border-bottom: 1px solid #ccc;
}
.check {
  flex: 1;
}
.image{
  padding: 5px;
  flex: 2;
}
.image figure {
  width: 80px;
  height: 100px;
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: center center;
  border-radius: 5px;
}
.info {
  padding: 5px 15px;
  overflow: hidden;
  flex: 7;
}
.info .title,
.info .desc {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
.info .title {
  font-weight: bold;
}
.info .desc {
  font-size: 14px;
  margin-top: 15px;
}
.info .bottom {
  margin-top: 15px;
  overflow: hidden;
}
.info .bottom .price {
  float: left;
  font-weight: bold;
  color: var(--color-high-text);
}
.info .bottom .count {
  float: right;
}
</style>