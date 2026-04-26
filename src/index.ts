import { ShapeFactory } from "./factory/ShapeFactory.js";
import { EShape } from "./types/EShape.js";

// client code
// client don't need to know about the specific classes, just use the factory to create shapes and call their methods
const circle = ShapeFactory.createShape(EShape.Circle);
console.log("Circle Area:", circle.area());
console.log("Circle Perimeter:", circle.perimeter());

const triangle = ShapeFactory.createShape(EShape.Triangle);
console.log("Triangle Area:", triangle.area());
console.log("Triangle Perimeter:", triangle.perimeter());