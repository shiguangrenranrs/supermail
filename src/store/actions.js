import { INCREASE_COUNT, ADD_TO_CART } from './mutations-types'

export default {
  addCart(context, payload) {
    return new Promise((resolve, reject) => {
      for (const item of context.state.cartList) {
        if (item.iid === payload.iid) {
          context.commit(INCREASE_COUNT, item);
          resolve('增加一个该商品到购物车成功');
          return;
        }
      }
      payload.count = 1;
      context.commit(ADD_TO_CART, payload);
      resolve('添加到购物车成功');
      // 
    })
  }
}