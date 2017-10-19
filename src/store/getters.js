export const cartProducts = state => {
    return state.cart.added.map(({ id, quantity }) => {
        const product = state.goods.goodslist.find(p => p.id === id)
        return {
          id,
          title: product.title,
          price: product.newPrice,
          bName: product.brandName,
          img: product.img,
          quantity
        }
      })
}