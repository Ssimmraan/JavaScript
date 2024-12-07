// WAP TO PRINT SOMESHWAR IF THE NUM IS DIVISIBLE BY 3, PRINT SOMESHWAR PRIVATE IF THE NUM IS DIVISIBLE BY 4, PRINT SOMESHWAR PRIVATE LTD IF THE NUM IS DIVISIBLE BY 3 AND 4


let a = Number(prompt("enter num"));
if(a%3==0 && a%4==0)
{
  console.log(`SOMESHWAR PRIVATE LTD`);
}
else if(a%4==0)
{
  console.log(`SOMESHWAR PRIVATE`);
}
else if(a%3==0)
{
  console.log(`SOMESHWAR`);
}
else 
{
  console.log(`num not valid`);
}
