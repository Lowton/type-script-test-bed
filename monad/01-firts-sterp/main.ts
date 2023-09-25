const square = (x: number): number => x * x;
const addOne = (x: number): number => x + 1;

console.log('addOne(square(2))', addOne(square(2)));
