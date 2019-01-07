<script src="./script.js"></script>
<template>
  <div
  class="v-calculator-content"
  :class="[ classModifier ? 'v-calculator-content--' + classModifier : '' ]">
    {{text}}
  </div>
</template>
<style src="./style.scss" lang="scss"></style>
