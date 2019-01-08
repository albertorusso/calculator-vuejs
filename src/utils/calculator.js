/**
 * Add + - * / to the math expression
 * @param {String} operation Operations allowed +, -, *, /
 * @param {String} value     Updated expression
 */
const addOperation = (operation, value) => {
    let res = ''
    let lastDigit = operation.substr(-1)

    if((lastDigit === '0' || lastDigit === '*' || lastDigit === '/') && value === '-'){
      res = value
    } else if(isNaN(lastDigit) === false){
      res = value
    }

    return String(res)

}

/**
 * Change the number format allowing comma e.g.: 1,000.23
 * @param  {String} value math expression
 * @return {String}       return update expression
 */
const commaFormat = (value) => {

  const arrayExpression = value.split(/(\+|-|\/|\*)/g)

  const res = arrayExpression.map(value => {
    const parts = value.split(".");
    let operation = ''

    if(isNaN(parts[0])){

      console.log('is not a number')

      switch (parts[0]) {
        case '/':
          operation = '&divide;'
          break
        case '*':
          operation = 'x'
          break
        default:
          operation = parts[0]
      }

      return operation

    } else {
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      return parts.join(".");
    }

  })

  return String(res.join(''))
}

/**
 * update current operand if it is a valid number
 * @param  {String} currentValue math expression
 * @param  {String} value        value between 0 to 9 or .
 * @return {String}              updated operand
 */
const updateOperand = (currentValue, value) => {
  let res = ''

  if (currentValue === '0' && value === '.'){
    res = value
  } else if (currentValue + value === '00' || currentValue + value === '-00') {
    res = ''
  } else if (currentValue === '-' && value === '0'){
    res = value
  } else if(isNaN(currentValue + value) === false && String(currentValue).indexOf(',') < 0){
    res = value
  }

  return res
}

export default {
  addOperation: addOperation,
  commaFormat: commaFormat,
  updateOperand: updateOperand
}
