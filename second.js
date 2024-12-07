let a = Number(prompt("enter num1"));
console.log(typeof(a));
console.log(a);
let b = Number(prompt("enter num2"));
console.log(typeof(b));
console.log(b);
if(a>b)
{
  console.log(`${a} is geater than ${b}`);
}
else if(a===b)
{
  console.log(`${a} and ${b} both are equal`);
}
else
{
  console.log(`${a} is lesser than ${b}`);
}