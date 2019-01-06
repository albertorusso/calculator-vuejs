import VCalculatorButton from '../../atoms/VCalculatorButton'

export default {
  components: {
    VCalculatorButton
  },
  props: {
    buttonList: {
      default: [
        {
          classModifier: 'operator',
          text: '&divide',
          value: '/',
        },
        {
          classModifier: 'operator',
          text: 'x',
          value: '*',
        },
        {
          classModifier: 'operator',
          text: '-',
          value: '-',
        },
        {
          classModifier: 'operator',
          text: '+',
          value: '+',
        },
        {
          classModifier: 'operator',
          text: '=',
          value: '=',
        }
      ],
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
