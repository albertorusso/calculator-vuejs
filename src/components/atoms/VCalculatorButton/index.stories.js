import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions';
import VueInfoAddon from 'storybook-addon-vue-info'
import VCalculatorButton from '.'

const onClick = (e) => (
  action('value')(e.currentTarget.value)
)

storiesOf('Atoms - VCalculatorButton', module)
  .addDecorator(VueInfoAddon)
  .add('action', () => ({
    components: { VCalculatorButton },
    methods: { onClick },
    propsDescription: {
      classModifier: 'BEM functinality to to set the class modifier',
      onClick: 'Add js functionality',
      value: 'Value of the button',
      text: 'Representation of button value'
    },
    template: '<VCalculatorButton dataAction="action" classModifier="action" value="ac" text="AC" :onClick="onClick" />'
  }))
  .add('action larger', () => ({
    components: { VCalculatorButton },
    methods: { onClick },
    propsDescription: {
      classModifier: 'BEM functinality to to set the class modifier',
      value: 'Value of the button',
      onClick: 'Add js functionality',
      text: 'Representation of button value'
    },
    template: '<VCalculatorButton dataAction="action" classModifier="action-larger" value="save" text="SAVE" :onClick="onClick"/>'
  }))
  .add('operand', () => ({
    components: { VCalculatorButton },
    methods: { onClick },
    propsDescription: {
      classModifier: 'BEM functinality to to set the class modifier',
      value: 'Value of the button',
      onClick: 'Add js functionality',
      text: 'Representation of button value'
    },
    template: '<VCalculatorButton dataAction="operand" classModifier="operand" value="1" text="1" :onClick="onClick"/>'
  }))
  .add('operation', () => ({
    components: { VCalculatorButton },
    methods: { onClick },
    propsDescription: {
      classModifier: 'BEM functinality to to set the class modifier',
      value: 'Value of the button',
      onClick: 'Add js functionality',
      text: 'Representation of button value'
    },
    template: '<VCalculatorButton dataAction="operation" classModifier="operation" value="+" text="+" :onClick="onClick"/>'
  }))
