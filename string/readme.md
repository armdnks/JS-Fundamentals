# JavaScript String Reference

https://www.w3schools.com/jsref/jsref_obj_string.asp

<br/>

## Code Link

| Javascript | Code                                                                            |
| ---------- | ------------------------------------------------------------------------------- |
| index      | [Code](https://github.com/armdnks/JS-Fundamentals/blob/main/string/index.js)    |
| charAt()   | [Code](https://github.com/armdnks/JS-Fundamentals/blob/main/string/charAt.js)   |
| padEnd()   | [Code](https://github.com/armdnks/JS-Fundamentals/blob/main/string/padEnd.js)   |
| padStart() | [Code](https://github.com/armdnks/JS-Fundamentals/blob/main/string/padStart.js) |
| repeat()   | [Code](https://github.com/armdnks/JS-Fundamentals/blob/main/string/repeat.js)   |

<br/>

## charAt()

> https://www.w3schools.com/jsref/jsref_charat.asp

- The `charAt()` method returns the character at a specified index (position) in a string.
- The index of the first character is 0, the second 1, ...

```js
var text = "HELLO WORLD";
var letter = text.charAt(1);
console.log(letter); // E
```

```js
var text = "HELLO WORLD";
var letter = text.charAt(text.length - 1);
console.log(letter); // D
```
