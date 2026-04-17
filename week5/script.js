console.log("Hi");
//this is a comment
//this is another comment
//data types within Jc

let mystudentId = 1234;
console.log(mystudentId);
mystudentId = 4567;
console.log(mystudentId);

let myBudget = 100.5;
console.log("I can spend today: $", myBudget);

let a = 20;
let b = 30;
let c = a + b;
console.log("total value:", c);

let x = "40";
if (x == "40") {
  console.log("true");
} else {
  console.log("false");
}

//boolean: manly used for condition check
let isITFriday = true;
let ispublicHoliday = true;

if (ispublicHoliday) {
  console.log("I can sleep in");
} else {
  console.log("I have to go to class");
}

//
let iAmUnknown;
let emptyBox = null;
console.log(emptyBox);

const myName = "Bruce";
console.log("Hello", myName);

let myCity = "Melbourne";
console.log("Hello", myCity);

const myRecord = { myName: "Bruce", id: 1234, myCity: "Melbourne" };
console.log(myRecord);
console.log(myRecord.myCity);

const grade1 = 81;
const grade2 = 80;

if (grade1 > 60 && grade1 < 70) {
  console.log("you got a c");
} else if (grade1 > 70 && grade1 < 80) {
  console.log("you got a d");
} else if (grade1 > 80 && grade1 < 100) {
  console.log("you got an hd");
}

const grades = [69, 70, 75, 80, 90];
const cities = ["Melbourne", "Sydney", "Brisbane"];
console.log("grade of student 3", grades[2]);
console.log("second city i visited", cities[1]);

const students = ["Bruce", "Clark", "Diana", "Barry", "harry"];
//console.log ("Hello", students[0]);
//console.log ("Hello", students[1]);
//console.log ("Hello", students[2]);
//console.log ("Hello", students[3]);
console.log(students.length);
for (let i = 0; i < students.length; i++) {
  console.log("Hello", students[i]);
}

const expenditures = [34, 4, 78, 5, 10];
let totalSpend = 0;
for (let i = 0; i < expenditures.length; i++) {
  totalSpend = totalSpend + expenditures[i];
}
console.log("Total spending:", totalSpend);

let shoppingCart = [
  { name: "T-shirt", price: 20 },
  { name: "Jeans", price: 50 },
  { name: "Sneakers", price: 80 },
  { name: "Backpack", price: 30 },
];
console.log(shoppingCart[0].price);
let totalCost = 0;
for (let i = 0; i < shoppingCart.length; i++) {
  totalCost = totalCost + shoppingCart[i].price;
  console.log(
    "purchease:",
    shoppingCart[i].name,
    "for: $",
    shoppingCart[i].price,
  );
}
console.log("Total cost of shopping cart:", totalCost);
let discount = 0;
if (totalCost > 100) {
  discount = totalCost - 10 * (totalCost / 100);
}
console.log("Total cost after discount:", discount);
