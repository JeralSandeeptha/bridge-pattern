import type { Shape } from "./Shape.js";

export class Triangle implements Shape {
    constructor(private base: number, private height: number, private sideA: number, private sideB: number, private sideC: number) {}

    area(): number {
        return 0.5 * this.base * this.height;
    }

    perimeter(): number {
        return this.sideA + this.sideB + this.sideC;
    }
}
