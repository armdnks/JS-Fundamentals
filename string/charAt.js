/**
 *  ## JavaScript String charAt()
 *  https://www.w3schools.com/jsref/jsref_charat.asp
 *
 *  #### Definition and Usage :
 *  - The `charAt()` method returns the character at a specified index (position) in a string.
 *  - The index of the first character is 0, the second 1, ...
 *
 *  #### Syntax :
 *  string.charAt(index)
 *
 *  #### Parameters :
 *  | Parameter | Description                            |
 *  |-----------|----------------------------------------|
 *  | index     | Optional                               |
 *  |           | The index (position) of the character. |
 *  |           | Default = 0.                           |
 *
 *  #### Return Value :
 *  | Type      | Description                                     |
 *  |-----------|-------------------------------------------------|
 *  | String    | The character at the specified index.           |
 *  |           | Empty string ("") if the index is out of range. |
 *
 *
 *  #### See Also:
 *  - The `charCodeAt()` Method
 *  - The `codePointAt()` Method
 *  - The `indexOf()` Method
 *  - The `lastIndexOf()` Method
 *
 */

var text = "HELLO WORLD";

// Get the first character in a string:
var letter = text.charAt(0);
console.log(letter); // H

// Get the second character in a string:
var letter = text.charAt(1);
console.log(letter); // E

// Get the last character in a string:
var letter = text.charAt(text.length - 1);
console.log(letter); // D
