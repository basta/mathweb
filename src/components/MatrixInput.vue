<template>
  <div class="w-auto inline-block border-l-4 border-r-4 border-black">
    <div class="object-fill flex" v-for="(row, rowi) in matrixData">
      <input v-for="(item, coli) in row"
             class="flex-auto w-6 text-center"
             v-model="matrixData[rowi][coli]"
             @change="$emit('matrixChange',matrixData)"
      >
    </div>
  </div>
</template>

<script setup lang="ts">

import {root} from "postcss";
import {onMounted, ref, unref} from "vue";

let props = defineProps<{ cols: string, rows: string }>()
let matrixData = ref(Array(parseInt(props.rows)).fill(0).map(() => Array(parseInt(props.rows)).fill(0)));
defineEmits()
console.log(matrixData)
</script>

<style scoped>

</style>