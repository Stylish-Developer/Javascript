const arr = ["apple", "orange", "mango", "papaya", "banana"];

// -- array.length
console.log("length of this array", arr.length);
// -- toString()
console.log("toString value", arr.toString());
// -- join()
console.log("join value", arr.join(" - ")); // this approch also same as toString() ut in addition you can specify the separator:

// -- push and pop method
const pushArr = ["Apple", "Samsung", "Oneplus", "nokia"];
pushArr.push("NEW ADDED FRUIT");

const popArr = ["Apple", "Samsung", "Oneplus", "nokia"];
popArr.pop();

console.log("push method", pushArr);

console.log("pop method", popArr);

// -- shift and unshift method
const shiftArr = ["Apple", "Samsung", "Oneplus", "nokia"];
shiftArr.shift();

const unShiftArr = ["Apple", "Samsung", "Oneplus", "nokia"];
unShiftArr.unshift(
  "NEW BRAND IS ADDED starting of the array by using unshift method"
);

console.log("shift method", shiftArr);
console.log("unshift method", unShiftArr);

// -- changing elements
const changingElementsArr = ["Apple", "Samsung", "Oneplus", "nokia"];

changingElementsArr[0] = "Facebook";

console.log("changing element by index value", changingElementsArr);

// bonus point
// we can add element to an array .easy way to append a new element to an array:

const arrayLengthValue = ["Apple", "Samsung", "Oneplus", "nokia"];
arrayLengthValue[arrayLengthValue.length] = "NEW VALUE IS ADDED TO AN ARRAY";

console.log(
  "add new value to array by using array.length value array[array.length]",
  arrayLengthValue
);

// concat() method
const parents = ["Mom", "Dad"];
const childrens = ["baby 1", "baby 2", "baby 3", "baby 4"];

const family = parents.concat(childrens);

console.log(
  "concat() methods is used to merge existing arrays and produce the new array",
  family
);

// -- sort method ==> for strig this is okay but number is will be produce wrong results so that try to use this
// logic to sort number with sort ()
const sortArray = [100, 75, 50, 25, 10, 5, 1];

console.log(
  "Array sort() method",
  sortArray.sort(function (a, b) {
    return a - b;
  })
);

// -- The most importent method slice and splice method
// slice method is used to crate a copy of an array or
// return a portion in an existing array.

// syntax: slice( optional start parameter, optional end parameter ) == both are index value only

// 1 without optional start and end parameter

const food1 = ["Itly", "rice", "biriyani", "chicken grevy", "fish fry"];
const op1 = food1.slice();
console.log("slice method - without optional start and end parameters", op1);

// 2 with optional start paramter plus value , nagative value and end parameter also
const food2 = ["Itly", "rice", "biriyani", "chicken grevy", "fish fry"];
const op2 = food2.slice(2);
const op3 = food2.slice(-3);
const op4 = food2.slice(5);
const op5 = food2.slice(2, 4);

console.log("slice method - with optional start  parameter", op2);
console.log("slice method - with optional negative parameter", op3);
console.log("slice method - with optional greater than the last index", op4);
console.log(
  "slice method - The end position will not be included in the extracted elements for the new array.",
  op5
);

// -- splice method
// Unlike the slice() method,
// the splice() method will change the contents of the original array.
// The splice() method is used to add or remove elements of an existing array
// and the return value will be the removed items from the array.

// syntax:

// splice(start, optional delete count, optional items to add), == start optional parameter only index value

const food3 = ["pizza", "cake", "salad", "cookie"];



const op6 = food3.splice(1, 0, "burrito");

console.log(
  "splice method - with optional start parameter and new items",
  food3
);
console.log("splice method - if i return this value this is the output", op6);

const op7 = food3.splice(2, 2, "New food 1", "New food 2");

console.log(
  "splice method - with optional start paramater and delete count  value",
  food3
);
console.log("splice method - if i return this value this is the output", op7);
