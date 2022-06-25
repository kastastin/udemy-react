'use strict';

const obj = {
    'name': 'Test',
    [Symbol('id')]: 1
};

// let id = Symbol('id');
// let id2 = Symbol('id');
// console.log(id == id2);
// obj[id] = 1;

console.log(obj);
// console.log(obj[id]);

for (let value in obj) console.log(value);

let id = Symbol('id');
const testObj = {
    name: 'test',
    [id]: 1,
    getId: function() {
        return this[id];
    }
};
console.log(Object.getOwnPropertySymbols(testObj)); // link
console.log(testObj[Object.getOwnPropertySymbols(testObj)[0]]); // value


const myDB = {
    movies: [],
    actors: [],
    id: 123
};

// third party library code

myDB.id = '1000'; // random entry
console.log(myDB['id']); // 1000 is wrong
// it's better use [Symbol('id')] instead of id