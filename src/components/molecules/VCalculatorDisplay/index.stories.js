import { storiesOf } from '@storybook/vue'
import VueInfoAddon from 'storybook-addon-vue-info'
import VCalculatorDisplay from '.'

storiesOf('Molecules - VCalculatorDisplay', module)
  .addDecorator(VueInfoAddon)
  .add('calculator display', () => ({
    components: { VCalculatorDisplay },
    data: () => ({
      tasks: 'defaultTaskList',
    }),
    propsDescription: {
      expressionSummary: 'Show the operation summary after the evaluation button has been clicked',
      expression: 'Show the current operation or the result'
    },
    template: '<VCalculatorDisplay expressionSummary="365 x 4 =" expression="1,460"/>'
  }))
