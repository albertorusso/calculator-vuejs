import VCalculatorActions from '../../molecules/VCalculatorActions'
import VCalculatorOperands from '../../molecules/VCalculatorOperands'
import VCalculatorOperations from '../../molecules/VCalculatorOperations'

export default {
  components: {
    VCalculatorActions,
    VCalculatorOperands,
    VCalculatorOperations
  },
  data() {
    return {
      actionButtons: [
        {
          classModifier: 'action',
          text: 'AC',
          value: 'ac',
        },
        {
          classModifier: 'action-larger',
          text: 'SAVE',
          value: 'save',
        }
      ],
      operandButtons: {
        classModifier: 'action',
        values: ['.', 0, '', 1, 2, 3, 4, 5, 6, 7, 8, 9]
      },
      operationButtons: [
        {
          classModifier: 'operation',
          text: '&divide',
          value: '/',
        },
        {
          classModifier: 'operation',
          text: 'x',
          value: '*',
        },
        {
          classModifier: 'operation',
          text: '-',
          value: '-',
        },
        {
          classModifier: 'operation',
          text: '+',
          value: '+',
        },
        {
          classModifier: 'operation',
          text: '=',
          value: '=',
        }
      ]
    }
  }
}
