/* 
 Lab 004 – Conditionals and Loops
*/

// TODO 1: if..else with age discounts
let age = 15;
if ("teen discount");{
    i<=16;
}
elseif ("senior discount");{


    i>=65;
}

 ifelse ("no discount");


// TODO 2: Nested if with two numbers
let number1 = 15;
let number2 = 10;

if (number1 = number2) {
    console.log("Numbers are equal");
} else if (number1 > number2) {
    console.log("Number 1 is bigger");
} else {
    console.log("Number 1 is smaller");
}
// TODO 3: Switch statement for language greeting

let language = "French";

switch (language) {
    case "Spanish":
        console.log("Hola, mundo!");
        break; 
    case "French":
        console.log("Bonjour tout le monde");
        break;
    case "English":
        console.log("Hello, world!");
        break;
    default: 
        console.log("Hello, world!"); 
        break;
}
// TODO 4: While loop (1 to 10)
let count = 1; 
do {
    
    console.log("Count: ", count); 
    
    
    count++;

} while (count <= 5) 
// TODO 5: Do..while loop (1 to 5)
let i = 1;  

do {
     if (count % 10 == 0) {
         console.log("Count: ", count)
         count++;
     } else {
        count++;
     }

} while (count <= 5)

      
// TODO 6: For loop (1 to 20, print "ten" at 10 and "twenty" at 20)
for (let i = 1; i <= 20; i++) {
  if (i === 10) {
   console.log("ten");
  } else if (i === 20) {
    console.log("twenty");
  } else {
     console.log(i);
  }
} 

  

// TODO 7: Even/Odd loop (1 to 20)
for (let x = 1; x <= 20; x++) {
    
    if (x % 2 === 0) {
        console.log(x + " is even");
    } 
    
    else {
        console.log(x + " is odd");
    }
}
// 🚀 Stretch Goals
// - Backwards loop from 20 to 1
console.log("--- Backwards Loop (20 to 1) ---");

for (let i = 20; i >= 1; i--) {
    console.log(i);
}
// - Skip multiples of 3 in even/odd loop
console.log("--- Even/Odd Loop (Skipping Multiples of 3) ---");

for (let x = 1; x <= 20; x++) {
    
    if (x % 3 === 0) {
        continue; 
    }
}
    
    if (x % 2 === 0) {
        console.log(x + " is even");
    } else {
        console.log(x + " is odd");
    }

