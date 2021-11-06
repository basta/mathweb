<template>
  <div id="draw-space">

  </div>
</template>

<script lang="ts">
import {Matrix, Vector} from "../scripts/linmath"
import * as PIXI from "pixi.js"
import {PixiLine} from "../scripts/pixiextensions";
import {Container} from "postcss";
export default {
  name: "space",
  mounted() {
    if (document.getElementById("draw-space") != null) {
      document.getElementById("draw-space").innerHTML = ""
    }

    const WIDTH = 500
    const HEIGHT = 500
    const app = new PIXI.Application({antialias: true,width: WIDTH, height: HEIGHT, backgroundColor: 0xffffff,

                                      });
    document.getElementById("draw-space")?.appendChild(app.view);
    const graphics = new PIXI.Graphics();
    //draw xaxis
    const xtext = new PIXI.Text("X")
    xtext.x = WIDTH - 20
    xtext.y = HEIGHT/2 - 30
    app.stage.addChild(xtext)
    graphics.lineStyle(2, 0x777777)
    graphics.moveTo(0,HEIGHT/2)
    graphics.lineTo(WIDTH,HEIGHT/2)

    //draw yaxis
    const ytext = new PIXI.Text("Y")
    ytext.x = WIDTH/2 - 25
    ytext.y = 0
    app.stage.addChild(ytext)
    graphics.lineStyle(2, 0x777777)
    graphics.moveTo(WIDTH/2,0)
    graphics.lineTo(WIDTH/2,HEIGHT)
    app.stage.addChild(graphics)

    let lineContainer = new PIXI.Container()
    lineContainer.x = app.screen.width / 2
    lineContainer.y = app.screen.height / 2
    app.stage.addChild(lineContainer)

    let line = new PixiLine(0, 0,70, 50)
    lineContainer.addChild(line.graphics)

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
    move()

  }
}
</script>

<style scoped>

</style>