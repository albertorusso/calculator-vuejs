import actions from './actions'
import mutations from './mutations'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

/**
 * Default state of the store
 * @type {Object}
 */
const state = {
  currentValue: '0',
  expression: '0',
  display: {
    expressionSummary: '',
    expression: '0'
  }
}

export default new Vuex.Store({
  actions,
  mutations,
  state
})
