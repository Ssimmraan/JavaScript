let a = Number(prompt("enter num"));
if(a%3 == 0)
{
  console.log(`${a} divisible by 3`);

  if(a%2 == 0)
  {
    console.log(`${a} divisible by 2`);
  }
  else
  {
    console.log(`num is not divisible by 2`);
  }
}

else
{
  console.log(`num is not divisible 3`);
}