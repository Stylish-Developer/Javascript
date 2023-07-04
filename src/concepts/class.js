// -- CLASS CONCEPT
class MyClass {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  display() {
    return `MYNAME IS - ${this.name} MYAGE - ${this.age} `;
  }
}

const myClassObj = new MyClass("gowtham", 24);

console.log(myClassObj.name, myClassObj.age);
console.log(myClassObj.display());
//-----------------------------------------------------------------------------
//-- inheritence concept

class Parent {
  constructor(name, age, location) {
    this.name = name;
    this.age = age;
    this.location = location;
  }

  info() {
    return `NAME- ${this.name} AGE- ${this.age} LOCATION-${this.location}`;
  }
}

const parentOutput = new Parent("gowtham", 25, "coimbatore");

console.log(parentOutput.info());

class Child extends Parent {
  constructor(name) {
    super(name);
  }
}

const childOp = new Child("Baby1");

console.log(childOp.info());
