import { storiesOf } from '@storybook/vue';
import VueInfoAddon from 'storybook-addon-vue-info'
import VCalculatorOperations from '.'

storiesOf('Molecules - VCalculatorOperations', module)
  .addDecorator(VueInfoAddon)
  .add('operation buttons', () => ({
    components: { VCalculatorOperations },
    data() {
      return {
        buttonList: [
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
    },
    propsDescription: {
      buttonList: 'Molecule used to create operator buttons by default / x + - = ',
    },
    template: '<VCalculatorOperations :buttonList="buttonList"/>'
  }))
