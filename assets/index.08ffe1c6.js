var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import { G as Graphics, d as defineComponent, r as ref, A as Application, C as Container, o as onMounted, T as Text, s as string2hex, a as onUpdated, b as openBlock, c as createElementBlock, F as Fragment, e as renderList, u as unref, w as withDirectives, v as vModelText, f as createBlock, g as resolveDynamicComponent, h as createBaseVNode, i as createVNode, j as createApp } from "./vendor.b5b905a1.js";
const p = function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(script) {
    const fetchOpts = {};
    if (script.integrity)
      fetchOpts.integrity = script.integrity;
    if (script.referrerpolicy)
      fetchOpts.referrerPolicy = script.referrerpolicy;
    if (script.crossorigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (script.crossorigin === "anonymous")
      fetchOpts.credentials = "omit";
    else
      fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
};
p();
class Vector {
  constructor(...elements) {
    __publicField(this, "elements", []);
    this.elements = elements;
  }
  get e() {
    return this.elements;
  }
  get dim() {
    return this.elements.length;
  }
  get as2D() {
    if (this.dim > 2) {
      let dim3ToDim2Matrix = new Matrix(new Vector(1, 0), new Vector(0, 1), new Vector(-0.5 * Math.cos(Math.atan(2)), 0.5 * Math.sin(Math.atan(2))));
      return this.multiply(dim3ToDim2Matrix);
    } else {
      return this;
    }
  }
  lineParams(two) {
    if (this.dim > 3) {
      throw new Error("Can only get line params for vector with max dimension 4");
    }
    if (this.dim == 1) {
      return [
        two.width / 2,
        two.height / 2,
        two.width / 2 + this.elements[0],
        two.height / 2
      ];
    } else if (this.dim == 2) {
      return [
        two.width / 2,
        two.height / 2,
        two.width / 2 + this.elements[0],
        two.height / 2 - this.elements[1]
      ];
    } else {
      let dim2Vector = this.as2D;
      return [
        two.width / 2,
        two.height / 2,
        two.width / 2 + dim2Vector.e[0],
        two.height / 2 - dim2Vector.e[1]
      ];
    }
  }
  multiply(other) {
    if (typeof other === "number") {
      return new Vector(...this.elements.map((x) => x * other));
    } else {
      let newVector = new Vector();
      for (const thisi in this.e) {
        let sum = 0;
        for (const matrixi in other.e) {
          sum += other.e[matrixi].e[thisi] * this.e[matrixi];
        }
        newVector.e.push(sum);
      }
      return newVector;
    }
  }
}
class Matrix {
  constructor(...elements) {
    __publicField(this, "elements", []);
    this.elements = elements;
  }
  get e() {
    return this.elements;
  }
  multiply(other) {
    if (typeof other === "number") {
      return new Matrix(...this.elements.map((row) => row.multiply(other)));
    } else {
      let resMatrix = new Matrix();
      for (const vector of other.e) {
        resMatrix.e.push(vector.multiply(this));
      }
      return resMatrix;
    }
  }
}
class PixiLine {
  constructor(x1, y1, x2, y2, width = 3, color = 0, app = null) {
    __publicField(this, "width");
    __publicField(this, "color");
    __publicField(this, "_x1", 0);
    __publicField(this, "_x2", 0);
    __publicField(this, "_y1", 0);
    __publicField(this, "_y2", 0);
    __publicField(this, "graphics", new Graphics());
    this.x1 = x1;
    this.x2 = x2;
    this.y1 = y1;
    this.y2 = y2;
    this.width = 3;
    this.color = color;
    this._reset();
  }
  get y1() {
    return this._y1;
  }
  set y1(value) {
    this._y1 = value;
    this._reset();
  }
  get y2() {
    return this._y2;
  }
  set y2(value) {
    this._y2 = value;
    this._reset();
  }
  get x1() {
    return this._x1;
  }
  set x1(value) {
    this._x1 = value;
    this._reset();
  }
  get x2() {
    return this._x2;
  }
  set x2(value) {
    this._x2 = value;
    this._reset();
  }
  _reset() {
    this.graphics.clear();
    this.graphics.lineStyle(this.width, this.color);
    this.graphics.moveTo(this.x1, this.y1);
    this.graphics.lineTo(this.x2, this.y2);
  }
  get startVector() {
    return new Vector(this.x1, this.y1);
  }
  set startVector(value) {
    this.x1 = value.e[0];
    this.y1 = value.e[1];
    this._reset();
  }
  get endVector() {
    return new Vector(this.x2, this.y2);
  }
  set endVector(value) {
    this.x2 = value.e[0];
    this.y2 = value.e[1];
    this._reset();
  }
  get vectors() {
    return [this.startVector, this.endVector];
  }
  set vectors(value) {
    this.startVector = value[0];
    this.endVector = value[1];
    this._reset();
  }
}
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  props: {
    vectors: null
  },
  setup(__props) {
    const props = __props;
    const WIDTH = 200;
    const HEIGHT = 200;
    const root = ref(null);
    const app = new Application({ antialias: true, width: WIDTH, height: HEIGHT, backgroundColor: 16777215 });
    let lineContainer = new Container();
    let lines = [];
    onMounted(() => {
      if (document.getElementById("draw-space") != null) {
        document.getElementById("draw-space").innerHTML = "";
      }
      root == null ? void 0 : root.value.appendChild(app.view);
      const graphics = new Graphics();
      const xtext = new Text("X");
      xtext.x = WIDTH - 20;
      xtext.y = HEIGHT / 2 - 30;
      app.stage.addChild(xtext);
      graphics.lineStyle(2, 7829367);
      graphics.moveTo(0, HEIGHT / 2);
      graphics.lineTo(WIDTH, HEIGHT / 2);
      const ytext = new Text("Y");
      ytext.x = WIDTH / 2 - 25;
      ytext.y = 0;
      app.stage.addChild(ytext);
      graphics.lineStyle(2, 7829367);
      graphics.moveTo(WIDTH / 2, 0);
      graphics.lineTo(WIDTH / 2, HEIGHT);
      app.stage.addChild(graphics);
      if (props.vectors.some((vector) => vector.dim >= 3)) {
        const ztext = new Text("Z");
        ztext.x = WIDTH / 2 + Math.tan(Math.PI / 2 - Math.atan(2)) * HEIGHT / 2;
        ztext.y = 0;
        app.stage.addChild(ztext);
        graphics.lineStyle(2, 7829367);
        graphics.moveTo(WIDTH / 2 + Math.tan(Math.PI / 2 - Math.atan(2)) * HEIGHT / 2, 0);
        graphics.lineTo(WIDTH / 2 - Math.tan(Math.PI / 2 - Math.atan(2)) * (HEIGHT / 2), HEIGHT);
        app.stage.addChild(graphics);
      }
      lineContainer.x = app.screen.width / 2;
      lineContainer.y = app.screen.height / 2;
      app.stage.addChild(lineContainer);
      if (props.vectors) {
        const colors = ["Aqua", "Chocolate", "red", "SeaGreen", "SlateGrey"];
        for (const i in props.vectors) {
          let line = new PixiLine(0, 0, props.vectors[i].as2D.e[0], props.vectors[i].as2D.e[1], 3, string2hex(colors[i]));
          lineContainer.addChild(line.graphics);
          lines.push(line);
        }
      }
    });
    onUpdated(() => {
      for (const i in props.vectors) {
        lines[i].y2 = props.vectors[i].as2D.e[1];
        lines[i].x2 = props.vectors[i].as2D.e[0];
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        ref: (_value, _refs) => {
          _refs["root"] = _value;
          root.value = _value;
        }
      }, null, 512);
    };
  }
});
const _hoisted_1$2 = { class: "w-auto inline-block border-l-4 border-r-4 border-black" };
const _hoisted_2$1 = { class: "object-fill flex" };
const _hoisted_3$1 = ["onUpdate:modelValue"];
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  props: {
    cols: null,
    rows: null
  },
  emits: ["matrixChange"],
  setup(__props, { emit }) {
    const props = __props;
    let matrixData = ref(Array(props.rows).fill(0).map(() => Array(props.cols).fill(0)));
    for (let i = 0; i < Math.min(props.cols, props.rows); i++) {
      matrixData.value[i][i] = 1;
    }
    emit("matrixChange", matrixData.value);
    console.log(matrixData);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$2, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(unref(matrixData), (row, rowi) => {
          return openBlock(), createElementBlock("div", _hoisted_2$1, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(row, (item, coli) => {
              return withDirectives((openBlock(), createElementBlock("input", {
                class: "flex-auto w-6 text-center",
                "onUpdate:modelValue": ($event) => unref(matrixData)[rowi][coli] = $event,
                onChange: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("matrixChange", unref(matrixData)))
              }, null, 40, _hoisted_3$1)), [
                [vModelText, unref(matrixData)[rowi][coli]]
              ]);
            }), 256))
          ]);
        }), 256))
      ]);
    };
  }
});
const _hoisted_1$1 = { class: "flex items-center justify-between" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  props: {
    inputvectors: null,
    mcols: null,
    mrows: null
  },
  setup(__props) {
    const props = __props;
    let transformMatrix = new Matrix(new Vector(0, 0), new Vector(0, 0));
    ref(null);
    let key = 0;
    let matrixChanged = (event) => {
      transformMatrix = new Matrix(...event.map((value) => new Vector(...value)));
      console.log("Input vectors:", inputVectors.value);
      outputVectors.value = inputVectors.value.map((value) => value.multiply(transformMatrix));
      key = key + 1;
      console.log(key);
    };
    let inputVectors = ref(props.inputvectors);
    let outputVectors = ref([]);
    matrixChanged([[1, 0], [0, 1]]);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        (openBlock(), createBlock(resolveDynamicComponent(_sfc_main$3), {
          vectors: unref(inputVectors),
          id: "leftMatrix"
        }, null, 8, ["vectors"])),
        (openBlock(), createBlock(resolveDynamicComponent(_sfc_main$2), {
          rows: __props.mrows,
          cols: __props.mcols,
          class: "flex-shrink",
          onMatrixChange: unref(matrixChanged)
        }, null, 8, ["rows", "cols", "onMatrixChange"])),
        (openBlock(), createBlock(resolveDynamicComponent(_sfc_main$3), {
          vectors: unref(outputVectors),
          id: "rightMatrix"
        }, null, 8, ["vectors"]))
      ]);
    };
  }
});
var App_vue_vue_type_style_index_0_lang = "";
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", { class: "text-7xl mb-10" }, "Ba\u0161tovo web na matiku", -1);
const _hoisted_2 = { class: "container m-auto" };
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("h2", { class: "text-3xl" }, "Matice lin. zobrazen\xED", -1);
const _hoisted_4 = { class: "container m-auto" };
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("h2", { class: "text-3xl" }, "Line\xE1rn\xED zobrazen\xED ve 3D", -1);
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        _hoisted_1,
        createBaseVNode("div", _hoisted_2, [
          _hoisted_3,
          createVNode(_sfc_main$1, {
            mcols: 2,
            mrows: 2,
            inputvectors: [new unref(Vector)(50, 0), new unref(Vector)(0, 50)]
          }, null, 8, ["inputvectors"])
        ]),
        createBaseVNode("div", _hoisted_4, [
          _hoisted_5,
          createVNode(_sfc_main$1, {
            inputvectors: [new unref(Vector)(50, 0, 0), new unref(Vector)(0, -50, 0), new unref(Vector)(0, 0, -50)],
            mcols: 3,
            mrows: 3
          }, null, 8, ["inputvectors"])
        ])
      ], 64);
    };
  }
});
var index = "";
createApp(_sfc_main).mount("#app");
