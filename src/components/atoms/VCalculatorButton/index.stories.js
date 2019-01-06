import { storiesOf } from '@storybook/vue'
import VueInfoAddon from 'storybook-addon-vue-info'
import VCalculatorButton from '.'

storiesOf('Atoms - VCalculatorButton', module)
  .addDecorator(VueInfoAddon)
  .add('action', () => ({
    components: { VCalculatorButton },
    template: '<VCalculatorButton dataAction="action" classModifier="action" value="ac" text="AC"/>',
    propsDescription: {
      dataAction: 'Dispatch event to the store',
      classModifier: 'BEM functinality to to set the class modifier',
      value: 'Value of the button',
      text: 'Representation of button value'
    }
  }))
