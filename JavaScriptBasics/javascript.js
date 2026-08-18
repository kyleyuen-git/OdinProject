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

function recur(num){
    console.log(num);
    if(num==1){
        return true;
    }
    else{
        return recur(num-1) // "return recur(num-1)" instead of just "recur(num-1)" so that 
        // after the last recur(1) returns true, the true is passed up the ladder of function calls 
        // and eventually passes a true to the original recur(num) call which returns true
    }
}

recur(4)

test = "Kyle"
if(recur(4)){
    console.log(`Hello ${test}`)
}


// Function Basics (http://javascript.info/function-basics)
// Example #1
function favoriteAnimal(animal){
    return animal + " is my favorite animal!"
}
const message = favoriteAnimal(`Goat`)
console.log(message)

// Example #2
function showMessage(){
    alert(`Hello everyone`)
}
// showMessage(); 
// showMessage();

// Example #3 (Outer variables)
let userName = `John`;
function showMessage2(){
    userName = `Bob`; // userName variable is CHANGED to "Bob"
    console.log(`Hello ${userName}`);
}
showMessage2(); // prints "Hello Bob"
console.log(`Hello ${userName}`); // still prints "Hello Bob"

showMessage3("Johnny", 20)
// Example #4 Parameters
function showMessage3(name, age){
    console.log("Hello "+name+". You are "+age+" years old!")
    console.log(`Hello ${name}. You are ${age} years old!`) // with backticks and template literals 
}
showMessage3("Kyle", 20)

// --- !IMPORTANT TOPIC! --- Function Declaration vs Function Expression

// Function Declaration
Function_Declaration() // You can call the function before it's defined
function Function_Declaration(){
    console.log("Function_Declaration")
}
Function_Declaration()

// Function Expression
// Function_Expression() // Throws a ReferenceError: "Uncaught ReferenceError: Cannot access 'Function_Expression' before initialization at javascript.js:223:1 (anonymous) @ javascript.js:223" 
let Function_Expression = function(){
    console.log("Function_Expression")
}
Function_Expression() // You can only call the function after it is defined
// Arrow Functions (shortcut)
let Function_Expression2 = () => {
    console.log("Function_Expression2")
}
Function_Expression2()

// --- !IMPORTANT TOPIC! --- end

// Example #5 (Default Values)
function showMessage4(name, age = 18){
    console.log(`Hello ${name}. You are ${age} years old!`) 
}
showMessage4("Kyle") // Even though we didn't give a second parameter, the function used the default
                     // value for age which is 18 // prints "Hello Kyle. You are 18 years old!"
showMessage4("Kyle", 20) // prints "Hello Kyle. You are 20 years old!"

// --- https://javascript.info/function-expressions#function-is-a-value --- 
// Example #6 (Function is a value)
function sayHi(){
    console.log("Say Hi!")
}
console.log(sayHi); // the function is stored in the name of the function VARIABLE 
                    // (in this case, the name of the function is sayHi, so the variable 
                    // the function is stored in is called sayHi)
// prints "ƒ sayHi(){ console.log("Say Hi!") }"
console.log(sayHi()) // prints "Say Hi!"

// Because in JS a function is a value, we deal with it as a value
let func = sayHi;
func() // prints "Say Hi!"

// Example #7 (Callback functions) ---
// function ask(question, yes, no) {
//   if (confirm(question)) yes()
//   else no();
// }

// ask(
//   "Do you agree?",
//   function() { alert("You agreed."); },
//   function() { alert("You canceled the execution."); }
// );

// if(confirm("are you sure")){ // confirm() pops up a window and shows the text inside
//     console.log("yes")
// }

// Arrow Function Basics (https://javascript.info/arrow-functions-basics)
// We touched on this a little bit above in Function Declaration vs Function Expression
// Example #8
let arrow = (a,b) => {
    return a+b;
}
console.log(arrow(1,2)) // prints "3"

let newArrow = arrow;
console.log(newArrow(3,4)) // prints "7"

// let age = prompt("Please enter your age:", "18");
// alert(`You are ${age} years old!`)

// Inline Arrow Functions
let numbersArray = [1,2,3,4,5];
// #1 No Inline; Function declared separatly 
function double1(num){
    return num*2
}
console.log("\nDoubled #1: "+numbersArray.map(double1));
// #2 Traditional Anonymous (Inline?) Function
let double2 = numbersArray.map(function(num){return num*2});
console.log("Doubled #2: "+double2);
// #3 Inline Arrow Function
let double3 = numbersArray.map((num)=>{return num*2});
console.log("Doubled #3: "+double3+"\n");

// Problem Solving - Solving Fizz Buzz --- 
// let num = prompt("Please enter a number");
// for(let i = 1; i<=num; i++){
//     if((i%3==0)&(i%5==0)){
//         console.log("FizzBuzz")
//     }
//     else if(i%3==0){
//         console.log("Fizz")
//     }
//     else if(i%5==0){
//         console.log("Buzz")
//     }
//     else{
//         console.log(i)
//     }
// }

// Exception Handling (try, catch, throw)
function divide(a,b){
    if(b==0){
        throw new Error("Cannot divide by zero!"); // create a new error object in jS using constructor Error()
    }
    return a/b;
}

try{
    console.log(divide(10,0));
} catch(error){ // "error" is the name of the temporary Error object we created above
    console.error("An error occured2506: "+ error.message); // the string "Cannot divide by zero!" passed 
    // in the constructor Error("Cannot divide by zero!") is assigned to the attribute message 
} // prints out "An error occured2506: Cannot divide by zero!"


// Random Stuff
const addString = (name) => {
    return `Hello ${name}`
}
console.log(addString(34)) // prints "Hello 34"
console.log(addString("thirty-four")) // prints "Hello thirty-four"

console.log("Hello World".split(" ")) // prints "[ 'Hello', 'World' ]"

// Loops and Arrays
// Loops
for(let i = 0; i<10; i++){
    console.log(i+" "); // prints 0 to 9 each on a new line 
}
for(let i = 0; i<10; i++){
    //process.stdout.write(i+" "); // prints 0 to 9 on a single line, but undefined in the web ---
}
let i = 0
console.log() // new line
while(i<10){
    //process.stdout.write(i+" "); // prints 0 to 9 on a single line, but undefined in the web --- 
    i++;
}
console.log() // new line

// Arrays
let array1 = [];
array1.push(1);
array1.push(2);
array1.push(3);
array1.push("Hello World");
console.log(array1);

// The map method - iterates over array and applies callback argument (function) onto every element of the array
function addOne(num){
    return num + 1;
}
let arr = [1,2,3,4,5];
console.log("Before map: "+arr); // prints out "[ 1, 2, 3, 4, 5 ]"
arr.map(addOne); // creates a new array but doesn't change the original
console.log("After map: "+arr); // still prints out "[ 1, 2, 3, 4, 5 ]"
console.log("Directly printing map: "+arr.map(addOne)); // prints out "[ 2, 3, 4, 5, 6 ]"

// In constrast, without the map method, we use a for loop:
for(let i = 0; i<arr.length; i++){
    arr[i] += 1; // this DOES modify the original array
}
console.log(arr); // prints "[ 2, 3, 4, 5, 6 ]"

// filter
let arr2 = [1,2,3,4,5];
console.log("Before filter: " + arr2);
function isOdd(num){
    if(num%2==0){
        return num;
    }
}
console.log("Directly printing filter: "+arr2.filter(isOdd));


// DOM Manipulation and Events
// Targeting nodes with selectors
let containerVar = document.querySelector("#container"); // selects the #container div (don't worry about the syntax, we'll get there)
let display1 = containerVar.firstElementChild; // selects the first child of #container => .display
console.log(display1); // prints "<div class="display"></div>"

let controlsVar = document.querySelector(".controls"); // selects the .controls div
let display2 = controlsVar.previousElementSibling; // selects the prior sibling => .display
console.log(display2) // <div class="display"></div>

