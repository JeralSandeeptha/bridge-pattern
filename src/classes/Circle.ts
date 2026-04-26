import type { Shape } from "./Shape.js";

export class Circle implements Shape {
    constructor(private radius: number) {}

    area(): number {
        return Math.PI * this.radius * this.radius;
    }

    perimeter(): number {
        return 2 * Math.PI * this.radius;
    }
}
