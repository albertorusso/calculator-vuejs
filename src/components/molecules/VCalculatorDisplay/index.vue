<script src="./script.js"></script>
<template>
  <div class="v-calculator-display">
    <div class="v-calculator-display__header">
      <VCalculatorContent classModifier="header" :text="operationSummary"/>
    </div>
    <div class="v-calculator-display__result">
      <VCalculatorContent
        :text="operation"
      />
    </div>
  </div>
</template>
<style src="./style.scss" lang="scss"></style>
