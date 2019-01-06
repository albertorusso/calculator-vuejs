import { storiesOf } from '@storybook/vue';
import VueInfoAddon from 'storybook-addon-vue-info'
import VCalculatorOperands from '.'

storiesOf('Molecules - VCalculatorOperands', module)
  .addDecorator(VueInfoAddon)
  .add('operand buttons', () => ({
    components: { VCalculatorOperands },
    data() {
      return {
        buttonList: {
          classModifier: 'action',
          values: ['.', 0, '', 1, 2, 3, 4, 5, 6, 7, 8, 9]
        }
      }
    },
    propsDescription: {
      buttonList: 'Molecule used to create operand buttons by default 0 to 9 and .',
    },
    template: '<VCalculatorOperands :buttonList="buttonList"/>'
  }))
