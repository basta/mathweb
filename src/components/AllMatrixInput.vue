<template>
  <div class="flex-col" style="align-items: center">
    <button class="butt block text-center m-auto" v-if="selectedInput === 'cisla'" @click="selectedInput = 'posuvniky'">Přepnout na čísla</button>
    <MatrixInput v-if="selectedInput === 'cisla'" :cols="cols" :rows="rows" @matrixChange="$emit('matrixChange', $event)"/>
    <button class="butt block text-center m-auto" v-if="selectedInput === 'posuvniky'" @click="selectedInput = 'cisla'">Přepnout na posuvníky</button>
    <SliderMatrixInput :cols="cols" :rows="rows" v-if="selectedInput === 'posuvniky'" @matrixChange="$emit('matrixChange', $event)"/>
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue";

let selectedInput = ref("cisla")
import MatrixInput from "./MatrixInput.vue";
import SliderMatrixInput from "./SliderMatrixInput.vue";
let props = defineProps<{ cols: number, rows: number }>()
</script>

<style scoped>


</style>