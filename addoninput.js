function f1()
{
  let inputs = document.querySelectorAll("input");
  let num1 = Number(inputs[0].value);
  let num2 = Number(inputs[1].value);

  document.querySelector("h1").innerHTML = num1 + num2;
}

function f2()
{
  let inputs = document.querySelectorAll("input");
  let num1 = Number(inputs[0].value);
  let num2 = Number(inputs[1].value);

  document.querySelector("h1").innerHTML = num1 - num2;
}