let x = document.getElementsByClassName("btn");
console.log(x);
let scn = document.getElementById("s");
console.log(scn);
let ce = document.getElementById("ce");
console.log(ce);
let eq = document.getElementById("eq");
console.log(eq);



for(let i=0;i<x.length;i++)
{
  x[i].addEventListener("click", () =>
  {
    scn.value = scn.value+x[i].innerHTML;
  })
}

let data = document.getElementById("ac");
data.addEventListener("click", () =>
{
  scn.value = "";
})


let data1 = document.getElementById("ce");
data1.addEventListener("click", () =>
{
    scn.value = scn.value.slice(0,-1);
})

let ans = document.getElementById("eq");
ans.addEventListener("click", () =>
{
  scn.value = eval(scn.value);
})