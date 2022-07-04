'use strict';

// const num = new Number(3);
// console.log(num); // [Number: 3]

// const func = new Function(3);
// console.log(func); // [Function: anonymous]

function User(name, id) {
    this.name = name;
    this.id = id;
    this.isHuman = true;
    this.say = function(text) {
        console.log(`-${this.name}: ${text}`);
    };
}

const ivan = new User('Ivan', 1);
const alex = new User('Alex', 2);

// console.log(ivan); // User { name: 'Ivan', id: 1, isHuman: true }
// console.log(alex); // User { name: 'Alex', id: 2, isHuman: true }

// ivan.say('Hello'); // -Ivan: Hello

User.prototype.exit = function() {
    console.log(`User <${this.name}> exit`);
};

// ivan.exit();

class Client {
    constructor(name, id) {
        this.name = name;
        this.id = id;
        this.isHuman = true;
    }
    say(text) {
        console.log(`-${this.name}: ${text}`);
    }
    exit() {
        console.log(`User <${this.name}> exit`);
    }
}