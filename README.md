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

### Arrow functions

### Promises

### Async/Await

### Spread operator

### Destructuring

### Modules

## Vue.js

### vue-cli

```bash
npm install --global vue-cli
```

For creating a new Vue project, you need to run

```bash
vue init <template name> <project name>
```

## Nuxt.js

## First little app: `/todo`

```bash
vue init nuxt-community/starter-template <project-name>
```

## Deployment

For making it easy, we will deploy this little `/todo` app on [Firebase](https://firebase.google.com/). It's actually super easy since you have a firebase account with a google account. Just go to [https://firebase.google.com/](https://firebase.google.com/), you should already be logged in.