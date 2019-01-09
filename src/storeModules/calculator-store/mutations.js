import math from'math-expression-evaluator'
import calculator from '../../utils/calculator'
import axios from 'axios'

/**
 * Methods to mutate (update) the state of the store
 * @type {Object}
 */
export default {
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
  },
  saveExpression(state) {
    const expressionSummary = state.display.expressionSummary
    const expression = state.display.expression

    if(expressionSummary.indexOf('=') > 0 && expressionSummary !== 'SAVED')
    axios({
      method: 'post',
      url: 'http://localhost:8083/save-calculation',
      data: {
        expressionSummary: expressionSummary,
        expression: expression
      }
    })
    .then(function (response) {
      state.display.expressionSummary = response.data.message
    })
    .catch(function (error) {
      return error
    });

  }
}
