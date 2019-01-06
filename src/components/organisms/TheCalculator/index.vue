<script src="./script.js"></script>
<template>
  <div class="the-calculator">
      <div class="the-calculator__keyboard">
        <div class="the-calculator__main-keyboard">
          <VCalculatorActions :buttonList="actionButtons" />
          <VCalculatorOperands :buttonList="operandButtons" />
        </div>
        <div class="the-calculator__operations-keyboard">
          <VCalculatorOperations :buttonList="operationButtons" />
        </div>
      </div>
  </div>
</template>
<style src="./style.scss" lang="scss"></style>
