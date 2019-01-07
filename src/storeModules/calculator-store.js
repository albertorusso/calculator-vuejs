import math from'math-expression-evaluator'
import calculator from '../utils/calculator.js'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  currentValue: 0,
  expression: '',
  display: {
    expressionSummary: '',
    expression: '0'
  }
}

const mutations = {
  clearCalculator(state, value) {
    state.currentValue = '',
    state.expression = ''
    state.display.expressionSummary = ''
    state.display.expression = '0'
  },
  updateCurrentOperand(state, value) {
    const newValue = calculator.updateOperand(state.currentValue, value)

    if(newValue){
      state.currentValue += newValue

      if(state.expression === '0'){
        state.expression = newValue === '.' ? '0.' : newValue
      } else {
        state.expression += newValue
      }

      state.display.expression = String(state.expression)
    }

  },
  addOperation(state, value) {
    const newValue = calculator.addOperation(state.expression, value)

    if(newValue){
      state.currentValue = 0

      if(state.expression === '0' && newValue === '-'){
        state.expression = newValue
      } else {
        state.expression += newValue
      }

      state.display.expression = String(state.expression)
    }

  },
  evalOperation(state, value) {
    try {
      const result = String(math.eval(state.expression))

      if(isNaN(result)){
        state.display.expressionSummary = 'ERROR'
      } else {
        state.display.expressionSummary = state.display.expression + '='
        state.display.expression = String(math.eval(state.expression))
      }
    } catch {
      state.display.expressionSummary = 'ERROR'
    }
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
      return commit('evalOperation')
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
