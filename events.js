// ---------------------------FIRST METHOD------------------------------------------------

// let a = document.querySelector('button');
// console.log(a);
// a.onclick= function f1()
// {
//   alert("Hey User")
// }

// ---------------------------SECOND METHOD------------------------------------------------

// function f1()
// {
//   alert("Hey User")
// }

// ---------------------------THIRD METHOD------------------------------------------------

let b = document.getElementsByTagName("button");
console.log(b);
console.log(b[0].addEventListener("click",function f1()
{
  alert("Hey User")
}));

