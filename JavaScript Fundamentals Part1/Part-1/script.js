// var js = 1

// if (js === "1") {
//     alert("js in fun!")
// } else {
//     alert("type of value is not same")
// }

// values and variables
var firstname = "tekno";
console.log(firstname)

let PI = 3.1212
console.log()
console.log(Math.round(PI))

// Data Types
var toCheckType = true;

console.log(typeof true)
// console.log(typeof toCheckType)
// console.log(typeof 10)
// console.log(typeof "hey")

toCheckType = "Yes!"
console.log(typeof toCheckType)

let year;
console.log(year)
console.log(typeof year)

year = 1999;
console.log(typeof year)


// let           const            var

// let age = 30;
// age = 31

// // const value cannot change
// const birthYear = 1999;
// birthYear = 1998

// var age = 30;
// age = 31


// Basic Operators

// Math Operators
const now = 2021

const myAge = now - 1999
const dadAge = now - 1965

console.log(myAge, dadAge)


const firstName = "john";
const surname = "dias";
console.log(firstName + " " + surname)


// Assignment Operators
let x = 10;
x += 15;
x *= 4;
x++;
x--;
console.log(x)

// Comparison Operators

console.log(myAge > dadAge)
console.log(myAge >= 22)
console.log(myAge <= 18)
console.log(myAge < dadAge)

// Strings and Template Literals

const myName = "Raj";
const dateOfBirth = 1999;
const currentYear = 2021;
const hobby = "badminton"

const raj = "My name is " + myName + ", i am " + (currentYear - dateOfBirth) + " year's old and i love playing " + hobby
console.log(raj)

// Tamplate Strings
const newRaj = ` My name is ${myName} i am ${currentYear - dateOfBirth} years old and i love playing ${hobby}`
console.log(newRaj)
// we can use backtiks always ``

console.log(' 1)String with \n\
 2)multiple\n\
 3)lines')


// taking Desitions if/else statements

const age = 12;
const oldEnough = age >= 18

if (oldEnough) {
    console.log("sarah can drive a car")
}
else {
    const yearsLeft = 18 - age
    console.log(`she should wait for ${yearsLeft} more years`)
}

// Type conversion and coercion

const inputYear = '1999';
const inputYears = 2000;
console.log(Number(inputYear) + 22)
console.log(String(inputYears))

// coercion

console.log("23" - "10" - 3)
console.log("23" + "10" + 3)
console.log("20" / 2)
console.log("10" * 2)
console.log("100" % 10)
console.log("23" > "10")



// Truthy And Falsy Value
// Falsy values = 0 , '', undefined, null, NaN

console.log('val-',Boolean(0))
console.log(Boolean("Jonas"))
console.log(Boolean("{}"))

const money = 0
// it will show else statement in console because 0 is falsy value
if (money) {
    console.log("save your money")
} else {
    console.log("get a job")
}


// Equality Operators

const ages = 18;

if (ages == "18") {
    console.log("18 is my fav number")
}
if (ages === "18") {
    console.log("it is not my fav number")
}


// const fav = Number(prompt("what is your fav number"));

// console.log(fav)

// if (fav === 23) {
//     console.log("23 is my fav nos")
// } else if (fav === 7) {
//     console.log("7 is a cool number")
// } else if (fav === 9) {
//     console.log("9 is a cool number")
// }
// else {
//     console.log("23 or 7 is not there")
// }

// Logical Operators


const hasDriversLicence = true;
const hasGoodVision = true;

const isTired = false;

if (hasDriversLicence && hasGoodVision && !isTired) {
    console.log("max is able to drive")
} else {
    console.log("someone else should drive")
}


if (hasDriversLicence || hasGoodVision || isTired) {
    console.log("max is able to drive")
} else {
    console.log("someone else should drive")
}

// switch case

const day = "thrusday";
// day === monday
switch (day) {
    case 'monday':
        console.log("plan the code");
        break;
    case 'tuesday':
    case 'wednesday':
        console.log("take a break")
        break;
    case 'thrusday':
        console.log("plan to start coding")
        break;
    case 'friday':
        console.log("make a project folder")
        break;
    case "saturday":
        console.log("start the code");
    default:
        console.log("not a valid day")
}

// switch case and if else is the same

if (day === "monday") {
    console.log("plan the code");
}
else if (day === "tuesday" || day === "wednesday") {
    console.log("take a break")
}
else if (day === "thrusday") {
    console.log("plan to start code")
}
else { console.log("not a valid day") }


// the conditional operator or ternary operator

const iam = 21;

iam >= 18 ? console.log("i like to drink wine") : console.log("i like to drink water")

const drink = iam >= 18 ? "wine" : "water"
console.log(drink)

// same if we do in if else conditions the line of code will increase eg:

let drink2;
if (iam <= 18) {
    drink2 = "i love wine"
} else {
    drink2 = "i love water"
}
console.log(drink2)

console.log(`i love to drink ${iam >= 18 ? "wine" : "water"}`)