function f1()
{
  let x = document.getElementById("a").value;
  let y = document.getElementById("b").value;
  let z = document.getElementById("c").value;

  document.querySelector("body").style.backgroundColor = `rgb(${x}, ${y}, ${z})`;
  document.querySelector("h1").innerText = `rgb(${x}, ${y}, ${z})`;
}
