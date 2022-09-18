/**
 *  ## JavaScript JSON stringify() Method
 *  https://www.w3schools.com/jsref/jsref_stringify.asp
 *
 *  #### Definition and Usage :
 *  - The JSON.stringify() method converts JavaScript objects into strings.
 *  - When sending data to a web server the data has to be a string.
 *
 *  #### Syntax :
 *  JSON.stringify(obj, replacer, space)
 *
 *  #### Parameters :
 *  | Parameter | Description                                                                             |
 *  | --------- | --------------------------------------------------------------------------------------- |
 *  | obj       | Required.                                                                               |
 *  |           | A string written in JSON format                                                         |
 *  | replacer  | Optional.                                                                               |
 *  |           | Either a function or an array used to transform the result.                             |
 *  |           | The replacer is called for each item.                                                   |
 *  | space     | Optional. Either a String or a Number.                                                  |
 *  |           | A string to be used as white space (max 10 characters),                                 |
 *  |           | or a Number, from 0 to 10, to indicate how many space characters to use as white space. |
 *
 */

// Stringify a JavaScript object :
var obj = { name: "John", age: 30, city: "New York" };
var myJSON = JSON.stringify(obj);
console.log(myJSON); // {"name":"John","age":30,"city":"New York"}

// Using the replacer function :
// replace the value of "city" to upper case
var obj = { name: "John", age: "39", city: "New York" };
var text = JSON.stringify(obj, function (key, value) {
  if (key === "city") return value.toUpperCase();
  return value;
});
console.log(text); // {"name":"John","age":"39","city":"NEW YORK"}

// Using the space parameter :
// Insert 10 space characters for each white space
var obj = { name: "John", age: "39", city: "New York" };
var text = JSON.stringify(obj, null, 10);
console.log(text);
/* ## Result
{
          "name": "John",
          "age": "39",
          "city": "New York"
}
*/

// Insert the word SPACE for each white space
var obj = { name: "John", age: "39", city: "New York" };
var text = JSON.stringify(obj, null, "SPACE");
console.log(text);
/* ## Result
{
SPACE"name": "John",
SPACE"age": "39",
SPACE"city": "New York"
}
*/
