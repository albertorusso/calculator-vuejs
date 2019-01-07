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
      default: () => (0),
      required: true,
      type: String
    }
  }
}
