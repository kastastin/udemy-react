'use strict';

// console.log(1);

// setTimeout(() => {
//     console.log('timeout 2s');   
// }, 2000);

// setTimeout(() => {
//     console.log('timeout 4s');   
// }, 4000);

// console.log(2);


// let k = 0;
// function count() {
//     for (let i = 0; i < 1e9; i++) {
//         k++;
//     }
//     alert('done');
// }
// count();


// setTimeout(() => {
//     console.log(1);
// }, 0); // default instead of 0 -> 4ms

// console.log(2);
// // output -> 2, 1



// Microtasks & Macrotasks

setTimeout(() => console.log('timeout'));

Promise.resolve()
    .then(() => console.log('promise 1'));

queueMicrotask(() => console.log('queueMicrotask()'));

Promise.resolve()
    .then(() => console.log('promise 2'));

console.log('code');

// () => {}
// microtasks: then / catch / finally / await
// render
// () => {}
// microtasks: then / catch / finally / await
// render
// () => {}