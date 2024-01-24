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


// Truthy and Falsy Values
// Falsy values are values that will become false when we try to covnert them into a bolean
// they 0, "", undefined, null, Nan
//will convert to a boolean
console.log(Boolean(0)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean("")); // false
console.log(Boolean(null)); // false
console.log(Boolean("jerome")); // true
console.log(Boolean({})); // true

//the conversion to boolean is always implicit when using logical operators and logical context such as if else statement so be carefull
const money = 0;
if (money) {
	console.log("dont spend it all");
} else {
	console.log("get a job first"); // will return this one
}
const money2 = 100;
if (money2) {
	console.log("dont spend it all"); // will return this one
} else {
	console.log("get a job first");
}

let height; // because height is undefined it is false in this case
if (height) {
	console.log("height is defined");
} else {
	console.log("heigh is NOT defined"); // will return this one
}


//equality operators == vs ===
// === is called teh strict equality operator and does not perform type coercion
// == is called the loose equality operator
// === maakes sure the 2 data are of the same type therefor it is best to use this one
const age = 18;
if (age === 18) console.log("u r an adult"); // true

if (age == 18) console.log("u r an adult"); // true

//prompt will createa pop up in which teh user can enter a value
// that value still needs to be stored somewhere here called "favorite"
const favorite = prompt("whats ur favorite number"); // favorite is a string here
console.log(favorite);

if (age == 23) console.log("i like 23 as well"); // true
// wont work cause the 23 is passed in as a string but the check here is comparing to an int
if (age === 23) console.log("i like 23 as well"); // false

const favorite2 = Number(prompt("whats ur favorite number")); // favorite2 is an int here

// same principle for the different operator there is a loose and strict version
if (favorite !== 23) console.log("why not 23");


// Equality Operators
const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision); // true if both true
console.log(hasDriversLicense || hasGoodVision); // true if at least one is true
console.log(!hasDriversLicense); //false

const shouldDrive = hasDriversLicense && hasGoodVision && !isTired;

// both must be true to return true
// if (shouldDrive) {
// 	console.log("she is ok to drive");
// } else {
// 	console.log("she cant drive");
// }

const isTired = true; // C
console.log(hasDriversLicense && hasGoodVision && isTired); // all must be true to return true

// all must be true to return true
if (shouldDrive) {
  console.log("she is ok to drive");
} else {
  console.log("she cant drive");
}


// Switch statement
const day = monday;

//without the break, the code will keep goign through and process each case in order
//never forget the breaks
switch (day) {
  case monday:
    console.log(day);
    break;
  case tuesday:
    console.log(day);
    break;
  case wednesday:
    console.log(day);
    break;
  case thursday:
    console.log(day);
    break;
  case friday:
    console.log(day);
    break;
  case saturday:
    console.log(day);
    break;
  case sunday:
    console.log(day);
    break;
  default:
    console.log("not a valid day");
    break;
}
*/

//declarations & statements
//Expressions is a piece of code that produces a value
// they are like the words making up the sentence
3 + 4;
1999;
true && false && !false;
//declarations are pieces of code that do not produce a value ontheir own
// they like complete sentences
//they are actions and those series of action make up the code
//this one here does not produce a value
if (23 > 10) {
  const str = "23 is bigger";
}

//in a template literal we can insert expressions but not statements
//JS expects decalrations and statements in different places so be carefull
console.log(`I'm ${2024 - 1986} years`); // will work
//console.log(`I'm ${2024-1986} years ${if (23 > 10)}`);// will not work
