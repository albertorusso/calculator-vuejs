export default {
  props: {
    classModifier: {
      default: () => (
        'main'
      ),
      type: String,
      required: false
    },
    text: {
      type: String,
      required: true
    }
  }
}
