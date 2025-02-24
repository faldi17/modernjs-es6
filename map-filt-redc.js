const numbers = [1, 2, 3, 4, 5];

// map
const doubledNumbers = numbers.map((number) => number * 2);
console.log(doubledNumbers); // [2, 4, 6, 8, 10]

const multiNumbers = doubledNumbers.map((examp) => examp * 5);
console.log(multiNumbers); // [10, 20, 30, 40, 50]


// filter
const evenNumbers = numbers.filter((number) => number % 2 === 0);
console.log(evenNumbers); // [2, 4]

const threeNumbers = numbers.map((number) => number * 3);
const evenNumbers2 = threeNumbers.filter((number) => number % 2 === 0);
console.log(evenNumbers2); // [6, 12]

const smallerNineNumbers = threeNumbers.filter((number) => number < 9);
console.log(smallerNineNumbers); // [6, 3]

// reduce
const sumNumbers = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sumNumbers); // 15

const multiplyNumbers = numbers.reduce((accumulator, currentValue) => accumulator * currentValue, 1);
console.log(multiplyNumbers); // 120
/*
    kenapa bisa 120?
    karena reduce juga menggunakan accumulator yang dimulai dari 1 (default value),
    dan masing-masing nilai array numbers dikali dengan accumulator.
    1 x 1 = 1
    1 x 2 = 2
    2 x 3 = 6
    6 x 4 = 24
    24 x 5 = 120
*/