/**
 *  ## JavaScript Array pop()
 *  https://www.w3schools.com/jsref/jsref_pop.asp
 *
 *  @definition
 *  - The `pop()` method removes (pops) the last element of an array.
 *  - The `pop()` method changes the original array.
 *  - The `pop()` method returns the removed element.
 *
 *  @syntax
 *  array.pop()
 *
 *  @return_value
 *  | Type       | Description                                                          |
 *  | ---------- | -------------------------------------------------------------------- |
 *  | A variable | The removed item.                                                    |
 *  |            | A string, a number, an array, or any other type allowed in an array. |
 *
 */

var fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.pop()); // Mango
console.log(fruits); // [ 'Banana', 'Orange', 'Apple' ]

var numbers = [1, 2, 3, 4, 5];
console.log(numbers.pop()); // 5
console.log(numbers); // [ 1, 2, 3, 4 ]
