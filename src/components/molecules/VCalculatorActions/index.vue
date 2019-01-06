<script src="./script.js"></script>
<template>
  <div class="v-calculator-actions">
      <VCalculatorButton
        v-for="(button, index) in keyborad.actionButtons" :key="index"
        :class-modifier="button.classModifier"
        :text="button.text"
        :value="button.value"
        :onClick="button.onClick"
      />
  </div>
</template>
<style src="./style.scss" lang="scss"></style>
