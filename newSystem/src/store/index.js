import Vue from 'vue'
import Vuex from 'vuex'
import './types'
import common from './modules/common'
import user from './modules/user'
import schedule from './modules/schedule'
import goods from './modules/goods'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    common,
    user,
    schedule,
    goods,
  }
})
