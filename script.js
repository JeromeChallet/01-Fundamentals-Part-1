/*
let js = "amazing";
//alert is a popup on the screen
if (js === "amazing") alert("js is cool");
// will display in the console anthing in its brackets
console.log(39 + 23 - 54 + 34);

//store value into a var
//var names are written with camelCase
//u cannot declare a var starting with a number ie
//let 3years = 3;
//var names can only contain letters, numbers, inderscores, dollar sign so this is illegal:
//let jerome&challet = "jc"
//reserver keywords cannot be used to declare var ie: new. function
// let new = 23;
//one way to use reserved keyword is to use $ or _
// let _new=23;
// let $function= 455;
//name is a reserved word that will still but it is not recommended to use it and should be avoided
// let name = "jerome";
// dont declare a var starting with a capital letter
// let Person = "jerome";
// constant are witten in uppercase
// let PI = 3.14;

let firstName = true;
console.log(firstName);

// typeof is an operator showing the type of the value
console.log(typeof firstName);
console.log(typeof true);
console.log(typeof 23);
console.log(typeof "jerome");

//we reassign / mutate the value and type of a var
firstName = "jerome";
console.log(typeof firstName);

// this is an undefined var cause it has no assigned value
// its typeof is 'undefined'
let year;

// null is not an object but undefined
// however js typeof will call it an object eventhough its not
// this is a bug left for legacy reason, do not get confused from it
console.log(typeof null);

//this will not mutate the var
const birthYear = 1986;
birthYear = 2000;

//const need an initial value or you get an error
// const job; this will get you an error

// var is function scope and let is block scope
var job = "programmer";
job = "teacher";


// + - / * are called math operators
const now = 2037;
const ageJerome = now - 1986;
const ageWilliam = now - 2018;
console.log(ageJerome, ageWilliam);

// ** means to the power of
// 2 ** 3 or 2 to the power of 3 = 2 * 2 * 2
console.log(ageJerome * 2, ageWilliam / 10, 2 ** 3);

const firstName = "jerome";
const lastName = "challet";
// we concatenate the vars
console.log(firstName + " " + lastName);

// = is called the assignment operator
// += -= *= ++ -- are also assigment operators
// < > >= <= etc... are called comparison operators
let x = 5;

// math operators are executed before assignment operators
// * and / have precedence over + and -

//strings and template literals
//template literals allow us to write strings a normal and put variables in it
// remember to use backsticks
const firstName = "jerome";
const job = "engineer";
const birthYear = 1986;
const year = 2024;

const message = `I'm ${firstName}, an ${job} who is ${
  year - birthYear
} years old`;
console.log(message);

// \n\ makes go to a new line
console.log("string with \n multiple \n lines");
// however, when using string literals all you need go to the line
console.log(`string2 with 
multiple
lines`);


// if else statements taking decisions
const age = 19;
const isOldEnough = age >= 18;

//windows + period keys bring up the meticon menu
// an if else statement if called a controlled structure
if (isOldEnough) {
  console.log("you can drive 👌");
} else {
  const yearsLeft = 18 - age;
  console.log(`you are too young wait ${yearsLeft} years`);
}

// var declared inside a block wont be accessible to the outside
const birthYear = 1986;
if (birthYear <= 2000) {
  let century = 20;
} else {
  let century = 21;
}
console.log(century); // will get an error
*/

//type Convertion and Coercion
//type convertion is to manually convert from one type to another
//type coertion is js automatically converts from one type to another
const inputYear = "1991";
console.log(inputYear + 18); // will return 199118
// will convert to number and return 2009
console.log(Number(inputYear + 18));

console.log(Number("house")); // return NaN
//NaN is still considered a number just not a valid one
console.log(typeof NaN);

//convert to a string
console.log(String(56));

//type coercion example
console.log("i am " + 37 + " years old"); // nb turned into a string
console.log("23" - "10" - 6); // string turned into a nb
console.log("23" + "10" + 6); // nb turned into a string
console.log("23" * 6); // string turned into a nb
console.log("23" / 6); // string turned into a nb

let n = "1" + 1;
n = n - 1;
console.log(n); // will be 10

//js kinda guess on its own when to convert or not
console.log(1 + 1 + 1 + "1"); // will return 31
// "10" - "4" - "3" returns 3 then -2 returns 1
console.log("10" - "4" - "3" - 2 + "5"); // will return 15
