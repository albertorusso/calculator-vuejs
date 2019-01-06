import VCalculatorButton from '../../atoms/VCalculatorButton'

export default {
  components: {
    VCalculatorButton
  },
  props: {
    buttonList: {
      required: true,
      type: Array
    }
  },
  data() {
    return {
      keyborad: {
        actionButtons: this.buttonList
      }
    }
  }
}
