const updateOperand = (currentValue, value) => {
  let res = ''

  if (currentValue === 0 && value === '0') {
    res = ''
  } if (currentValue === '-' && value === '0'){
    res = value
  } else if(isNaN(currentValue + value) === false){
    res = value
  }

  return res
}

const addOperation = (operation, value) => {
    let res = ''
    let lastDigit = operation.substr(-1)

    if((lastDigit === '0' || lastDigit === '*' || lastDigit === '/') && value === '-'){
      res = value
    } else if(isNaN(lastDigit) === false){
      res = value
    }

    return res

}

export default {
  updateOperand: updateOperand,
  addOperation: addOperation
}
