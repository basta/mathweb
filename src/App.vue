<script setup lang="ts">

// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from './components/HelloWorld.vue'
import Space from "./components/space.vue";
import Matrix from "./components/MatrixInput.vue";
import Lintrans from "./components/lintrans.vue";
import MatrixInput from "./components/MatrixInput.vue";
import {Vector} from "./scripts/linmath";

const matrixChanged = (event: number[][]) => {
  console.log(event)
  console.log(event[0][0])
}
</script>

<template>
  <h1 class="text-7xl mb-10">Baštovo web na matiku</h1>
  <div class="container m-auto">
    <h2 class="text-3xl">Matice lin. zobrazení</h2>
    <lintrans :mcols="2" :mrows="2" :inputvectors="[new Vector(50, 0,), new Vector(0, 50)]"/>
  </div>
  <div class="container m-auto">
    <h2 class="text-3xl">Lineární zobrazení ve 3D</h2>
    <lintrans :inputvectors="[new Vector(50, 0,0), new Vector(0, -50, 0), new Vector(0,0,-50)]" :mcols="3" :mrows="3"></lintrans>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 5rem;
}
</style>
