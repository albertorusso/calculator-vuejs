import VCalculatorContent from '../../atoms/VCalculatorContent'

export default {
  components: {
    VCalculatorContent
  },
  props: {
    expressionSummary: {
      required: true,
      type: String
    },
    expression: {
      default: () => (0),
      required: true,
      type: String
    }
  }
}
