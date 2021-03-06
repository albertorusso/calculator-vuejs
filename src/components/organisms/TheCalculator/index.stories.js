import { storiesOf } from '@storybook/vue'
import VueInfoAddon from 'storybook-addon-vue-info'
import TheCalculator from '.'

storiesOf('Organism - TheCalculator', module)
  .addDecorator(VueInfoAddon)
  .add('Calculator', () => ({
    components: { TheCalculator },
    template: '<TheCalculator />'
  }))
