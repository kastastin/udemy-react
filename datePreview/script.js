'use strict';

// Any date that is stored in JS stored in milliseconds (timestamp)
// The number of ms is counted from the beginning of 1970 year
// console.log(new Date(0)); // 1970-01-01T00:00:00.000Z

// const now = new Date();
// console.log(now); // 2022-06-30T17:26:25.673Z

// console.log(new Date('2022-06-30')); // 2022-06-30T00:00:00.000Z

// console.log(new Date(2022, 6, 30, 20)); // Thu Jun 30 2022 20:34:19 GMT+0300

const date = new Date();
// console.log(date.getFullYear()); // 2022
// console.log(date.getMonth()); // 5
// console.log(date.getDate()); // 30
// console.log(date.getHours()); // 20
// console.log(date.getUTCHours()); // 17
// console.log(date.getMinutes());
// console.log(date.getSeconds());
// console.log(date.getMilliseconds());
// console.log(date.getDay()); // number of week day (Sunday is 0)
// console.log(date.getTimezoneOffset()); // -180 (in minutes)
// console.log(date.getTime()); // 1656611365774 (ms from 1970/01/01)

// date.setHours(18);
// date.setHours(18, 40); // 40 - minutes
// date.setHours(40); // change day

// new Date.parse('2020-05-01');

let start = new Date();
for (let i = 0; i < 100000; i++) {
    let some = i ** 3;
}
let end = new Date();
console.log(`Time: ${end - start} ms`);