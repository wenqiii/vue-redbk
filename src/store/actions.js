import * as types from './mutation-types'
export const isNav = ({ commit }) => {
    commit(types.ISNAV)
}
export const showPopup = ({ commit }) => {
    commit(types.SHOWPOPUP)
}
export const hidePopup = ({ commit }) => {
    commit(types.HIDEPOPUP)
}
export const addToCart = ({ commit }, { Goods,quantity }) => {
    // console.log(quantity)
    if (Goods.inventory>0) {
        commit(types.ADD_TO_CART, {
            id: Goods.id,
            quantity: quantity
        })
    }
}