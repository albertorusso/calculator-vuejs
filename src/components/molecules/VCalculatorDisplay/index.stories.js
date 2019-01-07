import { storiesOf } from '@storybook/vue'
import VCalculatorDisplay from '.'

storiesOf('Molecules - VCalculatorDisplay', module)
  .add('default', () => ({
    components: { VCalculatorDisplay },
    data: () => ({
      tasks: 'defaultTaskList',
    }),
    template: '<VCalculatorDisplay operationSummary="365 x 4 =" operation="1,460"/>'
  }))
