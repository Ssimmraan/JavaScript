function store()
{
  let x = document.querySelector("#a").value;
  let y = document.querySelector("#a").value;
  localStorage.setItem("myemail",x);
  localStorage.setItem("mypass",y);
}

let data = localStorage.getItem("myemail");
console.log(data);
localStorage.removeItem("mypass");
localStorage.clear();
