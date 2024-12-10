function f1()
{
  let width = document.getElementById("width").value;
  document.querySelector("#abc").style.width = width + "px";
}

function f2()
{
  let height = document.getElementById("height").value;
  document.querySelector("#abc").style.height = height + "px";
}

function f3()
{
  let border_radius = document.getElementById("border_radius").value;
  document.querySelector("#abc").style.borderRadius = border_radius + "px";
}

function f4()
{
  let bg_color = document.getElementById("bg_color").value;
  document.querySelector("#abc").style.backgroundColor = bg_color;
}