const sleep = function(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

// This
console.log(
  sleep(3000)
    .then(() => {console.log('We waited')})
)

// Is equivalent to this
async function hello() {
  await sleep(3000)
  console.log('we waited 3000 ms')
}

console.log(hello())