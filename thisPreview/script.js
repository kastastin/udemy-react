// 1) Normal function: this = window, but if 'use strict' - undefined
// 2) Context for object methods - the object itself
// 3) this in constructors and classes - the new object instance
// 4) Manual binding: call, apply, bind


// function showThis() {
//     console.log(this); // Window
// }
// showThis();

// function showThis() {
//     'use strict';
//     console.log(this); // undefined
// }
// showThis();


// function func(a, b) {
//     console.log(this); // Window
//     function sum() {
//         console.log(this); // Window
//         return this.a + this.b; // to solve problem we should use a closure:
//         // return a + b;
//     }
//     console.log(sum()); // NaN
// }
// func(5, 5);


// const obj = {
//     a: 10,
//     b: 10,
//     sum: function() {
//         console.log(this); // obj
//         function test() {
//             console.log(this); // Window
//         }
//         test(); // Normal function -> this === window
//
//         const test2 = () => {
//             console.log(this); // obj (arrow functions have parent's context)
//         }    
//     }
// };
// obj.sum();


// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.isHuman = true;
//     this.say = function(text) {
//         console.log(`- ${this.name}: ${text}`);
//     };
// }
// let ivan = new User('Ivan', 23);


// const user = {
//     name: 'John'
// };
// function sayName() {
//     console.log(this); // user
//     console.log(this.name); // John
// }
// // sayName.call(user); or sayName.apply(user);
// // if function has arguments:
// function sayInfo(age) {
//     console.log(this);
//     console.log(this.name + age);
// }
// // sayInfo.call(user, '20'); or sayInfo.apply(user, ['20']);


// function count(num) {
//     return this * num;
// }
// const double = count.bind(2); // create new function (this == 2)
// console.log(double(3)); // 2 * 3 = 6



const btn = document.querySelector('button');
// btn.addEventListener('click', function() {
//     console.log(this); // <button></button>
//     this.style.backgroundColor = 'red';
// });
// arrow function hasn't context:
btn.addEventListener('click', (e) => {
    console.log(this); // Window or undefined in 'strict mode'
    // this.style.backgroundColor = 'red'; // TypeError
    e.target.style.backgroundColor = 'red';
});


const double = a => a * 2;
console.log(double(4)); // 8




// article

// function hello(name) {
//     return `Hello ${name}!`;
// }
// // Function invocation
// var message = hello('world');
// console.log(message);


// // immediately called function
// var message = (function(name) {
//     return `Hello ${name}!`;
// })('world');
// console.log(message);


// function sum(a, b) {
//     console.log(this === window); // true
//     this.myNumber = 20; // add 'myNumber' property to global object
//     return a + b;
// }
// // sum() is invoked as a function
// // this in sum() is a global object (window)
// console.log(sum(100, 100)); // 200
// console.log(window.myNumber); // 20


// console.log(this === window); // true
// this.myString = 'test';
// console.log(window.myString); // 'test'


// // this becomes undefined when calling a function in 'strict mode'
// function multiply(a, b) {
//     'use strict';
//     console.log(this === undefined); // true
//     return a * b;
// }
// // multiply() function invocation with 'strict mode' enabled
// // this in multiply() is undefined
// console.log(multiply(2, 2));


// // 'strict mode' is active not only in the current scope, but also in all nested ones
// function execute() {
//     'use strict';
//     function concat(str1, str2) {
//         // 'strict mode' is enabled too
//         console.log(this === undefined); // true
//         return str1 + str2;
//     }
//     // concat() is invoked as a function in 'strict mode'
//     // this in concat() is undefined
//     console.log(concat('hello', ' world'));
// }
// execute();


// function nonStrictSum(a, b) {
//     console.log(this === window); // true
//     return a + b;
// }
// function strictSum(a, b) {
//     'use strict';
//     console.log(this === undefined); // true
//     return a + b;
// }
// console.log(nonStrictSum(5, 5));
// console.log(strictSum(10, 10));


// var numbers = {
//     numberA: 5,
//     numberB: 10,
//     sum: function() {
//         console.log(this === numbers); // true
//         function calculate() {
//             console.log(this === numbers); // false
//             console.log(this); // object Window
//             return this.numberA + this.numberB;
//         }
//         return calculate();
//     }
// };
// console.log(numbers.sum()); // NaN or TypeError in 'strict mode'

// // To solve the problem, calculate() function must be executed in the same context
// // as the sum() method in order to access the value of numberA & numberB
// // We can use .call() method:
// var numbers = {
//     numberA: 5,
//     numberB: 10,
//     sum: function() {
//         console.log(this === numbers); // true
//         function calculate() {
//             console.log(this === numbers); // true
//             return this.numberA + this.numberB;
//         }
//         // use .call() method to modify the context
//         return calculate.call(this);
//         // return calculate.call(numbers);
//     }
// };
// console.log(numbers.sum()); // 15


// // Method is a function stored in object:
// var obj = {
//     func: function() {
//         return 'Hello world';
//     }
// };
// var message = obj.func();
// console.log(message);
// // func is a method in obj. To access the method you need use accessor: obj.func


// console.log(['hello', 'world'].join(', ')); // method invocation
// console.log(({ ten: function() {return 10;} }).ten());
// var obj = {};
// obj.func = function() {
//     return new Date().toString();
// };
// console.log(obj.func()); // method invocation
// var otherFunc = obj.func;
// console.log(otherFunc()); // function invocation
// console.log(parseFloat('16.60')); // function invocation
// console.log(isNaN(0)); // function invocation


// // (this when calling method invocation)
// // this is the Object that the method belongs to
// var calc = {
//     num: 0,
//     increment: function() {
//         console.log(this === calc); // true
//         this.num += 1;
//         return this.num;
//     }
// };
// // method invocation. this is calc
// console.log(calc.increment()); // 1
// console.log(calc.increment()); // 2


// var myDog = Object.create({
//     sayName: function() {
//         console.log(this === myDog); // true
//         return this.name;
//     }
// });
// myDog.name = 'Milo';
// // method invocation. this is myDog
// console.log(myDog.sayName()); // 'Milo'
// // Object.create() creates a newDog object and creates a prototype.
// // myDog object inherits sayName method
// // when myDog.sayName() is executed -> myDog is the execution context


// // In the ES6 class syntax 
// // method call context is also the object:
// class Planet {
//     constructor(name) {
//         this.name = name;
//     }
//     getName() {
//         console.log(this === earth); // true
//         return this.name;
//     }
// }
// var earth = new Planet('Earth');
// // method invocation. the context is earth
// console.log(earth.getName()); // Earth


// function Animal(type, legs) {
//     this.type = type;
//     this.legs = legs;
//     this.logInfo = function() {
//         console.log(this === myCat); // false
//         console.log(`The ${this.type} has ${this.legs} legs`);
//     };
// }
// var myCat = new Animal('Cat', 4);
// // logs "The undefined has undefined legs"
// // or throws a TypeError, in strict mode
// setTimeout(myCat.logInfo, 1000);

// // function can be bound to an object using the .bind() method
// // If the detached method is bound to myCat object -> context problem is solved
// function Animal(type, legs) {
//     this.type = type;
//     this.legs = legs;
//     this.logInfo = function() {
//         console.log(this === myCat); // true
//         console.log(`The ${this.type} has ${this.legs} legs`);
//     };
// }
// var myCat = new Animal('Cat', 4);
// // logs "The cat has 4 legs"
// setTimeout(myCat.logInfo.bind(myCat), 1000);
// // myCat.logInfo.bind(myCat) returns a new function that executes exactly like logInfo
// // but whose this remains myCat even if the function is called


// function Country(name, traveled) {
//     this.name = name ? name : 'UK';
//     this.traveled = Boolean(traveled);
// }
// Country.prototype.travel = function() {
//     this.traveled = true;
// };
// var france = new Country('France', false); // Constructor invocation
// var uk = new Country; // Constructor invocation
// france.travel();

// class City {
//     constructor(name, traveled) {
//         this.name = name;
//         this.traveled = false;
//     }
//     travel() {
//         this.traveled = true;
//     }
// }
// var paris = new City('Paris', false); // Constructor invocation
// paris.travel();


// // (this in constructor call)
// // this is the newly created object
// function Foo() {
//     console.log(this instanceof Foo); // true
//     this.property = 'default value';
// }
// var fooInstance = new Foo(); // Constructor invocation
// console.log(fooInstance.property); // 'default value'

// // the same thing happens when using a class, only the initialization
// // takes place in the constructor method
// class Bar {
//     constructor() {
//         console.log(this instanceof Bar); // true
//         this.property = 'devault value';
//     }
// }
// var barInstance = new Bar(); // Construct invocation
// console.log(barInstance.property); // 'default value'


// function Vehicle(type, wheelsCount) {
//     this.type = type;
//     this.wheelsCount = wheelsCount;
//     return this;
// }
// // Function invocation
// var car = Vehicle('Car', 4);
// console.log(car.type); // 'Car'
// console.log(car.wheelsCount); // 4
// console.log(car === window); // true

// function Vehicle(type, wheelsCount) {
//     if (!(this instanceof Vehicle)) {
//         throw Error('Error: Incorrect invocation');
//     }
//     this.type = type;
//     this.wheelsCount = wheelsCount;
//     return this;
// }
// // Constructor invocation
// var car = new Vehicle('Car', 4);
// console.log(car.type); // 'Car'
// console.log(car.wheelsCount); // 4
// console.log(car instanceof Vehicle); // true
// var brokenCar = Vehicle('Broken Car', 3); // Function invocation. Generates an error