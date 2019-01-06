import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions';
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
            onClick: () => {
              action('click')('ac button')
            },
            text: 'AC',
            value: 'ac',
          },
          {
            classModifier: 'action-larger',
            onClick: () => {
              action('click')('save button')
            },
            text: 'SAVE',
            value: 'save',
          }
        ]
      }
    },
    template: '<VCalculatorActions :buttonList="buttonList"/>'
  }))
