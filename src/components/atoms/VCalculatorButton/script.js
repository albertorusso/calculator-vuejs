export default {
  props: {
    buttonAction: {
      required: false,
      type: String
    },
    classModifier: {
      required: false,
      type: String
    },
    text: {
      required: true,
      type: String
    },
    value: {
      required: true,
      type: String
    },
  },
  methods: {
    clickButton(event){
        console.log('TODO: dispatch click event', event)
    }
  }
}
