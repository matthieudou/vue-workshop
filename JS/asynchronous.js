const synchronous = () => {
  console.log('___Synchronous___')
  console.log('First')
  console.log('Second')
}

const asynchronous = () => {
  console.log('___Asynchronous___')
  setTimeout(() => {
    console.log('First')
  }, 1000)
  console.log('Second')
}

synchronous()
asynchronous()