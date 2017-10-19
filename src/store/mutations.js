import * as types from './mutation-types'

export default {
    [types.ISNAV] (state) {
        state.isNav = !state.isNav
    },
    [types.SHOWPOPUP] (state) {
        state.popupVisible = true
    },
    [types.HIDEPOPUP] (state) {
        state.popupVisible = false
    }
}