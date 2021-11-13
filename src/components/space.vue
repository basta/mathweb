<template>
  <div ref="root">
  </div>
</template>

<script lang="ts" setup>
import {Matrix, Vector} from "../scripts/linmath"
import * as PIXI from "pixi.js"
import {PixiLine} from "../scripts/pixiextensions";
import {Container} from "postcss";
import {onMounted, onUpdated, ref, watch} from "vue";

const WIDTH = 500
const HEIGHT = 500
const root = ref(null)
let props = defineProps<{ vectors: Vector[] }>()

const app = new PIXI.Application({antialias: true, width: WIDTH, height: HEIGHT, backgroundColor: 0xffffff});
let lineContainer = new PIXI.Container()
let lines: PixiLine[] = []

onMounted(() => {
  if (document.getElementById("draw-space") != null) {
    document.getElementById("draw-space").innerHTML = ""
  }
  //@ts-ignore
  root?.value.appendChild(app.view);
  const graphics = new PIXI.Graphics();
  //draw xaxis
  const xtext = new PIXI.Text("X")
  xtext.x = WIDTH - 20
  xtext.y = HEIGHT / 2 - 30
  app.stage.addChild(xtext)
  graphics.lineStyle(2, 0x777777)
  graphics.moveTo(0, HEIGHT / 2)
  graphics.lineTo(WIDTH, HEIGHT / 2)

  //draw yaxis
  const ytext = new PIXI.Text("Y")
  ytext.x = WIDTH / 2 - 25
  ytext.y = 0
  app.stage.addChild(ytext)
  graphics.lineStyle(2, 0x777777)
  graphics.moveTo(WIDTH / 2, 0)
  graphics.lineTo(WIDTH / 2, HEIGHT)
  app.stage.addChild(graphics)

  lineContainer.x = app.screen.width / 2
  lineContainer.y = app.screen.height / 2
  app.stage.addChild(lineContainer)

  if (props.vectors) {
    for (const vector of props.vectors) {
      let line = new PixiLine(0, 0, vector.e[0], vector.e[1])
      lineContainer.addChild(line.graphics)
      lines.push(line)
    }
  }

  function move() {
    let rot = 0.1;
    let rotationMatrix = new Matrix(
        new Vector(Math.cos(rot), Math.sin(rot)),
        new Vector(-Math.sin(rot), Math.cos(rot)),
    )
    line.endVector = line.endVector.multiply(rotationMatrix)
    line.startVector = line.startVector.multiply(rotationMatrix)
    // console.log(line.endVector)
    setTimeout(move, 50)
  }

})
onUpdated(() => {
  for (const i in props.vectors) {
    lines[i].y2 = props.vectors[i].e[1]
    lines[i].x2 = props.vectors[i].e[0]
  }
})
</script>

<style scoped>

</style>