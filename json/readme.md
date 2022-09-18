# JavaScript JSON Reference

https://www.w3schools.com/jsref/jsref_obj_json.asp

<br/>

## Code Link

| Javascript       | Code                                                                           |
| ---------------- | ------------------------------------------------------------------------------ |
| JSON.parse()     | [Code](https://github.com/armdnks/JS-Fundamentals/blob/main/json/parse.js)     |
| JSON.stringify() | [Code](https://github.com/armdnks/JS-Fundamentals/blob/main/json/stringify.js) |

<br/>

## JSON.parse()

> https://www.w3schools.com/jsref/jsref_parse_json.asp

- The `JSON.parse()` method parses a string and returns a JavaScript object.

```js
var obj = JSON.parse('{"firstName":"John", "lastName":"Doe"}');
console.log(obj); // { firstName: 'John', lastName: 'Doe' }
```

<br/>

## JSON.stringify()

> https://www.w3schools.com/jsref/jsref_stringify.asp

- The `JSON.stringify()` method converts JavaScript objects into strings.
- When sending data to a web server the data has to be a string.

```js
var obj = { name: "John", age: 30, city: "New York" };
var myJSON = JSON.stringify(obj);
console.log(myJSON); // {"name":"John","age":30,"city":"New York"}
```
