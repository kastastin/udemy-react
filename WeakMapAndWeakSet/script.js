'use strict';

// let user = {name: 'Ivan'};
// user = null;
// console.log(user); // null

// let user = {name: 'Ivan'};
// const arr = [user];
// user = null;
// console.log(arr); // null
// console.log(arr[0]); // {name: 'Ivan'}


// let user = {name: 'Ivan'},
//     map = new Map();

// map.set(user, 'data');
// user = null;
// console.log(user); // null
// console.log(map.keys().next().value); // {name: 'Ivan'}


// let user = {name: 'Ivan'},
//     weakMap = new WeakMap();

// weakMap.set(user, 'data');
// user = null;
// console.log(user);
// console.log(weakMap.has(user)); // false


let cache = new WeakMap();

function cacheUser(user) {
    if (!cache.has(user)) {
        cache.set(user, Date.now());
    }

    return cache.get(user);
}

let lena = {name: 'Elena'},
    alex = {name: 'Alex'};

cacheUser(lena);
cacheUser(alex);

lena = null;

console.log(cache.has(lena)); // false
console.log(cache.has(alex)); // true


// WeakSet - add, has, delete
let messages = [
    {text: 'Hello', from: 'John'},
    {text: 'World', from: 'Alex'},
    {text: '...', from: 'Tom'}
];

let readMessages = new WeakSet();
readMessages.add(messages[0]);
// readMessages.add(messages[1]);

console.log(readMessages.has(messages[0])); // true
messages.shift(); // delete messages[0]
console.log(readMessages.has(messages[0])); // false