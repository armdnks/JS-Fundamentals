/**
 *  ## JavaScript Array entries()
 *  https://www.w3schools.com/jsref/jsref_entries.asp
 *
 *  @definition
 *  - The `entries()` method returns an Array Iterator object with key/value pairs.
 *  - The `entries()` method does not change the original array.
 *
 *  @example
 *  [0, "Banana"]
 *  [1, "Orange"]
 *  [2, "Aaple"]
 *  [3, "Mango"]
 *
 *  @syntax
 *  array.entries()
 *
 *  @return_value
 *  | Type        | Description                    |
 *  | ----------- | ------------------------------ |
 *  | An iterable | An array with key/value pairs. |
 *
 */

var fruits = ["Banana", "Orange", "Apple", "Mango"];
var result = fruits.entries();
console.log(result); // Object [Array Iterator] {}

for (var fruit of fruits) console.log(fruit);
/*
Banana
Orange
Apple
Mango
*/
