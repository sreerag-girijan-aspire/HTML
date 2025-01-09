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

let e = 1;                  //
let f = 3;                  //
[e, f] = [f, e];            // swap
console.log(e); // 3        //    
console.log(f); // 1        //

const arr = [1, 2, 3];
[arr[2], arr[1]] = [arr[1], arr[2]];
console.log(arr); // [1, 3, 2]

