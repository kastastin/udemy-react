'use strict';

// function* generator() {
//     yield 'S';
//     yield 'c';
//     yield 'r';
//     yield 'i';
//     yield 'p';
//     yield 't';
// }

// const str = generator();

// // console.log(str.next().value); // S
// console.log(str.next()); // { value: 'S', done: false }
// console.log(str.next()); // { value: 'c', done: false }
// console.log(str.next()); // { value: 'r', done: false }
// console.log(str.next()); // { value: 'i', done: false }
// console.log(str.next()); // { value: 'p', done: false }
// console.log(str.next()); // { value: 't', done: false }
// console.log(str.next()); // { value: undefined, done: true }



function* count(n) {
    for (let i = 0; i < n; i++) {
        yield i;
    }
}

// const counter = count(7);

// console.log(counter.next().value); // 0
// console.log(counter.next().value); // 1
// console.log(counter.next().value); // 2

for (let key of count(7)) {
    console.log(key); // 1 - 6
}