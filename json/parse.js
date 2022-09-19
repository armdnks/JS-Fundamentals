/**
 *  ## JavaScript JSON parse() Method
 *  https://www.w3schools.com/jsref/jsref_parse_json.asp
 *
 *  @definition
 *  - The `JSON.parse()` method parses a string and returns a JavaScript object.
 *  - The string has to be written in JSON format.
 *  - The `JSON.parse()` method can optionally transform the result with a function.
 *
 *  @syntax
 *  JSON.parse(string, function)
 *
 *  @parameters
 *  | Parameter        | Description                                                                                       |
 *  |------------------|---------------------------------------------------------------------------------------------------|
 *  | string           | Required. A string written in JSON format                                                         |
 *  | reviver function | Optional. A function used to transform the result.                                                |
 *  |                  | The function is called for each item.                                                             |
 *  |                  | Any nested objects are transformed before the parent.                                             |
 *  |                  |    - If the function returns a valid value, the item value is replaced with the transformed value |
 *  |                  |    - If the function returns undefined, the item is deleted                                       |
 *
 */

// Parse a string (written in JSON format) and return a JavaScript object :
var obj = JSON.parse('{"firstName":"John", "lastName":"Doe"}');
console.log(obj); // { firstName: 'John', lastName: 'Doe' }

// How to use the reviver function :
var text = '{ "name":"John", "age":"39", "city":"New York"}';
var obj = JSON.parse(text, function (key, value) {
  if (key === "city") return value.toUpperCase();
  return value;
});

console.log(obj); // { name: 'John', age: '39', city: 'NEW YORK' }
console.log(obj.name); // John
console.log(obj.city); // NEW YORK
