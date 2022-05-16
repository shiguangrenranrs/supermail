<template>
  <div class="cart-list-item">
    <pre>{{product}}</pre>
  </div>
</template>

<script>
export default {
  props:{
    product:{
      type:Object,
      default(){
        return {};
      }
    }
  }
}
</script>

<style>

</style>