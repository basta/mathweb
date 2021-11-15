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

const WIDTH = 200
const HEIGHT = 200
const root = ref(null)
let props = defineProps<{ vectors: Vector[], bases:Vector[] }>()

const app = new PIXI.Application({antialias: true, width: WIDTH, height: HEIGHT, backgroundColor: 0xffffff});
let lineContainer = new PIXI.Container()
let lines: PixiLine[] = []

onMounted(() => {
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

  //If applicable draw Z axis
  if (props.vectors.some((vector) => vector.dim >= 3)) {
    const ztext = new PIXI.Text("Z")
    ztext.x = (WIDTH / 2) + Math.tan(Math.PI/2 - Math.atan(2))*HEIGHT/2
    ztext.y = 0
    app.stage.addChild(ztext)
    graphics.lineStyle(2, 0x777777)
    graphics.moveTo((WIDTH / 2) + Math.tan(Math.PI/2 - Math.atan(2))*HEIGHT/2, 0)
    graphics.lineTo((WIDTH / 2) - Math.tan(Math.PI/2 - Math.atan(2))*(HEIGHT/2), HEIGHT)
    app.stage.addChild(graphics)
  }

  lineContainer.x = app.screen.width / 2
  lineContainer.y = app.screen.height / 2
  app.stage.addChild(lineContainer)

  if (props.vectors) {
    const colors = ["Aqua", "Chocolate", "red", "SeaGreen", "SlateGrey"]
    for (const i in props.vectors) {
      let params = props.vectors[i].lineParams()
      let line = new PixiLine(params[0], params[1], params[2], params[3],3,
          PIXI.utils.string2hex(colors[i]))
      lineContainer.addChild(line.graphics)
      lines.push(line)
    }
  }

  // function move() {
  //   let rot = 0.1;
  //   let rotationMatrix = new Matrix(
  //       new Vector(Math.cos(rot), Math.sin(rot)),
  //       new Vector(-Math.sin(rot), Math.cos(rot)),
  //   )
  //   line.endVector = line.endVector.multiply(rotationMatrix)
  //   line.startVector = line.startVector.multiply(rotationMatrix)
  //   // console.log(line.endVector)
  //   setTimeout(move, 50)
  // }

})
onUpdated(() => {
  for (const i in props.vectors) {
    lines[i].y2 = props.vectors[i].lineParams()[3]
    lines[i].x2 = props.vectors[i].lineParams()[2]
  }
})
</script>

<style scoped>

</style>