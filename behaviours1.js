// WAP TO CHECK WHETHER THE GIVEN NUM IS DIVISIBLE BY  3 AND 4 OR NOT. FUNCTION SHLD BE WITH PARAMETER AND WITH RETURN.

let num = Number(prompt("enter num1"));

function div(num)
{
  if(num%3==0 && num%4==0)
  {
    return `num is divisible by 3 and 4`
  }
  else if(num%3==0)
  {
   return `num is divisible by 3`
  }
  else if(num%4==0)
  {
    return `num is divisible by 4`
  }
  else 
  {
    return `num is not divisible by 3 and 4`
  }
}

let result=div(num);
console.log(result);


