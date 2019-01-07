import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  display: {
    operationSummary: '365 x 4 =',
    operation: '1,460'
  }
}

const mutations = {
  clearCalculator(state, value) {
    state.display.operationSummary = ''
    state.display.operation = '0'
  },
  updateCurrentOperand(state, value) {
    console.log('in update operand', value)
  },
  addOperation(state, value) {
    console.log('in add operation', value)
  },
  evalOperation(state, value) {
    console.log('in eval', value)
  }
}

const actions = {
  actionFunctionality: ({ commit }, payload) => {
    const value = payload.value

    if (value === 'ac'){
      return commit('clearCalculator')
    } else  if(value === 'save'){
      alert('TODO: save value')
    }
  },
  updateCurrentOperand: ({ commit }, payload) => {
    return commit('updateCurrentOperand', payload.value)
  },
  addOperation: ({ commit }, payload) => {
    const value = payload.value

    if(value === '='){
      return commit('evalOperation', payload.value)
    } else {
      return commit('addOperation', payload.value)
    }
  }
}

export default new Vuex.Store({
  actions,
  mutations,
  state
})
