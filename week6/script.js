//Variabies - boxes to store value
// let & const - let - can changes its vaule while const - remain fixed

let a = 10;

const name = "Bruce";

//boolean - true or false
let isItRaining = false;

//object - group of properties of same entity - student, properties: age, anme, id
let student = { name: "Bruce", id: 1234 };

// arrays - collection but they all are the same type
let grades = [34, 56, 78, 90];
let names = ["Bruce", "Wayne", "Clark", "Kent"];
// grades[2] = 78 IMP: arrays start at 0
// grades, length

//conditional statements
// if (condition) {true-> execute this}
// else {false -> execute this}

if (isItRaining) {
  console.log("yes it is raining");
} else {
  console.log("no it is not raining");
}

// loops - iterate trought a function or set of instructions
// for loop
for (let i = 0; i < name.length; i++) {
  console.log("Hello " + name[i]);
}

let b = 20;

function add(a, b) {
  let c = a + b;
  console.log("The value of c is: " + c);
  return c;
} // this is called defining a function

add(a, b);//this is calling a function - function executes when it is called.
add(4,5)
let c = add(a,50)
console.log("The value of c is: " + c);

function greet (name) {
  let greetings = "Hello " + name;
  return greetings;
}

let welcome = greet("Bruce");
console.log(welcome);
console.log(greet("Oda"));