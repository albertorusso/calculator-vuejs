<script src="./script.js"></script>
<template>
  <div class="v-calculator-operands">
    <div
      class="v-calculator-operands__button-row"
      v-for="(n, nIndex) in 4"
      :key="nIndex"
    >
      <div
        class="v-calculator-operands__button-container"
        v-for="(value, buttonIndex) in keyborad.operandButtons.slice(0+( 3 * nIndex ), 3 + (3 * nIndex))"
        :key="buttonIndex"
      >
        <VCalculatorButton
          v-if="value !== ''"
          class-modifier="operand"
          :onClick="onClick"
          :text="String(value)"
          :value="String(value)"
        />
      </div>
    </div>
  </div>
</template>
<style src="./style.scss" lang="scss"></style>
