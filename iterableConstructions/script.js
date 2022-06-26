'use strict';

    // const user = {
    //     name: 'Alex',
    //     surname: 'Smith',
    //     birthday: '20/04/1993',
    //     showPublicData: function() {
    //         console.log(`${this.name} ${this.surname}`);
    //     }
    // };

// for (const key in user) {
//     console.log(user[key]);
// }

// const arr = ['b', 'a', 'c'];

// for (const key in arr) {
//     console.log(arr[key]);
// }

// const str = 'string';

// for (const key in str) {
//     console.log(str[key]);
// }

// for/in iterates not necessarily in order
// for/in is not suitable for an array and a string

// for (const value of arr) {
//     console.log(value);
// }

// for (const value of str) {
//     console.log(value);
// }

// Array.prototype.someMethod = function() {};
// console.dir(arr);
// for (const key in arr) console.log(key); // someMethod exists
// for (const value of arr) console.log(value); // someMethod doesn't exist


const salaries = {
    john: 500,
    ivan: 1000,
    ann: 5000,
    sayHello: function() {
        console.log('hello');
    }
};

salaries[Symbol.iterator] = function() {
    return {
        current: this.john,
        last: this.ann,

        next() {
            if (this.current < this.last) {
                this.curent += 500;
                return {done: false, value: this.current};
            } else {
                return {done: true};
            }
            // {done: true, value: 123}
        }
    };
};

// 1 variant
// for (const value of salaries) {
//     console.log(value);
// }

// 2 variant
const iterator = salaries[Symbol.iterator]();
console.log(iterator.next());