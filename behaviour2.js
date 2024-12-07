// WAP TO PRINT ALL THE NATURAL NUM BETWEEN THE GIVEN TWO RANGES BY THE USER FUNCTION BEHAVIOUR WILL BE WITH PARAMETER WITHOUT RETURN

// let num1= Number(prompt("enter num1"));
// let num2= Number(prompt("enter num2"));

// function range(x,y)
// {
//   if(x>0 && y>0)
//   {
//     console.log(`${x} and ${y} is natural num`);
//   }
//   else
//   {
//     console.log(`${x} and ${y} is not natural num`);
//   }
// }

// range(num1,num2);

// ---------------------------ANOTHER METHOD---------------------------

let num1= Number(prompt("enter num1"));
let num2= Number(prompt("enter num2"));

function natural(x,y)
{
  for(let i=x;i<=y;i++)
  {
    if(i>0)
    {
      console.log("natural num");
    }
  }
}

natural(num1,num2);