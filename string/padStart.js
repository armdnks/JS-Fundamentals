/**
 *  ## JavaScript String padStart()
 *  https://www.w3schools.com/js/js_string_methods.asp
 *
 *  The `padStart()` method pads a string with another string:
 *
 *  @note
 *  - The `padStart()` method is a string method.
 *  - To pad a number, convert the number to a string first.
 *
 */

var text = "1234";

var padded = text.padStart(8, "x");
console.log(padded); // xxxx1234

var padded = text.padStart(5, "#");
console.log(padded); // #1234

// Convert number to a string
var numb = 5;
var text = numb.toString();
var padded = text.padStart(6, "123");
console.log(padded); // 123125
