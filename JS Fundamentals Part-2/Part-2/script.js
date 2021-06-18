
// Function

function logger() {
    console.log("my name is aaron")
}
logger()
logger()

function fruits(apple, oranges) {
    // console.log(apple, oranges)
    const juice = `juice of ${apple} apples and ${oranges} oranges`
    return juice;
}
const fruitjuice = fruits(5, 2)
console.log(fruitjuice)
console.log(fruits(5, 2))

const orangejuice = fruits(2, 3)
console.log(orangejuice)

const num = Number("23") //type num in devups Console you will get 23



// Function Declaration

function CalcAge1(birthYear) {
    return 2021 - birthYear
}
const Age1 = CalcAge1(1999)
console.log(Age1)

// Expresion Function
// Enanomus Function it is a function without a name

const CalAge2 = function (birthYear1) {
    return 2021 - birthYear1
}
const Age2 = CalAge2(1993)
console.log(Age2)

// Arrow Function

const retirementAge = (birthYear, firstName) => {
    const Age = 2021 - birthYear
    const RetireTime = 60 - Age
    const Retire = (`I am ${firstName} & getting retire in ${RetireTime} years`)
    console.log(Retire)
    return Age;

}
console.log(retirementAge(1965, "Aaron"))
console.log(retirementAge(1937, "felu"))

// Calling Function inside Function

const cutPicies = function (fruits) {
    return fruits * 4
}

function FruitJuice(apple, orange) {
    const appleP = cutPicies(apple)
    const orangeP = cutPicies(orange)

    const FruitPecise = console.log(`it is made of ${appleP} apple Peciese and ${orangeP} Oranges Piceses`);
    return FruitPecise;
}
console.log(FruitJuice(2, 3));


// Arrays

const friends = ["aaron", "benz", "eugene"]
console.log(friends)
console.log(friends[0])
console.log(friends.length - 1);
console.log(friends[friends.length - 1])


friends[0] = "mark"

console.log(friends)

const firstName = "ralph"
const jonas = [firstName, "misquitta", 2021 - 1998, friends]
console.log(jonas)


// Array Excercise


const CalcAges = function (birthYeah) {
    return 2021 - birthYeah
}

years = [1999, 1965, 1993, 1968]
console.log(years)

const age1 = CalcAges(years[0])
const age2 = CalcAges(years[1])
const age3 = CalcAges(years[2])
const age4 = CalcAges(years[3])

console.log(age1, age2, age3, age4)

const ages = [CalcAges(years[0]), CalcAges(years[1]), CalcAges(years[2]), CalcAges(years[3])]

console.log(ages)

// Array methods
// Basic methods for manipulating Array

const cousins = ["aaron", "allen", "glavin"]
console.log(cousins)

const C1 = cousins.push("grace"); //Add behind
console.log(cousins)
console.log(C1) //to get length

const C2 = cousins.unshift("Dorin") // Add in front
console.log(cousins)

const C3 = cousins.pop("grace")  // Remove from behind
console.log(cousins)

const C4 = cousins.shift("Dorin") //Remove from front
console.log(cousins)

const C5 = cousins.includes("ralph") // returns boolean value
console.log(C5)

const C6 = cousins.includes("aaron")
console.log(C6)

cousins.push("23")
console.log(cousins)

if (cousins.includes(23)) {    // includes is strict operator
    console.log("we are cousins")
} else { console.log("we aren't") }


// .'s  and {}'s

// Object methods

const aaron = {
    firstName: "aaron",
    lastName: "Rebello",
    myBirthYear: 1999,
    job: "software Developer",
    friends: ["pranjal", "kush", "poojan"],
    hasDrivingLicense: true,
    // calcAge: function () {
    //     console.log(this)
    //     return 2021 - this.myBirthYear
    // }

    calcAge: function () {
        this.age = 2021 - this.myBirthYear
        return this.age
    },

    getSummary: function () {
        return `${this.firstName} is ${this.age} and has ${this.hasDrivingLicense ? "a" : "no"} Drivers License.`
    }
}

console.log(aaron.calcAge())

console.log(aaron.getSummary())

// for Loop
for (let i = 1; i <= 10; i++) {
    console.log(`repitations are ${i}`)
}



// Looping Arrays, Breaking and Continueing


infoArray = [
    ' aaron',
    ' rebello',
    21,
    ["hello", "World!"],
    1999,
    'India',
    true
]

const Names = []
// i = 0  because array starts from "0 index"
for (let i = 0; i < infoArray.length; i++) {
    console.log(infoArray[i], typeof infoArray[i])

    // Names[i] = typeof infoArray[i];

    Names.push(typeof infoArray[i])
}

console.log(Names)


bYears = [1999, 1993, 1968, 1965];
ageS = []

for (let i = 0; i < bYears.length; i++) {
    ageS.push(2021 - bYears[i])
}
console.log(ageS)

//Breaking and Continueing

console.log('----ONLY STRINGS ----')
for (let i = 0; i < infoArray.length; i++) {
    if (typeof infoArray !== 'string') continue;

    console.log(infoArray[i], typeof infoArray[i])
}

console.log('----BREAK WITH NUMBERS ----')

for (let i = 0; i < infoArray.length; i++) {
    if (typeof infoArray !== 'string') break;

    console.log(infoArray[i], typeof infoArray[i])
}