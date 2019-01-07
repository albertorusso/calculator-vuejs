<script src="./script.js"></script>
<template>
  <div class="v-calculator-operands">
    <div
      class="v-calculator-operands__button-container"
      v-for="(n, nIndex) in 4"
      :key="nIndex"
    >
      <VCalculatorButton
        v-for="(value, buttonIndex) in keyborad.operandButtons.slice(0+( 3 * nIndex ), 3 + (3 * nIndex))"
        v-if="value !== ''"
        class-modifier="operand"
        :key="buttonIndex"
        :onClick="onClick"
        :text="String(value)"
        :value="String(value)"
      />
    </div>
  </div>
</template>
<style src="./style.scss" lang="scss"></style>
