const num1 = [1, 2, 3, 4];
const num2 = [5, 6, 7, 8];
const allNums = [...num1, ...num2];
console.log(allNums); // [1, 2, 3, 4, 5, 6, 7, 8]

const mergedNums = num1.concat(num2);
console.log(mergedNums); // [1, 2, 3, 4, 5, 6, 7, 8]

const char1 = ['A', 'B', 'C'];
const char2 = ['D', 'E', 'F'];
const allChars = [...char1, ...char2];
console.log(allChars); // ['A', 'B', 'C', 'D', 'E', 'F']

const mergedChars = char1.concat(char2);
console.log(mergedChars); // ['A', 'B', 'C', 'D', 'E', 'F']

const obj1 = { name: 'John', age: 30 };
const obj2 = { gender: 'Male', city: 'New York' };
const mergedObj = {...obj1,...obj2};
console.log(mergedObj); // { name: 'John', age: 30, gender: 'Male', city: 'New York' }
/*
    jangan pake concat buat gabungin object yahw, ga bisa hehe
    const mergedObj2 = obj1.concat(obj2); // ini cara yg salah
*/


/*
    jadi secara fungsi spread operator ini hampir mirip concat, yaitu menggabungkan array
    tapi concat sendiri ga bisa gabungin object
*/