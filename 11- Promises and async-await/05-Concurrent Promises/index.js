// ===========================================================================================================
// CONCURRENT PROMISES
// ===========================================================================================================

// Task 8: Use Promise. all to wait for multiple promises to resolve and then log all their values.

console.time('promise.all')
const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise 1 resolved')
    }, 3000)
})

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise 2 resolved')
    }, 4000)
})

const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise 3 resolved')
    }, 2000)
})

Promise.all([promise1, promise2, promise3])
    .then(values => {
        values.forEach(values => {
            console.log(values)
        })
        console.timeEnd('promise.all')
    })

// Task 9: Use Promise.race to log the value of the first promise that resolves among multiple promises.

    Promise.race([promise1, promise2, promise3])
    .then(value => {
        console.log("First Promise resolved:-" ,value)
    })