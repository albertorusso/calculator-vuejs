<script src="./script.js"></script>
<template>
  <button
    class="v-calculator-button"
    :class="[ classModifier ? 'v-calculator-button--' + classModifier : '' ]"
    :data-action="buttonAction"
    :value="value"
    @click="clickButton">
    <span v-html="text"></span>
  </button>
</template>
<style src="./style.scss" lang="scss"></style>
