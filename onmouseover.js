function f1()
{
  let x = document.querySelector("input");
  console.log(x);
  let y = x.value;
  console.log(y);
  document.querySelector("h1").innerHTML = y;
}


function f2()
{
  document.querySelector("h1").innerHTML = "";
}