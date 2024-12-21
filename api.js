let z = fetch("https://jsonplaceholder.typicode.com/users");
console.log(z);

let y = z.then((data)=>
{
  return data.json();
})
console.log(y);

y.then((r)=>
{
  console.log(r);
  r.map((data)=>
  {
    console.log(data);
    document.querySelector("h1").innerHTML += `id:${data.id} 
    <br> 
    name:${data.name}
    <br> 
    username:${data.username}
    <br> 
    email:${data.email} <hr> <br> <br>`
    
  })
  
})

