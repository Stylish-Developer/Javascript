// -- Objects
// objects with its property and methods

const person = {
  name: "gowtham",
  age: 25,
  email: "gowthamsampathkumar@outlook.com",
  display: function () {
    return `Name ${this.name} Age ${this.age} Email ${this.email}`;
  },
};

let personName = person.display();

document.getElementById("object").innerHTML = personName;

// object concepts
// 1 Object.freeze() - method
const employee = {
  name: "gowtham",
  job: "Software Engineer",
  email: "gowthamsgobi@gmail.com",
};

// Object.freeze(employee);

// employee.name = "gowtham sampathkumar"

// console.log(`%c ${JSON.stringify(employee,null,2)}`,'color: lawngreen'); // see value did not change

// 2 Object.keys() - method
const op = Object.keys(employee);
console.log(`%c keys: ${op}`, "color: green"); // see return all the keys as an array

// 3 Object.values() - method
console.log(`%c Values: ${Object.values(employee)}`, "color: yellow"); // return all the values as an array

// 4 Object.entries() - method
console.log(`%c Entires ${Object.entries(employee)}`, "color: pink"); // return all the keys along with the values as an array

// 5 Object.assign() - method - merging to object as an one

const info = {
  workNature: "Work From Home",
};

const output = Object.assign(employee, info);
console.log(`%c assign ${JSON.stringify(output)}`, "color: aqua"); // merging keys and values of one object
