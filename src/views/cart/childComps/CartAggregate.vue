<template>
  <div class="aggregate">
    <div class="checked-all">
      <check-button @checkBtnClick="checkBtnClick()" :value="isSelectAll" />
      <span>全选</span>
    </div>
    <div class="sum-price">合计:￥{{ sumPrice }}</div>
    <div class="settle" @click="settleClick()">去结算({{ caculate }})</div>
  </div>
</template>

<script>
import CheckButton from "./CheckButton.vue";

import { mapGetters } from "vuex";
export default {
  name: "CartAggregate",
  data() {
    return {};
  },
  methods: {
    checkBtnClick() {
      if (this.isSelectAll) {
        this.cartList.forEach((item) => {
          item.checked = false;
        });
      } else {
        this.cartList.forEach((item) => {
          item.checked = true;
        });
      }
    },
    settleClick() {
      if (this.caculate <= 0) {
        this.$toast.show("当前没有选择任何商品");
      }else{
        this.$toast.show("余额不足，无法购买");
      }
    },
  },
  computed: {
    ...mapGetters(["cartList"]),
    sumPrice() {
      return this.cartList
        .reduce((prev, item) => {
          return prev + (item.checked ? item.price * item.count : 0);
        }, 0)
        .toFixed(2);
    },
    caculate() {
      let count = 0;
      this.cartList.forEach((element) => {
        element.checked ? count++ : 0;
      });
      return count;
    },
    isSelectAll() {
      if (this.cartList.length === 0) {
        return false;
      }
      /**
       * every 方法为数组中的每个元素执行一次 callback 函数，直到它找到一个会使 callback 返回 falsy 的元素。
       * 如果发现了一个这样的元素，every 方法将会立即返回 false。
       * 否则，callback 为每一个元素返回 true，every 就会返回 true。
       * 注意：若收到一个空数组，此方法在任何情况下都会返回 true。
       */
      return this.cartList.every((item) => item.checked);
    },
  },
  components: {
    CheckButton,
  },
};
</script>

<style scoped>
.aggregate {
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  box-shadow: 0 -1px 1px rgba(100, 100, 100, 10%);
}
.aggregate .checked-all {
  display: flex;
  justify-content: space-evenly;
  flex: 85;
}
.aggregate .sum-price {
  flex: 192;
}
.aggregate .settle {
  flex: 96;
  color: #fff;
  background-color: var(--color-tint);
  line-height: 40px;
}
</style>