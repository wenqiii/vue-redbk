import * as types from '../mutation-types'

const state = {
    goodslist: [],
    choosedgoods: [],
    Title: ''
}

const getters = {
    leftGoodsList: function () {
        const ll = []
        state.goodslist.map((item,index) => {
            if ((index+1)%2)
                ll.push(item)
        })
        return ll
    },
    rightGoodsList: function () {
        const rl = []
        state.goodslist.map((item,index) => {
            if (!((index+1)%2))
                rl.push(item)
        })
        return rl
    },
    Goods: state => state.choosedgoods,
    title: state => (state.choosedgoods.title || "").split(" ").shift()
}

const actions = {
    getGoodsList({ commit }, data) {
        commit(types.INITGOODSDATA, { data })
    },
    getGoods({ commit },value ) {
        commit(types.GETGOODS, { value })
    }
}

const mutations = {
    [types.INITGOODSDATA] (state, { data }) {
        // console.log(data)
        state.goodslist = data
    },
    [types.GETGOODS] (state, { value }) {
        // console.log(value)
        state.choosedgoods = value
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}