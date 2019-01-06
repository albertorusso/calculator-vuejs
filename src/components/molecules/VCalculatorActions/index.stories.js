import { storiesOf } from '@storybook/vue';
import VueInfoAddon from 'storybook-addon-vue-info'
import VCalculatorActions from '.'

storiesOf('Molecules - VCalculatorActions', module)
  .addDecorator(VueInfoAddon)
  .add('action buttons', () => ({
    components: { VCalculatorActions },
    data() {
      return {
        buttonList: [
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
        ]
      }
    },
    propsDescription: {
      buttonList: 'Molecule used to create action buttons by default AC, SAVE',
    },
    template: '<VCalculatorActions :buttonList="buttonList"/>'
  }))
