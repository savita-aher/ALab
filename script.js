// The initial numbers that must be verified.
console.log("Hello from Savita's script!");
//Part 1: Math Problems
/*console.log("Part 1 : Math Problems");

const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

//Check if all numbers are divisible by 5. Cache the result in a variable.
  let IsDivBy5 = n1 % 5 == 0 && n2 % 5 == 0 && n3 % 5 == 0 && n4 % 5 == 0;
  console.log(IsDivBy5);

//Check if the first number is larger than the last. Cache the result in a variable.
  let IsFirstLargeThanLast= n1>n4;
  console.log(IsFirstLargeThanLast);

//Accomplish the following arithmetic chain:
//Subtract the first number from the second number.
    let x=n2-n1;
//Multiply the result by the third number.
    let y=x*n3;
//Find the remainder of dividing the result by the fourth number.
    let z=y%n4;
    console.log(z);


/*Change the way that isOver25 calculates so that we do not need to use the NOT 
 operator (!) in other logic comparisons. Rename the variable as appropriate.

const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25
console.log(isOver25) */

console.log("Part 2: Practical Math");
//How many gallons of fuel will you need for the entire trip?
const distance=1500;
const budget =175;

let TotalFuelfor55permile = 1500/30;
let TotalPricefor55permile=TotalFuelfor55permile*3;
console.log("Fuel for 55mile/hour Average: " ,TotalFuelfor55permile + " gallons");
console.log("Price for 55mile/hour Average: $" ,TotalPricefor55permile);
console.log(""); // This prints a blank line

let TotalFuelfor60permile = 1500/28;
let TotalPricefor60permile=TotalFuelfor60permile*3;
console.log("Fuel for 60mile/hour Average: " ,TotalFuelfor60permile + " gallons");
console.log("Price for 60mile/hour Average: $" ,TotalPricefor60permile);
console.log(""); // This prints a blank line

let TotalFuelfor75permile = 1500/23;
let TotalPricefor75permile=TotalFuelfor75permile*3;
console.log("Fuel for 75mile/hour Average: " ,TotalFuelfor75permile + " gallons");
console.log("Price for 75mile/hour Average: $" ,TotalPricefor75permile);

//Will your budget be enough to cover the fuel expense?
/*// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = (n1 + n2 + n3 + n4) == 50;

// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;

// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;

// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;

// Here, we put the results into a single variable 
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for 
// "isUnder25" as an alternative.
const isValid = isSum50 && isTwoOdd && !isOver25 && isUnique;

// Finally, log the results.
console.log(isValid);

// Here's another example of how this COULD be done,
// but it SHOULD NOT be done this way. As programmers,
// we break things into small, manageable pieces so that
// they can be better understood, scaled, and maintained.
const dontDoThis = ((n1 + n2 + n3 + n4) == 50) && 
  ((n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2) && 
  !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) && 
  (n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4);*/