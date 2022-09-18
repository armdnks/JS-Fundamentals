/**
 *  ## JavaScript Number toString()
 *  https://www.w3schools.com/jsref/jsref_tostring_number.asp
 *
 *  #### Definition and Usage :
 *  - The `toString()` returns a number as a string.
 *
 *  #### Note :
 *  - Every JavaScript object has a `toString()` method.
 *  - The `toString()` method is used internally by JavaScript when an object needs to be displayed as a text (like in HTML), or when an object needs to be used as a string.
 *  - Normally, you will not use it in your own code.
 *
 *  #### Syntax :
 *  number.toString(radix)
 *
 *  #### Parameters :
 *  | Parameter | Description                          |
 *  |-----------|--------------------------------------|
 *  | radix     | Optional.                            |
 *  |           | The base to use.                     |
 *  |           | Must be an integer between 2 and 36. |
 *  |           | Base 2 is binary                     |
 *  |           | Base 8 is octal                      |
 *  |           | Base 16 is hexadecimal.              |
 *
 *  #### Return Value :
 *  | Type      | Description                          |
 *  |-----------|--------------------------------------|
 *  | A string  | The number as a string.              |
 *
 */

var num = 15;

// Convert a number to a string:
var text = num.toString();
console.log(text); // 15

// Convert a number to a string, using base 2 (binary):
var text = num.toString(2);
console.log(text); // 1111

// Convert a number to a string, using base 8 (Octal):
var text = num.toString(8);
console.log(text); // 17

// Convert a number to a string, using base 16 (Hexadecimal):
var text = num.toString(16);
console.log(text); // f
