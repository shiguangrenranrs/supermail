<template>
  <div class="cart">
    <nav-bar class="nav-bar">
      <div slot="center">购物车({{ cartLength }})</div>
    </nav-bar>
    <cart-list></cart-list>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import CartList from "./childComps/CartList";

import { mapGetters } from "vuex";
export default {
  name: "Cart",
  computed: {
    // 将store中的getter映射到局部计算属性
    ...mapGetters(["cartLength", "cartList"]),
    // ...mapGetters({
    //   length:"cartLength",
    //   list:"cartList"
    // })// 如需指定别名，使用对象语法({this.computed:'store.getter'})
  },
  components: {
    NavBar,
    CartList,
  },
};
</script>

<style scoped>
.cart{
  height: 100vh;
}
.nav-bar {
  background-color: var(--color-tint);
  color: #fff;
  font-weight: bold;
  position: relative;
  z-index: 1;
}
</style>