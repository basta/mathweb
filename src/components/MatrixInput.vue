<template>
  <div class="w-auto inline-block border-l-4 border-r-4 border-black">
    <div class="object-fill flex" v-for="(row, rowi) in matrixData">
      <input v-for="(item, coli) in row"
             class="flex-auto w-6 text-center"
             v-model="matrixData[coli][rowi]"
             @input="$emit('matrixChange',matrixData)"
      >
    </div>
  </div>
</template>

<script setup lang="ts">

import {root} from "postcss";
import {onMounted, ref, unref} from "vue";

let props = defineProps<{ cols: number, rows: number }>()
let matrixData = ref(Array(props.rows).fill(0).map(() => Array(props.cols).fill(0)));
for (let i = 0; i < Math.min(props.cols, props.rows); i++) {
  matrixData.value[i][i] = 1
}
const emit = defineEmits(["matrixChange"])
emit("matrixChange", matrixData.value)
console.log(matrixData)
</script>

<style scoped>

</style>