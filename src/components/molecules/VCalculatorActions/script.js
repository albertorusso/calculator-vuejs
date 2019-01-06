import VCalculatorButton from '../../atoms/VCalculatorButton'

export default {
  components: {
    VCalculatorButton
  },
  props: {
    buttonList: {
      default: () => ([
        {
          classModifier: 'action',
          text: 'AC',
          value: 'ac',
        },
        {
          classModifier: 'action-larger',
          text: 'SAVE',
          value: 'save',
        }
      ]),
      required: false,
      type: Array
    }
  },
  data() {
    return {
      keyborad: {
        actionButtons: this.buttonList
      }
    }
  },
  methods: {
    onClick(event) {
      console.log('TODO: dispatch event to store', event.currentTarget.value)
    }
  }
}
