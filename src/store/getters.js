export default {
  cartLength(state) {
    // getters 是个属性
    return state.cartList.length;
  },
  cartList(store){
    return store.cartList;
  }
}