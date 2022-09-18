/**
 *  ## JavaScript String repeat()
 *  https://www.w3schools.com/jsref/jsref_repeat.asp
 *
 *  #### Definition and Usage :
 *  - The `repeat()` method returns a string with a number of copies of a string.
 *  - The `repeat()` method returns a new string.
 *  - The `repeat()` method does not change the original string.
 *
 *  #### Syntax :
 *  string.repeat(count)
 *
 *  #### Parameters :
 *  | Parameter | Description                          |
 *  |-----------|--------------------------------------|
 *  | count     | Required.                            |
 *  |           | The number of copies.                |
 *
 *  #### Return Value :
 *  | Type      | Description                          |
 *  |-----------|--------------------------------------|
 *  | A string  | The copies of the original string.   |
 *
 */

var text = "Hello world!";
// Create copies of a text:
// Copy 2 times
var result = text.repeat(2);
console.log(result); // Hello world!Hello world!
// Copy 4 times
var result = text.repeat(4);
console.log(result); // Hello world!Hello world!Hello world!Hello world!
