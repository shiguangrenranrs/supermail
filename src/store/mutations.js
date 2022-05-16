import { INCREASE_COUNT, ADD_TO_CART } from './mutations-types'

export default {
  // 单一性，每一个函数只执行单一操作
  [INCREASE_COUNT](state, payload) {
    payload.count++;
  },
  [ADD_TO_CART](state, payload) {
    state.cartList.push(payload);
    console.log(JSON.stringify(payload));
  }
}