<template>
  <div id="app">
    <VPageCalculator msg="Alberto Russo - Calculator exercise in vue.js"/>
  </div>
</template>

<script>
import VPageCalculator from './components/pages/VPageCalculator'

export default {
  name: 'app',
  components: {
    VPageCalculator
  }
}
</script>

<style src="./global-styles/app.scss" lang="scss"></style>
