 fruits = ["Apple", "Banana"];
fruits.push("Orange");
console.log(fruits); // ["Apple", "Banana", "Orange"]


 fruits = ["Apple", "Banana", "Orange"];
fruits.pop();
console.log(fruits); // ["Apple", "Banana"]


 fruits = ["Apple", "Banana", "Orange"];
fruits.shift();
console.log(fruits); // ["Banana", "Orange"]


 fruits = ["Banana", "Orange"];
fruits.unshift("Apple");
console.log(fruits); // ["Apple", "Banana", "Orange"]


 fruits = ["Apple", "Banana"];
let moreFruits = ["Orange", "Mango"];
let allFruits = fruits.concat(moreFruits);
console.log(allFruits); // ["Apple", "Banana", "Orange", "Mango"]


 fruits = ["Apple", "Banana", "Orange", "Mango"];
let citrus = fruits.slice(1, 3);
console.log(citrus); // ["Banana", "Orange"]


 fruits = ["Apple", "Banana", "Orange"];
fruits.splice(1, 1, "Mango");
console.log(fruits); // ["Apple", "Mango", "Orange"]


 fruits = ["Apple", "Banana", "Orange"];
 index = fruits.indexOf("Banana");
console.log(index); // 1


 fruits = ["Apple", "Banana", "Orange", "Banana"];
 index = fruits.lastIndexOf("Banana");
console.log(index); // 3


 fruits = ["Apple", "Banana", "Orange"];
fruits.forEach(fruit => console.log(fruit));
// Apple
// Banana
// Orange


 numbers = [1, 2, 3];
let doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6]


 numbers = [1, 2, 3, 4];
let even = numbers.filter(num => num % 2 === 0);
console.log(even); // [2, 4]


 numbers = [10, 2, 3, 4];
let sum = numbers.reduce((total, num) => total + num);
console.log(sum); // 10


 numbers = [1, 2, 3, 4];
let found = numbers.find(num => num > 2);
console.log(found); // 3


 numbers = [1, 2, 3, 4];
 index = numbers.findIndex(num => num > 2);
console.log(index); // 2


 fruits = ["Apple", "Banana", "Orange"];
let hasBanana = fruits.includes("Banana");
console.log(hasBanana); // true


 fruits = ["Apple", "Banana", "Orange"];
let joined = fruits.join(",");
console.log(joined); // "Apple, Banana, Orange"


 fruits = ["Apple", "Banana", "Orange"];
fruits.reverse();
console.log(fruits); // ["Orange", "Banana", "Apple"]


 fruits = ["Banana", "Apple", "Orange"];
fruits.sort();
console.log(fruits); // ["Apple", "Banana", "Orange"]


 fruits = [3, 12, 1];
fruits.sort((a,b)=>{return a-b});
console.log(fruits); // ["Apple", "Banana", "Orange"]


 numbers = [1, [2, [3, 4]], 5];
let flatNumbers = numbers.flat(2);
console.log(flatNumbers); // [1, 2, 3, 4, 5]


 numbers = [1, 2, 3];
let flatMapped = numbers.flatMap(num => [num, num * 2]);
console.log(flatMapped); // [1, 2, 2, 4, 3, 6]
