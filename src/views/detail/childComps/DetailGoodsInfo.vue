<template>
  <div class="detail-goods-info" v-if="Object.keys(detailInfo).length !== 0">
    <div class="info-desc-box">
      <div class="info-desc">
        {{ detailInfo.desc }}
      </div>
    </div>
    <div class="info-key">
      {{ detailInfo.detailImage[0].key }}
    </div>
    <div class="info-list">
      <img
        :src="item"
        alt=""
        v-for="item in detailInfo.detailImage[0].list"
        :key="item"
        @load="imageLoad()"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      counter: 0,
      imageLength: 0,
    };
  },
  props: {
    detailInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    imageLoad() {
      this.counter++;
      if (this.counter === this.imageLength) {
        this.$emit("imageLoad");
      }
    },
  },
  watch:{
    detailInfo(){
      this.imageLength = this.detailInfo.detailImage[0].list.length;
      // this.detailInfo.detailImage[0].list[5] = "abc"
    }
  }
};
</script>

<style scoped>
.detail-goods-info {
  background-color: #fff;
  padding: 15px 0;
}
.info-desc-box {
  position: relative;
}
.info-desc {
  padding: 15px 10px;
}
.info-desc::before {
  content: "";
  position: absolute;
  width: 5px;
  height: 5px;
  background-color: #333;
  top: 0;
  left: 15px;
}
.info-desc::after {
  content: "";
  position: absolute;
  width: 5px;
  height: 5px;
  background-color: #333;
  bottom: 0;
  right: 15px;
}
.info-key {
  font-size: 20px;
  font-weight: bold;
  padding: 15px 10px;
}
.info-list {
  text-align: center;
}
.info-list img {
  width: 95%;
}
</style>