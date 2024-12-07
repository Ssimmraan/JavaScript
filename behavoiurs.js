// WAP TO CHCK WHETHER THE GIVEN NO IS POSITIVE OR NEGATIVE WHICH IS GIVEN BY THE USER. USE NAMED FUNCTION WHOSE BEHAVIOUR WILL BE WITH PARAMETER AND WITHOUT RETURN

let num = Number(prompt("enter the number"));
function check(number)
{
  if(number>0)
  {
    console.log(`${number} is positive`);
  }
  else if(number==0)
  {
    console.log(`${number} is 0`);
  }
  else
  {
    console.log(`${number} is negative`);
  }
  return number;
}

check(num);


// ----------------------------------------OR---------------------------------

// WAP TO CHCK WHETHER THE GIVEN NO IS POSITIVE OR NEGATIVE WHICH IS GIVEN BY THE USER. USE NAMED FUNCTION WHOSE BEHAVIOUR WILL BE WITH PARAMETER AND WITH RETURN

// let num = Number(prompt("enter the number"));
// function check(number)
// {
//   if(number>0)
//     {
//       return `${number} is positive` ;
//     }
//     else if(number==0)
//     {
//       return `${number} is 0`;
//     }
//     else
//     {
//       return `${number} is negative`;
//     }
//   }
  
//   let result = check(num); 
//   console.log(result);
  
