<script src="./script.js"></script>
<template>
  <div>
    <div
      class="v-calculator-operators"
      v-for="(button, index) in keyborad.operatorButtons"
      :key="index">
        <VCalculatorButton
          :class-modifier="button.classModifier"
          :text="button.text"
          :value="button.value"
          :onClick="onClick"
        />
    </div>
  </div>
</template>
<style src="./style.scss" lang="scss"></style>
