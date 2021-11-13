<script setup lang="ts">
import {Vector, Matrix} from "../scripts/linmath";
import Space from "./space.vue";
import MatrixInput from "./MatrixInput.vue";
import {ref} from "vue";
let transformMatrix = new Matrix(new Vector(0, 0), new Vector(0, 0))
const root = ref(null)

let key = 0

let matrixChanged = (event: number[][]) => {
  transformMatrix = new Matrix(
      ...event.map((value) => new Vector(...value))
  )
  console.log(inputVectors)
  outputVectors.value = inputVectors.value.map((value) => value.multiply(transformMatrix))
  console.log("Output vectors changed")
  console.log(outputVectors)
  key = key + 1
  console.log(key)
}
let inputVectors = ref<Vector[]>([new Vector(50, 50), new Vector(80, 20)])
let outputVectors = ref<Vector[]>([])
matrixChanged([[1,0],[0,1]])
</script>

<template>
  <div class="flex items-center justify-between">
    <component :is="Space" :vectors="inputVectors" id="leftMatrix"/>
    <component :is="MatrixInput" rows="2" cols="2" class="flex-shrink" @matrixChange="matrixChanged"/>
    <component :is="Space" :vectors="outputVectors" id="rightMatrix"/>
  </div>
</template>

<style scoped>

</style>