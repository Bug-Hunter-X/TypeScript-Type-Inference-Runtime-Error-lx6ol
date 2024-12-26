function add(a: number, b: number): number {
  return a + b;
}

function addSafe(a: number, b: number): number {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Both arguments must be numbers');
  }
  return a + b;
}

let result1 = addSafe(1, 2); // Correct usage
console.log(result1); // Output: 3

// This will now throw an error at runtime
try {
    let result2 = addSafe(1, "2"); 
    console.log(result2);
} catch (error) {
    console.error(error);
}

//Alternative using Type Guards
function isNumber(x: any): x is number {
    return typeof x === 'number';
}

function addSafeTypeGuard(a: any, b: any): number {
    if (!isNumber(a) || !isNumber(b)) {
        throw new Error('Both arguments must be numbers');
    }
    return a + b;
}

let result3 = addSafeTypeGuard(1,2);
console.log(result3); //Output: 3

try {
    let result4 = addSafeTypeGuard(1, "2");
    console.log(result4);
} catch (error) {
    console.error(error);
}