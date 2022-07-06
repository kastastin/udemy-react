'use strict';

const person = {
    name: 'Alex',
    tel: '+380998473274',
    parents: {
        mom: 'Olga',
        dad: 'Mike'
    }
};

const personJson = JSON.stringify(person);

console.log(personJson);
console.log(JSON.parse(personJson));

// deep object copying
const clone = JSON.parse(JSON.stringify(person));