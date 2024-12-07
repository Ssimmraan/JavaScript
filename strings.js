// WAP TO REMOVE ALL THE DUPLICATES FROM THE GIVEN STRINGS [MALAYALAM]

let str = "MALAYALAM";
let arr = str.split("");
console.log(arr);
let res = arr.filter(function f1(a,b)
{
  return (arr.indexOf(a)==b)
})
console.log(res);
let back = res.join("");
console.log(back);



