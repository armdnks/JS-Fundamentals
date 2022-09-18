# JavaScript Functions Reference

<br/>

## Code Link

| Javascript | Code                                                                           |
| ---------- | ------------------------------------------------------------------------------ |
| call()     | [Code](https://github.com/armdnks/JS-Fundamentals/blob/main/functions/call.js) |

<br/>

## call()

> https://www.w3schools.com/js/js_function_call.asp

- With the `call()` method, you can write a method that can be used on different objects.
- With `call()`, an object can use a method belonging to another object.

```js
var person = {
  fullname: function () {
    return this.firstName + " " + this.lastName;
  },
};

var personOne = { firstName: "John", lastName: "Doe" };
console.log(person.fullname.call(personOne)); // John Doe
```
