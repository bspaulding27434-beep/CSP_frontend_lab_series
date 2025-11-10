/* 
 Lab 004 – Conditionals and Loops
*/

// TODO 1: if..else with age discounts
let age = 15;

if ( age <= 16){
    console.log("Teen discount");
} elseif (age >= 65);{
   console.log("Senior Discount");
} {
    console.log("No Discount");
}

 ifelse ("no discount");
{}
 function breakfast(){
    console.log("Good morning ! what woud you like to eatafor breakfast?")
 }


// TODO 2: Nested if with two numbers
let number1 = 15;
let number2 = 10;

if(typeof number1 === 'number' && typeof number2 === 'number') {

if (number1 = number2) {
    console.log("Numbers are equal");
} else if (number1 > number2) {
    console.log("Number 1 is bigger");
} else {
    console.log("Number 1 is smaller");
}
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

//TECH
    //APPLE
    //NVDA
    //META

    //Healthcare
    //UHC
    //PFE
    //CVS


    //OIL
    //SHEL - SHELL
    //CVX - CHEVERON

    //Energy
    
    let ticker = "APPL"
    switch(ticker){
        case "AAPL":
        case"NVDA":
        case"META":
            console.log(`Your stock ${ticker} is in the Tech sector`);
            break;
        case "UHC":
        case "PFE":
        case "CVS":
            console.log(`Your stock ${ticker} is in the Healthcare sector`);
            break;
        case "SHEL":
        case "CVX":
            console.log(`Your stock ${ticker} is in the Energy sector`);
            break;
        default:
            console.log(`Your stock ${ticker} is in another sector`);
            break;
    }
// TODO 4: While loop (1 to 10)
let count = 1; 
do {
    
    console.log("Count: ", count); 
    
    
    count++;

} while (count <= 5) 

   

    let counter = 1
    while(counter<11) {
        console.log("Counter: " + counter);
        counter++; // Increments by 1
    }

console.log("--------------");
let counter1 = 10;
    while (counter2>0) {
        console.log("Counter2: " + counter2);
        counter2--; // Decrements by 1
    }
    let counter2 = 10;
    while (counter2>0) {}
// TODO 5: Do..while loop (1 to 5)
let counter3 = 1;  

do {
     if (count % 10 == 0) {
         console.log("Count: ", counter3)
         counter3++;
     } else {
        count++;
     }

} while (count <= 5)

      
// TODO 6: For loop (1 to 20, print "ten" at 10 and "twenty" at 20)
for (let i = 1; i <= 20; i++) {
  if (i == 10) {
   console.log("TEN");
  } else if (i == 20) {
    console.log("TWENTY");
  } else {
     console.log("Value",i);
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
    
    if (x % 2 === 0) {
        continue; 
    }
}
    
    if (x % 2 === 0) {
        console.log(x + " is even");
    } else {
        console.log(x + " is odd");
    }

