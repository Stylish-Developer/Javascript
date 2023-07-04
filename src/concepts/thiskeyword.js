// --> this is a keyword that is refresh to an object

// -- this in an object method 1
const mobilePhone = {
  brand: "apple",
  model: "iPhone SE2",
  price: 40000,
  color: "black",
  mobileInfo: function () {
    console.log(
      `Brand is ${this.brand} and model is ${this.model}  this price is ${this.price} & color is ${this.color}`
    );
  },
};

mobilePhone.mobileInfo();

// -- this is alone && strict mode 2

("use strict");

var z = this;

console.log("this is alone", z);

// --  this is in default function 3

function demo() {
  return this;
}

const opt = demo();

console.log("this in default function", opt);

// -- this is in function strict 4

function test() {
  "use strict";
  return this;
}

const oput = test();

console.log("this is in function strict mode", oput);

// -- this in event handler 5
 