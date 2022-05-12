<template>
  <div class="goods" ref="container" v-if="goods.length !== 0">
    <goods-list-item
      v-for="item in goods"
      :key="item.link"
      :goodsItem="item"
    />
  </div>
</template>

<script>
import GoodsListItem from "./GoodsListItem";
export default {
  name: "GoodsList",
  props: {
    goods: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      lastTop: [],
    };
  },
  components: {
    GoodsListItem,
  },
  /*updated() {
    // 父容器元素
    const container = this.$refs.container;
    // 子元素集合
    const container_children = container.children;
    // 父容器宽度
    let container_width = container.clientWidth;
    // 子元素宽度
    let container_children_width = container_children[0].clientWidth;
    // 可排布列数
    let column_count = Math.ceil(container_width / container_children_width);

    console.log(container_width, container_children_width, column_count);

    for (let i = 0; i < column_count; i++) {
      this.lastTop.push(0);
    }

    for (let index = 0; index < container_children.length; index++) {
      const element = container_children[index];

      console.log(this.lastTop)
      // 获取高度最小列的索引
      let minTopIndex = 0;
      this.lastTop.forEach((item, index, array) => {
        if (array[index] < array[minTopIndex]) {
          minTopIndex = index;
        }
      })

      // 该元素高度，等于最小高度
      element.style.top = this.lastTop[minTopIndex] + 'px';
      // 该元素left，等于 n 倍 元素宽度
      element.style.left = minTopIndex * container_children_width + 'px';
      // 使对应列高度值增加
      let height = this.goods[index].show.h * 0.5159375 + 75.4;
      this.lastTop[minTopIndex] += height;
    }
  },*/
};
</script>

<style>
.goods {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
</style>