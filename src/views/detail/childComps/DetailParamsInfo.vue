<template>
  <div class="detail-param-info" v-if="Object.keys(paramInfo).length !== 0">
    <div class="info-size">
      <table class="">
        <tbody>
          <tr v-for="row in paramInfo.sizes[0]" :key="row[0]">
            <td v-for="col in row" :key="col">{{col}}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="info-param">
      <table>
        <tr v-for="row in paramInfo.infos" :key="row.key">
          <td>{{row.key}}</td>
          <td>{{row.value}}</td>
        </tr>
      </table>
    </div>
    <div class="info-image" v-if="paramInfo.image.length > 0">
      <img :src="paramInfo.image" alt="">
    </div>
  </div>
</template>

<script>
export default {
  props:{
    paramInfo:{
      type:Object,
      default(){
        return {};
      }
    }
  }
}
</script>

<style scoped>
.detail-param-info{
  background-color: #fff;
  margin-top: 15px;
  padding: 15px 10px 0;
  font-size: 14px;
}
.info-size table,
.info-param table{
  width: 100%;
  text-align: center;
}
.info-size table tr,
.info-param table tr{
  height: 42px;
}
.info-size table td,
.info-param table td{
  border-bottom: 1px solid rgba(100, 100, 100, 0.1);
}

.info-size table tr td{
  font-weight: bold;
}

.info-size table tr td:nth-of-type(1){
  font-weight: normal;
}

.info-param table td:nth-of-type(2){
  color: var(--color-tint);
}
.info-param table tr td:nth-of-type(1){
  min-width: 42px;
}
.info-image img{
  width: 100%;
}
</style>