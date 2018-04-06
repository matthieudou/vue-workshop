# Vue workshop

## JavaScript

### Asynchronous language

JavaScript is a nice language to work with but you need to understand the way it work.
Js performs one task after the other but never wait for the task to end.

Simple tasks works fine:

```js
  console.log('First')
  console.log('Second')
  // Will print:
  // First
  // Second
```

But when you have to wait...

```js
  setTimeout(() => {
    console.log('First')
  }, 1000)
  console.log('Second')
  // Will print:
  // Second
  // And after 1000 ms
  // First
```

for a practical example, run `node JS/asynchronous.js`

### `var` vs `const` vs `let`

### Template strings

> Template literals are string literals allowing embedded expressions. You can use multi-line strings and string interpolation features with them. They were called "template strings" in prior editions of the ES2015 specification.

```js
const message = 'interpolation'

console.log(`
Hello World
===========
Here is the first line
Here is a second one
You can even make ${message}
`)
````

### Arrow functions

> An arrow function expression has a shorter syntax than a function expression and does not have its own this, arguments, super, or new.target. These function expressions are best suited for non-method functions, and they cannot be used as constructors.

```js
var materials = [
  'Hydrogen',
  'Helium',
  'Lithium',
  'Beryllium'
];

console.log(materials.map(material => material.length));
```

### Promises

Promises are for js one "good" way to wait for the "end" of the execution.

```js
const promise = new Promise((resolve, reject) => {
  // resolve will end the function with "success"
  // reject will end the function with an "error"
  setTimeout(() => {
    resolve('Here you get some data')
  }, 1000);
})

promise
  .then(data => {
    console.log(data)
  })
  .catch(error => {
    console.log(error)
  })
```

### Async/Await

> An async function can contain an await expression that pauses the execution of the async function and waits for the passed Promise's resolution, and then resumes the async function's execution and returns the resolved value.

It's a more "simple" way to work with promises.

### Spread operator

Without spread syntax, to create a new array using an existing array as one part of it, the array literal syntax is no longer sufficient and imperative code must be used instead using a combination of push, splice, concat, etc. With spread syntax this becomes much more succinct:

```js
const parts = ['shoulders', 'knees'];
const lyrics = ['head', ...parts, 'and', 'toes'];
// ["head", "shoulders", "knees", "and", "toes"]
```

```js
const person = {
  name: 'Matthieu',
  firstName: 'd’Oultremont',
  age: '23',
  workingPlace: 'Genval'
}

const representation = {
  id: 'matthieudou',
  ...person
}
```

Just like spread for argument lists, ... can be used anywhere in the array literal and it can be used multiple times.

### Destructuring

> The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.

```js
var a, b, rest;
[a, b] = [10, 20];

console.log(a);
// expected output: 10

console.log(b);
// expected output: 20

[a, b, ...rest] = [10, 20, 30, 40, 50];

console.log(rest);
// expected output: [30,40,50]
```

## Vue.js

### vue-cli

```bash
npm install --global vue-cli
```

For creating a new Vue project, you need to run

```bash
vue init <template name> <project name>
```

### Main concepts

#### `v-model`

The `v-model` directive is a two way binding between some data and an input.

```js
data () {
  return {
    message: 'some message'
  }
}

<input type="text" v-model="message">
<!-- will show 'some message' -->
```

#### `v-bind`

The `v-bind:something` will bind `something` on a specific condition.

```js
isHidden () {
  return true === false
}
```

```html
<div v-bind:hidden="isHidden">
  hello
</div>
<!-- will never show -->
```

#### `v-on`

The `v-on:something` will listen for an event called `something`.

```html
<div v-on:click="executeFunction">
  click me
</div>
```

```js
executeFunction (event) {
  alert('A click event was fired', event)
}
```

#### `v-for`


```html
<ul>
  <li v-for="item in items">
    {{item}}
  </li>
</ul>
```

```js
data () {
  return {
    items: [
      'hello',
      'world',
      'foo',
      'bar'
    ]
  }
}
```

## Nuxt.js

## First little app: `/todo`

```bash
vue init nuxt-community/starter-template <project-name>
```

## Deployment

For making it easy, we will deploy this little `/todo` app on [Firebase](https://firebase.google.com/). It's actually super easy since you have a firebase account with a google account. Just go to [https://firebase.google.com/](https://firebase.google.com/), you should already be logged in.