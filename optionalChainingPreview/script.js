'use strict';

const box = document.querySelector('.box');
const block = document.querySelector('.block');

// console.log(block); // return null

// console.log(block.textContent); // error
// if (block) {
//     console.log(block.textContent);
// }

// console.log(block?.textContent); // return undefined
// block?.textContent = 'test'; // return error (undefined = 'test')
// console.log(1 + 2);

const userData = {
    name: 'Ivan',
    age: null,
    say: function() {
        console.log('Hello');
    }
};

// console.log(userData.skills.js); // error

// if (userData && userData.skills && userData.skills.js) {
//     console.log(userData.skills.js);
// }
// console.log(userData.skills?.js);

userData.say();
// userData.hey(); // return error
userData.hey?.();