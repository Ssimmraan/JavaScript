function f1()
{
    const x = document.querySelector("#a").value.toLowerCase();
    const h1 = document.querySelector("h1");

    if (x.length >=1 && x.length <=5) 
    {
      h1.innerHTML = "Average";
      h1.style.color = "green";
    } 
    else if (x.length === 2) 
    {
      h1.innerHTML = "ok";
      h1.style.color = "orange";
    } 
    else 
    {
      h1.innerHTML = "Good";
      h1.style.color = "red";
    }
}