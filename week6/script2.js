const heading = document.querySelector("h1");
console.log(heading);
console.log(heading.textContent);
heading.textContent = "Hello World";

const subheading = document.querySelectorAll("h2");
console.log(subheading);
for (let i = 0; i < subheading.length; i++) {
  console.log(subheading[i], subheading[i].textContent);
}

const subsubheading = document.querySelector("h3");
console.log(subsubheading);

const blueItems = document.querySelectorAll(".blue-color");
console.log(blueItems);

const subhead = document.querySelector("#subhead-1");
console.log(subhead);

function toggleMe() {
  const myCat = document.querySelector("#my-cat");
  console.log(myCat);
  myCat.classList.add("round");
}

const coursename = "Interactive Media";
const courseId = "OART1013";
const header = document.querySelector("header");
console.log(header);
console.log(header.innerHTML);
header.innerHTML += `<h3> ${coursename} </h3>`;
`<p>${courseId}</p>`;

const myCat = document.querySelector("#my-cat");
console.log(myCat);

myButton = document.querySelector("#my-button");
console.log(myButton);
myButton.addEventListener("click", toggleMe);
myButton.addEventListener("mouseover", addMe);
myButton.addEventListener("mouseleave", removeMe);

function addMe()  {
  myCat.classList.add("round");
}
function removeMe()  {
  myCat.classList.remove("round");
}
function toggleMe()  {
  myCat.classList.toggle("round");
}
