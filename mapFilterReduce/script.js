'use strict';

// Array.prototype.filter()
// const names = ['Ivan', 'Ann', 'Ksenia', 'Voldemart'];
// const shortNames = names.filter(function(name) {
//     return name.length < 5;
// });
// console.log(shortNames); // [ 'Ivan", 'Ann' ]


// Array.prototype.map()
// const answers = ['Ivan', 'AnnA', 'Hello'];
// const result = answers.map(item => item.toLowerCase());
// console.log(result); // [ 'ivan', anna', hello' ]


// Array.prototype.some()
// const arr = [4, 'qwq', 'sfreferf'];
// console.log(arr.some(item => typeof(item) === 'number')); // true

// Array.prototype.every()
// console.log(arr.every(item => typeof(item) === 'string')); // false


// Array.prototype.reduce()
// const arr = [4, 5, 1, 3, 2, 6];
// const result = arr.reduce((sum, current) => sum + current);
// const result = arr.reduce((sum, current) => sum + current, 3); // 3 -> start value of sum (res: 24)
// console.log(result); // 21

// const fruits = ['apple', 'pear', 'plum'];
// const result = fruits.reduce((sum, current) => `${sum}, ${current}`);
// console.log(result); // apple, pear, plum


// Example
// const obj = {
//     ivan: 'person',
//     ann: 'person',
//     dog: 'animal',
//     cat: 'animal'
// };

// const newArr = Object.entries(obj)
//                .filter(item => item[1] === 'person')
//                .map(item => item[0]);
//             //    .reduce((sum, curr) => `${sum}, ${curr}`); // ivan, ann
// console.log(newArr); // [ 'ivan', 'ann' ]


// Practice #1
const films = [
    {
        name: 'Titanic',
        rating: 9
    },
    {
        name: 'Die hard 5',
        rating: 5
    },
    {
        name: 'Matrix',
        rating: 8
    },
    {
        name: 'Some bad film',
        rating: 4
    }
];

function showGoodFilms(arr) {
    return arr.filter(film => film.rating >= 8);
}

function showListOfFilms(arr) {
    return arr.map(film => film.name).reduce((sum, curr) => `${sum}, ${curr}`);
    // return arr.reduce((acc, curr) => `${typeof(acc) === 'object' ? acc.name : acc}, ${curr.name}`);
}

function setFilmsIds(arr) {
    return arr.map((film, i) => {
        film.id = i;
        return film;
    });
}

const tranformedArray = setFilmsIds(films);

function checkFilms(arr) {
    return arr.every(film => film.id || film.id === 0 ? true : false);
}


// Practice 2
const funds = [
    {amount: -1400},
    {amount: 2400},
    {amount: -1000},
    {amount: 500},
    {amount: 10400},
    {amount: -11400}
];

const getPositiveIncomeAmount = (data) => {
    return data.filter(item => item.amount > 0).reduce((acc, curr) => acc + curr.amount, 0);
};

const getTotalIncomeAmount = (data) => {
    if (data.some.amount < 0) {
        data.reduce((acc, curr) => acc + curr.amount, 0);
    } else {
        getPositiveIncomeAmount(data);
    }
    // return data.some(item => item.amount < 0) ? data.reduce((acc, curr) => acc + curr.amount, 0) : getPositiveIncomeAmount(data);
};