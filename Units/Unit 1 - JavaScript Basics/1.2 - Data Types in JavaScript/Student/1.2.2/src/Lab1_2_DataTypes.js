/* ===========================================================
   Lab 1.2 – Data Types
   Primitive types, typeof, and basic conversions.
   =========================================================== */

 HEAD
// TODO 1: Declare one variable for each primitive type discussed in the PDF.
// string, number, boolean, null, undefined
let movie = "Bronx Tails"
let rating = 6.8;
let revenue = null;
let oscars;
let inTheaters = true;

console.log("Movie", typeof movie)
console.log("Rating", typeof rating)
console.log("oscars", typeof oscars)
console.log("inTheaters", typeof inTheaters)
// TODO 2: Use typeof to log each variable's type.
// console.log(typeof s);

// TODO 3: Show string concatenation vs numeric addition using "5" and 5.
console.log("5" + 5)
console.log(5 + 5 + "5")
console.log("5" + (5 + 5))

// TODO 4: Explicit conversions using Number(), String(), Boolean()
console.log(Number("5"))
console.log(Boolean("True"))
console.log(typeof String(4))
// TODO 5: NaN and isNaN: demonstrate a case where conversion fails.
console.log(isNaN("hello"))
console.log("4")
// TODO 6: Template literals: print a line that mixes text + a variable value.

// 1️⃣ Primitive Types
// Declare one variable for each primitive type: string, number, boolean, null, undefined.
// Print each variable and its type using typeof.


// 2️⃣ Typeof Check
// Compare typeof null and typeof undefined.
// Explain in a comment why the results differ.


// 3️⃣ Concatenation vs Addition
// Use "5" and 5 to demonstrate the difference between concatenation and numeric addition.
// Print both results and explain the behavior.


// 4️⃣ Explicit Conversions
// Convert different values using Number(), String(), and Boolean().
// Print each result and describe what you notice.


// 5️⃣ NaN and isNaN()
// Try converting a non-numeric string such as "hello" to a number.
// Use isNaN() to check the result and comment on the output.


// 6️⃣ Template Literals
// Create variables name and age.
// Use a template literal to print: Hello, my name is ${name} and I am ${age} years old.

>>>>>>> upstream/main

console.log(`My favorite movie is ${movie}
   its rating on IMDB is ${rating}
   the movie has made $${revenue} at the
   box office and has won ${oscars} oscars
   and is currently in theaters: ${inTheaters}`)
/* ===========================================================
   🎟 EXIT TICKET
   1. Which data type(s) did you use today and why?
   2. Where did you encounter type conversion (implicit or explicit)?
   3. One misconception I corrected or a tip I learned.
   4. What would you try next time to debug faster?
   =========================================================== */
