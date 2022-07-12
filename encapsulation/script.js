'use strict';

// getters & setters
// const person = {
//     name: 'Alex',
//     age: 20,

//     get userAge() {
//         return this.age;
//     },

//     set userAge(num) {
//         this.age = num;
//     }
// };

// person.userAge = 30;
// console.log(person.userAge); // 30


// encapsulation
// function User(name, age) {
//     this.name = name;
//     let userAge = age;

//     this.say = function() {
//         console.log(`Name: ${this.name}\nAge: ${userAge}`);
//     };

//     this.getAge = function() {
//         return userAge;
//     };

//     this.setAge = function(age) {
//         if (typeof(age) === 'number' && age > 0 && age < 110) {
//             userAge = age;
//         } else {
//             console.log('Error');
//         }
//     };
// }

// const ivan = new User('Ivan', 20);
// console.log(ivan.name);
// console.log(ivan.getAge());

// ivan.setAge(30);
// ivan.setAge(300);
// ivan.say(); 