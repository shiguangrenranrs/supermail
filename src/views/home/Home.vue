<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <h2>首页</h2>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import HomeSwiper from "./childComps/HomeSwiper.vue";
import { getHomeMultidata } from "network/home";
export default {
  name: "Home",
  data() {
    return {
      banners: [],
      dKeyword: [],
      keywords: [],
      recommend: [],
    };
  },
  components: {
    NavBar,
    HomeSwiper,
  },
  created() {
    getHomeMultidata().then((res) => {
      this.banners = res.data.banner.list;
      // this.dKeyword = res.data.dKeyword.list;
      // this.keywords = res.data.keywords.list;
      // this.recommend = res.data.recommend.list;
    });
  },
  methods: {},
};
</script>

<style>
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
}
</style>