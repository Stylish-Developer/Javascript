function alertFn() {
  alert("alert method clicked!");
}
function openFn() {
  open("https://github.com/Stylish-Developer");
}
function promptFn() {
  let name = prompt("Enter your name");
  alert(`Welcome ${name}`);
}

function closeFn() {
  close();
}

//----------------------------------------------------

const historyBtn = document.getElementById("page1");

historyBtn.addEventListener("click", () => {
  history.back();
});

const height = screen.height;
const width = screen.width;
const availHeight = screen.availHeight;
const availWidth = screen.availWidth;
const colorDepth = screen.colorDepth;
const pixelDepth = screen.pixelDepth;

console.log("screen height", height);
console.log("screen width", width);
console.log("screen availWidth", width);
console.log("screen availHeight", width);

console.log("color depth", colorDepth);
console.log("pixel depth", pixelDepth);

// -------------------------------------------------------------------
// function onloadFucntion() {
//   alert("welcome to my page");
// }

// --------------------------------------------------------------------

// -- closure

// before to know about closure we should know about nested function and return function
// nested function
function outerfunction(name) {
  function innerFunction() {
    console.log("MYNAME", name);
  }

  innerFunction();
}

outerfunction("gowtham");

// return function
function outerLevel(job) {
  function innerLevel() {
    console.log("JOB ROLE:"+  job);
    return 'a'
  }

  return innerLevel;
}

const o = outerLevel("software engineer");

console.log("outer return without call", o);
console.log("outer return with call", o());


// --------------------------------------------------------
// closure concept - in a function an inner function always has access to the variables of it's outer function
// is called closure.

function outFunction(){

    let mobileBrand = "iPhone SE2";

    function inFunction(){
        return `MOBILE BRAND NAME - ${mobileBrand}`
    }

    return inFunction;
}

const closureOp = outFunction();
console.log('closureOp',closureOp);
console.log('closureOp',closureOp());