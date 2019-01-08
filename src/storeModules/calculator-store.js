import math from'math-expression-evaluator'
import calculator from '../utils/calculator.js'
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

/**
 * Methods to mutate (update) the state of the store
 * @type {Object}
 */
const mutations = {
  clearCalculator(state) {
    state.currentValue = '0',
    state.expression = '0'
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

      state.display.expression = calculator.commaFormat(state.expression)

    }

  },
  addOperation(state, value) {
    const newValue = calculator.addOperation(state.expression, value)

    if(newValue){
      state.currentValue = ''

      if(state.expression === '0' && newValue === '-'){
        state.expression = newValue
        state.currentValue = newValue
      } else {
        state.expression += newValue
      }

      state.display.expression = calculator.commaFormat(state.expression)
    }

  },
  evalOperation(state) {
    try {
      const result = String(math.eval(state.expression))

      if(isNaN(result)){
        state.display.expressionSummary = 'ERROR'
      } else {
        state.expression = result
        state.display.expressionSummary = state.display.expression + '='
        state.display.expression = calculator.commaFormat(result)
      }
    } catch {
      state.display.expressionSummary = 'ERROR'
    }
  }
}

/**
 * Available actions to dispatch by components
 * @type {Object}
 */
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
