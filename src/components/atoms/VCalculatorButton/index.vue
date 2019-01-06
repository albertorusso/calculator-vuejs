<script src="./script.js"></script>
<template>
  <button
    class="v-calculator-button"
    :class="[ classModifier ? 'v-calculator-button--' + classModifier : '' ]"
    :value="value"
    @click='onClick'
  >
    <span v-html="text"></span>
  </button>
</template>
<style src="./style.scss" lang="scss"></style>
