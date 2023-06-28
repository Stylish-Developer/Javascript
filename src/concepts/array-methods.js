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
