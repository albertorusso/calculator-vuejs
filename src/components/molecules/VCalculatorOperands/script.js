import VCalculatorButton from '../../atoms/VCalculatorButton'

export default {
  components: {
    VCalculatorButton
  },
  props: {
    buttonList: {
      default: () => ({
        classModifier: 'action',
        values: ['.', 0, '', 1, 2, 3, 4, 5, 6, 7, 8, 9]
      })
    }
  },
  data() {
    return {
      keyborad: {
        operandButtons: this.buttonList.values
      }
    }
  },
  methods: {
    onClick(event) {
      const currentTarget = event.currentTarget
      const value = currentTarget.value

      if(this.$store){
        return this.$store.dispatch('updateCurrentOperand', {value: value})
      }
    }
  }
}
