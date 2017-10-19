import * as types from '../mutation-types'
const state = {
    added: []
}

const getters = {}

const actions = {
    checkout ({ commit }) {
        commit(types.CHECKOUT)
    },
    updateCart ({ commit }, product) {
        commit(types.UPDATECART,product)
    }
} 
;
const mutations = {
    [types.ADD_TO_CART] (state, { id, quantity }) {
        const record = state.added.find( p => p.id === id)
        if (!record) {      //购物车中没有该商品则新增一条记录
            state.added.push({
                id: id,
                quantity: quantity
            })
        } else {        //有的话则更新商品数量
            record.quantity += quantity
        }
        // console.log(record.quantity)
    },
    [types.UPDATECART] (state, product) {
        let { id,quantity } = product
        const record = state.added.find( p => p.id === id)
        if (quantity>0) {
            record?record.quantity = quantity : ''
        } else {
            let index = state.added.indexOf(record)
            state.added.splice(index,1)
        }
    },
    [types.CHECKOUT] (state) {
        state.added = []
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}