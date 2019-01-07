import { storiesOf } from '@storybook/vue'
import VueInfoAddon from 'storybook-addon-vue-info'
import VCalculatorContent from '.'

storiesOf('Atoms - VCalculatorContent', module)
  .addDecorator(VueInfoAddon)
  .add('content header', () => ({
    components: { VCalculatorContent },
    propsDescription: {
      classModifier: 'BEM functinality to to set the class modifier',
      text: 'Show operations content'
    },
    template: '<VCalculatorContent classModifier="header" text="365 x 4 ="/>'
  }))
  .add('content result', () => ({
    components: { VCalculatorContent },
    propsDescription: {
      classModifier: 'BEM functinality to to set the class modifier',
      text: 'Show content'
    },
    template: '<VCalculatorContent text="1,460"/>'
  }))
