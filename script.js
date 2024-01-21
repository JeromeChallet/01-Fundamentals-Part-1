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
*/

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