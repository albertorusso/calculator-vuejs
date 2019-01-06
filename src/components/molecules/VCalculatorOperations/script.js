import VCalculatorButton from '../../atoms/VCalculatorButton'

export default {
  components: {
    VCalculatorButton
  },
  props: {
    buttonList: {
      default: () => ([
        {
          classModifier: 'operation',
          text: '&divide',
          value: '/',
        },
        {
          classModifier: 'operation',
          text: 'x',
          value: '*',
        },
        {
          classModifier: 'operation',
          text: '-',
          value: '-',
        },
        {
          classModifier: 'operation',
          text: '+',
          value: '+',
        },
        {
          classModifier: 'operation',
          text: '=',
          value: '=',
        }
      ]),
      required: false,
      type: Array
    }
  },
  data() {
    return {
      keyborad: {
        operatorButtons: this.buttonList
      }
    }
  },
  methods: {
    onClick(event) {
      console.log('TODO: dispatch event to store', event.currentTarget.value)
    }
  }
}
