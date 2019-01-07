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

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
