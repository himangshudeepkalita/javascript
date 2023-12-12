// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3744767489347943n

// Reference (Non primitive)

// Array, Objects, Functions

const heroes = ["superman", "batman", "spiderman"];
let myObj = {
    name: "himangshu",
    age: 20
}

const myFunction = function(){
    console.log("Hello world!");
}

console.log(typeof heroes);

// ++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non-Primitive)

let myName = "himangshudeepkalita"

let anotherName = myName
anotherName = "javascript"

console.log(anotherName);
console.log(myName);

let userOne = {
    email: "user@google.com",
    upi: "user@upi"
}

let userTwo = userOne

userTwo.email = "himangshu@google.com"

console.log(userOne.email);
console.log(userTwo.email);