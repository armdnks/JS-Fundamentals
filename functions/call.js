/**
 *  ## JavaScript Function call()
 *  https://www.w3schools.com/js/js_function_call.asp
 *
 *  - With the `call()` method, you can write a method that can be used on different objects.
 *
 *  #### What is `this`? :
 *  - In JavaScript, the `this` keyword refers to an object.
 *  - Which object depends on how `this` is being invoked (used or called).
 *
 *  - In an object method, `this` refers to the object.
 *  - Alone, `this` refers to the global object.
 *  - In a function, `this` refers to the global object.
 *  - In a function, in strict mode, `this` is undefined.
 *  - In an event, `this` refers to the element that received the event.
 *  - Methods like `call()`, `apply()`, and `bind()` can refer this to any object.
 *
 *  #### Note :
 *  - `this` is not a variable. It is a keyword. You cannot change the value of this.
 *
 *
 *  ## The JavaScript call() Method
 *  - The `call()` method is a predefined JavaScript method.
 *  - It can be used to invoke (call) a method with an owner object as an argument (parameter).
 *  - With `call()`, an object can use a method belonging to another object.
 *
 */

// This example calls the fullName method of person :
var person = {
  fullname: function () {
    return this.firstName + " " + this.lastName;
  },
};

var personOne = { firstName: "John", lastName: "Doe" };
var personTwo = { firstName: "Jane", lastName: "Williams" };

console.log(person.fullname.call(personOne)); // John Doe
console.log(person.fullname.call(personTwo)); // Jane Williams

// The `call()` method can accept arguments :
var person = {
  fullName: function (city, country) {
    return this.firstName + " " + this.lastName + ", " + city + ", " + country;
  },
};

var personOne = { firstName: "John", lastName: "Doe" };
console.log(person.fullName.call(personOne, "Oslo", "Norway")); // John Doe, Oslo, Norway
