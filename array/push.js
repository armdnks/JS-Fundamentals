/**
 *  ## JavaScript Array push()
 *  https://www.w3schools.com/jsref/jsref_push.asp
 *
 *  @definition
 *  - The `push()` method adds new items to the end of an array.
 *  - The `push()` method changes the length of the array.
 *  - The `push()` method returns the new length.
 *
 *  @syntax
 *  array.push(itemOne, itemTwo, ...., itemX)
 *
 *  @parameters
 *  | Parameter | Description                      |
 *  | --------- | -------------------------------- |
 *  | itemOne   | The item(s) to add to the array. |
 *  | itemTwo   | Minimum one item is required.    |
 *  | ...       |                                  |
 *  | itemX     |                                  |
 *
 *  @return_value
 *  | Type      | Description                      |
 *  | --------- | -------------------------------- |
 *  | A number  | The new lenght of the array.     |
 *
 */

var fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.push("Kiwi")); // 5
console.log(fruits); // [ 'Banana', 'Orange', 'Apple', 'Mango', 'Kiwi' ]

var fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.push("Kiwi", "Lemon")); // 6
console.log(fruits); // [ 'Banana', 'Orange', 'Apple', 'Mango', 'Kiwi', 'Lemon' ]

var numbers = [1, 2, 3, 4];
console.log(numbers.push(5)); // 5
console.log(numbers); // [ 1, 2, 3, 4, 5 ]
