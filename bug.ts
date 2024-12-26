function add(a: number, b: number): number {
  return a + b;
}

let result = add(1, "2"); // Type error will not be caught during compilation because of type inference
console.log(result); // This will cause a runtime error