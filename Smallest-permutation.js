/*
Given a number, 
find the permutation with 
the smallest absolute value 
(no leading zeros).

Examples:
  -20 => -20
  -32 => -23
  0 => 0
  10 => 10
  29394 => 23499

The input will always be an integer.
*/


// Solution

const minPermutation = n => +[...n+''].sort().join('').replace(/(0+)(.)/, "$2$1")

// or

function minPermutation(n) {
  let numbers = String(Math.abs(n)).split("").sort((a,b) => a-b);
  
  if(numbers[0] == 0) {
    const smallstNum = numbers.findIndex(el => el > 0);
    numbers[0] = numbers[smallstNum];
    numbers[smallstNum] = 0;
  }
  
  return numbers.join("") * Math.sign(n);
}