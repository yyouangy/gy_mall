import {ADD_CART_COUNT, ADD_CART} from "./mutations-types"

export default {
  addToCart(context, payload) {
    return new Promise((resolve, reject) => {
      let oldProduct = context.state.cartList.find(item => item.iid == payload.iid)
      if (oldProduct) {
        context.commit(ADD_CART_COUNT, oldProduct)
        resolve('数量加1')
      } else {
        payload.count = 1
        context.commit(ADD_CART, payload)
        resolve('新加商品')
      }
    })
  }
}