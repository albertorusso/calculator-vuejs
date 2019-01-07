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
          dispatch: 'clearCalculator',
          text: 'AC',
          value: 'ac',
        },
        {
          classModifier: 'action-larger',
          dispatch: 'saveCalculation',
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
      const currentTarget = event.currentTarget
      const value = currentTarget.value

      if(this.$store){
        return this.$store.dispatch('actionFunctionality', {value: value})
      }
    }
  }
}
