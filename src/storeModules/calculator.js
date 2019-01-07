import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const defaultState = {
  status: 'operand',
  mathExpression: ['0'],
  currentOperand: '0',
  display: {
    operationSummary: '',
    operationResult: '0'
  }
}

const state = defaultState

/**
 * Return the number in the current format (1,222,222.01)
 * NOTE: toLocaleString() dosen't mantain the format in edge cases e.g.: 0.00
 * @param  {String} value current value to be formated
 * @return {String}
 */
const getNumberFormatter = (value) => {
  var parts = value.toString().split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return parts.join(".");
}

/**
 * Return a valid operand decimal number
 * @param  {String} operand inital value
 * @param  {String} value   value selected
 * @return {String}
 */
const updateOperand = (operand, value) => {
  let newOperand = operand + value
  let res = ''

  if (isNaN(newOperand) === true){
    res = operand
  } else {
    if (operand === '0' && value !== '.'){
      res = value
    } else {
      res = newOperand
    }
  }

  return res
}

const mutations = {
  clearCalculator(state) {
    state.mathExpression = ['0'],
    state.currentOperand = '0',
    state.display.operationSummary = '',
    state.display.operationResult = '0'
  },
  updateCurrentOperand(state, value) { // TODO: change name
    const status =  state.status
    const newOperand = status === 'operand' ? updateOperand(state.currentOperand, value) : value

    state.currentOperand = newOperand
    state.display.operationResult = getNumberFormatter(newOperand)
    state.status = status === 'operation' ? 'operand' : status
  },
  addOperation(state, value) {
    const mathExpression = state.mathExpression
    const lastExpression = mathExpression[mathExpression.length - 1]
    const currentOperand = state.currentOperand
    const currentStatus = state.status
    let setState = 'operation'


    // add any operand in case of emtpy
    if(mathExpression.length === 0){
      state.mathExpression.push(currentOperand) // TODO: remove state. where is not required!
    }

    if(mathExpression.length === 1 && currentOperand === '0' && value === '-'){
      state.mathExpression.pop()
      state.currentOperand = '-'
      setState = 'operand'
    } else if(mathExpression.length === 1 && currentOperand !== '0'){
      state.mathExpression.pop()
      state.mathExpression.push(currentOperand, value)
    } else if((lastExpression === '*' || lastExpression === '/') && value === '-'){
      setState = 'operand'
      state.currentOperand = '-'
    } else if(mathExpression.length === 1 && currentOperand === '0'){
      state.mathExpression.push(value)
    } else if(currentStatus === 'operand'){
      state.mathExpression.push(currentOperand, value)
    } else if(currentStatus === 'operation' && isNaN(lastExpression)){
      state.mathExpression[state.mathExpression.length - 1] = value
    }

    state.status = setState


    console.log(state.mathExpression.join(''))

    // non necessary here
    state.display.operationResult = state.currentOperand
    state.display.operationSummary = state.mathExpression.join('')

  },
  evalOperation(state, value) {
    const mathExpression = state.mathExpression
    const lastExpression = mathExpression[mathExpression.length - 1]
    const currentOperand = state.currentOperand
    const status = state.status

    if(isNaN(lastExpression)){
      state.mathExpression.push(currentOperand)
    } else {
      mathExpression[mathExpression.length - 1] = currentOperand
    }

    console.log(state.mathExpression)
    state.display.operationSummary = state.mathExpression.join('') + '='

  }

}

const actions = {
  clearCalculator: ({ commit }) => {
    return commit('clearCalculator')
  },
  updateCurrentOperand: ({ commit }, payload) => { // TODO: change operand with calculations or update operand or just keep all operations!
    return commit('updateCurrentOperand', payload.value)
  },
  addOperation: ({ commit }, payload) => {
    return commit('addOperation', payload.value)
  },
  evalOperation: ({ commit }, payload) => {
    return commit('evalOperation', payload.value)
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions
})
