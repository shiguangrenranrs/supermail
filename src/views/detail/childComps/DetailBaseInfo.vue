<template>
  <div class="base-info" v-if="Object.keys(goods).length !== 0">
    <div class="info-title">{{ goods.title }}</div>
    <div class="info-price">
      <span class="n-price">{{ goods.newPrice }}</span>
      <span class="o-price">{{ goods.oldPrice }}</span>
      <span class="discount">{{ goods.discount }}</span>
    </div>
    <div class="info-other">
      <span>{{ goods.columns[0] }}</span>
      <span>{{ goods.columns[1] }}</span>
      <span>{{ goods.services[goods.services.length - 1].name }}</span>
    </div>
    <div class="info-services">
      <span v-for="index in goods.services.length - 1" :key="index">
        <img class="icon" :src="goods.services[index - 1].icon" alt="" />
        <span>{{ goods.services[index - 1].name }}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    goods: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style scoped>
.base-info {
  padding: 1% 1% 5%;
  background-color: #fff;
}
.base-info>div{
  margin-top: 15px;
}
.info-title{
  padding: 5px 2px 10px;

}
.info-price{
  display: flex;
  align-items: flex-end;
}
.info-price .n-price{
  font-size: 24px;
  color: var(--color-tint);
}
.info-price .o-price{
  margin-left: 8px;
  text-decoration: line-through;
  font-size: 13px;
}
.info-price .discount{
  margin-left: 8px;
  display: block;
  background-color: var(--color-tint);
  color: #fff;
  border-radius: 4px;
  padding: 3px;
}
.info-other{
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  color: #666;
}
.info-services{
  display: flex;
  justify-content: space-between;
}
.info-services>span{
  display: flex;
  align-items: center;
  font-size: 14px;
}
.info-services img.icon{
  width: 14px;
  height: 14px;
}
</style>