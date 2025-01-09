const result = /(a+)(b+)(c+)(d+)(e+)(f+)/.exec("aaabccdddeefff");
[, a, b, c] = result;
console.log(a, b, c); // "aaa" "b" "cc"
console.log(result);

[, a, b, c,...d] = result;
console.log(a, b, c, d);


const obj = { a: 1, b: 2 };
var { a, b } = obj;
console.log(a, b);


var { a:a1, b:b1 } = obj;
console.log(a1, b1);

let a = 1;                  //
let b = 3;                  //
[a, b] = [b, a];            // swap
console.log(a); // 3        //    
console.log(b); // 1        //

const arr = [1, 2, 3];
[arr[2], arr[1]] = [arr[1], arr[2]];
console.log(arr); // [1, 3, 2]

