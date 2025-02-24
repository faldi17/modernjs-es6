const num = [1, 2, 3, 4, 5];
const [first, second, third, fourth, fifth] = num;
console.log(third); // 3
// you can also do console.log besides third

const exampOther = ["Apple", 'A', 18];
const [fruit, letter, age] = exampOther;
console.log(fruit); // Apple

const [laptop, ...other] = exampOther;
console.log(other); // ['A', 18]

// object example
const person = {
    name: 'John',
    age2: 30
};
const { name, age2: newAge } = person; // age2: newAge this is for changing age2 to newAge as a new variable
console.log(name); // John
console.log(newAge); // 30