// import {one, two} from './main';
// console.log(`${one} and ${two}`); // 1 and 2

// import {one as first} from './main';
// console.log(first); // 1

// import * as data from './main';
// console.log(data.two); // 2
// data.sayHi(); // Hello

// import test from './main';
// test(); // test


// if type='module' use .js
import {one, two} from './main.js';
console.log(one, two); // 1 2 