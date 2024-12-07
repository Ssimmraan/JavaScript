// INPUT :- ['ABC','XYZ','PQR'] || OUTPUT :- ['RPQ', 'ZYX','CBA']

// let input = ['abc','xyz','pqr'];
// let rev = [];
// let output = input.map(str => str.split('').reverse('').join(''));
// console.log(output);

let input = ['abc','xyz','pqr'];
let rev = [];
let output = input.map(function f1(ele)
{
  console.log(ele);
  return ele.split('').reverse('').join('');
})

console.log(output);



