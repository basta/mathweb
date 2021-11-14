<script setup lang="ts">
import {Vector, Matrix} from "../scripts/linmath";
import Space from "./space.vue";
import MatrixInput from "./MatrixInput.vue";
import {ref} from "vue";
let transformMatrix = new Matrix(new Vector(0, 0), new Vector(0, 0))
const root = ref(null)
const props = defineProps<{inputvectors: Vector[], mcols: number, mrows: number}>()

let key = 0

let matrixChanged = (event: number[][]) => {
  transformMatrix = new Matrix(
      ...event.map((value) => new Vector(...value))
  )
  console.log("Input vectors:", inputVectors.value)
  outputVectors.value = inputVectors.value.map((value) => value.multiply(transformMatrix))
  key = key + 1
  console.log(key)
}
let inputVectors = ref<Vector[]>(props.inputvectors)
let outputVectors = ref<Vector[]>([])
matrixChanged([[1,0],[0,1]])
</script>

<template>
  <div class="flex items-center justify-between flex-wrap">
    <component :is="Space" :vectors="inputVectors" id="leftMatrix"/>
    <component :is="MatrixInput" :rows="mrows" :cols="mcols" class="flex-shrink" @matrixChange="matrixChanged"/>
    <component :is="Space" :vectors="outputVectors" id="rightMatrix"/>
  </div>
</template>

<style scoped>

</style>