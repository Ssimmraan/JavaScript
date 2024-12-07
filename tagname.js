let a = document.getElementsByTagName('h1');
console.log(a);
console.log(a[1]);


// --------------------------USING FOR LOOP---------------------------------------

for(let i=0;i<a.length;i++)
{
  console.log(a[i]);
  console.log(a[i].innerHTML);
}

// --------------------------USING MAP---------------------------------------------

console.log(Array.isArray(a));
let z = Array.from(a);
console.log(z);
z.map(function f1(p)
{
  console.log(p);
  
})

