import * as PIXI from "pixi.js"
import {Vector} from "./linmath";

export class PixiLine {
    width: number;
    color: number;

    get y1(): number {
        return this._y1;
    }

    set y1(value: number) {
        this._y1 = value;
        this._reset()
    }

    get y2(): number {
        return this._y2;
    }

    set y2(value: number) {
        this._y2 = value;
        this._reset()
    }

    get x1(): number {
        return this._x1;
    }

    set x1(value: number) {
        this._x1 = value;
        this._reset()
    }

    get x2(): number {
        return this._x2;
    }

    set x2(value: number) {
        this._x2 = value;
        this._reset()
    }

    private _reset(): void {
        this.graphics.clear()
        this.graphics.lineStyle(this.width, this.color,)
        this.graphics.moveTo(this.x1, this.y1)
        this.graphics.lineTo(this.x2, this.y2)
    }

    get startVector(): Vector{
        return new Vector(this.x1, this.y1)
    }

    set startVector(value:Vector){
        this.x1 = value.e[0]
        this.y1 = value.e[1]
        this._reset()
    }

    get endVector(): Vector{
        return new Vector(this.x2, this.y2)
    }

    set endVector(value: Vector) {
        this.x2 = value.e[0]
        this.y2 = value.e[1]
        this._reset()
    }

    get vectors(): Vector[] {
        return [this.startVector, this.endVector]
    }

    set vectors(value) {
        this.startVector = value[0]
        this.endVector = value[1]
        this._reset()
    }

    private _x1: number = 0
    private _x2: number = 0
    private _y1: number = 0
    private _y2: number = 0
    public graphics = new PIXI.Graphics();

    constructor(x1: number, y1: number, x2: number, y2: number, width = 3, color = 0, app = null) {
        this.x1 = x1
        this.x2 = x2
        this.y1 = y1
        this.y2 = y2
        this.width = 3
        this.color = color
        this._reset()
    }
}