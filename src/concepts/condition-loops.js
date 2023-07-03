// -- SWITCH CASE

const date = new Date();

let day = "";

switch (date.getDay()) {
  case 0:
    day = "Today is sunday";
    break;
  case 1:
    day = "Today is monday";
    break;
  case 2:
    day = "Today is tuesday";
    break;
  case 3:
    day = "Toay is wednesday";
    break;
  case 4:
    day = "Today is thursday";
    break;
  case 5:
    day = "Today is friday";
    break;
  case 6:
    day = "Today is saturday";
    break;
  default:
    day = "no day matches";
}

// alert(day);

// -- for in loop

const employeeInfo = {
  name: "gowtham",
  age: 25,
  role: "software engineer",
  location: "india",
};

let opDisplay = "";

for (let key in employeeInfo) {
  opDisplay += employeeInfo[key];
}

console.log("for in output", opDisplay);

// -- for of loop

const myArr = [
  { name: "jin", email: "gowthamsgobi@gmail.com", location: "india" },
];

let information = '';
for (let x of myArr) {
  for(let [key,value] of Object.entries(x) ){
    information += key + " " + value + " ";
  }
  
}
console.log("for of output", information);
