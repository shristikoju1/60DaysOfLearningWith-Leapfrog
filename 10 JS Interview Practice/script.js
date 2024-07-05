let a = 1;
let b = "12";

console.log(a);
console.log(++a);
console.log(a++);
console.log(a);

console.log(1 < 2 < 3); //true (1<3)
console.log(3 > 2 > 1); //false (1>1)

//-------------------------------typeof---------------------
console.log(typeof typeof a);

//-----------------------------------------implicit conversion------------------------------------
console.log(b - a);

// numeric string used with + gives string type
let result1;

// convert number to string
result1 = "3" + 2;
console.log(result1, "-", typeof result1);

result = "3" + true;
console.log(result1, "-", typeof result1);

result = "3" + null;
console.log(result1, "-", typeof result1);

//---------------------------------explicit conversion---------------------------------
let result2;

// convert string to number
result2 = Number("5");
console.log(result2, "-", typeof result2);

// convert boolean to string
result2 = String(true);
console.log(result, "-", typeof result2);

// convert number to boolean
result2 = Boolean(0);
console.log(result2, "-", typeof result2);

//----------------------------------------------------block scope--------------------------------
{
  let x = 2; //if instead of let, var is used(keyword var doesnot have block scope)
}
// x can NOT be used here

//-------------------------------------------------local(functional) scope------------------------

// code here can NOT use carName
function myFunction() {
  let carName = "Volvo";
  // code here CAN use carName
}
// code here can NOT use carName

//-----------------------------------------------global scope------------------------------------
let carName = "Volvo";
// code here can use carName

function myFunction() {
  // code here can also use carName
}

//----------------------------practice questions----------------------
let items = ["banana, apple, orange, mango"];
let ul = document.createElement("ul");
let body = document.querySelector("body");

// Iterate over the array and create <li> elements
items.forEach((item) => {
  const li = document.createElement("li");
  li.textContent = item;
  ul.appendChild(li);
});

// Append the <ul> to the desired location in the DOM
document.getElementById("list-container").appendChild(ul);

//=---------------------------------toggle--------------------------------------
let toggleBtn = document.querySelector("#toggle");
let currMode = "light";

toggleBtn.addEventListener('click', () => {
 if (currMode == 'light'){
  currMode = 'dark';
  document.querySelector("body").style.backgroundColor = "black";
 } else {
  currMode = 'light'
  document.querySelector("body").style.backgroundColor = "white";

 }
console.log(currMode);
}
)