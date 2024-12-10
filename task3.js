// let x = document.getElementById("a");
// console.log(x);
// let y = document.getElementById("b");
// console.log(y);
// let z = document.getElementById("c");
// console.log(z);

function green()
{
  let p = document.querySelector("#a").innerHTML;
  document.querySelector("h1").style.color = p;
}

function red()
{
  let q = document.querySelector("#b").innerHTML;
  document.querySelector("h1").style.color = q;
}

function yellow()
{
  let r = document.querySelector("#c").innerHTML;
  document.querySelector("h1").style.color = r;
}
