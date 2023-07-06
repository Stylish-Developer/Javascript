// -- Creating an Element
const parent = document.createElement("div");

// -- Set content
parent.innerHTML = "This is a div tag";

console.log("create and insert the dom content", parent);

//  -- Insert an element
// it has 2 types => appendChild() , insertBefore()

// appendChild()

const appendDiv = document.createElement("ol");
const appendChild1 = document.createElement("li");
const appendChild2 = document.createElement("li");
const appendChild3 = document.createElement("li");

appendChild1.innerHTML = "Tea";
appendChild2.innerHTML = "cofee";
appendChild3.innerHTML = "milk";

appendDiv.appendChild(appendChild1);
appendDiv.appendChild(appendChild2);
appendDiv.appendChild(appendChild3);

console.log(appendDiv);

// insertBefore()

const insertBeforeChild1 = document.createElement("li");
const insertBeforeChild2 = document.createElement("li");

insertBeforeChild1.innerHTML = "lemon tea";
insertBeforeChild2.innerHTML = "green tea";

appendDiv.insertBefore(insertBeforeChild1,appendChild1);
appendDiv.insertBefore(insertBeforeChild2,insertBeforeChild1);


// Replace a child element
const replaceChild1 = document.createElement('p');

replaceChild1.innerHTML = "paragraph tag";

appendDiv.replaceChild(replaceChild1, insertBeforeChild2);

// remove the child element

appendDiv.removeChild(replaceChild1);