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
      const currentTarget = event.currentTarget
      const value = currentTarget.value

      if(this.$store){
        return this.$store.dispatch('addOperation', {value: value})
      }
    }
  }
}
