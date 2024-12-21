function f1(event)
{
  event.preventDefault();
  let x = document.querySelector("#a").value;
  let y = document.querySelector("#b").value;
  console.log(x,y);
  let z = document.getElementsByTagName("b");
  if(x == "" && y == "")
  {
    z[0].innerHTML = "email is mandatory";
    z[0].style.color = "red";
    z[1].innerHTML = "password is mandatory";
    z[1].style.color = "red";
    let a = document.getElementsByTagName("input");
    a[0].style.border = "2px solid red";
    a[1].style.border = "2px solid red";
  }
  else if(x == "")
  {
    z[0].innerHTML = "email is mandatory";
    z[0].style.color = "red";
    let a = document.getElementsByTagName("input");
    a[0].style.border = "2px solid red";
  }
  else if(y == "") 
  {
    z[1].innerHTML = "password is mandatory";
    z[1].style.color = "red";
    let a = document.getElementsByTagName("input");
    a[1].style.border = "2px solid red";
  }
  
}