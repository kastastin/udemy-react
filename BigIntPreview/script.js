'use strict';

console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991

// const bigint = 1233233435436457564324567435643677888888n;
// const bigint = BigInt(1233233435436457564324567435643677888888);
// console.log(typeof bigint); // bigint

// console.log(5n + 1); // TypeError: Cannot mix BigInt and other types
// console.log(Math.round(5.5n)); // error

// console.log(1n + 2n); // 3n
// console.log(5n / 2n); // 2n (rounded value)
// console.log(2n > 1n); // true
// console.log(2n > 1); // true
// console.log(2n > 5); // false
// console.log(2n == 2); // true
// console.log(2n === 2); // false

let bigint = 1n,
    number = 2;

console.log(bigint + BigInt(number)); // 3n
console.log(Number(bigint) + number); // 3
console.log(+bigint + number); // TypeError: Cannot convert a BigInt value to a number

// if BigInt(x) > Number.MAX_SAFE_INTEGER  can't use Number(x)