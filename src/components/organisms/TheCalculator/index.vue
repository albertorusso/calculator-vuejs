<script src="./script.js"></script>
<template>
  <div class="the-calculator">
      <div class="the-calculator__keyboard">
        <div class="the-calculator__main-keyboard">
          <div class="the-calculator__actions-section">
            <VCalculatorActions :buttonList="actionButtons" />
          </div>
          <div class="the-calculator__operands-section">
            <VCalculatorOperands :buttonList="operandButtons" />
          </div>
        </div>
        <div class="the-calculator__operations-keyboard">
          <div class="the-calculator__operations-section">
            <VCalculatorOperations :buttonList="operationButtons" />
          </div>
        </div>
      </div>
  </div>
</template>
<style src="./style.scss" lang="scss"></style>
