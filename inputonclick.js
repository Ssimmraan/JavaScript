function f1()
{
  let d = document;
  let x = d.querySelector("input");
  console.log(x);
  let y = x.value;
  console.log(y);
  d.querySelector("h1").innerHTML = y;
}