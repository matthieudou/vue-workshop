const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Here you get some data')
    // reject(Error('Saw the error ?'))
  }, 1000);
})

promise
  .then(data => {
    console.log(data)
  })
  .catch(error => {
    console.log(error)
  })

