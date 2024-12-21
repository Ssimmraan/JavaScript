let z = fetch("https://fakestoreapi.com/products");
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
    document.querySelector("h1").innerHTML += `
    <div class="product-card">
    <h2 class="product-title">Title: ${data.title}</h2>
    <p class="product-price">Price: $${data.price}</p>
    <p class="product-description">Description: ${data.description}</p>
    <p class="product-category">Category: ${data.category}</p>
    <img class="product-image" src="${data.image}" alt="${data.title}">
    </div>`
    
  })
})

