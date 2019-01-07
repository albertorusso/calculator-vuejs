import VCalculatorContent from '../../atoms/VCalculatorContent'

export default {
  components: {
    VCalculatorContent
  },
  props: {
    operationSummary: {
      required: true,
      type: String
    },
    operation: {
      required: true,
      type: String
    }
  }
}
