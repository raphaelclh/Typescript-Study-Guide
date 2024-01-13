// Primitive Types
const a: string = "string!";
const b: number = 1;
const c: boolean = false;

// Arrays
const arr: string[] = ["arr"];

// any (do not use this as it disables all further type checking)
let obj_any: any = { x: 0 };
obj_any.foo();
obj_any();
obj_any.bar = 100;
obj_any = "hello";
const n: number = obj_any;

// No type annotations on Variables is needed
// TS will infer
let myName = "Alice";

// Functions
function greet(name: string) {
  console.log(name.toUpperCase());
}
greet("hi");

// Return Type Annotations
function getFaviouriteNumber(): number {
  return 10; // must return a number
}

// Return Type Annotations with Promises
async function getFaviouriteNumber2(): Promise<number> {
  return 25;
}

// Anonymous Functions
// Anonymous functions are a little bit different from function declarations. When a function appears in a place where TypeScript can determine how it’s going to be called, the parameters of that function are automatically given types.

const names = ["Alice", "Bob", "Eve"];

// Contextual typing for function - parameter s inferred to have type string
names.forEach(function (s) {
  console.log(s.toUpperCase());
});

// Contextual typing also applies to arrow functions
names.forEach((s) => {
  console.log(s.toUpperCase());
});
