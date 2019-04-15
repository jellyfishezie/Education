// change everything below to the newer Javascript!

// let + const
var a = 'test'; //let
var b = true; //const
var c = 789; //const
a = 'test2'; 


// Destructuring
var person = { //const person
    firstName : "John",
    lastName  : "Doe",
    age       : 50,
    eyeColor  : "blue"
};

// const {firstName, lastName, age, eyeColor} = person;

var firstName = person.firstName;
var lastName = person.lastName;
var age = person.age;
var eyeColor = person.eyeColor;


// Object properties
var a = 'test'; //const
var b = true; //const
var c = 789; //const

var okObj = { //const
  a: a,
  b: b,
  c: c
};


// Template strings
var message = "Hello " + firstName + " have I met you before? I think we met in " + city + " last summer no???";


// default arguments
// default age to 10;
function isValidAge(age) {
    return age
}

// Symbol
// Create a symbol: "This is my first Symbol"
const sym = Symbol('This is my first Symbol');
// Arrow functions
function whereAmI(username, location) {
    if (username && location) {
        return "I am not lost";
    } else {
        return "I am totally lost!";
    }
}