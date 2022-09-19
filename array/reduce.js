/**
 *  ## JavaScript Array reduce()
 *  https://www.w3schools.com/jsref/jsref_reduce.asp
 *
 *  @definition
 *  - The `reduce()` method executes a reducer function for array element.
 *  - The `reduce()` method returns a single value: the function's accumulated result.
 *  - The `reduce()` method does not execute the function for empty array elements.
 *  - The `reduce()` method does not change the original array.
 *
 *  @syntax
 *  array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
 *
 *  @parameters
 *  | Parameter    | Description                                                            |
 *  | ------------ | ------------------------------------------------------------------ |
 *  | function()   | Required.                                                          |
 *  |              | A function to be run for each element in the array.                |
 *
 *  `Reducer function parameters`
 *  | Parameter    | Description                                                        |
 *  | ------------ | ------------------------------------------------------------------ |
 *  | total        | Required.                                                          |
 *  |              | The initialValue, or the previosly returned value on the function. |
 *  | currentValue | Required.                                                          |
 *  |              | The value of the current element.                                  |
 *  | currentIndex | Optional.                                                          |
 *  |              | The index of the current element.                                  |
 *  | arr          | Optional.                                                          |
 *  |              | The array the current element belongs to.                          |
 *
 *  | Parameter    | Description                                                        |
 *  | ------------ | ------------------------------------------------------------------ |
 *  | initialValue | Optional.                                                          |
 *  |              | A value to be passed to the function as the initial value.         |
 *
 *  @return_value
 *  - The accumulated result from the last call of the callback function.
 *
 */

var numbers = [1, 2, 3, 4, 5];
var result = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(result); // 15

var strings = ["Banana", "Orange", "Apple", "Mango"];
var result = strings.reduce((accumulator, currentValue) => accumulator + currentValue);
console.log(result); // BananaOrangeAppleMango
