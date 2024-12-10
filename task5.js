function f1()
{
  let x = document.getElementById("a").value;
  let y = document.getElementById("b").value;
  let z = document.getElementById("c").value;
  let p = document.getElementById("d").value;

  document.querySelector("body").style.backgroundColor = `rgba(${x}, ${y}, ${z}, ${p})`;
  document.querySelector("h1").innerText = `rgba(${x}, ${y}, ${z}, ${p})`;
}
