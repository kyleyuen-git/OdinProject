// Variables
let firstName = "Kyle"; // we can end with a semicolon, like in C++, but we don't have to
let lastName = "Yuen"

firstName = "RandomFirstName" // reassigning variables

console.log(firstName)
console.log(lastName)

// Constant 
const pi = 3.14
console.log(pi)

// pi = 10
// console.log(pi) // "Uncaught TypeError: Assignment to constant variable." 
// You can't reassign a constant


// Numbers
let x = (3 + 2) - 76 * (1 + 1) // JS math follows PEMDAS 
console.log(x)

// Datatypes and Conditions
// Strings
const string = "The revolution will not be televised."
console.log(string)
// You can use "" or '' or `` to wrap strings

// `` are called backticks, and string declared with backticks are a special type of string 
// called a template literal, which means you can embed Javascript in them
// Embedding JavaScript
const name = "Kyle"
// Inside a template literal, you can wrap JavaScript variables or expressions inside ${ }, 
// and the result will be included in the string
const greeting = `Hello, ${name}` 
console.log(greeting) // prints out "Hello, Kyle"

// You can use the same technique to join together two variables:
const one = "Hello, "
const two = "how are you?"
const joined = `${one}${two}`
console.log(joined)

// Concatenation using "+"
const greeting2 = "Hello"
const name2 = "Bob"
console.log(greeting2 + ", " + name2) // prints out "Hello, Bob"

// Concatenation using "+" vs Template Literals? Template Literals are more readable

// Including expressions in strings
const song = "Rewind by Goldspot"
const score = 9.5
const highestScore = 10
const output = `I like the song ${song}. I give it a score of ${(score/highestScore)*100}%.`
console.log(output)

// Multiline string
// Template literals respect the line breaks in source code, 
// so you can write strings that span multiple lines
const newLine = `Today, June 23, 2026, I ate 3 eggs, 
a whole chicken sausage, and 8 seconds of squirted ketchup, 
all sprinkled with BBQ Sunchips`
console.log(newLine) // prints it out exactly like above, with all the line breaks

// To have the equivalent output with a normal string, you need the newline "\n" line break 
// also used in cpp and c
const newLine2 = "Yesterday, I woke up at 2 pm.\nAll I ate yesterday was a piece of egg and cheese bagel from Father's day.\nIt was cold"
console.log(newLine2)

// Including quotes in strings
const goodQuotes1 = "She said 'I'm not going in there!'. And then she did" // using different types of quotes
const goodQuotes2 = "I\'ve got no right to take my place" // using the escape character "\". I like this one
console.log(goodQuotes1)
console.log(goodQuotes2)

// Numbers vs Strings
const coolBandName = "Front "
const number = 242
console.log(coolBandName + number)

// Number() converts an argument into a number
const myString = "123"
const myNum = Number(myString)
console.log(typeof myNum) // prints "number" because we typecasted a string into a number

// String() converts an argument into a string
const myNum2 = 123;
const myString2 = String(myNum2);
console.log(typeof myString2); // prints "string" because we typecasted a number into a string


// Conditionals
// Comparisons  ---
// for(let i = 0; i<3; i++){
//     alert(2>1) // displays a popup box that the user can press "ok" to exit
// }

// Regular equality "=="
// operands of different types are converted to numbers by the equality operator "=="
// an empty string, just like false, becomes 0
console.log(0 == false) // prints "true"
console.log('' == false) // prints "true"

// What if we want to differentate 0 from false?
// Strict equality "==="
// A strict equality operator === checks the equality without type conversion.
console.log(0 === false) // prints "false"

// Comparison with null and undefined
console.log(null == undefined) // prints "true"
console.log(null === undefined) // prints "false"
console.log(null > 0 );  // (1) false
console.log(null == 0 ); // (2) false
console.log(null >= 0 ); // (3) true

console.log(undefined > 0 ); // false (1)
console.log(undefined < 0 ); // false (2)
console.log(undefined == 0 ); // false (3)


// Condiiton branching: if, '?' ---
// let year = prompt("In which year did you first watch How I Met Your Mother?")
// if(year == 2024){
//     console.log("You are correct")
//     alert("You are correct")
// }

// Boolean Conversion
if(0){ // A number 0, an empty string "", null, undefined, and NaN all become false
    console.log("true")
}
else{
    console.log("false :)") // prints out "false :)"
}

if(1){ // number 1 is converted to true
    console.log("true") // prints out "true"
}
else{
    console.log("false :)")
}


// Conditional Operator "?" ---
// let accessAllowed
// let age = prompt("How old are you?", "") // the second parameter is for a "default empty string" if the user doesn't type anything, which converts to false
// if(age > 18){
//     accessAllowed = true
// } else {
//     accessAllowed = false
// }
// alert(accessAllowed) // shows "true" if age > 18

// The above can be simplified with the "?" operator ---
// let accessAllowed;
// let age = prompt('How old are you?', '');
// accessAllowed = (age > 18) ? true : false;
// alert(accessAllowed);

