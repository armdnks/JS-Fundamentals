/**
 *  ## JavaScript Object.keys()
 *  https://www.w3schools.com/jsref/jsref_object_keys.asp
 *
 *  @definition
 *  - The `Object.keys()` method returns an Array Iterator object with the keys of an object.
 *  - The `Object.keys()` method does not change the original object.
 *
 *  @syntax
 *  Object.keys(object)
 *
 *  @parameters
 *  | Parameter | Description                                                |
 *  |-----------|------------------------------------------------------------|
 *  | object    | Required.                                                  |
 *  |           | An iterable object.                                        |
 *
 *  @return_value
 *  | Type      | Description                                                |
 *  |-----------|------------------------------------------------------------|
 *  | An array  | An Array Iterator object containing the keys of an object. |
 *
 */

var fruits = ["Banana", "Orange", "Apple", "Mango"];
var keys = Object.keys(fruits);
console.log(keys); // [ '0', '1', '2', '3' ]

var fruit = "Banana";
var keys = Object.keys(fruit);
console.log(keys); // [ '0', '1', '2', '3', '4', '5' ]

var person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
};
var keys = Object.keys(person);
console.log(keys); // [ 'firstName', 'lastName', 'age', 'eyeColor' ]
