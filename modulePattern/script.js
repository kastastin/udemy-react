'use strict';

// const test = 2;
// console.log(test); // Uncaught SyntaxError: Identifier 'test' has already been declared

// const number = 1;

// // anonymous self-calling function
// (function(){
//     const number = 2;
//     console.log(number); // 2
// }());

// console.log(number); // 1


// Object interface
const user = (function(){
    const privat = function() {
        console.log('I am privat!');
    };

    return {
        sayHello: privat
    };
}());

user.sayHello(); // I am privat!