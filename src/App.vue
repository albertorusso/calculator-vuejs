<template>
  <div id="app">
    <VPageCalculator msg="Alberto Russo - Calculator exercise in vue.js"/>
  </div>
</template>

<script>
import store from './storeModules/calculator-store/store'
import VPageCalculator from './components/pages/VPageCalculator'

export default {
  components: {
    VPageCalculator
  },
  name: 'app',
  store: store,
}
</script>

<style src="./global-styles/app.scss" lang="scss"></style>
