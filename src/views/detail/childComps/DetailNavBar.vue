<template>
  <nav-bar class="nav-bar">
    <div slot="left">
      <span class="back" @click="backClick()"></span>
    </div>
    <div slot="center" class="title">
      <div
        class="title-item"
        v-for="(item, index) in titles"
        :key="item"
        @click="titleClick(index)"
        :class="{active:index === currentTitle}"
      >
        {{ item }}
      </div>
    </div>
  </nav-bar>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
export default {
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      currentTitle: 0,
    };
  },
  components: {
    NavBar,
  },
  computed:{
  },
  methods: {
    titleClick(index) {
      this.currentTitle = index;
    },
    backClick(){
      this.$router.back();
      // this.$router.go(-1);
    }
  },
};
</script>

<style scoped>
.nav-bar{
  background-color: #fff;
}
.title {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-evenly;
}
.active{
  color: var(--color-tint);
}
.back{
  display: block;
  width: 44px;
  height: 44px;
  background-image: url(assets/img/common/back.svg);
  background-repeat: no-repeat;
  background-position: center center;
}
</style>