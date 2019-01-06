export default {
  props: {
    classModifier: {
      required: false,
      type: String
    },
    onClick: {
      required: true,
      type: Function
    },
    text: {
      required: true,
      type: String
    },
    value: {
      required: false,
      type: String
    }
  }
}
