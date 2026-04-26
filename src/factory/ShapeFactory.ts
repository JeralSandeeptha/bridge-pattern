import { Circle } from "../classes/Circle.js";
import type { Shape } from "../classes/Shape.js";
import { Triangle } from "../classes/Triangle.js";
import { EShape } from "../types/EShape.js";

export class ShapeFactory {
    static createShape(type: EShape): Shape {
        switch (type) {
            case EShape.Circle:
                return new Circle(4);
            case EShape.Triangle:
                return new Triangle(3, 4, 5, 6, 7);
            default:
                throw new Error("Unknown shape type");
        }
    }
}
