// // -- callBack function concept

// function callBack(a, b) {
//   return a * b;
// }

// function higherOrderFunction(callBack) {
//   console.log("Higer Order Function executed!");
//   const data = callBack(10, 5);
//   console.log("after callback has been executed!", data);
// }

// higherOrderFunction(callBack);

// // example place:
// // 1 array itration method forEach, map, filter, sort, reduce
// // call back function like setTimeOut SetTimeIntervel
// // Anonymous

// // -- Promise concept
// const promise = new Promise((resolve, reject) => {
//   let number = Math.floor(Math.random() * 100);
//   if (number < 100) {
//     resolve(number);
//   } else {
//     reject(number);
//   }
// });

// promise
//   .then((number) =>
//     console.log("promise is resolved and the number value is", number)
//   )
//   .catch((err) => console.log("promise is reject and the error value", err));

// --async await concept
async function loadUser() {
  const data = await fetch(
    "https://jsonplaceholder.typicode.com/todos?_limit=6"
  )
    .then((res) => res.json())
    .catch((err) =>
      console.log("load user is failed with error message", err.message)
    );

  console.log("load user data", data);
}

loadUser();

