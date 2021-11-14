// @ts-ignore
import Two from "../assets/two.js"

export class Vector {
    elements: number[] = []

    get e() {
        return this.elements
    }

    get dim() {
        return this.elements.length
    }

    get as2D(): Vector{
        if (this.dim > 2) {
            let dim3ToDim2Matrix = new Matrix(
                new Vector(1, 0),
                new Vector(0, 1),
                new Vector(-0.5*Math.cos(Math.atan(2)), 0.5*Math.sin(Math.atan(2)))
            )
            return this.multiply(dim3ToDim2Matrix)
        } else {
            return this
        }
    }

    lineParams(two: Two) {

        if (this.dim > 3) {
            throw new Error("Can only get line params for vector with max dimension 4")
        }
        if (this.dim == 1) {
            return [two.width / 2, two.height / 2,
                two.width / 2 + this.elements[0], two.height / 2]
        } else if (this.dim == 2) {
            return [two.width / 2, two.height / 2,
                two.width / 2 + this.elements[0], two.height / 2 - this.elements[1]]
        } else {
            // dim is 3
            let dim2Vector = this.as2D
            return [two.width / 2, two.height / 2,
                two.width / 2 + dim2Vector.e[0], two.height / 2 - dim2Vector.e[1]]
        }
    }

    constructor(...elements: number[]) {
        this.elements = elements;
    }

    multiply(other: number | Matrix): Vector {
        if (typeof other === "number") {
            return new Vector(...this.elements.map(x => x * other));
        } else {
            let newVector = new Vector();
            for (const thisi in this.e) {
                let sum = 0;
                for (const matrixi in other.e) {
                    sum += other.e[matrixi].e[thisi] * this.e[matrixi];
                }
                newVector.e.push(sum);
            }
            return newVector
        }
    }
}

export class Matrix {
    elements: Array<Vector> = []

    get e() {
        return this.elements
    }

    constructor(...elements: Array<Vector>) {
        this.elements = elements;
    }

    multiply(other: number | Matrix): Matrix {
        if (typeof other === "number") {
            return new Matrix(...this.elements.map(row => row.multiply(other)))
        } else {
            let resMatrix = new Matrix();
            for (const vector of other.e) {
                resMatrix.e.push(vector.multiply(this));
            }
            return resMatrix;
        }
    }
}
