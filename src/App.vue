<script setup lang="ts">

// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from './components/HelloWorld.vue'
import Space from "./components/space.vue";
import Matrix from "./components/MatrixInput.vue";
import Lintrans from "./components/lintrans.vue";
import MatrixInput from "./components/MatrixInput.vue";

const matrixChanged = (event: number[][]) => {
  console.log(event)
  console.log(event[0][0])
}
</script>

<template>
  <matrix-input rows=3 cols=3 @matrixChange="matrixChanged" />
  <space/>
  <lintrans/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
