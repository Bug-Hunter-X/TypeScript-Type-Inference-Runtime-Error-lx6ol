# TypeScript Type Inference Runtime Error

This repository demonstrates a scenario where TypeScript's type inference can lead to unexpected runtime errors despite seemingly correct code.

The `add` function is intended to add two numbers, but due to type inference, the compiler doesn't catch the case where a string is passed as an argument. This results in a runtime error.

The solution shows how to enhance type safety to prevent this kind of error.

## How to reproduce

1. Clone the repo
2. Run `tsc bug.ts` to compile the TypeScript code.
3. Run the compiled JavaScript code (bug.js). You'll observe a runtime error.
4. Run `tsc bugSolution.ts` and then run the compiled JavaScript (bugSolution.js) to see how to avoid the runtime error. 