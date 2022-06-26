// flags used for property
// they are hidden and default values is 'true'
// writable (if true -> can change property)
// enumerable (if true -> can listed in loop)
// configurable (if true -> property can be deleted, attributes can be changed)

'use strict';

const user = {
    name: 'Alex',
    surname: 'Smith',
    birthday: '20/04/1993',
    showMyPublicData: function() {
        console.log(`${this.name} ${this.surname}`);
    }
};

console.log(Object.getOwnPropertyDescriptor(user, 'name'));
Object.defineProperty(user, 'name', {writable: false});
// user.name = 'not Alex'; // (error) can't assign to read only property

Object.defineProperty(user, 'gender', {value: 'true'}); // all flags default 'false'
console.log(Object.getOwnPropertyDescriptor(user, 'gender'));

// Object.defineProperties(user, 'birthday', {value: prompt('Date?'), enumerable: true, configurable: true});

console.log(Object.getOwnPropertyDescriptor(Math, 'PI'));

Object.defineProperties(user, {
    name: {writable: false},
    surname: {writable: false}
});

// second part
Object.preventExtensions(); // can't add new properties
Object.seal(); // all flags false except of writable (can change property)
Object.freeze(); // all flags false except of enumerable
// Object.isExtensible(), Object.isSealed(), Object.isFrozen() to check 

console.log(Object.entries(user));

/*
[
    [ 'name', 'Alex' ],
    [ 'surname', 'Smith' ],
    [ 'birthday', '20/04/1993' ],
    [ 'showMyPublicData', [Function: showMyPublicData] ]
]
*/