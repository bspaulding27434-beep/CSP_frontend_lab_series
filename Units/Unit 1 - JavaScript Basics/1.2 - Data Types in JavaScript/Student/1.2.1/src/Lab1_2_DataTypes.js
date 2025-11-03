/* 
 Lab 002 – Data Types in JavaScript
*/

// TODO 1: Create variables age (34) and price (12.99), print both


let age = 34; 
console.log('Age: ${age}')
let price = 12.99;
console.log("Price: " + price)

// TODO 1b: Divide "Sandra" by 2 and print result (expect NaN)
let whatIsThis = "Sandra";
const whatIsName = name/2;

console.log("WhatIsThis" + whatIsThis);



// TODO 2: Print basic math ops: + - * /

console.log("4 / 2 = ", 4 / 2);

console.log(5*5);
console.log(7/8)


// TODO 2b: Use exponentiation (2 ** 3) and modulo (7 % 2)

console.log("2 ** 3 = ", 2 ** 3); 
console.log("7 % 2 = ", 7 % 2);

// TODO 3: Assignment operators with score variable
let score = 10;

score += 2;
console.log(score);

score-=2
console.log(score)

// TODO 4: Expressions with operator precedence
let number = ((7 + 5) / 3) - 8;
console.log(number)
let result2= 2 + 2 * 2 // 6
// TODO 5: Strings (single, double, backticks)
let person = David;
console.log('Hello there, ${person}')
let man = "David is nicknamed \"The GOAT\".";
console.log('Mr. Explorer')
console.log("Mr.Explorer")
let rage = ('2025 - 1958');

// TODO 6: String properties and methods
// - greeting.length
const greeting = "Hi"
console.log(greeting.length)
// - charAt(0), charAt(5), [3]
console.log("CharAt(0) ", greeting.charAt(0));
console.log("CharAt(5) ", greeting.charAt(5));
console.log("CharAt(3) ", greeting.charAt(3));
console.log("Greeting length: " + greeting.length)
// - indexOf("sad")
let phrase = "Don't be sad, be happy!"
console.log("Index of sad", phrase.indexOf("sad"));

// - repeat()
console.log("la".repeat(5))
// - substring, substr, slice examples
console.log("substring", phrase.substring(0, 3));
console.log("Substr() ", phrase.substr(0, 3));
console.log("Slice ", phrase.slice(-23, -20))
// 🚀 Stretch Goals
// - Even number check using %
for(let i = 1; i < 101; i++)
    if(i % 2 ==0){
    console.log('The answer ${i} is even')
console.log('The answer ${i} is odd')
    }
// - localeCompare() example
console.log("banana".localeCompare("banana"))