// INPUT:- [2,3,4] || OUTPUT:- [12,8,6]

let input = [2,3,4];
let output = input.reduce((product,num) => product*num)
console.log(output);
let res = input.map(num1 => output/num1)
console.log(res);
