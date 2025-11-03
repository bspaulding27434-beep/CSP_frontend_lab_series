/* ===========================================================
   Lab 1.1 – Intro
   Exploring JavaScript syntax, console output, and variables.
   =========================================================== */

// TODO 1: Print your full name with console.log()
console.log("Brandon Spaulding");
// TODO 2: Declare variable favoriteFood, assign "Steak", then reassign "Pizza"
    let favoriteFood = "Steak";
    console.log(favoriteFood);
    favoriteFood = "Pizza";
    console.log(favoriteFood);
// TODO 3: Create variable mystery, assign a string, then a number, print type each time
   let mystery =  "Hello!";
   console.log("value:" + mystery + " Data Type: " + typeof mystery)
   mystery = 68;          
   console.log("Value:"+ mystery + " Data Type: " + typeof mystery)




// TODO 4: Declare const schoolName, try to reassign
const schoolName = ("Christopher Columbus High School")
// schoolName = "Palmetto"; Cannot reaqssign value to const

// TODO 5: Create three valid camelCase variables and print them

let myFood; "pizza";
let mycolor; "red";
let myName; "Brandon Spaulding";

console.log(myFood)
console.log(myColor)
console.log(myName)
// 🚀 Stretch Goals (optional)
// - Create a variable age and print "I am X years old" using concatenation
// - Repeat using template literals

let age = 17;
console.log ('I am $(age) years old') // Template literals
console.log( "I am " + age + " years old") // String concantenation
/* ===========================================================
   🎟 EXIT TICKET
   1. What new concept or skill did you learn in this lab? I learned how to use console.log and how variable values work. I also learned let and const.
   2. What challenges did you encounter, and how did you solve them? I encountered challenges on how to write codes correctly, such as variables and values to were there were no errors.
   3. Where else could this programming concept be useful? It will allow my code to be neat.
   =========================================================== */
 

let a = "7";
let b = "3";
let c = 4;

console.log(Number(a) + Number(b))
console.log(typeof String(c))
let width = 25;
let height = 5;

let area = width * height;
let perimeter = 2 * (width + height);

console.log('The area of the rectangle is $(area)')
console.log('The perimeter of the rectangle is $(perimeter)')