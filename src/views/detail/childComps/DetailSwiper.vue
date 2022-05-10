<template>
    <swiper class="detail-item">
      <swiper-item class="swiper-item" v-for="item in topImages" :key="item">
        <img :src="item" alt="">
      </swiper-item>
    </swiper>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper";
export default {
  props: {
    topImages: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  components:{
    Swiper,
    SwiperItem
  }
};
</script>

<style scoped>
.detail-item{
  height: 300px;
  overflow: hidden;
}
</style>