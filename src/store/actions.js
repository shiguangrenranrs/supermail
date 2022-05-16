import { INCREASE_COUNT, ADD_TO_CART } from './mutations-types'

export default {
  addCart(context, payload) {
    for (const item of context.state.cartList) {
      if (item.iid === payload.iid) {
        context.commit(INCREASE_COUNT, item);
        return;
      }
    }
    payload.count = 1;
    context.commit(ADD_TO_CART, payload);
    // 
  }
}