// @ts-ignore
import Two from "../assets/two.js"

export class Vector {
    elements: number[] = []

    get e() {
        return this.elements
    }

    lineParams(two: Two) {
        if (this.e.length != 2 ) {
            throw new Error("Can only get line params for 2d vector")
        }

        return [two.width/2, two.height/2, two.width/2 + this.elements[0], two.height/2 - this.elements[1] ]
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
