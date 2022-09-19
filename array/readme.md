# JavaScript String Reference

https://www.w3schools.com/jsref/jsref_obj_array.asp

<br/>

## Code Link

| Javascript | Code                                                                          |
| ---------- | ----------------------------------------------------------------------------- |
| entries()  | [Code](https://github.com/armdnks/JS-Fundamentals/blob/main/array/entries.js) |
| pop()      | [Code](https://github.com/armdnks/JS-Fundamentals/blob/main/array/pop.js)     |
| push()     | [Code](https://github.com/armdnks/JS-Fundamentals/blob/main/array/push.js)    |
| reduce()   | [Code](https://github.com/armdnks/JS-Fundamentals/blob/main/array/reduce.js)  |

<br/>

## pop()

> https://www.w3schools.com/jsref/jsref_pop.asp

- The `pop()` method removes (pops) the last element of an array.
- The `pop()` method changes the original array.

```js
var numbers = [1, 2, 3, 4, 5];
console.log(numbers.pop()); // 5
console.log(numbers); // [ 1, 2, 3, 4 ]
```

<br/>

## push()

> https://www.w3schools.com/jsref/jsref_push.asp

- The `push()` method adds new items to the end of an array.
- The `push()` method changes the length of the array.

```js
var numbers = [1, 2, 3, 4];
console.log(numbers.push(5)); // 5
console.log(numbers); // [ 1, 2, 3, 4, 5 ]
```

<br/>

## reduce()

> https://www.w3schools.com/jsref/jsref_reduce.asp

- The `reduce()` method executes a reducer function for array element.
- The `reduce()` method returns a single value: the function's accumulated result.

```js
var numbers = [1, 2, 3, 4, 5];
var result = numbers.reduce((currentValue, accumulator) => currentValue + accumulator, 0);
console.log(result); // 15
```

```js
var strings = ["Banana", "Orange", "Apple", "Mango"];
var result = strings.reduce((currentValue, accumulator) => currentValue + accumulator);
console.log(result); // BananaOrangeAppleMango
```
