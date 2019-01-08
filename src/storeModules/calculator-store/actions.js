/**
 * Available actions for the store
 * @type {Object}
 */
export default {
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
